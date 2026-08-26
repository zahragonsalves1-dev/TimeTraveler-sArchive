(function () {
  const trigger = document.getElementById("door-trigger");
  const scene = document.getElementById("door-scene");
  if (!trigger || !scene) return;

  const destination = trigger.getAttribute("href") || "home.html";
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let navigating = false;

  function open() {
    if (navigating) return;
    navigating = true;

    if (prefersReducedMotion) {
      scene.classList.add("is-leaving");
      window.setTimeout(function () {
        window.location.href = destination;
      }, 320);
      return;
    }

    scene.classList.add("is-opening");
    window.setTimeout(function () {
      scene.classList.add("is-leaving");
    }, 1150);
    window.setTimeout(function () {
      window.location.href = destination;
    }, 1550);
  }

  trigger.addEventListener("click", function (e) {
    e.preventDefault();
    open();
  });

  trigger.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
      e.preventDefault();
      open();
    }
  });
})();
