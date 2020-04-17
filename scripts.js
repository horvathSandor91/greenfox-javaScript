let name = 'Sanyi';
//backtick shorcut
console.log(`Hello, my dear ${name}`);


//JQuery part

$('p').html('The JQuery part has started!');

$('h1').css('background', 'red');

$('h2').toggleClass('green');
$('p').toggleClass('green');

$('main').append('<p id="first">Added element</p>');
$('main').append('<p id="second">Added second element</p>');

$('#first').remove();

$('#add-button').click(() => {
    if ($('main p').length < 5) {;
        $('main').append(`<p> Username: ${$('#name').val()}</p>`);
    } else {
        $('main').append('<p class ="green">Added a new p tag</p>');
    }
});


let removeFunction = () => {
    $('main p:last-child').remove();
}

$('#remove-button').click(removeFunction);

// Conditions and Loops

let age = 33;

if (age > 35) {
    console.log('youre too old');

} else {
    console.log("You're young");
}



// $('main').append('<div class="box"></div>');
// $('main div:last-child').css('background', 'orange');
// $('main').append('<div class="box"></div>');
// $('main div:last-child').css('background', 'yellow');
// $('main').append('<div class="box"></div>');
// $('main div:last-child').css('background', 'purple');
// $('main').append('<div class="box"></div>');
// $('main div:last-child').css('background', 'blue');
// $('main').append('<div class="box"></div>');
// $('main div:last-child').css('background', 'green');

let colors = ['orange', 'yellow', 'purple', 'blue', 'green'];
colors.push('magenta');

colors.forEach((color) => {
    $('main').append('<div class="box"></div>');
    $('main div:last-child').css('background', color);
});

for (let i = 0; i < 100; i++) {
    console.log('current number:' + i);
};