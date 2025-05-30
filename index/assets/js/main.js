// hasghtag #
// about us
// collapse
// back to top
// accordion item
// scroll bar
// work samples section
// text loop


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
const collapseItems = document.querySelectorAll(".collapse-item");
const collapseContents = document.querySelectorAll(".collapse-content");

// تابع برای مدیریت نمایش محتوا
function handleCollapseClick(event) {
  // پاک کردن کلاس active از همه عناوین و محتواها
  collapseItems.forEach((item) => item.classList.remove("active"));
  collapseContents.forEach((content) => content.classList.remove("active"));

  // اضافه کردن کلاس active به عنوان کلیک شده
  event.target.classList.add("active");

  // نمایش محتوای مرتبط با عنوان کلیک شده
  const targetId = event.target.getAttribute("data-target");
  const targetContent = document.getElementById(targetId);
  if (targetContent) {
    targetContent.classList.add("active");
  }
}

// اضافه کردن رویداد کلیک به همه عناوین
collapseItems.forEach((item) => {
  item.addEventListener("click", handleCollapseClick);
});

//************************** back to top  **************************

// انتخاب دکمه‌ها با استفاده از querySelectorAll
const buttons = document.querySelectorAll(
  "#back-to-top-btn-1, #back-to-top-btn-2"
);

// تعریف تابع برای حرکت به بالای صفحه
function scrollToTop() {
  window.scrollTo({
    top: 0, // به بالای صفحه برود
    behavior: "smooth", // حرکت به صورت نرم (smooth scrolling)
  });
}

// افزودن event listener به هر دکمه
buttons.forEach((button) => {
  button.addEventListener("click", scrollToTop);
});

document.addEventListener("DOMContentLoaded", function () {
  const openMenuBtn = document.getElementById("openMenu");
  const closeMenuBtn = document.getElementById("closeMenu");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.createElement("div");
  overlay.className = "overlay";
  document.body.appendChild(overlay);

  openMenuBtn.addEventListener("click", function () {
    sidebar.classList.add("open");
    overlay.classList.add("active");
  });

  closeMenuBtn.addEventListener("click", function () {
    sidebar.classList.remove("open");
    overlay.classList.remove("active");
  });

  overlay.addEventListener("click", function () {
    sidebar.classList.remove("open");
    overlay.classList.remove("active");
  });
});

// تابع تبدیل اعداد انگلیسی به فارسی
function toPersianNum(num) {
  const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return num.toString().replace(/\d/g, (digit) => persianNumbers[digit]);
}

// تبدیل تمام اعداد در صفحه
document.addEventListener("DOMContentLoaded", function () {
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    null,
    false
  );

  let node;
  while ((node = walker.nextNode())) {
    node.textContent = node.textContent.replace(/\d+/g, (num) =>
      toPersianNum(num)
    );
  }
});
// accordion item
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".accordion-item");

  items.forEach((item) => {
    const header = item.querySelector(".accordion-header");
    const icon = item.querySelector(".wrapper-icon");

    // تابع مشترک برای مدیریت باز/بسته شدن
    function toggleAccordion() {
      const isActive = item.classList.contains("active");

      // بستن تمام آیتم‌ها
      items.forEach((i) => i.classList.remove("active"));

      // باز کردن فقط آیتم فعلی اگر بسته بود
      if (!isActive) {
        item.classList.add("active");
      }
    }

    // رویداد کلیک برای header
    if (header) {
      header.addEventListener("click", toggleAccordion);
    }

    // رویداد کلیک برای icon
    if (icon) {
      icon.addEventListener("click", toggleAccordion);
    }
  });
});

// scroll bar
const content = document.getElementById("content");
const scrollbar = document.getElementById("scrollbar");
const thumb = document.getElementById("thumb");

function updateThumbPosition() {
  const contentHeight = content.scrollHeight;
  const containerHeight = content.clientHeight;
  const scrollRatio = containerHeight / contentHeight;
  const thumbMaxHeight = scrollbar.clientHeight - thumb.offsetHeight;
  const scrollTop = content.scrollTop;
  const maxScroll = contentHeight - containerHeight;
  const thumbPosition = (scrollTop / maxScroll) * thumbMaxHeight;
  thumb.style.top = `${thumbPosition}px`;
}

content.addEventListener("scroll", updateThumbPosition);

// پشتیبانی از کشیدن thumb
let isDragging = false;
let startY, startThumbTop;

thumb.addEventListener("mousedown", (e) => {
  isDragging = true;
  startY = e.clientY;
  startThumbTop = parseFloat(thumb.style.top || 0);
  e.preventDefault();
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  const deltaY = e.clientY - startY;
  const thumbMaxHeight = scrollbar.clientHeight - thumb.offsetHeight;
  let newThumbTop = startThumbTop + deltaY;
  newThumbTop = Math.max(0, Math.min(newThumbTop, thumbMaxHeight));
  thumb.style.top = `${newThumbTop}px`;

  const contentHeight = content.scrollHeight;
  const containerHeight = content.clientHeight;
  const scrollRatio = newThumbTop / thumbMaxHeight;
  content.scrollTop = scrollRatio * (contentHeight - containerHeight);
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

// به‌روزرسانی اولیه موقعیت thumb
updateThumbPosition();

// work samples section
// تغییر در تابع toggleWrapper

function toggleWrapper(element) {
  // اگر روی تصویر کلیک شده باشد، کاری نکنیم
  if (event.target.tagName === "IMG") {
    return;
  }
  // اگر روی آیتم فعال کلیک شده باشد، بسته نشود
  if (element.classList.contains("active")) {
    return;
  }
  // مخفی کردن اسکرول بارهای قبلی
  document
    .querySelectorAll(".image-scrollbar-container")
    .forEach((scrollbar) => {
      scrollbar.style.display = "none";
    });
  // Find the currently active wrapper
  const currentActive = document.querySelector(".wrapper.active");
  const wrappers = Array.from(document.querySelectorAll(".wrapper"));
  const clickedIndex = wrappers.indexOf(element);
  const activeIndex = wrappers.indexOf(currentActive);
  // Remove active and direction classes from all wrappers
  wrappers.forEach((wrapper) => {
    wrapper.classList.remove("active", "open-from-left", "open-from-right");
  });
  // Add active class to clicked wrapper
  element.classList.add("active");
  // Determine direction based on the position of the clicked wrapper relative to the active one
  if (currentActive && clickedIndex < activeIndex) {
    element.classList.add("open-from-left");
  } else {
    element.classList.add("open-from-right");
  }
  // نمایش اسکرول بار فقط برای wrapper فعال جدید
  initImageScrollbars();
}
// تابع جدید برای فعال کردن اولین wrapper در بارگذاری صفحه
function activateFirstWrapperOnLoad() {
  const wrappers = document.querySelectorAll(
    ".our-work-samples-section .wrapper"
  );
  if (wrappers.length > 0) {
    // غیرفعال کردن همه wrapperها
    wrappers.forEach((wrapper) => wrapper.classList.remove("active"));

    // فعال کردن اولین wrapper
    wrappers[0].classList.add("active");
    wrappers[0].classList.add("open-from-right");

    // مقداردهی اولیه اسکرول بار
    initImageScrollbars();
  }
}

// فراخوانی تابع هنگام بارگذاری صفحه
document.addEventListener("DOMContentLoaded", function () {
  activateFirstWrapperOnLoad();
});

// تغییر در تابع initImageScrollbars برای پاک کردن اسکرول بارهای قبلی
function initImageScrollbars() {
  // حذف همه اسکرول بارهای موجود
  document
    .querySelectorAll(".image-scrollbar-container")
    .forEach((el) => el.remove());

  const activeWrapper = document.querySelector(
    ".our-work-samples-section .wrapper.active"
  );
  if (!activeWrapper) return;

  const container = activeWrapper.querySelector(".image-container");
  if (!container) return;

  // ایجاد اسکرول بار جدید
  const scrollbarContainer = document.createElement("div");
  scrollbarContainer.className = "image-scrollbar-container";

  const thumb = document.createElement("div");
  thumb.className = "image-scrollbar-thumb";

  const inside = document.createElement("div");
  inside.className = "inside";

  thumb.appendChild(inside);
  scrollbarContainer.appendChild(thumb);
  activeWrapper.appendChild(scrollbarContainer);

  // عملکرد اسکرول
  function updateThumbPosition() {
    const containerHeight = container.clientHeight;
    const contentHeight = container.scrollHeight;

    if (contentHeight <= containerHeight) {
      thumb.style.display = "none";
      return;
    } else {
      thumb.style.display = "block";
    }

    const scrollRatio = containerHeight / contentHeight;
    const thumbMaxTop = scrollbarContainer.clientHeight - thumb.offsetHeight;
    const scrollTop = container.scrollTop;
    const maxScroll = contentHeight - containerHeight;
    const thumbTop = (scrollTop / maxScroll) * thumbMaxTop;

    thumb.style.top = `${thumbTop}px`;
  }

  // رویدادها و بقیه کدها مانند قبل...
  container.addEventListener("scroll", updateThumbPosition);

  let isDragging = false;
  let startY, startThumbTop;

  thumb.addEventListener("mousedown", (e) => {
    isDragging = true;
    startY = e.clientY;
    startThumbTop = parseFloat(thumb.style.top || 0);
    e.preventDefault();
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const deltaY = e.clientY - startY;
    const thumbMaxTop = scrollbarContainer.clientHeight - thumb.offsetHeight;

    let newThumbTop = startThumbTop + deltaY;
    newThumbTop = Math.max(0, Math.min(newThumbTop, thumbMaxTop));
    thumb.style.top = `${newThumbTop}px`;

    const contentHeight = container.scrollHeight;
    const containerHeight = container.clientHeight;
    const scrollRatio = newThumbTop / thumbMaxTop;
    container.scrollTop = scrollRatio * (contentHeight - containerHeight);
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });

  updateThumbPosition();

  const resizeObserver = new ResizeObserver(updateThumbPosition);
  resizeObserver.observe(container);
}


document.addEventListener("DOMContentLoaded", function () {
  const wrappers = document.querySelectorAll(
    ".our-work-samples-section .wrapper"
  );

  // حذف کلاس active از تمام wrapperها و اضافه کردن آن به wrapper هاور شده
  wrappers.forEach((wrapper) => {
    wrapper.addEventListener("mouseenter", function () {
      // غیرفعال کردن همه wrapperها
      wrappers.forEach((w) =>
        w.classList.remove("active", "open-from-left", "open-from-right")
      );

      // فعال کردن wrapper هاور شده
      this.classList.add("active");
      this.classList.add("open-from-right"); // یا open-from-left بسته به نیاز

      // مقداردهی اولیه اسکرول بار
      initImageScrollbars();
    });
  });

  // فعال کردن اولین wrapper در بارگذاری صفحه
  activateFirstWrapperOnLoad();
});

// تابع فعال کردن اولین wrapper در بارگذاری صفحه
function activateFirstWrapperOnLoad() {
  const wrappers = document.querySelectorAll(
    ".our-work-samples-section .wrapper"
  );
  if (wrappers.length > 0) {
    wrappers[0].classList.add("active");
    wrappers[0].classList.add("open-from-right");
    initImageScrollbars();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('.belog-title-section .programming-fields');
  const items = document.querySelectorAll('.belog-title-section .programming-fields .blog-scroll-content .item');
  const imageContainers = document.querySelectorAll('.belog-title-section .programming-fields .image-container');

  items.forEach(item => {
    item.addEventListener('click', () => {
      items.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      const itemNumber = item.id.split('-')[1];
      const targetContainer = container.querySelector(`#content-${itemNumber}`);
      imageContainers.forEach(container => container.classList.remove('active-content'));
      targetContainer.classList.add('active-content');
    });
  });
});




document.addEventListener("DOMContentLoaded", () => {
  const tickerContainer = document.querySelector(".ticker-container");
  let tickerContents = document.querySelectorAll(".ticker-content");

  // Function to clone and append the last ticker-content
  function appendNewTickerContent() {
    const lastTickerContent = tickerContents[tickerContents.length - 1];
    const newTickerContent = lastTickerContent.cloneNode(true);
    tickerContainer.appendChild(newTickerContent);
    tickerContents = document.querySelectorAll(".ticker-content"); // Update the NodeList
  }

  // Function to handle animation end
  function handleAnimationEnd(event) {
    if (event.target === tickerContents[0]) {
      // Remove the first ticker-content
      event.target.remove();
      tickerContents = document.querySelectorAll(".ticker-content"); // Update the NodeList

      // Append a new copy of the last ticker-content
      appendNewTickerContent();
    }
  }

  // Add animationend event listener to all ticker-content elements
  tickerContents.forEach((content) => {
    content.addEventListener("animationend", handleAnimationEnd);
  });

  // Ensure there’s always a second ticker-content to start with
  if (tickerContents.length === 1) {
    appendNewTickerContent();
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const tickerContent = document.getElementById("tickerContent");
  const tickerItems = tickerContent.querySelectorAll(".ticker-item");
  const itemCount = tickerItems.length;

  // اگر تعداد آیتم‌ها 5 یا کمتر باشد، محتوا را دو برابر کن
  if (itemCount <= 10) {
    tickerContent.innerHTML += tickerContent.innerHTML;
  }
});