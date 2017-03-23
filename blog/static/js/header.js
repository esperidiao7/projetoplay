function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 500,
            shrinkOff = 500,
            header = document.querySelector(".navigator");
        if (distanceY > shrinkOn) {
            classie.add(header,"smaller");
        } else if (distanceY < shrinkOff){
            if (classie.has(header,"smaller")) {
                classie.remove(header,"smaller");
            }
        }
    });

    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            ph = 500,
            header = document.querySelector(".navigator");
        if (distanceY > ph) {
            classie.add(header,"white");
        } 
        else {
            classie.remove(header,"white");
        }
    });    
}
window.onload = init();
