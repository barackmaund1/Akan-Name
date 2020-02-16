function myFunction() {
    var day = parseInt(document.getElementById("day").value);
    var d = new Date(day);
    var DD = d.getDate(day);
    var month =parseInt( document.getElementById("month").value);
    var MM = d.getMonth(month)+1;
    var year =parseInt( document.getElementById("year").value);
    var YY = d.getFullYear(year);
    var CC = parseInt((YY - 1) / 100 + 1);
    var dayOfWeek = parseInt((((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7);
    // var weekDay=Math.ceil(dayOfWeek);

    var male = document.getElementById("male");
    var female = document.getElementById("female");
    
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosua", " Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday"];
  

    // validating months and feb month and also years...user should not enter an invalid data if so alert 
    if (MM < 1 || MM > 12 || MM == 2 && DD > 29) {
      alert("Invalid data for the month!! please enter valid month");
    }
     // // validating year
   else if (YY <= 1699 || YY> 2020) {
       alert("Invalid year!!! Please enter a valid year");
    }
    // else if (yy.toString().length !== 4) {
    //     alert("invalid year");
    // }
    else if (male.checked == true) {
      alert("Great! your Akan name is"+" "+maleNames[dayOfWeek] +" " +"and you are born on"+" "+ daysOfWeek[dayOfWeek])
    } else if (female.checked == true) {
       alert("Great! your Akan name is"+" "+femaleNames[dayOfWeek] +""+" and you are born on"+" "+ daysOfWeek[dayOfWeek])
    }
    else {
      alert("Oops!!! Something went wrong! Please try again");
    }
   }