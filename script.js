// script.js

// Daftar pengguna yang valid (contoh sederhana)
const users = [
    { username: 'admin', password: 'admin123' },
    { username: 'user', password: 'user123' }
];

// Fungsi untuk menangani login
function handleLogin(event) {
    event.preventDefault();

    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    // Cari pengguna yang cocok
    const user = users.find(u => u.username === usernameInput && u.password === passwordInput);

    if (user) {
        // Simpan status login di localStorage
        localStorage.setItem('isLoggedIn', 'true');
        // Redirect ke halaman utama
        window.location.href = 'index.html';
    } else {
        // Tampilkan pesan error
        const errorMsg = document.getElementById('error');
        errorMsg.textContent = 'Username atau password salah!';
    }
}

// Fungsi untuk memeriksa apakah pengguna sudah login
function checkLogin() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (!isLoggedIn) {
        // Jika belum login, redirect ke halaman login
        window.location.href = 'login.html';
    }
}

// Fungsi untuk menangani logout
function handleLogout(event) {
    event.preventDefault();
    // Hapus status login dari localStorage
    localStorage.removeItem('isLoggedIn');
    // Redirect ke halaman login
    window.location.href = 'login.html';
}

// Event Listener untuk halaman login
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
}

// Event Listener untuk halaman utama
if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/my-website/') {
    checkLogin();

    const logoutLink = document.getElementById('logout');
    if (logoutLink) {
        logoutLink.addEventListener('click', handleLogout);
    }
}
