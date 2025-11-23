// public/js/news.js
document.addEventListener('DOMContentLoaded', () => {
    const API_URL = 'http://localhost:1337';
    const contenedor = document.getElementById('contenedor-noticias');

    // Si no existe el contenedor en esta página, no hacemos nada
    if (!contenedor) return;

    async function cargarNoticias() {
        try {
            const response = await fetch(`${API_URL}/api/noticias?populate=*`);
            
            if (!response.ok) throw new Error("No se pudo conectar con Strapi");

            const data = await response.json();
            const listaNoticias = data.data; 

            contenedor.innerHTML = '';

            if (!listaNoticias || listaNoticias.length === 0) {
                contenedor.innerHTML = '<p class="col-span-3 text-center text-gray-500">No hay avisos recientes.</p>';
                return;
            }

            listaNoticias.forEach(item => {
                const idNoticia = item.documentId || item.id;
                const datos = item.attributes || item; 

                let urlImagen = 'https://via.placeholder.com/400x250';
                if (datos.imagen) {
                    const media = Array.isArray(datos.imagen) ? datos.imagen[0] : datos.imagen;
                    if (media?.url) urlImagen = `${API_URL}${media.url}`;
                }

                let textoResumen = "Ver detalles...";
                if (typeof datos.contenido === 'string') {
                    textoResumen = datos.contenido.substring(0, 100) + '...';
                }

                const cardHTML = `
                    <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col h-full">
                        <div class="h-48 overflow-hidden">
                            <img src="${urlImagen}" alt="${datos.titulo}" class="w-full h-full object-cover">
                        </div>
                        <div class="p-6 flex-1 flex flex-col">
                            <span class="text-xs font-bold text-escuela-accent mb-2 block">📅 ${datos.fecha || 'Reciente'}</span>
                            <h3 class="text-xl font-bold text-gray-900 mb-3">${datos.titulo}</h3>
                            <p class="text-gray-600 text-sm mb-4 flex-1">${textoResumen}</p>
                            <a href="pages/detalles.html?id=${idNoticia}" class="text-escuela-main font-bold mt-auto hover:underline">
                                Leer más →
                            </a>
                        </div>
                    </div>
                `;
                contenedor.innerHTML += cardHTML;
            });

        } catch (error) {
            console.error('Error silencioso:', error);
            contenedor.innerHTML = '<div class="col-span-3 text-center text-gray-400 py-10">Cargando noticias... (Asegúrate de tener Strapi encendido)</div>';
        }
    }

    cargarNoticias();
});