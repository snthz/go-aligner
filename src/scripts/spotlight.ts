/*
  Luz que sigue al cursor dentro de los elementos con [data-spotlight] (estilos en global.css).
  Un solo listener delegado para toda la página; solo en dispositivos con hover.
*/
if (matchMedia("(hover: hover)").matches) {
  document.addEventListener("pointermove", (e) => {
    const el = (e.target as Element | null)?.closest<HTMLElement>("[data-spotlight]");
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  }, { passive: true });
}
