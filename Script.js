// Surat Cinta
const loveLetter = `Halo Sayang,

Aku ingin menghabiskan setiap detik hidupku bersama kamu. Setiap pagi yang kubangun berpikir tentang senyummu, setiap malam aku tidur dengan perasaan tenang mengetahui bahwa kamu ada di hati saya.

Kamu adalah alasan aku tersenyum, alasan aku berjuang, dan alasan aku percaya bahwa cinta itu nyata.

Terima kasih telah menjadi bagian terpenting dari hidupku.

Selamanya cintamu,
Dengan sepenuh hati ❤️`;

// Kisah Hidup (Edit sesuai kebutuhan)
const lifeStory = `
<p>Hidupku dimulai dengan mimpi sederhana: menemukan orang yang akan membuat setiap hari menjadi istimewa.</p>

<p>Waktu demi waktu berlalu, aku menjalani kehidupan dengan harapan bahwa suatu hari aku akan menemukan seseorang yang benar-benar mengerti jiwaku. Aku menjalani berbagai pengalaman, belajar dari kegagalan, dan berkembang menjadi versi terbaik dari diriku sendiri.</p>

<p>Tapi semuanya berubah ketika aku bertemu denganmu. Tiba-tiba semua yang aku cari selama ini terasa begitu nyata.</p>

<p>Perjalanan kita bersama telah mengajarkan aku arti sebenarnya dari cinta sejati. Bukan hanya tentang kata-kata indah, tetapi tentang kehadiran, kepercayaan, dan komitmen untuk tetap bersama dalam suka dan duka.</p>

<p>Setiap kenangan bersama kamu adalah harta karun yang tak ternilai harganya. Dari tertawa bersama hingga saling mendukung dalam kesulitan, semuanya membuat hidupku lebih bermakna.</p>

<p>Aku ingin kamu tahu bahwa keputusanku untuk bersama kamu adalah keputusan terbaik yang pernah aku buat. Kamu bukan hanya cinta pertamaku, tetapi kamu adalah rumah bagiku.</p>

<p>Masa depan yang aku impikan adalah masa depan bersama kamu, penuh dengan petualangan, tawa, dan cinta yang tak pernah surut.</p>

<p>Aku berjanji untuk selalu ada untukmu, untuk mendengarkan, untuk mendukung, dan untuk mencintai kamu setiap hari selama aku hidup.</p>

<p>Terima kasih telah memilihku. Aku tidak akan pernah mengecewakan kepercayaan itu.</p>

<p>Selamanya cinta untuk kamu... 💕</p>
`;

// Element DOM
const letterText = document.getElementById('letterText');
const acceptBtn = document.getElementById('acceptBtn');
const readingTime = document.getElementById('readingTime');
const progressFill = document.getElementById('progressFill');
const loveLatterSection = document.getElementById('loveLetter');
const storySection = document.getElementById('storySection');
const storyContent = document.getElementById('storyContent');
const backBtn = document.getElementById('backBtn');

// Variables
let letterIndex = 0;
const letterDuration = 5000; // 5 detik
let isReadingComplete = false;

// Tampilkan surat cinta huruf per huruf
function displayLetter() {
    if (letterIndex < loveLetter.length) {
        letterText.textContent = loveLetter.substring(0, letterIndex + 1);
        letterIndex++;
        
        // Update progress bar
        const progress = (letterIndex / loveLetter.length) * 100;
        progressFill.style.width = progress + '%';
        
        setTimeout(displayLetter, 30); // Kecepatan ketikan
    } else {
        // Surat sudah selesai dibaca
        isReadingComplete = true;
        acceptBtn.disabled = false;
        readingTime.textContent = '✅ Terima kasih telah membaca surat ini!';
        readingTime.style.color = '#667eea';
    }
}

// Hitung mundur sebelum tombol aktif
function startCountdown() {
    let timeLeft = letterDuration / 1000; // Konversi ke detik
    
    const countdownInterval = setInterval(() => {
        if (timeLeft > 0) {
            readingTime.textContent = `Mohon tunggu ${timeLeft} detik sebelum menerima...`;
            timeLeft--;
        } else {
            clearInterval(countdownInterval);
        }
    }, 1000);
}

// Ketika tombol terima diklik
acceptBtn.addEventListener('click', function() {
    if (isReadingComplete) {
        loveLatterSection.style.display = 'none';
        storySection.style.display = 'block';
        storyContent.innerHTML = lifeStory;
    }
});

// Tombol kembali
backBtn.addEventListener('click', function() {
    storySection.style.display = 'none';
    loveLatterSection.style.display = 'block';
});

// Inisialisasi
window.addEventListener('load', function() {
    displayLetter();
    startCountdown();
});

// Cegah skip/kembali halaman
window.addEventListener('beforeunload', function(e) {
    if (!isReadingComplete) {
        e.preventDefault();
        e.returnValue = '';
        return '';
    }
});
