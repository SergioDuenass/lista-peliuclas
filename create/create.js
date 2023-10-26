const createMovie = async (event) => {
    event.preventDefault();
  
    // Obtener los datos del formulario
    const name = event.target.elements.namedItem("name").value;
    const synopsis = event.target.elements.namedItem("synopsis").value;
    const genre = event.target.elements.namedItem("genre").value;
    const duration = event.target.elements.namedItem("duration").value;
    const director = event.target.elements.namedItem("director").value;
    const actors = event.target.elements.namedItem("actors").value;
  
    // Crear la nueva película
    const movie = {
      name,
      synopsis,
      genre,
      duration,
      director,
      actors,
    };
  
    // Enviar la nueva película al API
    const response = await fetch("http://localhost:3000/movies", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    });
  
    // Redirigir al usuario a la página de lista de películas
    if (response.ok) {
      window.location.href = "index.html";
    } else {
      alert("Error al crear la película");
    }
  };
  
  document.querySelector("form").addEventListener("submit", createMovie);
  