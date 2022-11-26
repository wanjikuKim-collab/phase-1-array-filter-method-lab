// Code your solution here
//Qn: We have an array of drivers with various information. 
//We need to write functions using the filter() method so that#
//PickMeUp Taxi service employees can easily query the data. 

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


// findMatching- This function takes an array of drivers and a string as arguments, and 
//returns the matching list of drivers. The function should be case insensitive.

function findMatching(array, name) {
    //create an anonymous function
    return array.filter(function (driver) {
         return driver.toLowerCase() === name.toLowerCase() 
    })
  };
  findMatching(drivers, 'Bobby')

 // This function takes an array of drivers' names and a string as arguments for 
 //querying the array,and returns all drivers whose names begin with the provided letters
  function fuzzyMatch(array, name) {
    return array.filter(function (driver) { 
        return driver.toLowerCase().substring(0, name.length) === name.toLowerCase()
    })
  }
  fuzzyMatch(drivers,'Bobby')

  //This function takes an array of driver objects and a string as arguments. Each driver object has two properties: 
  //name and hometown. The function should return each element whose name property matches the provided string argument.

  function matchName(drivers, argument) {
    return drivers.filter(function (driver) { 
        return driver.name === argument 
    })
  }