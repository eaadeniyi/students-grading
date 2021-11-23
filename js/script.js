document.getElementById("grade1").addEventListener("click", function (event){
    event.preventDefault();

    var scorevalue = document.getElementById("disp").value;

    //condition for grade to be valid
    if (scorevalue < 0 || scorevalue >100){
        document.getElementById('comment').innerHTML = "Grade value is between 0-100."
    }
    console.log(scorevalue);

    //condition for getting a A
    if ( scorevalue >= 70 && scorevalue <= 100){
        document.getElementById('comment').innerHTML = " Omoh!! Congratulations you pass oo."
        document.getElementById('a').style.backgroundColor= "#2db92d";
        document.getElementById('comment').style.color= "#2db92d";
    }

    //condition for getting a B
    if ( scorevalue <= 69 && scorevalue >= 60){
        document.getElementById('comment').innerHTML = "Good job well-done oo."
        document.getElementById('b').style.backgroundColor= "#0000ff";
        document.getElementById('comment').style.color= "#0000ff";
    }

    //condition for getting a C
    if ( scorevalue <= 59 && scorevalue >= 50){
        document.getElementById('comment').innerHTML = "You passed oo."
        document.getElementById('c').style.backgroundColor= "#ffcc00";
        document.getElementById('comment').style.color= "#ffd11a";
    }

    //condition for getting a D
    if ( scorevalue <= 49 && scorevalue >= 40){
        document.getElementById('comment').innerHTML = "You are free to go."
        document.getElementById('d').style.backgroundColor= "#00264d";
        document.getElementById('comment').style.color= "#00264d";
    }
    
    //condition for getting a F
    else if ( scorevalue <= 39 && scorevalue >= 1){
        document.getElementById('comment').innerHTML = "Aaah I don die buoda me na you oo."
        document.getElementById('f').style.backgroundColor= "#cc0000";
        document.getElementById('comment').style.color= "#cc0000";
    }

});