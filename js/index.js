function myFunction() {
    var x = document.getElementById("myNavBar");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

function scrollToElement(element) {
    document.getElementById(element).scrollIntoView({
        behavior: 'smooth',
        block: "start",
        inline: "nearest"
    });
}
