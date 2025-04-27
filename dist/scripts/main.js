(function () {
    "use strict";

    const $h1 = $('h1');
    const text = $h1.text();
    const words = text.split(' ');

    if (words.length > 0) {
        words[0] = `<span style="color: #35AFBF;">${words[0]}</span>`;
        const lastIndex = words.length - 1;
        words[lastIndex] = `<span style="color: #35AFBF;">${words[lastIndex]}</span>`;
        const newText = words.join(' ');
        $h1.html(newText);
    }
})();