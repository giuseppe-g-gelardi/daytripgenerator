
// * day trip generator!

// ! this just logs data to the console
const dataLogger = (trip) => {
  console.log(trip)
}
dataLogger(data)
// ! plz no touchy







// ! function to get a random trip
const getRandomTrip = (trip) => {

  let tripArray = []

  let randomDestination = Math.floor(Math.random() * trip.length) 
  let transportation = trip[randomDestination].transport
  let randomTransport = Math.floor(Math.random() * transportation.length)
  let ent = trip[randomDestination].entertainment
  let randomEntertainment = Math.floor(Math.random() * ent.length)

  tripArray.push(trip[randomDestination].destination)
  tripArray.push(trip[randomDestination].restaurant)
  tripArray.push(trip[randomDestination].transport[randomTransport])
  tripArray.push(trip[randomDestination].entertainment[randomEntertainment])

  return tripArray

}

// getRandomTrip(data)
// let tripLogger = getRandomTrip(data)
// console.log(tripLogger)
// !









const app = () => {
  let trip = getRandomTrip(data)
  console.log(trip)
}
app()


