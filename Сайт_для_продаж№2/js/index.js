// $('.menu-btn').on('click', function(e) {
//     e.preventDefault();
//     $('.menu').toggleClass('menu_active');
// })

let comments = [];

document.getElementById('comment-add').onclick = function() {
    let commentName = document.getElementById('comment-name');
    let commentBodu = document.getElementById('comment-body');

    let comment = {
        name: commentName.value,
        body: commentBodu.value,
        time: Math.floor(Date.now() / 1000)
    }
    console.log(comment);
};