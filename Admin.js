document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. LOGIC TAB MENU SIDEBAR
    // ==========================================
    const navItems = document.querySelectorAll('.nav-links li');
    const tabSections = document.querySelectorAll('.tab-section'); // Ambil semua section halaman

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            // Cek target dari menu yang diklik
            const targetId = item.getAttribute('data-target');
            if (!targetId) return; 

            // Hapus warna biru dari semua menu, dan tambahkan ke menu yang diklik
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            // Sembunyikan semua halaman
            tabSections.forEach(section => section.classList.remove('active'));

            // Tampilkan halaman yang cocok dengan menu yang diklik
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // ==========================================
    // 2. LOGOUT ADMIN
    // ==========================================
    const adminLogoutBtn = document.getElementById('adminLogoutBtn');
    if(adminLogoutBtn) {
        adminLogoutBtn.addEventListener('click', () => {
            const confirmLogout = confirm('Yakin ingin keluar dari halaman Admin?');
            if (confirmLogout) {
                localStorage.removeItem('user');
                window.location.href = 'index.html';
            }
        });
    }

    // ==========================================
    // 3. ANOMALY DETECTION LOGS
    // ==========================================
    const dashboardLogBody = document.getElementById('dashboardLogBody');
    const fullAnomalyBody = document.getElementById('fullAnomalyBody');
    const inspectCount = document.getElementById('inspectCount');

    // Ambil log yang disimpan pas user nakal buka inspect element di home
    let anomalyLogs = JSON.parse(localStorage.getItem('dyx_anomalies')) || [];

    // Ubah angka counter
    if(inspectCount) {
        inspectCount.textContent = anomalyLogs.length;
    }

    // Generate baris tabel untuk setiap log
    anomalyLogs.forEach(log => {
        // Tampilkan di Dashboard Preview
        if(dashboardLogBody) {
            const trPreview = document.createElement('tr');
            trPreview.innerHTML = `
                <td>${log.time}</td>
                <td>${log.user}</td>
                <td><strong style="color:#ef4444">${log.action}</strong></td>
                <td><span class="badge danger">Suspicious</span></td>
            `;
            dashboardLogBody.prepend(trPreview);
        }

        // Tampilkan di Tab Anomaly Detection
        if(fullAnomalyBody) {
            const trFull = document.createElement('tr');
            trFull.innerHTML = `
                <td>${log.time}</td>
                <td><strong>${log.user}</strong></td>
                <td><span style="color:#ef4444">${log.action}</span></td>
                <td><span class="badge danger">Blocked & Logged</span></td>
            `;
            fullAnomalyBody.prepend(trFull);
        }
    });
});