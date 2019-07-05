/*

*/
function update() {
    var x = document.getElementById('in1').value;

        var wordsEl = document.getElementById('info2')

        var wordUnicode = '';

    for (var i = 0; i < x.length; i++) {
        wordUnicode += x.charAt(i)
        wordUnicode += ' U+'
        wordUnicode += x.charCodeAt(i).toString(16).toUpperCase();
        wordUnicode += '<br>'
    }

    wordsEl.innerHTML = wordUnicode;

    document.getElementById("info1").innerHTML = 
    document.getElementById("in1").value.replace(123, 456)

}

function start(e) {
        document.getElementById('in1').addEventListener("input", update);
        update();
}

window.addEventListener("load", start, false);
/*
https://www.w3schools.com/jsref/met_document_addeventlistener.asp

document.addEventListener(event, function, useCapture)

true - The event handler is executed in the capturing phase
false- Default. The event handler is executed in the bubbling phase
*/

