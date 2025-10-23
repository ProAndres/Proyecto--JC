const apiKey = "AIzaSyBQP7UilGnpmvUoApPzbJvyNd9OnXx6tj0";
const titulo = "Gang beast"; 

async function buscarTrailer(titulo) {
  const query = encodeURIComponent(`${titulo} trailer`);
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${query}&key=${apiKey}&maxResults=1`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    const videoId = data.items[0].id.videoId;

    // Mostrar el iframe
    document.getElementById("trailer-container").innerHTML = `
      <iframe width="500" height="315" 
        src="https://www.youtube.com/embed/${videoId}" 
        frameborder="0" allowfullscreen>
      </iframe>`;
  } catch (error) {
    console.error("Error al obtener el tráiler:", error);
  }
}

// Ejecutar búsqueda
buscarTrailer(gameTitle);
