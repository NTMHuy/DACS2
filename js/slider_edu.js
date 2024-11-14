const sliderBackground = document.querySelector(".slider-background");
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

// Hàm để chuyển ảnh
function showNextSlide() {
  currentIndex++;
  sliderBackground.style.transition = "transform 1s ease";
  sliderBackground.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Khi đạt đến bản sao của ảnh đầu tiên, ngay lập tức đưa về ảnh đầu mà không có hiệu ứng
  if (currentIndex === slides.length - 1) {
    setTimeout(() => {
      sliderBackground.style.transition = "none";
      sliderBackground.style.transform = `translateX(0)`;
      currentIndex = 0;
    }, 1000); // Độ dài của thời gian chuyển ảnh (1 giây)
  }
}

// Chuyển ảnh sau mỗi 5 giây
setInterval(showNextSlide, 5000);
