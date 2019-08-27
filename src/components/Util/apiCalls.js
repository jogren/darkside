export const getMovie = (randomNumber) => {
    return fetch(`https://swapi.co/api/films/${randomNumber}`)
    .then(res => {
      if(!res.ok) {
        throw Error('Error with response.')
      }
      return res.json()
    }).catch(error => {
      throw Error(error.message)
    })
}

export const getPlanets = () => {
  return fetch('https://swapi.co/api/planets/')
      .then(res => res.json())
      .then(data => cleanPlanetData(data.results))
      .catch(error => console.log(error))
}

export const getPeople = () => {
  return fetch('https://swapi.co/api/people/')
  .then(res => res.json())
  .then(data => cleanPeopleData(data.results))
  .then(data => getPeopleHomes(data))
  .then(data => getSpecies(data))
  .catch(error => console.log(error))
}

export const cleanPlanetData = (data) => {
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
        residents: names,
        rotationPeriod: planet.rotation_period,
        orbitalPeriod: planet.orbital_period,
        diameter: planet.diameter,
        gravity: planet.gravity
      }))
  });
  return Promise.all(planets)
};

export const cleanPeopleData = (data) => {
  return data.map(person => {
    return {
      name: person.name,
      hairColor: person.hair_color,
      eyeColor: person.eye_color,
      birthYear: person.birth_year,
      homeworld: person.homeworld,
      species: person.species,
    }
  })
};
  
export const getPeopleHomes = (data) => {
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
}

export const getSpecies = (data) => {
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
};

export const getVehicles = () => {
  return fetch('https://swapi.co/api/vehicles/')
      .then(res => res.json())
      .then(data => cleanVehicles(data.results))
      .catch(error => console.log(error))
}
  
export const cleanVehicles = (data) => {
  return data.map(vehicle => {
    return {
      name: vehicle.name,
      model: vehicle.model,
      vehicleClass: vehicle.vehicle_class,
      passengers: vehicle.passengers,
      cost: vehicle.cost_in_credits,
      maxSpeed: vehicle.max_atmosphering_speed, 
      cargoCapacity: vehicle.cargo_capacity
    }
  })
};
