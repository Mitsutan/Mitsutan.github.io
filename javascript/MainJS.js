function jumpTo(pageID) {
    const target = document.getElementById(pageID);
    if (target) scrollBy(0, target.getBoundingClientRect().top);
}

//const elAbout = document.getElementById('h1About');
//const animFireCkAbout = new IntersectionObserver(fireAnimetionAbout, { threshold: 0.5 });
//animFireCkSkills.observe(elSkills);

//function fireAnimetionSkills(el) {
//    if (el[0].isIntersecting) {
//        elSkills.classList.add('anime1');
//    }
//}

const elWindowCrossAnimeFire = document.querySelectorAll('.windowCrossAnimeFire');
const animFireCk = new IntersectionObserver(fireAnimation, { threshold: 1 });

elWindowCrossAnimeFire.forEach(function (val) {
    animFireCk.observe(val);
});

function fireAnimation(el) {
    el.forEach(function (val) {
        if (val.isIntersecting) {
            val.target.classList.add('anime1');
        }
    });
}