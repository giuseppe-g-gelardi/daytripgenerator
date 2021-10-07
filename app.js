
// * day trip generator!


// ! this just logs data to the console
// const dataLogger = (trip) => {
//   console.log(trip)
// }
// dataLogger(data)
// ! plz no touchy











const app = (trip) => {

  let tripArray = []

  // generate a random destination
  let randomDestination = Math.floor(Math.random() * trip.length) 
  
  //generate a random restaurant within the destination
  let rest = trip[randomDestination].restaurant
  let randomRestaurant = Math.floor(Math.random() * rest.length)
  
  //generates a random mode of transportation within the destination
  let transportation = trip[randomDestination].transport
  let randomTransport = Math.floor(Math.random() * transportation.length)
  
  // generaetes a random form of activity or entertainment based on destination
  let ent = trip[randomDestination].entertainment
  let randomEntertainment = Math.floor(Math.random() * ent.length)



  const getRandomTrip = () => {
    tripArray = [
      trip[randomDestination].destination,
      trip[randomDestination].restaurant[randomRestaurant],
      trip[randomDestination].transport[randomTransport],
      trip[randomDestination].entertainment[randomEntertainment]
    ]
    return tripArray
  }


  const reRollRestaurant = () => {
    let newRest = trip[randomDestination].restaurant
    let randomIndex = Math.floor(Math.random() * newRest.length)
    console.log(newRest[randomIndex])

    tripArray = [
      trip[randomDestination].destination,
      newRest[randomIndex],
      trip[randomDestination].transport[randomTransport],
      trip[randomDestination].entertainment[randomEntertainment],
    ]
    return tripArray
  }

  const reRollTransport = () => {
    console.log('new transportation')
    console.log(trip[randomDestination].transport)
  }

  const reRollEntertainment = () => {
    console.log('new entertainment')
    console.log(trip[randomDestination].entertainment)
  }




  const reRollActivities = () => {

    let userInputReRollActivities = prompt("Which activity would you like to reroll? Destination, Restaurant, Transportation and/or Entertainment").toLowerCase()

    switch (userInputReRollActivities) {
      case 'destination':
        let destPrompt = prompt('ReRolling the destination will ReRoll the whole trip, are you sure?')
        if (destPrompt === 'yes') {
          tripArray = []
          console.clear()
          getRandomTrip()
        } else  if (destPrompt === 'no') {
          reRollActivities()
        }
        break;
      case 'restaurant':
        reRollRestaurant()
        break;
      case 'transportation':
        reRollTransport()
        break;
      case 'entertainment':
        reRollEntertainment()
        break
    }


  }

  // const inputValidate = () => {
  //   alert('Invalid response entered, please enter Yes or No')
  // }




  let isComplete = false;
  while (isComplete === false) {
    console.log(getRandomTrip())
    let userInputReRollTrip = prompt('Are you satisfied with your trip? Yes or No').toLowerCase()


    if (userInputReRollTrip === 'yes') {
      isComplete = true;
      console.log("Enjoy your trip")
    } else if (userInputReRollTrip === 'no') {
      // tripArray = []
      // console.clear()
      reRollActivities()
    }
  }

}
// app()


