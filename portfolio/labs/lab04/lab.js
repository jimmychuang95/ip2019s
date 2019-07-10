
//隨機數
function getRandom(minN, maxN) {
    return Math.floor( Math.random() * (maxN - minN + 1) ) + minN;
}

//16 個隨機數列
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

//發牌
        rdmArray = getRandomArray(0, 15, 16);
        for(j = 0; j < 16; j++) {
            $('#img' + j).append('<img class = "issue_cards" type = "non_clickable" src = ' + cards[rdmArray[j]] + '>');
        }


//給class
        $("img[src = 'ace-of-club.svg']").addClass('club');
        $("img[src = 'ace-of-diamonds.svg']").addClass('diamonds');
        $("img[src = 'ace-of-hearts.svg']").addClass('hearts');
        $("img[src = 'ace-of-spades.svg']").addClass('spades');


//按鈕蓋牌
    $('#b1').on('click', function() {
        $('td img').addClass('issue_cards');
        $('.issue_cards').attr('type', "clickable");
        $('.issue_cards').attr('src', 'joker-card.svg');
        $('.issue_cards').removeClass('issue_cards');
    })


//翻牌

    var flipCards = 0;

    $('img').click(function() {
        if ($(this).attr('type') == "clickable") {
            var cardSuit = $(this).attr('class');
            $(this).attr('src', 'ace-of-' + cardSuit + '.svg');
            flipCards++;

            if (flipCards == 2) {
                var flipOne = $('[src*="ace"][type = "clickable"]').eq(0).attr('src');
                var flipTwo = $('[src*="ace"][type = "clickable"]').eq(1).attr('src');

                if (flipOne == flipTwo) {
                    $('[src*="ace"][type = "clickable"]').animate({opacity: 0}, 300, function() {
                        $('[src*= "ace"][type = "clickable"]').addClass('done').attr('type', 'non_clickable');
                    });
                }
                else {
                    setTimeout(function(){
                        $('[src*= "ace"][type = "clickable"]').attr('src', 'joker-card.svg')
                    }, 500);
                }

            flipCards = 0;
            }
        }
    })

    if ($('table img*').attr('class') == 'done') {
        alert('Congratulations!')
    }
})