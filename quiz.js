

var i = 0; 
var userAnswer = " "; 

    
    document.getElementById("knapp").addEventListener("click", function() {
        var display = document.getElementById("questionbox2");
        if (display.style.visibility == "hidden")
            display.style.visibility = "visible";
        else
            display.style.visibility = "hidden";

    });
    document.getElementById("knapp1").addEventListener("click", function() {
        var display = document.getElementById("questionbox2");
        if (display.style.visibility == "hidden")
            display.style.visibility = "visible";
        else
            display.style.visibility = "hidden";

    });
   

    
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var mainQuestions = JSON.parse(this.responseText); 

            
            
            document.getElementById("questionbox").innerHTML = mainQuestions.results[i].question; 
            
            
            userAnswer = document.getElementById("questionbox2").innerHTML = mainQuestions.results[i].correct_answer;  

            document.getElementById("next").addEventListener("click", function() {
                var display = document.getElementById("questionbox2");
                if (display.style.visibility == "visible")
                    display.style.visibility = "hidden";
                i++;
                document.getElementById("questionbox").innerHTML = mainQuestions.results[i].question;
                userAnswer = document.getElementById("questionbox2").innerHTML = mainQuestions.results[i].correct_answer;
            });

        }
    };
    
    var correctAnswer = JSON.stringify({
        "correct_answer": "userAnswer"
    }); 
    
    req.open("GET", "https://opentdb.com/api.php?%20amount=5&category=15&difficulty=medium&type=boolean");
    req.send(correctAnswer); 

    
