document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. LOGIC UNTUK HALAMAN LOGIN (index.html)
    // ==========================================
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Mencegah form reload halaman
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Pengecekan dummy data
            if (email === 'ica@gmail.com' && password === '123') {
                // Simpan nama ke localStorage agar bisa dibaca di home
                localStorage.setItem('user', 'Ica');
                window.location.href = 'home.html';
            } else {
                alert('Email atau password salah! Coba email: ica@gmail.com dan pw: 123');
            }
        });
    }

    // ==========================================
    // 2. LOGIC UNTUK HALAMAN SIGN UP (signup.html)
    // ==========================================
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault(); 
            
            alert('Pendaftaran berhasil! Silakan login menggunakan akun baru kamu.');
            window.location.href = 'index.html'; // Pindah ke halaman login
        });
    }

    // ==========================================
    // 3. LOGIC UNTUK HALAMAN HOME (home.html)
    // ==========================================
    const profileTrigger = document.getElementById('profileTrigger');
    const profilePopup = document.getElementById('profilePopup');
    const navUserName = document.getElementById('navUserName');
    const popupUserName = document.getElementById('popupUserName');
    const logoutBtn = document.getElementById('logoutBtn');

    // Tampilkan nama user di Navbar dan di dalam Popup Card
    if (navUserName && popupUserName) {
        const loggedInUser = localStorage.getItem('user') || 'Ica';
        navUserName.textContent = loggedInUser;
        popupUserName.textContent = loggedInUser;
    }

    // Fungsi buka/tutup (Toggle) Card Popup
    if (profileTrigger && profilePopup) {
        profileTrigger.addEventListener('click', (e) => {
            e.stopPropagation(); // Mencegah klik menembus ke luar
            profilePopup.classList.toggle('show');
        });

        // Tutup popup kalau user klik di sembarang tempat di luar card
        document.addEventListener('click', (e) => {
            if (!profileTrigger.contains(e.target) && !profilePopup.contains(e.target)) {
                profilePopup.classList.remove('show');
            }
        });
    }

    // Fungsi Log out saat tombol di dalam Card diklik
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Mencegah link pindah ke href="#"
            const confirmLogout = confirm('Apakah kamu yakin ingin keluar?');
            if (confirmLogout) {
                localStorage.removeItem('user'); // Hapus sesi
                window.location.href = 'index.html'; // Kembali ke login
            }
        });
    }
});