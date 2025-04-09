// hasghtag # 
// about us 
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

// انتخاب دکمه‌ها با استفاده از querySelectorAll
const buttons = document.querySelectorAll('#back-to-top-btn-1, #back-to-top-btn-2');

// تعریف تابع برای حرکت به بالای صفحه
function scrollToTop() {
  window.scrollTo({
    top: 0, // به بالای صفحه برود
    behavior: 'smooth' // حرکت به صورت نرم (smooth scrolling)
  });
}

// افزودن event listener به هر دکمه
buttons.forEach(button => {
  button.addEventListener('click', scrollToTop);
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



// تابع تبدیل اعداد انگلیسی به فارسی
function toPersianNum(num) {
  const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return num.toString().replace(/\d/g, digit => persianNumbers[digit]);
}

// تبدیل تمام اعداد در صفحه
document.addEventListener('DOMContentLoaded', function() {
  const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      null,
      false
  );

  let node;
  while ((node = walker.nextNode())) {
      node.textContent = node.textContent.replace(/\d+/g, num => toPersianNum(num));
  }
});