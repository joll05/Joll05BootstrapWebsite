<?php
    $targetPost = $_GET["q"];

    if(!file_exists("posts/$targetPost.md") || !file_exists("posts/$targetPost.meta")){
        http_response_code(404);
        die();
    }

    $result->content = file_get_contents("posts/$targetPost.md");
    $result->metadata = json_decode(file_get_contents("posts/$targetPost.meta"));

    echo json_encode($result);
?>