function imgSlider(anything){
    document.querySelector('.starbucks').src = anything;
}
function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}
const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});
sr.reveal('.starbucks',{delay:200, origin:'top'});
sr.reveal('.content',{delay:450, origin:'top'});
sr.reveal('.circle',{delay:250, origin:'right'});
sr.reveal('.sci',{delay:500, origin:'right'});
sr.reveal('.logo',{delay:500, origin:'left'});