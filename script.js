function toggleMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.right ul');
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
}
