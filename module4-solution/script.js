(function () {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    for (let name of names) {
        let firstLetter = name[0].toLowerCase();

        if (firstLetter === 'j') {
            byeSpeaker.speak(name);
        } else {
            helloSpeaker.speak(name);
        }
    }
})();