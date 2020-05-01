$(document).ready(function(){
    $(".hover-dropdown").hover(function(){
        var dropdown = $(this).children(".dropdown-menu");

        $(dropdown).toggle();

        console.log("Hover!");
    });
});