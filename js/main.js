(() => {
    console.log('fired!');

    function playMatchingAudio(event) {
        //play the card match game
        //card 1 is the keyboard keycode that happens when keypress event
        let card1 = event.keyCode;
        //match the audio element with the same keycode as card 1
        let card2 = document.querySelector(`audio[data-key='${card1}']`);

        //if you have a match, play card2 (matching audio element)

        if (card2) { card2.play(); }

    }

    window.addEventListener('keydown', playMatchingAudio);






})();