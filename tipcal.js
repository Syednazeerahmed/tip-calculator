function calculatetip(){
    var billamount = document.getElementById("billamount").value;
    var servicequality = document.getElementById("servicequality").value;
    var people = document.getElementById("heads").value;

    if(billamount === "" || servicequality == 0) 
    {   window.alert("Please enter some values to get this baby up and running");
        return;
    }

    if(people === "" || people <= 1)
    {   people = 1;
        document.getElementById("each").style.display="none";
    }
    else{
        document.getElementById("each").style.display="block";
    }

    var total = (billamount * servicequality) / people;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

   document.getElementById("totaltip").style.display = "block";
   document.getElementById("tip").innerHTML = total;

}

document.getElementById("totaltip").style.display="none";
document.getElementById("each").style.display="none";

document.getElementById("calculate").onclick=function() { calculatetip();};

