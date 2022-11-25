const openNav = document.getElementById('navmenu-mobile');
const menuIcon = document.querySelectorAll('.menu');
const openIcon = document.getElementById('hambuger-menu');
const navLink = document.querySelectorAll('.navlink-mobile')

openIcon.addEventListener('click', () =>{
    openNav.classList.toggle('open');
    menuIcon.forEach(icon => {
        icon.classList.toggle('close');
    });
})

// navLink.addEventListener('click', () => {
//     openNav.classList.remove('open');
//     menuIcon.forEach(icon => {
//         icon.classList.toggle('close');
//     })
    
// })


navLink.forEach(link => link.addEventListener('click', () => {
    openNav.classList.remove('open');
    menuIcon.forEach(icon => {
        icon.classList.toggle('close');
    });
    
}))



// document.onclick = function(e){
//     if(e.target.id !== 'navLink'){
//         // openNav.classList.remove('open');
//         icon.classList.remove('close');
//     }
// }



// navLink.addEventListener('click', () =>{
//     navLink.forEach(link => {
//         openNav.classList.remove('open');
//     })
// })