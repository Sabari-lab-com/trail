// const text = document.querySelector('.typing-text');

//         const len = text.textContent.length;
//         console.log(Math.round(len/6));

//         text.style.width = len + 'ch';
//         text.style.animation =
//             `typing ${Math.round(len/6)}s steps(${len}) ,
//             blink .5s infinite alternate`;

// advance code is added below -- this can do animates text ,if you more than one typling-text class

// And this code also prevent from problem (i.e) the script contains many code for various class but in html 
// you only one few class in this case - it handle smoothly because unused class If no elements exist, 
//querySelectorAll() returns an empty list and forEach() simply does nothing. ---No error. No need for if.

// use this for refers --- const texts = document.querySelectorAll('.typing-text');
// texts.forEach(text => {

document.querySelectorAll('.typing-text').forEach(text => {
    const len = text.textContent.length;

    text.style.width = len + 'ch';
    text.style.animation =
        `typing ${Math.round(len/6)}s steps(${len}),
        blink .5s infinite alternate`;
});
