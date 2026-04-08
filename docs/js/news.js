document.addEventListener('DOMContentLoaded', async () => {
    const feedContainer = document.querySelector('.max-w-lg.mx-auto');
    if (!feedContainer) return;

    try {
        const response = await fetch('../content/noticias.json');
        
        if (!response.ok) {
            throw new Error('Aún no hay noticias publicadas.');
        }

        const data = await response.json();
        const posts = data.posts || [];
        
        feedContainer.innerHTML = '';
        if (posts.length === 0) {
            feedContainer.innerHTML = '<p class="text-center text-gray-500 py-8">Aún no hay avisos publicados.</p>';
            return;
        }

        const reversedPosts = posts.reverse();

        reversedPosts.forEach(post => {
            const avatarImg = post.avatar ? post.avatar : `https://ui-avatars.com/api/?name=${encodeURIComponent(post.author)}&background=0D8ABC&color=fff`;
            const postImage = post.image ? `<img src="${post.image}" alt="Imagen de la noticia" class="w-full aspect-square object-cover bg-gray-100">` : '';

            const cardHTML = `
                <div class="bg-white border border-gray-200 rounded-xl mb-8 shadow-sm">
                    <div class="flex items-center p-4">
                        <img src="${avatarImg}" alt="Avatar" class="w-10 h-10 rounded-full object-cover border border-gray-100">
                        <div class="ml-3">
                            <p class="text-sm font-bold text-gray-900">${post.author}</p>
                            <p class="text-xs text-gray-500">${new Date(post.date).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                        </div>
                        <button class="ml-auto text-gray-400 hover:text-gray-600">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                        </button>
                    </div>
                    
                    ${postImage}
                    
                    <div class="p-4">
                        <p class="text-sm text-gray-800 leading-relaxed whitespace-pre-wrap"><span class="font-bold mr-1">${post.author}</span>${post.body}</p>
                    </div>
                </div>
            `;
            
            feedContainer.insertAdjacentHTML('beforeend', cardHTML);
        });

    } catch (error) {
        console.error("Error al cargar las noticias:", error);
        feedContainer.innerHTML = '<p class="text-center text-gray-500 py-8">Aún no hay avisos publicados. ¡Sé el primero en crear uno en el panel de administrador!</p>';
    }
});