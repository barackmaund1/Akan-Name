function myFunction(){
var year=document.getElementById("year").Value;
var yy=d.getfullyear(year);
var day=document.getElementById("day").value;
var d=newDate(day);
var DD=d.getDay(day);
var month=document.getElementById("month").value;
var MM=d.getMonth(month) +1;
var century=document.getElementById("century").value;
var CC=d.getcentury(century);

var dayOfWeek= parseInt(((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) ;

var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

var femaleNames = ["Akosua", " Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

var daysOfWeek=["sunday","Monday","Tuesday","Wednesday","Thurday","Friday","Saturday"];

// var gender=document.getElementById("gender").checked;

// //validating months and feb month and also years...user should not enter an invalid data if so alert the
// if (MM < 1 || MM > 12 || MM == 2 && DD > 29) {
//     alert("Invalid data for the month!! please enter valid month");
//   }
//   // validating year
//   else if(YY <= 1699 || YY >= 2020) {
//     alert("Invalid year!!! Please enter a valid year");
//   }
//   else if (yy.toString().length !== 4) {
//     alert("invalid year");
// }
// else if(gender===male){
// document.getElementById("view").innerHTML=(maleNames[dayOfWeek] )
// }else if(gender===female){
// document.getElementById("view").innerHTML=(femaleNames[dayOfWeek])
// }
// else{
//     alert("Oops!!! Something went wrong! Please try again");
// }
// }