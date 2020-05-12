let comments = document.querySelectorAll('.comment');
let current = 0;

function slider() {
    for(let i = 0; i < comments.length ; i++) {
        comments[i].classList.add('hide');
    }
    comments[current].classList.remove('hide');
    
    
}
slider();

// document.querySelector('.comment_slider').onclick = slider;
document.querySelector('.result_btn-next').onclick = function() {
    if(current - 1 == - 1) {
        current = comments.length - 1;
    } else {
        current--;
    }
    slider();
};
document.querySelector('.result_btn-prev').onclick = function() {
    if(current + 1 == comments.length) {
        current = 0;
    } else {
        current++;
    }
    slider();
};