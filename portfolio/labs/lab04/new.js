function getRandom(minN, maxN) {
    return Math.floor( Math.random() * (maxN - minN + 1) ) + minN;
}

function getRandomArray(minNum, maxNum, n) {
    var rdmArray = [];
    var rdm = 0;

    for(var i = 0; i < n; i++) {
        do {
            var exist = false;
            rdm = getRandom(minNum, maxNum);

            if(rdmArray.indexOf(rdm) != -1) {
                exist = true;
            }
        } while (exist);

    rdmArray.push(rdm);
    }
return rdmArray;
}


$(function() {
    var cards = [ 'ace-of-club.svg',
                  'ace-of-diamonds.svg',
                  'ace-of-hearts.svg',
                  'ace-of-spades.svg',
                  'ace-of-club.svg',
                  'ace-of-diamonds.svg',
                  'ace-of-hearts.svg',
                  'ace-of-spades.svg',
                  'ace-of-club.svg',
                  'ace-of-diamonds.svg',
                  'ace-of-hearts.svg',
                  'ace-of-spades.svg',
                  'ace-of-club.svg',
                  'ace-of-diamonds.svg',
                  'ace-of-hearts.svg',
                  'ace-of-spades.svg',
                ];

        rdmArray = getRandomArray(0, 15, 16);
        for(j = 0; j < 16; j++) {
            $('#d2').append('<img  class ="issue" src = ' + cards[rdmArray[j]] + '>');
        }


    $('#b1').on('click', function() {
        $('#d2').html('');

        rdmArray = getRandomArray(0, 15, 16);
        for(j = 0; j < 16; j++) {
            $('#d2').append('<img  class ="issue" src = ' + cards[rdmArray[j]] + '>');
        }

        $('.issue').hide();
        $('.joker_cards').html('');

        for(var i = 0; i < 16; i++) {
            $('#d2').append('<img class = "joker_cards" src = "joker-card.svg">')
        }
    })

    $('.issue').on('click', function() {
        console.log('ouch');
        $('.joker_cards').hide();
        $('.issue').show();
    })
})