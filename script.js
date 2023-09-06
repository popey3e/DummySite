//sets a random absolute position to a html element; receives the html element
function moveElmRand(elm){
    elm.style.position ='absolute';
    elm.style.top = Math.floor(Math.random()* 90)+'%';
    elm.style.left = Math.floor(Math.random() * 90)+'%';
}
//get the #btn_test

var btn_test = document.querySelector('#btn-no');
//register to call moveElmRand() on mouseenter event to #btn_test
btn_test.addEventListener('click', function(e){ moveElmRand(e.target);});