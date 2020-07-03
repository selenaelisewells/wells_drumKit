(() => {
    console.log('fired!');

    let keys = Array.from(document.querySelectorAll('.key'));
    //mdn -> search for the array datatype to learn more about it 

    function resetKey() {
        this.classList.remove('playing');
    }

    function playMatchingAudio(event) {
        //play the card match game
        //card 1 is the keyboard keycode that happens when keypress event
        let card1 = event.keyCode;
        //take card1 (use the keycode) and find the matching audio element
        //match the audio element with the same keycode as card 1

        let card2 = document.querySelector(`audio[data-key='${card1}']`),
            key = document.querySelector(`div[data-key='${card1}']`);


        if (!card2) { return; }

        card2.currentTime = 0;
        card2.play();

        key.classList.add('playing');

        //this test for a false condition
        //using the javascript string template
        //if you have a match, play card2 (matching audio element)

        // if (card2) {
        //     card2.currentTime = 0;
        //     card2.play();
        // }

    }

    window.addEventListener('keydown', playMatchingAudio);

    keys.forEach(key => key.addEventListener('transitionend', resetKey));


})();