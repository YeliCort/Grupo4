 function changeQty(delta) {
    const input = document.getElementById("qty");
    const val = parseInt(input.value) + delta;
    if (val >= 1 && val <= 99) input.value = val;
  }

  document.querySelectorAll(".swatch").forEach((swatch) => {
    swatch.addEventListener("click", () => {
      document
        .querySelectorAll(".swatch")
        .forEach((s) => s.classList.remove("selected"));
      swatch.classList.add("selected");
    });
  });

  const mainImage = document.getElementById("mainProductImage");
  document.querySelectorAll(".thumb").forEach((thumb) => {
    thumb.addEventListener("click", () => {
      document
        .querySelectorAll(".thumb")
        .forEach((t) => t.classList.remove("active"));
      thumb.classList.add("active");

      const newImage = thumb.dataset.image;
      if (newImage) {
        mainImage.src = newImage;
      }
    });
  });