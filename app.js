
// ! day trip generator!

let data = [
  {
    destination: 'Austin',
    restaurant: 'Tumble-22',
    transportation: 'rent a model-X from turo',
    entertainment: [
      'rent a boat on lake travis',
      'stand-up paddle boarding on lady bird lake',
      'get completely overwhemled on 6th street',
      'go shopping at the domain',
      'drinks and late night snacks on south congress',
      'Live music'
    ]
  },
  {
    destination: 'San Francisco',
    restaurant: '5A5 Steak Lounge',
    transport: 'MUNI',
    entertainment: [
      'shopping in union square and market street',
      'walking across the golden gate bridge',
      'snacks at the embarcadero',
      'watching the seals at fishermans wharf',
      'going down lombard street',
      'seeing the mrs. doubtfire house',
      'go to the top of twin peaks',
      'japanese tea garden at golden state park',
      'listen to the waves crash at marshalls beach'
    ]
  },
  {
    destination: 'New York City',
    restaurant: 'Dorsia', // LOLLLLLL
    transport: ['Uber', 'Taxi', 'Subway'],
    entertainment: [
      'Navigating through crowds in Times Square',
      'M&M Factory',
      `"Please Dont Tell" speak easy`,
      'Museum of Natural History',
      `Get a "dirty water dog" in Central Park`,
      'central park zoo'
    ]
  }
  // TODO decide if i want to add more later
  // this seems like it should be enough
]




const dataLogger = (trip) => {
  console.log(trip)
}
dataLogger(data)

const getRandomTrip = (trip) => {
  let randomDestination = Math.floor(Math.random() * trip.length)  

  let ent = trip[randomDestination].entertainment

  let randomEntertainment = Math.floor(Math.random() * ent.length)

  console.log(randomDestination)
  console.log(randomEntertainment)

  console.log(trip[randomDestination].restaurant)
}
getRandomTrip(data)