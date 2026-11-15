// Menu Toggle untuk tampilan Mobile
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Tutup menu otomatis saat salah satu tautan diklik di HP
document.querySelectorAll('.nav-link, .cta-header').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Fungsi Pintasan Kartu Layanan ke Form Kontak
function selectService(serviceName) {
    const selectElement = document.getElementById('jenisKebutuhan');
    selectElement.value = serviceName;
    
    // Scroll mulus ke bagian kontak
    document.getElementById('kontak').scrollIntoView({ behavior: 'smooth' });
}

// Penanganan Formulir Konsultasi & Tampilan Ringkasan
function handleFormSubmit(event) {
    event.preventDefault();

    // Ambil nilai dari input form
    const nama = document.getElementById('nama').value;
    const kontakUser = document.getElementById('kontakUser').value;
    const jenisKebutuhan = document.getElementById('jenisKebutuhan').value;
    const pesan = document.getElementById('pesan').value;
