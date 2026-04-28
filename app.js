document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. LOGIC UNTUK HALAMAN LOGIN (index.html)
    // ==========================================
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

    // ==========================================
    // 2. LOGIC UNTUK HALAMAN SIGN UP (signup.html)
    // ==========================================
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault(); 
            alert('Pendaftaran berhasil!');
            window.location.href = 'index.html';
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