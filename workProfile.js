// Declare the function 'workProfile'.
  function workProfile() {
    theObject.role = "Web Developer I";
  }


// Declare variable 'myProfile'.
  var myProfile = {
    name: 'TaRon Jamal',
    department: 'Research and Development',
    hireDate: 2020
  };


// Logs 'TaRon Jamal'
console.log(myProfile.name);


// Pass object reference to the function.
workProfile(myProfile);


// Logs 'Web Developer I' as the value of the 'name' property of the object, as changed by the function.
console.log(myProfile.name);
