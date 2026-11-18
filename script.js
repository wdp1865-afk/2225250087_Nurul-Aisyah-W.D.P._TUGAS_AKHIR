// Logika Kalkulator Prisma Segitiga
document.getElementById('calcBtn').addEventListener('click', function() {
    const a = parseFloat(document.getElementById('sisiA').value);
    const b = parseFloat(document.getElementById('sisiB').value);
    const c = parseFloat(document.getElementById('sisiC').value);
    const tAlas = parseFloat(document.getElementById('tinggiSegitiga').value);
    const tPrisma = parseFloat(document.getElementById('tinggiPrisma').value);
    const resultDiv = document.getElementById('calcResult');

    // Validasi input
    if ([a, b, c, tAlas, tPrisma].some(val => isNaN(val) || val <= 0)) {
        resultDiv.style.color = '#dc2626';
        resultDiv.textContent = 'Mohon isi semua ukuran dengan angka positif yang valid!';
        return;
    }

    // Menghitung Luas Alas (menggunakan sisi 'a' sebagai alas segitiga)
    const luasAlas = 0.5 * a * tAlas;
    const kelilingAlas = a + b + c;

    // Menghitung Volume dan Luas Permukaan
    const volume = luasAlas * tPrisma;
    const luasPermukaan = (2 * luasAlas) + (kelilingAlas * tPrisma);

    resultDiv.style.color = '#0f766e';
    resultDiv.innerHTML = `
        Luas Alas Segitiga = ${luasAlas.toFixed(2)} cm² <br>
        Volume Prisma = ${volume.toFixed(2)} cm³ <br>
        Luas Permukaan Prisma = ${luasPermukaan.toFixed(2)} cm²
    `;
});

// Logika Kuis Interaktif Multi-Soal
const quizContainers = document.querySelectorAll('.quiz-options');

quizContainers.forEach(container => {
    const qNum = container.getAttribute('data-q');
    const feedbackEl = document.getElementById(`fb${qNum}`);
    const buttons = container.querySelectorAll('.quiz-btn');

    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            const isCorrect = this.getAttribute('data-correct') === 'true';
            
            // Tandai tombol yang dipilih
            buttons.forEach(b => b.style.opacity = '0.6');
            this.style.opacity = '1';

            if (isCorrect) {
                feedbackEl.style.color = '#0f766e';
                if (qNum === '1') {
                    feedbackEl.textContent = '✅ Benar! Volume = Luas Alas × Tinggi = 24 × 10 = 240 cm³.';
                } else if (qNum === '2') {
                    feedbackEl.textContent = '✅ Tepat sekali! Sisi tegak prisma segitiga terdiri dari 3 buah persegi panjang.';
                }
            } else {
                feedbackEl.style.color = '#dc2626';
                if (qNum === '1') {
                    feedbackEl.textContent = '❌ Kurang tepat. Ingat rumus Volume = Luas Alas × Tinggi Prisma.';
                } else if (qNum === '2') {
                    feedbackEl.textContent = '❌ Kurang tepat. Alas dan tutup berupa segitiga, sedangkan selimutnya berbentuk 3 persegi panjang.';
                }
            }
        });
    });
});