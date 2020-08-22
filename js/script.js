var dateOfBirth = prompt('Please enter your date of birth.');
var birthMonth = prompt('Please enter the month you were born.');
var yearOfBirth = prompt('Please enter the year you were born.');
var yourGender = prompt ('Please enter your gender assigned at birth.')
alert('Your Birthday is ' + [dateOfBirth] + '/' + [birthMonth] + '/' + [yearOfBirth]);
//convert the string input into number datatypes//
var century = parseInt(yearOfBirth[0]+yearOfBirth[1]);
var year = parseInt(yearOfBirth[2]+yearOfBirth[3]);
var month = parseInt(birthMonth);
var day = parseInt(dateOfBirth);
alert('You were born in the '+ [year]+ 'th year of the '+[century]+'th century on the ' + [day] + 'th day of the ' + [month] + 'th month!' )

//calculating the day of the week//
 function getDayOfWeek(d){
    dayOfBirth = ( ( (([century]/4) -2)*([century]-1)) + ((5*[year]/4) ) + ((26*([month]+1)/10)) + [day] )%7;
    return(dayOfBirth);
 }
 alert(getDayOfWeek());
 var nDay = Math.trunc(dayOfBirth);
 alert(nDay)
 if (nDay>=3) {
     nDayBorn= nDay -2;
 } 
 else {
     nDayBorn=nDay;
 };
 //Display day of week
var weekDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

alert('You were born on a ' + (weekDay[nDayBorn]) + '!');
//find Akan Name
var maleAkanName = ["Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame", "Kwasi"];
var femaleAkanName = ["Adwaa", "Abenaa", "Akua", "Yaa", "Afua", "Ama", "Akosua"];
if (yourGender==='male') {
    alert('Your Akan name is ' + (maleAkanName[nDayBorn]) + '!');
} 
else {
    alert('Your Akan name is ' + (femaleAkanName[nDayBorn]) + '!');
}