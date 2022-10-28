const firstName = "John Doe";
function getName() {
  console.log(`My name is ${firstName}`);
  return;
}
console.log("Hello!");
setTimeout(getName, 1500);

console.log("Good bye!");
