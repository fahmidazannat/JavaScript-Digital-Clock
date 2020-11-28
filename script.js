function digitalClock(){
  var fullDate = new Date();
  var hr = fullDate.getHours();
  var min = fullDate.getMinutes();
  var sec = fullDate.getSeconds();

  if (hr >= 12) { 
      period = " PM"; 
    } 
  else  {  
     period = " AM"; 
  }
  if (hr == 0 ) {
    hr = 12
  }

  document.getElementById("hr").innerHTML = hr;
  document.getElementById("min").innerHTML = " : "+ min;document.getElementById("sec").innerHTML =" : "+ sec + period;
}

setInterval(digitalClock, 100)
