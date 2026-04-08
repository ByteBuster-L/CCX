document.addEventListener('DOMContentLoaded', async () => {
    const feedContainer = document.querySelector('.max-w-lg.mx-auto');
    if (!feedContainer) return;

    try {
        feedContainer.innerHTML = '';
        const cardHTML = `
            <div class="bg-white border border-gray-200 rounded-xl mb-8 shadow-sm">
                <div class="flex items-center p-4">
                    <img src="https://ui-avatars.com/api/?name=Brian+Sampayo&background=0D8ABC&color=fff" alt="Avatar" class="w-10 h-10 rounded-full object-cover border border-gray-100">
                    <div class="ml-3">
                        <p class="text-sm font-bold text-gray-900">Brian sampayo</p>
                        <p class="text-xs text-gray-500">Publicado el 07/04/2026 07:11 p. m.</p>
                    </div>
                    <button class="ml-auto text-gray-400 hover:text-gray-600">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                    </button>
                </div>
                <div class="w-full bg-gray-100 aspect-square flex items-center justify-center">
                    <span class="text-gray-400">Sin imagen adjunta</span>
                </div>
                <div class="p-4">
                    <p class="text-sm text-gray-800 leading-relaxed">
                        <span class="font-bold mr-1">Brian sampayo</span> 
                        Primera noticia de la página hecha desde la ventana de administrador despues de unas semanas de sufrimiento por fin podre ver si se puede lograr hacer esto con solo gitHub Pages sin pagar hosting y sin BD para almacenar las noticias =)
                    </p>
                    <button class="text-gray-400 text-sm mt-2 font-medium hover:text-gray-600">
                        Ver comentarios...
                    </button>
                </div>
            </div>
        `;

        feedContainer.insertAdjacentHTML('beforeend', cardHTML);

    } catch (error) {
        console.error("Error al cargar las noticias:", error);
        feedContainer.innerHTML = '<p class="text-center text-gray-500 py-8">No se pudieron cargar las noticias en este momento.</p>';
    }
});