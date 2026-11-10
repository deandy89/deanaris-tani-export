var WA_NUMBER = "6285870670631";
var MSG = {
  general: "Halo DEANARIS TANI EXPORT, saya ingin berkonsultasi mengenai ekspor dan paket layanan Anda.",
  starter: "Halo DEANARIS TANI EXPORT, saya tertarik dengan Paket Starter Rp500rb (150 Data Buyer + Website .com). Mohon info langkah selanjutnya.",
  growth:  "Halo DEANARIS TANI EXPORT, saya tertarik dengan Paket Growth Rp750rb (300 Data Buyer + Website Profil B2B Lengkap). Mohon info langkah selanjutnya.",
  pro:     "Halo DEANARIS TANI EXPORT, saya tertarik dengan Paket Pro Launch Rp1 Juta (500 Data Buyer + Website Eksklusif). Mohon info langkah selanjutnya.",
  topup:   "Halo DEANARIS TANI EXPORT, saya klien terdaftar dan ingin menanyakan Paket Top-Up Data Buyer."
};
document.querySelectorAll("[data-wa]").forEach(function (a) {
  a.href = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(MSG[a.dataset.wa]);
});
document.getElementById("yr").textContent = new Date().getFullYear();

// Spreadsheet row highlight
document.querySelectorAll(".sheet tbody tr").forEach(function (tr) {
  tr.addEventListener("click", function () {
    document.querySelectorAll(".sheet tbody tr.sel").forEach(function (r) { r.classList.remove("sel"); });
    tr.classList.add("sel");
  });
});

// Scroll reveal
if ("IntersectionObserver" in window) {
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: .12 });
  document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
} else {
  document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
}
