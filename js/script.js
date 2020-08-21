var dateOfBirth = prompt('Please enter your date of birth');
var birthMonth = prompt('Please enter the month you were born.');
var yearOfBirth = prompt('Please enter the year you were born');
alert('Your Birthday is ' + [dateOfBirth] + '/' + [birthMonth] + '/' + [yearOfBirth]);

var century = parseInt(yearOfBirth[0]+yearOfBirth[1]);
alert(century);

var dayOfBirth = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
function getDayOfWeek(){
   var weekDay = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7;
   return(weekDay);
}
alert('You were born on a ' + [weekDay])





// var add = function(number1, number2) {
//     return number1 + number2;
//   };
//   var subtract = function(number1, number2) {
//   return number1 - number2;
//   };
//   alert(subtract(10,5));
//   var add = function(number1, number2) {
//     return number1 + number2;
//   };
//   var number1 = parseInt(prompt("Enter a number:"));
//   var number2 = parseInt(prompt("Enter another number:"));
//   alert(add(number1, number2));
//   function calculateBmi() {
//     var weight = document.bmiForm.weight.value
//     var height = document.bmiForm.height.value
//     if(weight > 0 && height > 0){	
//     var finalBmi = weight/(height/100*height/100)
//     document.bmiForm.bmi.value = finalBmi
//     if(finalBmi < 18.5){
//     document.bmiForm.meaning.value = "That you are too thin."
//     }
//     if(finalBmi > 18.5 && finalBmi < 25){
//     document.bmiForm.meaning.value = "That you are healthy."
//     }
//     if(finalBmi > 25){
//     document.bmiForm.meaning.value = "That you have overweight."
//     }
//     }
//     else{
//     alert("Please Fill in everything correctly")
//     }
//     }