const twelveDaysArr = [
    {
        gift: 'Partridge In a Pear Tree',
        dayTxt: '1st',
        img: 'http://placekitten.com/200/200'
    },
    {
        gift: 'Two Turtle-Doves',
        dayTxt: '2nd',
        img: 'http://placekitten.com/200/200'
    },
    {
        gift: 'Three French Hens',
        dayTxt: '3rd',
        img: 'http://placekitten.com/200/200'
    },
    {
        gift: 'Four Calling Birds',
        dayTxt: '4th',
        img: 'http://placekitten.com/200/200'
    },
    {
        gift: 'FIVE GOLD RINGS',
        dayTxt: '5th',
        img: 'http://placekitten.com/200/200'
    },
    {
        gift: 'Six Geese a-laying',
        dayTxt: '6th',
        img: 'http://placekitten.com/200/200'
    },
    {
        gift: 'Seven Swans a-swimming',
        dayTxt: '7th',
        img: 'http://placekitten.com/200/200'
    },
    {
        gift: 'Eight Maids a-milking',
        dayTxt: '8th',
        img: 'http://placekitten.com/200/200'
    },
    {
        gift: 'Nine Ladies dancing',
        dayTxt: '9th',
        img: 'http://placekitten.com/200/200'
    },
    {
        gift: 'Ten Lords a-leaping',
        dayTxt: '10th',
        img: 'http://placekitten.com/200/200'
    },
    {
        gift: 'Eleven Pipers piping',
        dayTxt: '11th',
        img: 'http://placekitten.com/200/200'
    },
    {
        gift: 'Twelve Drummers Drumming',
        dayTxt: '12th',
        img: 'http://placekitten.com/200/200'
    },

]

let counterIndex = 0;

// renderButtons();
function renderButtons() {
    $(".button-row").empty();
    for (let i = 0; i < 12; i++) {
        const newBtn = $("<button>");
        newBtn.addClass("day-btn btn btn-lg day-btn m-1");

        if (i === counterIndex) {
            newBtn.addClass('btn-danger');
        } else {
            newBtn.addClass('btn-success')
        }
        newBtn.attr('data-day', i + 1);
        newBtn.html(`Day <span class="text-bold">${i + 1}</span>`)
        $(".button-row").append(newBtn);
    }
}

renderDay();
function renderDay() {
    $(".day-text").text(twelveDaysArr[counterIndex].gift);
    $("#day").text(twelveDaysArr[counterIndex].dayTxt);
    const newImg = $("<img>");
    newImg.attr('src', twelveDaysArr[counterIndex].img)
    newImg.attr('alt', twelveDaysArr[counterIndex].dayTxt)
    $(".img-box").empty().append(newImg)
    renderButtons();
}

$('.button-row').on('click', '.day-btn', (event) => {
    console.log('day clicked')
    counterIndex = parseInt(event.target.getAttribute('data-day')) - 1
    console.log(counterIndex);
    renderDay();
})

$('#back-btn').on('click', () => {
    counterIndex === 0 ? counterIndex = 11 : counterIndex--;
    renderDay();
})

$("#forward-btn").on('click', () => {
    counterIndex === 11 ? counterIndex = 0 : counterIndex++;
    renderDay();
})

document.addEventListener('keydown', function (event) {
    const key = event.key;
    console.log(key)
    switch (key) {
        case 'ArrowLeft':
            counterIndex === 0 ? counterIndex = 11 : counterIndex--;
            renderDay();
            break;
        case 'ArrowRight':
            counterIndex === 11 ? counterIndex = 0 : counterIndex++;
            renderDay();
            break;
        case '1':
            counterIndex=0;
            renderDay();
            break;
        case '2':
            counterIndex=1;
            renderDay();
            break;
        case '3':
            counterIndex=2;
            renderDay();
            break;
        case '4':
            counterIndex=3;
            renderDay();
            break;
        case '5':
            counterIndex=4;
            renderDay();
            break;
        case '6':
            counterIndex=5;
            renderDay();
            break;
        case '7':
            counterIndex=6;
            renderDay();
            break;
        case '8':
            counterIndex=7;
            renderDay();
            break;
        case '9':
            counterIndex=8;
            renderDay();
            break;
        case '0':
            counterIndex=9;
            renderDay();
            break;
        case '!':
            counterIndex=10;
            renderDay();
            break;
        case '@':
            counterIndex=11;
            renderDay();
            break;
        default:
            break;
    }

});