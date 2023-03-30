var data = {
    contries: [
        {
            name: "india",
            states: [
                {
                    name: "Maharashtra",
                    cities: [
                        {
                            name: "pune",
                            population: 10000,
                        },
                        {
                            name: "mumbai",
                            population: 20000,
                        },
                    ],
                },

                {
                    name: "gujrat",
                    cities: [
                        {
                            name: "ahmedabad",
                            population: 30000,
                        },
                        {
                            name: "surat",
                            population: 20000,
                        },
                    ],
                },
            ],
        },
        {
            name: "uk",
            states: [
                {
                    name: "one",
                    cities: [
                        {
                            name: "onec",
                            population: 1000,
                        },
                        {
                            name: "twoc",
                            population: 2000,
                        },
                    ],
                },

                {
                    name: "two",
                    cities: [
                        {
                            name: "onecc",
                            population: 3000,
                        },
                        {
                            name: "twocc",
                            population: 2000,
                        },
                    ],
                },
            ],
        },
    ],
}

// 1)find population of all countries
// 2)find a city which is having heighest population
// 3)find a state which is having heighest population

// var populationcities = data.contries[0].states[0].cities.map((x)=>{
//     return (data.contries[0].states[0].cities[0].population) + (data.contries[0].states[0].cities[1].population);
// })
// var populationcities2= data.contries[0].states[0].cities.map((x)=>{
//     return (data.contries[1].states[1].cities[0].population) + (data.contries[1].states[1].cities[1].population);
// })

// console.log(`india ni under Maharashtra ma pune anf mumbie nai populationv is ${populationcities[0]}`);

// console.log(`india nai all population is ${populationcities[0]+populationcities[0]}`);
//  var data = data.contries[0].states[0].cities.map((x)=>{
//     console.log(x.population);
// return x.
//  })
//  console.log(data);
// const totalPopulation = data.contries.map(country =>
//     country.states.reduce((statePopulation, state) =>
//       state.cities.reduce((cityPopulation, city) =>
//         cityPopulation + city.population, 0)
//       + statePopulation, 0)
//   ).reduce((total, population) => total + population, 0);

//   console.log("Total population of all countries:", totalPopulation);



// const highestPopulationCity = data.contries
//     .flatMap(country => country.states.flatMap(state => state.cities))
//     .reduce((highest, city) => city.population > highest.population ? city : highest, { population: 0 })
//     .name;

// console.log("City with highest population:", highestPopulationCity);

const highestPopulationState = data.contries
  .flatMap(country => country.states.map(state => ({
    country: country.name,
    name: state.name,
    population: state.cities.reduce((total, city) => total + city.population, 0)
  })))
  .reduce((highest, state) => state.population > highest.population ? state : highest, {population: 0});

console.log("State with highest population:", highestPopulationState.name, "in", highestPopulationState.country, "with population", highestPopulationState.population);














