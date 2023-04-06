function jumpTo(pageID) {
    const target = document.getElementById(pageID);
    if (target) scrollBy(0, target.getBoundingClientRect().top);
}

const elWindowCrossAnimeFire = document.querySelectorAll('.windowCrossAnimeFire');
const animFireCk = new IntersectionObserver(fireAnimation, { threshold: 1 });

elWindowCrossAnimeFire.forEach(function (val) {
    animFireCk.observe(val);
});

function fireAnimation(el) {
    el.forEach(function (val) {
        //console.log(val.target.nodeName);
        if (val.isIntersecting) {
            if (val.target.nodeName == 'H1') {
                val.target.classList.add('anime1');
            } else {
                val.target.classList.add('anime3');
            }
            
        }
    });
}