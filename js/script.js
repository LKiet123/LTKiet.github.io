document.addEventListener('DOMContentLoaded', () => {
    // Lấy tất cả các phần tử có class 'animate-element'
    const elements = document.querySelectorAll('.animate-element');

     const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Thêm class 'visible' để kích hoạt hiệu ứng khi phần tử xuất hiện trên màn hình
                    entry.target.classList.add('visible');
                } else {
                    // Xóa class 'visible' khi phần tử rời khỏi màn hình để có thể phát lại hiệu ứng
                    entry.target.classList.remove('visible');
                }
            });
        },
        {
            threshold: 0.1, // Kích hoạt khi 10% phần tử xuất hiện trên màn hình
            rootMargin: '0px' // Không có lề xung quanh viewport
        }
    );

    // Bắt đầu quan sát từng phần tử có class 'animate-element'
    elements.forEach((element) => {
        observer.observe(element);
    });

    // Kích hoạt hiệu ứng ngay lập tức khi tải trang cho các phần tử đã có trong viewport
    elements.forEach((element) => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('visible');
        }
    });
});

// Hàm kiểm tra phần tử có nằm trong viewport không
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}

function animateElements() {
  const elements = document.querySelectorAll('.pos');
  elements.forEach(el => {
    if (isInViewport(el)) {
      el.classList.add('animate');
    } else {
      el.classList.remove('animate');
    }
  });
}


// Gọi animation khi scroll và khi tải trang
window.addEventListener('scroll', animateElements);
window.addEventListener('load', animateElements);

// section
  document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = [...sections].indexOf(entry.target);
            entry.target.style.animationDelay = `${index * .2}s`;  
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });
  });


   document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".project");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = [...projects].indexOf(entry.target);
            entry.target.style.animationDelay = `${index * 1}s`; // Delay 1s mỗi project
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Chỉ trigger một lần
          }
        });
      },
      {
        threshold: 0.3, // Kích hoạt khi 30% phần tử hiển thị
      }
    );

    projects.forEach((project) => {
      observer.observe(project);
    });
  });
 
 

// <!-- js nhập email xác thực thông tin cá nhân -->
 document.getElementById("submit-btn").addEventListener("click", function () {
   const emailInput = document.getElementById("email-input").value.trim();
  const errorMessage = document.getElementById("error-message");
  // Regex để kiểm tra định dạng email
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!emailInput || !regex.test(emailInput)) {
    errorMessage.textContent = "Vui lòng nhập email hợp lệ!";
  } else {
    errorMessage.textContent = "";

    // ẩn, hiển thị thông tin cá nhân
    document.getElementById("email-form-container").classList.add("hide");
    document.getElementById("info-container").classList.remove("hide");
  }
});

// <!--js ẩn hiện thông tin kinh nghiệm  -->
 document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    // Lấy các phần tử cần thiết
    const title = section.querySelector(".section-title");
    const contentList = section.querySelector(".content-list");
    const toggleBtn = section.querySelector(".toggle-btn");

    // Xử lý click cho tiêu đề
    title.addEventListener("click", toggleContent);

     toggleBtn.addEventListener("click", toggleContent);

    function toggleContent() {
      if (contentList.classList.contains("hidden")) {
        contentList.classList.remove("hidden");
        setTimeout(() => {
          contentList.style.opacity = "1";
        }, 10);
        toggleBtn.textContent = "View Less";
      } else {
        contentList.style.opacity = "0";
        setTimeout(() => {
          contentList.classList.add("hidden");
          toggleBtn.textContent = "View More";
        }, 300);
      }
    }
  });
});


   (function () {
    emailjs.init('ZoH9ewu7Q36VTgVJx');  
  })();

  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    emailjs.sendForm('service_hl0g9wn', 'template_qll6gtn', this)
      .then(function () {
        alert('Message sent successfully!');
      }, function (error) {
        alert('Failed to send message. Error: ' + JSON.stringify(error));
      });
  });
 