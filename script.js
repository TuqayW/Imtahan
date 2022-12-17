document.getElementById('darkbuttons').addEventListener('click', () => {
    document.body.classList.toggle('darkey');
    localStorage.setItem('mode', document.body.classList);
});
