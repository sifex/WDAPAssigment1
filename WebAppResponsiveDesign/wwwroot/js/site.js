﻿// Write your Javascript code.

function changeHtmlContent() {
    var content =
        "<h2>What is HTML?</h2>" +
        "<p>HTML is a markup language for describing web documents.</p>" +
        "<ul>" +
            "<li>HTML stands for Hyper Text Markup Language</li>" +
            "<li>A markup language is a set of markup tags</li>" +
            "<li>HTML documents are described by HTML tags</li>" +
            "<li>Each HTML tag describes different document content</li>" +
        "</ul>" +
        "<p>www.w3schools.com</p>";

    document.getElementById("mydiv").innerHTML = content;
}

// document.getElementById("mydiv").style = "color:blue; background-color:lightgrey;";

// document.getElementById("mydiv").className = "btn-primary";

function makeTextLarger(obj) {
    obj.style.fontSize = "30px";
}

function makeTextSmaller(obj) {
    obj.style.fontSize = "10px";
}
