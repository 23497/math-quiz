player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_score = 0;
player2_score = 0;
document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player1_score;
document.getElementById("player_awnser").innerHTML = "Answer turn-"+player2_name; 
document.getElementById("player_question").innerHTML = "Question turn-" +player1_name; 
question_turn= "player1";
answer_turn= "player2";
function send(){
    get_number = document.getElementById("number1").value;
    console.log(get_number);
    get_number2 = document.getElementById("number2").value;
    console.log(get_number2);

    question_word = "<h4 id='word_display'>Q."+get_number+"</h4>";
    question_word2 = "<h4 id='word_display2'>Q."+get_number2+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input-check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word +question_word2+ input_box +check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value= "";
}

function check(){
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.Math(get_number*get_number);
    console.log(answer);
    if(word==answer){
        if (answer_turn=="player1"){
            player1_score= player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else{
        
                player2_score= player2_score + 1;
                document.getElementById("player2_score").innerHTML = player2_score; 
        }
    }
    if(question_turn=="player1"){
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question turn -"+ player2_name;
    }
    else{
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question turn -"+ player1_name;
    }
    if(answer_turn=="player1"){
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "answer turn -"+ player2_name;
    }
    else{
        question_turn = "player1";
        document.getElementById("player_answer").innerHTML = "answer turn -"+ player1_name;
    }
    document.getElementById("output").innerHTML = "";
}