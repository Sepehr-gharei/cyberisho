// ******************************** video container ********************************
// انتخاب المان‌ها
const video = document.getElementById("myVideo");
const playButton = document.getElementById("playButton");
const videoContainer = document.getElementById("videoContainer");
const viewContainer = document.getElementById("viewContainer");

// تابع برای شروع ویدیو و فعال کردن کنترل‌های پیش‌فرض
function startVideo() {
  // فعال کردن کنترل‌های پیش‌فرض مرورگر
  video.setAttribute("controls", "controls");

  // شروع ویدیو
  video.play();

  // مخفی کردن دکمه شروع
  playButton.style.display = "none";

  // مخفی کردن view-container
  viewContainer.style.display = "none";

  // افزودن کلاس hide-effects برای پنهان کردن افکت‌ها
  videoContainer.classList.add("hide-effects");
}

// رویداد کلیک روی دکمه شروع
playButton.addEventListener("click", startVideo);