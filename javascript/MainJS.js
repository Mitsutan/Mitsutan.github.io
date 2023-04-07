// Auto-scrollToSpecifiedPageId---
function jumpTo(pageID) {
    const target = document.getElementById(pageID);
    if (target) scrollBy(0, target.getBoundingClientRect().top);
}
// ---

// FireAnimationAsYouScroll---
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
// ---

// LoadEmbeddedYoutubeAfterPageLoad---
// function youtubeDefer() {
//     const iframes = document.querySelectorAll('.youtube');
//     iframes.forEach(function(iframe) {
//         if (iframe.getAttribute('data-src')) {
//             iframe.setAttribute('src', iframe.getAttribute('data-src'));
//         }
//     });
// }

// window.addEventListener('load', youtubeDefer);
// ---
