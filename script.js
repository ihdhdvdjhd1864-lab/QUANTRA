document.querySelectorAll(".faq-item").forEach((item) => {
  const q = item.querySelector(".faq-q");
  const a = item.querySelector(".faq-a");
  if (item.classList.contains("open")) {
    a.style.maxHeight = a.scrollHeight + "px";
  }
  q.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");
    document.querySelectorAll(".faq-item.open").forEach((o) => {
      if (o !== item) {
        o.classList.remove("open");
        o.querySelector(".faq-a").style.maxHeight = 0;
      }
    });
    if (isOpen) {
      item.classList.remove("open");
      a.style.maxHeight = 0;
    } else {
      item.classList.add("open");
      a.style.maxHeight = a.scrollHeight + "px";
    }
  });
});
