(async () => {
  const MILLISECONDS = Number(process.argv[2]) || 1500;
  function timeout(milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  }
  async function sleep(milliseconds) {
    await timeout(milliseconds);
    return console.log("My name is John Doe.");
  }

  console.log("Hello!");
  await sleep(MILLISECONDS);
  console.log("Good bye!");
})();
