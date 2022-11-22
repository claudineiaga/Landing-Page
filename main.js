//TOP NAVIGATION
function NavBar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("myTopnav").style.width = "100%";
            document.getElementById("myTopnav").style.backgroundColor = "rgba(6, 18, 33, 1)";
            document.getElementById("header").style.position = "fixed";
            document.getElementById("header").style.top = "0%";
        } else {
            document.getElementById("myTopnav").style.width = "80%";
            document.getElementById("myTopnav").style.backgroundColor = "rgba(6, 18, 33, 0.8)";
            document.getElementById("header").style.position = "fixed";
            document.getElementById("header").style.top = "2rem";
        }
    }
    
    
    