const text = document.querySelector('.typing-text');

        const len = text.textContent.length;
        console.log(Math.round(len/6);

        text.style.width = len + 'ch';
        text.style.animation =
            `typing ${Math.round(len/6)}s steps(${len}) ,
            blink .5s infinite alternate`;
