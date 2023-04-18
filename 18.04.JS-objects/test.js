console.log(this);

let obj = {
  firstName: "Lorem",
  age: 33,
  getInfo: function () {
    console.log("Hello", this.firstName);
  },
};

let newObj = obj;

obj = null;

newObj.getInfo();
