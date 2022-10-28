const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("John Doe");
  }, 1500);
});

console.log("Hello!");

myPromise
  .then((firstName) => {
    console.log(`My name is ${firstName}`);
  })
  .then(() => {
    console.log("Good bye!");
  });
