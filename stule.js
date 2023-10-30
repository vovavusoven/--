document.addEventListener('DOMContentLoaded', function () {
  function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str))}

    const startButton = document.getElementById('start');
  
    startButton.addEventListener('click', () => {
  
      // 
      let name = prompt ("Як вас звати");
      let age = prompt ("Cкількі вам років")
      
      while ( name.length === 0 || ! isNumeric(age)){
       name = prompt ("Як вас звати",name)
       age = prompt ("Cкількі вам років", age)
      }

       if ( age < 18) {
        alert ( "You are not allowed to visit this website")
        return
       } 
       if ( age > 18 && age <= 22) {
        if ( confirm("Are you sure you want to continue?")){
            alert ("Welcome " + name)
          return

        } else {
          alert ("You are not allowed to visit this website ")
          return
        }
       }
       if ( age > 22 ){
        alert (" Welcome "+ name)
       }

       
  
       })})
  