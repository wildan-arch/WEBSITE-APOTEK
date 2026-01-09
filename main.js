const backToTopButton = document.getElementById("backToTop");

// Logika saat halaman di-scroll
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  // Tombol muncul jika scroll lebih dari 300px
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}

// Logika saat tombol diklik
backToTopButton.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Efek meluncur halus ke atas
  });
};

// Memastikan saat REFRESH halaman kembali ke atas
window.onload = function () {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  window.scrollTo(0, 0);
};

// toogle burger navbar
const menuToggle = document.getElementById("mobile-menu");
const navList = document.getElementById("nav-list");

// Fungsi buka-tutup menu burger
menuToggle.addEventListener("click", () => {
  navList.classList.toggle("active");

  // Opsional: Ubah ikon burger menjadi 'X' saat terbuka
  const icon = menuToggle.querySelector("i");
  if (navList.classList.contains("active")) {
    icon.setAttribute("data-lucide", "x");
  } else {
    icon.setAttribute("data-lucide", "menu");
  }
  lucide.createIcons(); // Update ikon lucide
});

// Tutup menu otomatis saat salah satu link diklik
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navList.classList.remove("active");
    menuToggle.querySelector("i").setAttribute("data-lucide", "menu");
    lucide.createIcons();
  });
});
