$(document).ready(function(){
    var post = GetParameter("post");

    if(post != null){
        //Temporary
        $(".content").html(post);
    }
});