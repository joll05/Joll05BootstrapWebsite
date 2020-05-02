$(document).ready(function(){
    var post = GetParameter("post");

    if(post){
        //Get post content
        $.ajax({
            url: `GetPostContent.php?q=${post}`,
            type: "GET",
            success: LoadPostContent,
            error: PostNotFound            
        });
    }

});

function LoadPostContent(jsondata){
    //TODO: store metadata (e.g. title), parse and show it
    var data = JSON.parse(jsondata);
    $(".post-content").html(marked(data.content));

    $(".post-title").html(data.metadata.title);

    var postDate = new Date(data.metadata.date);
    const dateFormatOptions = {year: "numeric", month: "long", day: "numeric"};
    $(".post-date").html(`Posted ${new Intl.DateTimeFormat("en-US", dateFormatOptions).format(postDate)}`);

    //Show the post content and hide the post selection
    $(".post-list").hide();
    $(".post").show();
}

function PostNotFound(){
    location.replace("?post=404");
}