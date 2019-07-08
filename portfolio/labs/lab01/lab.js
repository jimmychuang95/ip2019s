/*

*/


function start(e) {
    var name = [
        {
            char: '莊',
            big5: 'B2F8',
            cns: '1-5C7D',
            unicode: '838A'
        },
        {
            char: '士',
            big5: 'A468',
            cns: '1-4449',
            unicode: '58EB'
        },
        {
            char: '頡',
            big5: 'BE65',
            cns: '1-6F6E',
            unicode: '9821'
        },
    ];

    var nameEl = document.getElementById('div1');

    for (var i = 0; i <= 2; i++) {
        nameEl.innerHTML += name[i].char;
        nameEl.innerHTML += ' : big5 = ';
        nameEl.innerHTML += name[i].big5;
        nameEl.innerHTML += ' CNS = ';
        nameEl.innerHTML += name[i].cns;
        nameEl.innerHTML +=' unicode = ';
        nameEl.innerHTML += name[i].unicode;
        nameEl.innerHTML += '<br>';
    }
}



/*
https://www.w3schools.com/jsref/met_document_addeventlistener.asp

document.addEventListener(event, function, useCapture)

true - The event handler is executed in the capturing phase
false- Default. The event handler is executed in the bubbling phase
*/
window.addEventListener( "load", start, false );
