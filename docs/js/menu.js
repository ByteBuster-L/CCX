document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('close-menu-btn');
    const drawer = document.getElementById('mobile-drawer');
    const overlay = document.getElementById('mobile-overlay');
    const body = document.body;

    // Si no existen los elementos en esta página, no hacemos nada
    if (!menuBtn || !drawer || !overlay) return;

    function toggleMenu() {
        const isClosed = drawer.classList.contains('-translate-x-full');
        
        if (isClosed) {
            // Abrir menú
            drawer.classList.remove('-translate-x-full');
            overlay.classList.remove('hidden');
            setTimeout(() => overlay.classList.remove('opacity-0'), 10);
            body.style.overflow = 'hidden'; 
        } else {
            // Cerrar menú
            drawer.classList.add('-translate-x-full');
            overlay.classList.add('opacity-0');
            setTimeout(() => overlay.classList.add('hidden'), 300);
            body.style.overflow = 'auto'; 
        }
    }

    menuBtn.addEventListener('click', toggleMenu);
    if(closeBtn) closeBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
});