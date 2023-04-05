function jumpTo(pageID) {
    const target = document.getElementById(pageID);
    if (target) scrollBy(0, target.getBoundingClientRect().top);
}