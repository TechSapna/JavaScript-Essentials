const globalVar = "Global";

function firstFunction() {
  const firstVar = "First";

  function secondFunction() {
    const secondVar = "Second";

    function thirdFunction() {
      const thirdVar = "Third";
      console.log(globalVar); // Output: Global
      console.log(firstVar); // Output: First
      console.log(secondVar); // Output: Second
      console.log(thirdVar); // Output: Third
    }

    thirdFunction();
  }

  secondFunction();
}

firstFunction();
