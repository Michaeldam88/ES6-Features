/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

let totParksAge = [];
let sumaAños = 0;
let totTrees = new Map();

class Elementos {
    constructor(name, yearOfBuild) {
        this.name = name;
        this.yearOfBuild = yearOfBuild;
    }
}

class Parks extends Elementos {
    constructor(name, yearOfBuild, trees, area) {
        super(name, yearOfBuild)
        this.trees = trees;
        this.area = area;
    }
    treeDensityCalc() {
        const treeDensity = Math.floor(this.trees / this.area);
        console.log(`The tree density of ${this.name} is of ${treeDensity} per km2.`);
    }
    addAge() {
        totParksAge.push(2018 - this.yearOfBuild);
    }
    calcBig(){
        totTrees.set(this.trees, this.name);
    }
    
}

const totParks = [new Parks("Kensington Garden", 1854, 563, 13),
    new Parks("Hide Park", 1761, 1048, 50),
    new Parks("New Port Park", 2008, 687, 26),
];


function reportPark(p) {
    console.log("---Park Report---");
    p.forEach(el => el.treeDensityCalc());
    p.forEach(el => el.addAge());
    p.forEach(el => el.calcBig());
}

reportPark(totParks);


for (const i of totParksAge) {
    sumaAños = sumaAños + i;

}
console.log(`The Average age of all the parks is ${Math.floor(sumaAños/totParksAge.length)} years.`);

for (const i of totTrees.keys()) {
    if (i > 1000) {
        console.log(`The park with more than 1000 trees is ${totTrees.get(i)}`);
    }
}


class Streets extends Elementos {
    constructor(name, yearOfBuild, length, size = "Normal") {
        super(name, yearOfBuild)
        this.length = length;
        this.size = size;
    }
    print() {
        console.log(`${this.name}, built in ${this.yearOfBuild} is a ${this.size} street.`)

    }
}

const totStreets = [new Streets("Via aldo moro", 1956, 3, "Small"),
    new Streets("Via mai visto", 1654, 15, ),
    new Streets("Via Sierra Nevada", 2002, 20, "Big"),
    new Streets("Via del omonegro", 1836, 32, "Huge")
];

function calc(arr) {
    const sum = arr.reduce((previus, current, index) =>
        previus + current, 0);

    return [sum, sum / arr.length];
}

function reportStreet(s) {
    console.log("---Street Report---");
    const [totalLength, avgLength] = calc(
        s.map(el => el.length));
    console.log(`Our ${s.length} street are ${totalLength} km long and the average km is ${avgLength}`)

    s.forEach(el => el.print());
}

reportStreet(totStreets);