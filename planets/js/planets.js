//создать массив
let planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Satum", "Uranus", "Neptune"];
console.log(planets);
console.log(planets[0]);
console.log(planets[2]);
console.log(planets[3]);
console.log(planets[4]);
console.log(planets[5]);
console.log(planets[6]);
console.log(planets.length);

//FOR Loop
for(let i = 0; i < 6; i++){
    let message = `${i}. ${planets[i]}`;
    console.log(message);
    }

    //FOREACH loop
planets.forEach(Element=>{
    console.log(`Hello from FOREACH`, Element);
});

//Выбрать случайный элемент массива
let rnd = Math.floor(Math.random() * planets.length);
console.log(rnd);

let randomPlanets = planets[rnd];
console.log(`my random planets:`,randomPlanets);
//добавить новый элемент в массив
planets.push(`Mars`);
console.log(planets);
