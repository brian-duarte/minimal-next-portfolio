import React from "react";

export default function AboutMe() {
  return (
    <section id="about" className="container space-y-6 py-8 md:py-12 lg:py-24">
      {/* Encabezado de la sección */}
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl font-bold">
          About Me
        </h2>
    {/* Párrafo 1: Estilo serif, itálico y con palabras clave en negrita para atrapar al reclutador */}
        <p className="font-serif italic text-base sm:text-xl text-muted-foreground leading-relaxed tracking-wide">
          "In this video, I share how I apply the discipline, focus, and balance of martial arts to mitigate risks, validate end-to-end flows, and ensure digital products deliver high-quality experiences."
        </p>
        {/* Párrafo 2: Texto sans-serif moderno y seminegrita que invita a la acción */}
        <p className="font-sans font-medium text-sm sm:text-base text-primary uppercase tracking-widest bg-muted px-4 py-1.5 rounded-full border border-border/40">
          🤝 I invite you to learn more about my career path and professional vision. Enjoy the video! 👇
        </p>
      </div>

      {/* Contenedor del Video Centrado */}
      <div className="mx-auto max-w-3xl py-6 flex justify-center">
        <div className="w-full relative overflow-hidden rounded-xl border bg-background p-2 shadow-sm">
          <div className="aspect-video w-full overflow-hidden rounded-lg bg-black">
            <video 
              controls 
              preload="metadata"
              className="h-full w-full object-cover"
              poster="/mi-foto.jpeg" // Opcional: muestra tu foto como miniatura antes de darle play
            >
              <source src="/videos/storytelling.mp4" type="video/mp4" />
              Tu navegador no soporta la reproducción de videos nativos.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}