function animateCounters() {
  const counters = document.querySelectorAll(".counter h3");
  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    const increment = target / 100; // Thời gian để chạy đến giá trị cuối cùng

    function updateCounter() {
      const currentValue = +counter.innerText;
      if (currentValue < target) {
        counter.innerText = Math.ceil(currentValue + increment);
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = target;
      }
    }
    updateCounter();
  });
}

// Kiểm tra xem phần tử có trong viewport không
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Gọi hàm animateCounters khi lướt đến phần tử
function handleScroll() {
  const countersContainer = document.querySelector(".counter-container");
  if (isInViewport(countersContainer)) {
    animateCounters();
    window.removeEventListener("scroll", handleScroll); // Chỉ chạy một lần
  }
}

window.addEventListener("scroll", handleScroll);
