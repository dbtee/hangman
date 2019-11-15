$(document).ready(() => { 
    
    const wordArray = ["monitor", "program", "application", "keyboard", "javascript", "gaming", "network"]
    const word = wordArray[Math.floor(Math.random() * wordArray.length)];
    const letters = word.split('');
    const imgArray = ['../assets/gallows.jpg', '../assets/gallows+head.jpg', '../assets/gallows+head+torso.jpg', '../assets/gallows+head+torso+leg.jpg', '../assets/gallows+head+torso+2leg.jpg', '../assets/gallows+head+torso+2leg+arm.jpg', '../assets/gallows+head+torso+2leg+2arm.jpg']
    let i = 0;
    const audioElement = document.createElement('audio');
    
    console.log(word)
    $('#gallows').attr("src", imgArray[i]);
    
    letters.forEach(function(item) {
        $("#word-container").append("<div class='underline'><li class='hidden'>" + item + "</li></div>");
      });
    
    $("button").on("click", event => {
        const { currentTarget } = event;

        $(currentTarget).removeClass("btn-secondary btn-sm")
        .addClass("btn-primary btn-sm");
        let btnLetter = event.currentTarget.innerText.toLowerCase();
        if (word.includes(btnLetter)) {
        $(`li:contains(${btnLetter})`).removeClass("hidden").addClass("visible")
        }
        else if (i < imgArray.length) {
              $('#gallows').attr("src", imgArray[i+=1]);
            }
        if (i == imgArray.length - 1) {
            audioElement.setAttribute('src', '../assets/oof.mp3')
            audioElement.play();
            setTimeout(1000);
            setTimeout(function(){
                alert("You're dead!");
            }, 100);
        }
        if ($("li").hasClass("hidden") == false) {
            audioElement.setAttribute('src', '../assets/mlg-horns.mp3')
            audioElement.play();
            setTimeout(function(){
                alert("You win!");
            }, 100);
        }
    })
})