function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const message = document.getElementById('message');
    let returnMessage = ""; // Variabel untuk menyimpan pesan

    // Logika sederhana untuk login
    if ((username === "Diki Ramdani" || username === "Syalum Syalabi") && (password === "5102007" || password === "282007")) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        returnMessage = "❤️Login berhasil! Selamat datang, " + username + "!❤️";
        message.textContent = returnMessage;
        
        // Mengarahkan ke halaman lain setelah login berhasil
        setTimeout(() => {
            window.location.href = "#"; // Ganti dengan URL yang sesuai jika diperlukan
        }, 3000); // Tunggu 3 detik sebelum mengalihkan
    } else {
        returnMessage = "Login gagal! Periksa username dan password Anda.";
        message.textContent = returnMessage;
    }

    message.classList.remove('hidden');

    // Menghilangkan pesan setelah 3 detik
    setTimeout(() => {
        message.classList.add('hidden');
    }, 3000);
    
    return returnMessage; // Mengembalikan pesan
}