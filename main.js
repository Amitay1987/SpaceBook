var postsArr =[];
var idPost = 1;


$(document).ready(function () {
    $('.add-post').on('click', function () {
        console.log("add");
        var post = $("#post-name").val();
        var postObject =
            {
                text: post,
                id: idPost++
            }

        postsArr.push(postObject);
        fillPostList();
        console.log("test");
    })
})

var fillPostList = function () {
    var button = '<button class="remove btn btn-danger" type="button">Remove</button>';
    $('#posts').empty();
    for (var i = 0; i < postsArr.length; i++) {
        $('#posts').append('<p class="post" data-id=' + postsArr[i].id + '>' +button+ " "+ postsArr[i].text  + '</p>')
    }
}

$('#posts').on('click','button.remove',function () {
    var idToDelete = $(this).closest('p').data().id;

    for (var i = 0; i < postsArr.length; i++) {
        if(postsArr[i].id === idToDelete){
            postsArr.splice(i,1);
        }
    }
    $(this).closest('p').remove();
    fillPostList();
})
