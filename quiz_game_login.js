function adduser() {
    p1_name = document.getElementById("p1_input").value;
    p2_name = document.getElementById("p2_input").value;
    
    localStorage.setItem("player1_name", p1_name);
    localStorage.setItem("player2_name", p2_name);
    
    window.location = "quiz_page.html"
}