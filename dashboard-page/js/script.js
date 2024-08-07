document.addEventListener('DOMContentLoaded', function() {
    var username = localStorage.getItem('username');
    if (username) {
        document.getElementById('user-name').textContent = username;
        document.getElementById('header-name').textContent = username;
    } else {
        window.location.href = 'index.html';
    }
});
