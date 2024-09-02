// Puedes usar Fetch API para solicitar datos de la API de noticias
async function fetchNews(keyword) {
    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(keyword)}&apiKey=tuApiKey`;
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok.');
        const data = await response.json();
        return data.articles;
    } catch (error) {
        console.error('Failed to fetch news:', error);
    }
}

// Función para renderizar artículos
function renderArticles(articles) {
    const container = document.getElementById('articles-container');
    container.innerHTML = ''; // Limpiar resultados anteriores
    articles.forEach(article => {
        const element = document.createElement('div');
        element.innerHTML = `
            <h2>${article.title}</h2>
            <img src="${article.urlToImage}" alt="Article Image" style="width:100%;">
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        `;
        container.appendChild(element);
    });
}

// Event handler para el input de búsqueda
document.getElementById('search-input').addEventListener('input', async (event) => {
    const keyword = event.target.value;
    if (keyword.length > 3) { // Esperar a que el usuario escriba al menos 4 caracteres
        const articles = await fetchNews(keyword);
        renderArticles(articles);
    }
});
