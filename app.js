
// * day trip generator!

// ! this just logs data to the console
const dataLogger = (trip) => {
  console.log(trip)
}
dataLogger(data)
// ! plz no touchy





// ! function to reroll specific activities
const reRollTripActivities = (data) => {
  // figure out how to reroll specific things here plz halp
}






const app = (trip) => {

  let tripArray = []
  let currentDestination = tripArray[0]


  const getRandomTrip = () => {

    let randomDestination = Math.floor(Math.random() * trip.length) 
  
    let rest = trip[randomDestination].restaurant
    let randomRestaurant = Math.floor(Math.random() * rest.length)
  
    let transportation = trip[randomDestination].transport
    let randomTransport = Math.floor(Math.random() * transportation.length)
  
    let ent = trip[randomDestination].entertainment
    let randomEntertainment = Math.floor(Math.random() * ent.length)
  
    tripArray.push(trip[randomDestination].destination)
    tripArray.push(trip[randomDestination].restaurant[randomRestaurant])
    tripArray.push(trip[randomDestination].transport[randomTransport])
    tripArray.push(trip[randomDestination].entertainment[randomEntertainment])
  
    return tripArray
    
  }

  const reRollRestaurant = () => {
    console.log('new restaurant')
  }

  const reRollTransport = () => {
    console.log('new transportation')
  }

  const reRollEntertainment = () => {
    console.log('new entertainment')
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
        } else {
          userInputReRollActivities
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
      tripArray = []
      console.clear()
      reRollActivities()
    }
  }

}
// app()


