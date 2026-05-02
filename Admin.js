document.addEventListener('DOMContentLoaded', () => {
    const logBody = document.getElementById('logBody');
    const inspectCount = document.getElementById('inspectCount');

    // Ambil log anomali dari localStorage
    let anomalyLogs = JSON.parse(localStorage.getItem('dyx_anomalies')) || [];

    // Update Angka di Card
    inspectCount.textContent = anomalyLogs.length;

    // Tampilkan log ke dalam tabel
    anomalyLogs.forEach(log => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${log.time}</td>
            <td>${log.user}</td>
            <td><strong style="color:#ef4444">${log.action}</strong></td>
            <td><span class="badge danger">Blocked</span></td>
        `;
        logBody.prepend(tr); // Masukkan di paling atas
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.nav-links li');
    const sections = document.querySelectorAll('.tab-content');

    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            // 1. Ubah warna menu di sidebar
            menuItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            // 2. Sembunyikan semua section konten
            sections.forEach(s => s.classList.remove('active'));

            // 3. Tampilkan section yang sesuai dengan data-target menu yang diklik
            const target = item.getAttribute('data-target');
            document.getElementById(target).classList.add('active');
        });
    });
});