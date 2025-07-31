var playing_view_btn = document.getElementById('btn');
var playing_view = document.querySelector('.playing-view');
playing_view_btn.addEventListener("click", function() {
    playing_view.style.display = playing_view.style.display === "none" ? "flex" : "none";
});