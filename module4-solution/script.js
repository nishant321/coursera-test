(function () {
   var names = ["Diaa", "John", "Jen", "Jason", "Paul", "Ali", "Larry", "Lara", "Laura", "Jim"];
   for (var name in names) {
      var firstLetter = names[name].charAt(0).toLowerCase();
       if (firstLetter === 'j') {
          byeSpeaker.speak(names[name]);
  } else {
    helloSpeaker.speak(names[name]);
  }
}

})();