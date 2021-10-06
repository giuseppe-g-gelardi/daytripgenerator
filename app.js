
// ! day trip generator!



const dataLogger = (trip) => {
  console.log(trip)
}
dataLogger(data)

const getRandomTrip = (trip) => {



  let randomDestination = Math.floor(Math.random() * trip.length) 
  let transportation = trip[randomDestination].transport
  let randomTransport = Math.floor(Math.random() * transportation.length)
  let ent = trip[randomDestination].entertainment
  let randomEntertainment = Math.floor(Math.random() * ent.length)


  console.log(trip[randomDestination].destination)
  console.log(trip[randomDestination].restaurant)
  console.log(trip[randomDestination].transport[randomTransport])
  console.log(trip[randomDestination].entertainment[randomEntertainment])

}
getRandomTrip(data)

const isSatisfied = () => {
  // let satisfied = false;


}
isSatisfied()