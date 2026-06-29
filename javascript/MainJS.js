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

// IconHoverImageSwap---
const icon = document.getElementById('icon');
let isRotated = false;
let isAnimating = false; // アニメーション中かどうかのフラグ

// 初回アニメーション完了後にanime5クラスを削除
icon.addEventListener('animationend', function() {
    if (icon.classList.contains('anime5')) {
        icon.classList.remove('anime5');
    }
}, { once: true });

icon.addEventListener('mouseenter', function() {
    if (!isRotated && !isAnimating) {
        isAnimating = true;
        icon.classList.add('rotating');
        setTimeout(() => {
            icon.src = icon.getAttribute('data-qr');
            isRotated = true;
            isAnimating = false;
        }, 350);
    }
});

icon.addEventListener('mouseleave', function() {
    if (isRotated && !isAnimating) {
        isAnimating = true;
        icon.classList.remove('rotating');
        icon.classList.add('rotating-back');
        
        // rotating-backアニメーションの中間地点（350ms）で画像を切り替え
        setTimeout(() => {
            icon.src = 'image/Mitsutan.jpeg';
        }, 350);
        
        // アニメーション完了後（700ms）にクラスを削除
        setTimeout(() => {
            icon.classList.remove('rotating-back');
            isRotated = false;
            isAnimating = false;
        }, 700);
    }
});
// ---
