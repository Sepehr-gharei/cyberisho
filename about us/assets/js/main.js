// hasghtag # 
// about us 
// video container
// collapse 
// back to top 

// ********************************  about us text ******************************** 
$(document).ready(function () {
  // متن اصلی و دکمه را انتخاب کنید
  const mainText = $("#main-text");
  const toggleButton = $("#show-txt");

  // متن کامل را ذخیره کنید
  const fullText = mainText.text().trim();

  // متن خلاصه را با استفاده از CSS مدیریت کنید
  const shortText = fullText;

  // وضعیت نمایش متن (در ابتدا خلاصه است)
  let isFullTextVisible = false;

  // رویداد کلیک برای دکمه
  toggleButton.on("click", function () {
    if (isFullTextVisible) {
      // اگر متن کامل نمایش داده شده باشد، به حالت خلاصه بازگردید
      mainText.css({
        "-webkit-line-clamp": "7",
        overflow: "hidden",
      });

      mainText.removeClass("hide-after");
      toggleButton.text("مشاهده کامل متن");
      isFullTextVisible = false;
    } else {
      // اگر متن خلاصه نمایش داده شده باشد، کل متن را نمایش دهید
      mainText.css({
        "-webkit-line-clamp": "unset",
        overflow: "visible",
      });
      mainText.addClass("hide-after");

      toggleButton.text("مشاهده متن خلاصه");
      isFullTextVisible = true;
    }
  });
});


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




// ************************** collapse **************************


// انتخاب تمام عناصر مرتبط با collapse
const collapseItems = document.querySelectorAll('.collapse-item');
const collapseContents = document.querySelectorAll('.collapse-content');

// تابع برای مدیریت نمایش محتوا
function handleCollapseClick(event) {
    // پاک کردن کلاس active از همه عناوین و محتواها
    collapseItems.forEach(item => item.classList.remove('active'));
    collapseContents.forEach(content => content.classList.remove('active'));

    // اضافه کردن کلاس active به عنوان کلیک شده
    event.target.classList.add('active');

    // نمایش محتوای مرتبط با عنوان کلیک شده
    const targetId = event.target.getAttribute('data-target');
    const targetContent = document.getElementById(targetId);
    if (targetContent) {
        targetContent.classList.add('active');
    }
}

// اضافه کردن رویداد کلیک به همه عناوین
collapseItems.forEach(item => {
    item.addEventListener('click', handleCollapseClick);
});



//************************** back to top  **************************

const backToTopBtn = document.getElementById("back-to-top-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top of the document smoothly
backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scrolling effect
    });
});





document.addEventListener('DOMContentLoaded', function() {
  const openMenuBtn = document.getElementById('openMenu');
  const closeMenuBtn = document.getElementById('closeMenu');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  document.body.appendChild(overlay);

  openMenuBtn.addEventListener('click', function() {
    sidebar.classList.add('open');
    overlay.classList.add('active');
  });

  closeMenuBtn.addEventListener('click', function() {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
  });

  overlay.addEventListener('click', function() {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
  });
});