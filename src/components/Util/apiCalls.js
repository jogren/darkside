 const apiCalls = {
  cleanPlanetData: (data) => {
    const planets = data.map(planet => {
      const namesArray = planet.residents.map(person => {
        return fetch(person)
        .then(res => res.json())
        .then(data => data.name)
        .catch(error => console.log(error))
      });
      return Promise.all(namesArray)
        .then(names => ({
          name: planet.name,
          terrain: planet.terrain,
          population: planet.population,
          climate: planet.climate,
          residents: names
        }))
    });
    return Promise.all(planets)
  },

  cleanPeopleData: (data) => {
    return data.map(person => {
        return {
          name: person.name,
          homeworld: person.homeworld,
          species: person.species,
        }
      })
    },

  getPeopleHomes: (data) => {
    const promises = data.map(person => {
      return fetch(person.homeworld)
        .then(res => res.json())
        .then(data => {
          return {
            ...person,
            homeworld: data.name,
            homePopulation: data.population
          }
        })
        .catch(error => console.log(error));
    })
  
    return Promise.all(promises)
  },
    
  getSpecies: (data) => {
    const promises = data.map(person => {
      return fetch(person.species[0])
      .then(res => res.json())
      .then(data => {
          return {
          ...person,
          species: data.name,
          language: data.language
          }
      })
    })
    return Promise.all(promises)
  },
  cleanVehicles: (data) => {
    return data.map(vehicle => {
      return {
        name: vehicle.name,
        model: vehicle.model,
        vehicleClass: vehicle.vehicle_class,
        passengers: vehicle.passengers
      }
    })
  }
}

export default apiCalls;