function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const message = document.getElementById('message');

    // Logika sederhana untuk login
    if ((username === "Diki Ramdani" || username === "Syalum Syalabi") && (password === "5102007" || password === "282007")) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        message.textContent = "❤️Login berhasil! Selamat datang, " + username + "!❤️";
        window.location.href = "#";
    } else {
        message.textContent = "Login gagal! Periksa username dan password Anda.";
    }

    message.classList.remove('hidden');

    // Menghilangkan pesan setelah 3 detik
    setTimeout(() => {
        message.classList.add('hidden');
    }, 3000);
}