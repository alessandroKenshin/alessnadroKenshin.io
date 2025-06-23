const bgVideo = document.getElementById('bgVideo');

// Mostrar página 2
function mostrarPagina2() {
  document.getElementById("pagina1").style.display = "none";
  document.getElementById("pagina2").style.display = "block";

  const audio = document.getElementById("audioCancion");
  audio.play().catch(err => {
    console.warn("El navegador bloqueó la reproducción automática:", err);
  });

  // Cambiar botón a "pausar"
  const btn = document.getElementById("playPauseBtn");
  btn.textContent = "⏸ Pausar";
}



// Volver a página 1
function volverPagina1() {
  document.getElementById("pagina2").style.display = "none";
  document.getElementById("pagina1").style.display = "block";
  bgVideo.play(); // por si se detuvo
}

// Reproducir video al pasar el mouse (si lo usas)
function playBgVideo() {
  bgVideo.style.opacity = '1';
  bgVideo.play().catch(err => console.warn("No se pudo reproducir:", err));
}

// Ya no pausamos el video (lo dejamos reproduciendo siempre)
function pauseBgVideo() {
  bgVideo.style.opacity = '1';
}

// Reproducir automáticamente al cargar la página


function togglePlayPause() {
  const audio = document.getElementById("audioCancion");
  const btn = document.getElementById("playPauseBtn");

  if (audio.paused) {
    audio.play().catch(err => {
      console.warn("No se pudo reproducir el audio:", err);
    });
    btn.innerHTML = "⏸ Pausar";
  } else {
    audio.pause();
    btn.innerHTML = "▶️ Reproducir";
  }
}








