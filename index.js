//all form element id : userName, DateOfBirth, btn

//onclick function : calculateAge()
let element = document.getElementById('btn');
element.addEventListener("click",myFunction);
function myFunction(event){
    event.preventDefault();
    
    //Show the value of User name in Age 
    let userName = document.getElementById('userName').value; //value of input value of user name

    if(userName ==""){
        alert("enter UserName")
        return; 
    }
    
    var showName = document.getElementById('showMyName');
    showName.innerHTML = userName.toUpperCase() + "</br></br>" + "Your Age";//show the value of user name

    
    //calculating age
    //----------------------------------------------------------------------------
    let dateOfBirth = document.getElementById('DateOfBirth').value;//value of input value of Date of Birth

    //console.log(userName,dateOfBirth)

    let dateOfBirthObject = new Date(dateOfBirth); //declaring object of birthday, birth month and birth year
    let birthYear = dateOfBirthObject.getFullYear(); 
    let birthMonth = dateOfBirthObject.getMonth() + 1;
    let birthDay = dateOfBirthObject.getDate();
    console.log(birthYear,birthMonth,birthDay);

    //----------------------------------------------------

    let currentTime = new Date() // declaring object of current date
    let currentYear = currentTime.getFullYear();
    let currentMonth = currentTime.getMonth() + 1;
    let currentDay = currentTime.getDate();
    console.log(currentDay,currentMonth,currentYear);

    //-----------------------------------------------------------------

    //Error handling Condition 

    if((birthYear > currentYear) || (Number.isNaN(birthYear)) || (Number.isNaN(birthMonth)) || (Number.isNaN(birthDay)) || ((currentYear == birthYear) && (currentMonth < birthMonth)) || (((currentYear == birthYear) && (currentMonth == birthMonth) &&(currentDay < birthDay)))){
        alert("please select the date correctly")
        return ;
    }
    //---------------------------------------------------------
  //Tsking the document object of grid element 

    let year = document.getElementById('gridItem2');
    let month = document.getElementById('gridItem3');
    let day = document.getElementById('gridItem4');

    //-----------------------------------------------------------------------
    
    //CASE 1 :

    if((currentYear >= birthYear) && (currentMonth >= birthMonth) && (currentDay >= birthDay)){
        
        year.innerHTML = "YEARS </br></br>" + (currentYear - birthYear);
        month.innerHTML = "MONTHS </br></br>" + (currentMonth - birthMonth);
        day.innerHTML = "DAYS </br></br>" + (currentDay - birthDay);
    } 

    //-----------------------------------------------------------------------------

    //CASE 2 :

    if((currentYear > birthYear) && (currentMonth < birthMonth) && (currentDay>=birthDay)){
        
        
        year.innerHTML = "YEARS </br></br>" + (currentYear - birthYear-1);
        month.innerHTML = "MONTHS </br></br>" + (currentMonth - birthMonth + 12);
        day.innerHTML = "DAYS </br></br>" + (currentDay - birthDay);
    }

    //-----------------------------------------------------------------------

    //CASE 3 : 

    if((currentYear >= birthYear) && (currentMonth > birthMonth) && (currentDay < birthDay)){
                
        year.innerHTML = "YEARS </br></br>" + (currentYear - birthYear);
        month.innerHTML = "MONTHS </br></br>" + (currentMonth - birthMonth -1);
        day.innerHTML = "DAYS </br></br>" + (currentDay - birthDay + 30);
    }

    //--------------------------------------------------------------------------
    
    //CASE 4 :

    if((currentYear > birthYear) && (currentMonth <= birthMonth) && (currentDay < birthDay)){
                
        year.innerHTML = "YEARS </br></br>" + (currentYear - birthYear-1);
        month.innerHTML = "MONTHS </br></br>" + (currentMonth - birthMonth + 12 - 1);
        day.innerHTML = "DAYS </br></br>" + (currentDay - birthDay + 30);
    }


}




