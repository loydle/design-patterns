var Singleton = (() => {
  let instance = null;

  function createDBInstance (){
    return new Object('A new db instance');
  }

  return {
    getDBInstance: () => {
      if (!instance) {
        instance = createDBInstance();
      }
      return instance;
    }
  }

})();

function run() {

  var instance1 = Singleton.getDBInstance();
  var instance2 = Singleton.getDBInstance();

  console.log("Same instance? " + (instance1 === instance2));
}

run(); // OUTPUT = "Same instance? true"
