const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });


// fetchCoordsByIP('23.16.48.83', (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned coordinates:' , coordinates);
// });

fetchISSFlyOverTimes({ latitude: "49.203", longitude: "-122.9914" }, (error, passTimes) => {
  if (error) {
    console.log(`It didn't work!"`, error);
    return;
  }
  console.log('It worked! Returned times:', passTimes);
});

