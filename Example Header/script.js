// JavaScript om tekst in de header te veranderen wanneer de knop wordt geklikt
document.getElementById("changeText").addEventListener("click", function () {
    var header = document.querySelector("header");
    header.querySelector("h1").textContent = "Nieuwe Titel";
    header.querySelector("p").textContent = "Dit is de nieuwe tekst.";
});