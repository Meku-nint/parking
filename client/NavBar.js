var menu=document.getElementById('menu-icon');
var lists=document.getElementById('nav-list');
var logo=document.getElementById('logo');
var container=document.getElementById('container');
menu.addEventListener('click',function(){
    lists.style.display="block";
    menu.style.display="none";
    logo.style.display="none";
    container.style.marginTop="120px";
}
);