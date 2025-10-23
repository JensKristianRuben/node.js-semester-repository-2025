new Promise((resolve, reject) => {
  setTimeout(() => {
    try {
      throw "ohh noo!";
      resolve("everything went well");
    } catch (error) {
      reject("Ohh noo!");
    }
  }, 2000);
})
  .then((message) => console.log(message))
  .catch((error) => {
    console.log(error);
  });

function myPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        // throw "something bad";
        resolve("Something good");
      } catch (error) {
        reject(error);
      }
    }, 3000);
  });
}

