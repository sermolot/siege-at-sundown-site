"use strict";
document.querySelectorAll("[data-phase]").forEach((button) => {
  button.addEventListener("click", () => {
    const phase = button.dataset.phase;
    for (const control of document.querySelectorAll("[data-phase]")) {
      const active = control === button;
      control.classList.toggle("active", active);
      control.setAttribute("aria-pressed", String(active));
    }
    document.getElementById("phase-day").hidden = phase !== "day";
    document.getElementById("phase-night").hidden = phase !== "night";
  });
});
document.getElementById("load-trailer").addEventListener("click", () => {
  const iframe = document.createElement("iframe");
  iframe.title = "Siege at Sundown — Official Trailer";
  iframe.src =
    "https://www.youtube-nocookie.com/embed/kAY0-oc1jcE?autoplay=1&rel=0";
  iframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.referrerPolicy = "strict-origin-when-cross-origin";
  iframe.allowFullscreen = true;
  document.getElementById("trailer-frame").replaceChildren(iframe);
  iframe.focus();
});
