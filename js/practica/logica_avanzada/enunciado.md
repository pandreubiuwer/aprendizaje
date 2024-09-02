# Ejercicio de Lógica Avanzado en JavaScript

## Ejercicio: Agregador de Noticias con Filtrado Dinámico

### Descripción:
Construye una aplicación en JavaScript que recupere y muestre noticias de múltiples fuentes usando una API pública como la de `NewsAPI`. La aplicación debe permitir al usuario filtrar las noticias basándose en categorías o palabras clave, que pueden ser introducidas a través de una interfaz de usuario simple.

### Requisitos:
- **Interacción con API**: La aplicación debe hacer solicitudes a una API de noticias y recuperar artículos basados en criterios de búsqueda especificados por el usuario.
- **Filtrado Dinámico**: Implementa una funcionalidad que permita al usuario introducir palabras clave o seleccionar categorías para filtrar las noticias mostradas. La actualización de las noticias debe ser dinámica y mostrarse sin necesidad de recargar la página.
- **Manejo de Asincronía**: Asegúrate de manejar correctamente las operaciones asincrónicas, gestionando estados de carga y posibles errores en las solicitudes.
- **Renderizado de Resultados**: Despliega los artículos en una forma fácil de leer, mostrando al menos el título, una imagen si está disponible, y un enlace al artículo completo.

### Código Base para Empezar:
```javascript
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
´´´
 ### Desafíos Adicionales:
- **Implementa paginación o carga infinita de artículos**: Esto permitirá a los usuarios ver más artículos sin necesidad de recargar la página, mejorando la experiencia de usuario.
- **Añade un sistema de cache**: Esto evitará solicitudes repetidas a la API para los mismos términos, mejorando la eficiencia de la aplicación.
- **Usa frameworks modernos como React o Vue.js**: Estos frameworks pueden ayudar a manejar el estado y la interfaz de usuario de manera más eficiente, haciendo la aplicación más robusta y mantenible.

Este ejercicio no solo prueba tus habilidades con JavaScript, sino también tu capacidad para trabajar con APIs, manejar datos asincrónicos y mejorar la experiencia del usuario en aplicaciones web dinámicas.
