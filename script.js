const btn = document.querySelector('#rules-btn');


btn.onclick = function show_hide() {
    let rules = document.querySelector('#rules');
    if (rules.style.display !== 'none') {
        rules.style.display = 'none';
    } else {
        rules.style.display = 'block';
    }
};