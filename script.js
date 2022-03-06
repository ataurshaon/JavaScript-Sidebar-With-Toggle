var toggle_btn = document.getElementById('toggle-btn');
var sidebar = document.getElementById('sidebar');
var home = document.getElementById('home');
var about = document.getElementById('about');
var gallery = document.getElementById('gallery');
var more = document.getElementById('more');
var contact = document.getElementById('contact');

toggle_btn.addEventListener('click', function(){
    sidebar.classList.toggle('sidebar');
    sidebar.classList.toggle('sidebarClose');
    home.classList.toggle('open');
    about.classList.toggle('open');
    gallery.classList.toggle('open');
    more.classList.toggle('open');
    contact.classList.toggle('open');
});