const hayirBtn = document.getElementById("hayirBtn");
const evetBtn = document.getElementById("evetBtn");
const baslik = document.getElementById("baslik");
const gifImg = document.getElementById("gifImg");
const moveRandom = document.getElementById("move-random");

// Esprili mesaj dizisi (Hayır dedikçe değişecek)
const mesajlar = [
  "Emin misin? 🥺",
  "Beni gerçekten sevmiyor musun? 😭",
  "Şaka yapıyorsun herhalde? 💔",
  "Lütfen, biliyorsun ki seviyorsun! 🙏",
  "İnat etme, 'Evet'e basacaksın zaten! 🥰",
  "Son şansın, kalbimi kırıyorsun! 💘"
];

let tiklamaSayisi = 0;

// index.html: Hayır butonu kaçma + no1.html'e ilerleme
if (hayirBtn && evetBtn && baslik) {
  // Hayır butonuna tıklandığında veya fare yaklaşınca kaçması için
  function kacanButonuHareketEttir() {
    // Mesajlar bittiyse artık kaçmasın, tıklayınca no1.html'e gitsin
    if (tiklamaSayisi >= mesajlar.length) {
      return;
    }

    // Rastgele X ve Y koordinatları üret
    const x = Math.random() * (window.innerWidth - hayirBtn.offsetWidth - 100);
    const y = Math.random() * (window.innerHeight - hayirBtn.offsetHeight - 100);

    hayirBtn.style.position = "fixed";
    hayirBtn.style.left = `${x}px`;
    hayirBtn.style.top = `${y}px`;

    baslik.innerText = mesajlar[tiklamaSayisi];
    tiklamaSayisi++;

    // Evet butonunu her adımda biraz daha büyüt
    let mevcutBoyut = window.getComputedStyle(evetBtn).fontSize;
    evetBtn.style.fontSize = `calc(${mevcutBoyut} + 2px)`;

    let mevcutPaddingV = parseFloat(window.getComputedStyle(evetBtn).paddingTop);
    let mevcutPaddingH = parseFloat(window.getComputedStyle(evetBtn).paddingLeft);
    evetBtn.style.padding = `${mevcutPaddingV + 2}px ${mevcutPaddingH + 4}px`;
  }

  function hayirButonunaBasildi() {
    if (tiklamaSayisi >= mesajlar.length) {
      // Tüm mesajlar gösterildiyse no1.html'e geç
      window.location.href = "no1.html";
      return;
    }
    kacanButonuHareketEttir();
  }

  // Hem tıklamada hem de fare yaklaşınca kaçması için
  hayirBtn.addEventListener("mouseover", kacanButonuHareketEttir);
  hayirBtn.addEventListener("click", hayirButonunaBasildi);

  // Evet butonuna basıldığında kutlama ekranına geçiş
  evetBtn.addEventListener("click", () => {
    window.location.href = "evet.html";
  });
}

// no4.html: Hayır linki kaçıp kaybolsun
if (moveRandom) {
  let kacisSayisi = 0;

  function kacVeKaybol() {
    kacisSayisi++;

    if (kacisSayisi >= 5) {
      // Yeterince kaçtı, artık ortadan kaybolsun
      moveRandom.style.display = "none";
      const baslik = document.querySelector("h1");
      if (baslik) {
        baslik.innerText = "Artık kaçamazsın! 💖";
      }
      return;
    }

    const x = Math.random() * (window.innerWidth - moveRandom.offsetWidth - 100);
    const y = Math.random() * (window.innerHeight - moveRandom.offsetHeight - 100);

    moveRandom.style.position = "fixed";
    moveRandom.style.left = `${x}px`;
    moveRandom.style.top = `${y}px`;
    moveRandom.style.zIndex = "9999";
  }

  moveRandom.addEventListener("mouseover", kacVeKaybol);
  moveRandom.addEventListener("click", (e) => {
    e.preventDefault();
    kacVeKaybol();
  });
}
