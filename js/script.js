var dateOfBirth = document.getElementById("dateborn");
var birthMonth = document.getElementById("birthmonth");
var yearOfBirth = document.getElementById("year");
var yourGender = document.getElementById("identity");
//validate form
document.readyState
while (dateOfBirth<1||dateOfBirth>31) {
    alert('please enter a valid date');
    break;
}

//convert the string input into number datatypes//
var century = parseInt(yearOfBirth[0]+yearOfBirth[1]);
var year = parseInt(yearOfBirth[2]+yearOfBirth[3]);
var month = parseInt(birthMonth);
var day = parseInt(dateOfBirth);
// alert('You were born in the '+ [year]+ 'th year of the '+[century]+'th century on the ' + [day] + 'th day of the ' + [month] + 'th month!' )
// var dayOfWeek = Date(dateOfBirth + birthMonth + yearOfBirth);
// var weekDay= dayOfWeek.getDay();
// alert(weekDay);

//calculating the day of the week//
 function getDayOfWeek(d){
     dayOfBirth = ( ( (([century]/4) -2)*([century]-1)) + ((5*[year]/4) ) + ((26*([month]+1)/10)) + [day] )%7;
     var nDay = Math.trunc(dayOfBirth);
         if (nDay>=3) {
             nDayBorn= nDay -2;
         }
         else if(nDay>=6){
             nDayBorn= nDay -1;
         } 
         else{
             nDayBorn=nDay
       };
 }
 //Display day of week//
  var weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  var dayOfWeek =weekDay[nDayBorn];

 //find Akan Name
 var maleAkanName = ["Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame", "Kwasi"];
 var femaleAkanName = ["Adwaa", "Abenaa", "Akua", "Yaa", "Afua", "Ama", "Akosua"];
 var gncAkanName = ["Adwaa-Kwadwo", "Abena-Kwabena", "Akua-Kwaku", "Yaa-Yaw", "Afua-Kifi","Ama-Kwame","Akosua-Kwasi" ]

 if (yourGender==='Male') {
     var akanName= maleAkanName[nDayBorn];
 } 
     else if (yourGender==="Female") {
     var akanName= femaleAkanName[nDayBorn];
 }
 else{
     var akanName = ncAkanName[nDayBorn];
 };
function getResults() {
    console.writeLine('You were born on ' + dayOfWeek + ' and your Akan Name is ' + akanName)
}
 
//  var nDay = Math.trunc(dayOfBirth);
//  alert(nDay)
//  if (nDay>=3) {
//      nDayBorn= nDay -2;
//  }
//  else if(nDay>=6){
//      nDayBorn= nDay -1;
//  } 
//  else{
//      nDayBorn=nDay;
//  };
//  //Display day of week
// var weekDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// alert('You were born on a ' + (weekDay[nDayBorn]) + '!');

// //find Akan Name
// var maleAkanName = ["Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame", "Kwasi"];
// var femaleAkanName = ["Adwaa", "Abenaa", "Akua", "Yaa", "Afua", "Ama", "Akosua"];
// var gncAkanName = ["Adwaa-Kwadwo", "Abena-Kwabena", "Akua-Kwaku", "Yaa-Yaw", "Afua-Kifi","Ama-Kwame","Akosua-Kwasi" ]

//  if (yourGender==='Male') {
//      alert('Your Akan name is ' + (maleAkanName[nDayBorn]) + '!');
//  } 
//     else if (yourGender==="Female") {
//     alert('Your Akan name is ' + (femaleAkanName[nDayBorn]) + '!');
//  }
//  else{
//     alert('Your Akan name is ' + (gncAkanName[nDayBorn]) + '!');
//  };