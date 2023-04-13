//self invoked anonimous function

(function () {
  console.log("I am Anonim function");
})();

(() => {
  console.log("I am Anonim function with arrow syntax");
})();

// callback function

let callBackFunction = () => {
  console.log("I am CallBack Function");
};

function testFunc(callback) {
  callback();
}

// testFunc(callBackFunction);

testFunc(() => {
  console.log("I am CallBack Function with arrow");
});

testFunc(function () {
  console.log("I am CallBack Function");
});

