// const request = require('request-promise-native');
// const { fetchMyIP } = require('./iss_promised');
// const { fetchCoordsByIP } = require('./iss_promised');
// const { fetchISSFlyOverTimes } = require('./iss_promised');
const { nextISSTimesForMyLocation } = require('./iss_promised');
const { printPassTimes } = require('./index.js')

// fetchMyIP()
//   .then(fetchCoordsByIP)
//   .then(fetchISSFlyOverTimes)
//   .then(body => console.log(body));

  nextISSTimesForMyLocation()
    .then((passTimes) => {
      printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log(`It didn't work: ${error.message}`)
  })

