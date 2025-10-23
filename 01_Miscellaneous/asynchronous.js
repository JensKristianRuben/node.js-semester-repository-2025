// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     try {
//       throw "ohh noo!";
//       resolve("everything went well");
//     } catch (error) {
//       reject("Ohh noo!");
//     }
//   }, 2000);
// })
//   .then((message) => console.log(message))
//   .catch((error) => {
//     console.log(error);
//   });

function myPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        // throw new Error("something bad");
        resolve("Something good");
      } catch (error) {
        reject(error);
      }
    }, 3000);
  });
}

// myPromise()
// .then((succesMessage) => console.log(succesMessage)
// )
// .catch((errorMessage) => console.log(errorMessage)
// );

try{

    const succesMessage = await myPromise();
    console.log(succesMessage);
} catch {
    
}
