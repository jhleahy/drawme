import $ from 'jquery';
import './less/style.less';
import words from './words';

$(document).ready(function () {

    const init = () => {
        elementsRemaining();
    }

    $('.select').click(function (e) {
        e.preventDefault();
        const word = words[Math.floor(Math.random() * words.length)];
        const index = words.indexOf(word);
        if (index !== -1) {
            console.log(word);
            words.splice(index, 1);
            // no more words
            if (!elementsRemaining()) {
                $(this).prop("disabled", true);
            }
        }
    });


    const elementsRemaining = () => {
        const elements = words.length;
        $('.remain').text(elements)
        if (elements == 0) {
            return false;
        }
        return true;
    }

    init();

});