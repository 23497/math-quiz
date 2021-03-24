function addUser() {
    player1_name = document.getElementById("player_1_name").value;
    player2_name = document.getElementById("player_2_name").value;

    localStorage.setItem("player1Name", player1_name);
    localStorage.setItem("player2Name", player2_name);

    window.location="game_page.html";
}