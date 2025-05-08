function toggleMode() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
  }

function changeCharacter(src) {
    document.getElementById("mainCharacter").src = src;
  }
  
  const mainImage = document.getElementById('mainCharacter');
  const thumbnails = document.querySelectorAll('.character-selector img');
  
  thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
      // Tambahkan efek fade out
      mainImage.classList.add('hide');
  
      // Setelah animasi selesai, ganti src lalu fade in
      setTimeout(() => {
        mainImage.src = thumb.src;
        mainImage.classList.remove('hide');
      }, 300); // sesuaikan dengan waktu di CSS
    });
  });
  