// Sticky Nav bar
window.onscroll = function() {stickyScroll()};

const navbar = document.getElementById("navBar");

const sticky = navbar.offsetTop;

function stickyScroll(){
    if (window.pageYOffset >= sticky){
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}


// Transparent to opaque nav on scroll

// $(function () {
//     $(document).scroll(function () {
//       const $nav = $("#navBar");
//       $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
//     });
//   });

