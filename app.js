document.addEventListener('DOMContentLoaded', () => {


    // 1. LOGIC UNTUK HALAMAN LOGIN (index.html)

    // ... (kode login kamu tetap di sini) ...
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            if (email === 'ica@gmail.com' && password === '123') {
                localStorage.setItem('user', 'Ica');
                window.location.href = 'home.html';
            } else {
                alert('Email atau password salah!');
            }
        });
    }


    // 2. LOGIC UNTUK HALAMAN SIGN UP (signup.html)

    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault(); 
            alert('Pendaftaran berhasil!');
            window.location.href = 'index.html';
        });
    }


    // 3. LOGIC UNTUK HALAMAN HOME (home.html)

    const profileTrigger = document.getElementById('profileTrigger');
    const profilePopup = document.getElementById('profilePopup');
    const navUserName = document.getElementById('navUserName');
    const popupUserName = document.getElementById('popupUserName');
    const logoutBtn = document.getElementById('logoutBtn');

    if (navUserName && popupUserName) {
        const loggedInUser = localStorage.getItem('user') || 'Ica';
        navUserName.textContent = loggedInUser;
        popupUserName.textContent = loggedInUser;
    }

    if (profileTrigger && profilePopup) {
        profileTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            profilePopup.classList.toggle('show');
        });
        document.addEventListener('click', (e) => {
            if (!profileTrigger.contains(e.target) && !profilePopup.contains(e.target)) {
                profilePopup.classList.remove('show');
            }
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const confirmLogout = confirm('Apakah kamu yakin ingin keluar?');
            if (confirmLogout) {
                localStorage.removeItem('user');
                window.location.href = 'index.html';
            }
        });
    }

  // 4. LOGIC CHATBOT (SEKARANG SUDAH DI DALAM!)
    
    const chatbotWidget = document.querySelector('.chatbot-widget'); // Pastikan class ini ada di icon maskotmu
    const chatContainer = document.getElementById('chatContainer');
    const closeChat = document.getElementById('closeChat');
    const expandBtn = document.getElementById('expandBtn');

    // 1. Toggle Chatbox (Buka/Tutup)
    if (chatbotWidget && chatContainer) {
        chatbotWidget.addEventListener('click', () => {
            chatContainer.style.display = (chatContainer.style.display === 'flex') ? 'none' : 'flex';
        });
    }

    // 2. Close Chatbox
    if (closeChat && chatContainer) {
        closeChat.addEventListener('click', () => {
            chatContainer.style.display = 'none';
            chatContainer.classList.remove('expanded'); // Reset ke ukuran kecil
        });
    }

    // 3. Expand Chatbox
    if (expandBtn && chatContainer) {
        expandBtn.addEventListener('click', () => {
            chatContainer.classList.toggle('expanded');
        });
    }
});

// 5. SECURITY & ANOMALY DETECTION (ANTI-INSPECT)
function logAnomaly(action) {
    // Ambil data yang sudah ada, atau buat array baru
    let anomalies = JSON.parse(localStorage.getItem('dyx_anomalies')) || [];
    
    // Siapkan data log baru
    const newLog = {
        time: new Date().toLocaleTimeString(),
        user: localStorage.getItem('user') || 'Unknown IP',
        action: action
    };

    // Simpan ke localStorage (agar bisa dibaca di admin.html)
    anomalies.push(newLog);
    localStorage.setItem('dyx_anomalies', JSON.stringify(anomalies));

    // Berikan peringatan ke user nakal
    alert("SYSTEM ANOMALY DETECTED: You are not allowed to inspect this page. This action has been logged.");
}

// Deteksi Klik Kanan
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    logAnomaly("Attempted Right-Click");
});

// Deteksi Shortcut Keyboard Inspect Element (F12, Ctrl+Shift+I, dll)
document.onkeydown = function(e) {
    if (e.keyCode == 123) { // F12
        e.preventDefault();
        logAnomaly("Attempted F12 (DevTools)");
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) { // Ctrl+Shift+I
        e.preventDefault();
        logAnomaly("Attempted Ctrl+Shift+I (DevTools)");
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) { // Ctrl+Shift+C
        e.preventDefault();
        logAnomaly("Attempted Ctrl+Shift+C (Inspect Element)");
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) { // Ctrl+Shift+J
        e.preventDefault();
        logAnomaly("Attempted Ctrl+Shift+J (Console)");
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) { // Ctrl+U (View Source)
        e.preventDefault();
        logAnomaly("Attempted Ctrl+U (View Source)");
        return false;
    }
};

    // LOGIC UNTUK HALAMAN UPDATE PASSWORD

    const resetForm = document.getElementById('resetForm');
    if (resetForm) {
        resetForm.addEventListener('submit', function(e) {
            e.preventDefault(); 
            
            // Ambil data password yang diinput
            const newPassword = document.getElementById('newPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            // Cek apakah password pertama dan kedua sama persis
            if (newPassword === confirmPassword) {
                alert('Password berhasil diperbarui! Silakan login dengan password baru.');
                window.location.href = 'index.html'; // Lempar kembali ke halaman login
            } else {
                alert('Password dan Konfirmasi Password tidak sama! Silakan coba lagi.');
            }
        });
    }