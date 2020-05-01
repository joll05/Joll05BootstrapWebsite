var parameters = [0];

$(document).ready(function(){
    var rawParameters = location.search.substring(1).split("&");

    for(var i = 0; i < rawParameters.length; i++){
        var splitParameter = rawParameters[i].split("=");
        var newParameter = {name: splitParameter[0], value: splitParameter[1]};
        parameters.push(newParameter);
    }

    $(".hover-dropdown").hover(function(){
        var dropdown = $(this).children(".dropdown-menu");

        $(dropdown).toggle();

        console.log("Hover!");
    });
});

function GetParameter(name) {
    for(var i = 0; i < parameters.length; i++){
        if(parameters[i].name == name){
            return parameters[i].value;
        }
    }

    //If it can't find it
    return null;
}