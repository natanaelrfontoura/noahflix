// Efeito de rolagem no header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = '#141414';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

// Carrossel interativo
document.querySelectorAll('.carousel').forEach(carousel => {
    let isDown = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
        carousel.style.cursor = 'grabbing';
    });

    carousel.addEventListener('mouseleave', () => {
        isDown = false;
        carousel.style.cursor = 'grab';
    });

    carousel.addEventListener('mouseup', () => {
        isDown = false;
        carousel.style.cursor = 'grab';
    });

    carousel.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2;
        carousel.scrollLeft = scrollLeft - walk;
    });
});

// Pesquisa
const searchInput = document.querySelector('.search-box input');
searchInput.addEventListener('focus', () => {
    document.querySelector('.search-box').style.border = '1px solid #fff';
});

searchInput.addEventListener('blur', () => {
    document.querySelector('.search-box').style.border = '1px solid transparent';
});

// Simular clique nos cards
document.querySelectorAll('.show-card').forEach(card => {
    card.addEventListener('click', function() {
        const title = this.querySelector('h3').textContent;
        alert(`Você selecionou: ${title}\n(Esta é uma demonstração - em um site real, isso abriria o player)`);
    });
});


// background do nav
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const mainNav = document.querySelector('.main-nav');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 100) {
        header.classList.add('scrolled');
        mainNav.style.backgroundColor = 'transparent'; // Garante que o nav não tenha fundo próprio
    } else {
        header.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Botões Play
    const playButtons = document.querySelectorAll('.actions button');
    
    // Modal
    const modal = document.getElementById('videoModal');
    const closeBtn = document.querySelector('.close-modal');
    const videoFrame = document.getElementById('videoFrame');
    
    // URL do vídeo do YouTube (substitua pelo seu vídeo)
    const youtubeUrl = "https://www.youtube.com/embed/5IRl-R73n3k?autoplay=1";
    
    // Abrir modal ao clicar em qualquer botão Play
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            modal.style.display = "block";
            videoFrame.src = youtubeUrl;
        });
    });
    
    // Fechar modal
    closeBtn.addEventListener('click', function() {
        modal.style.display = "none";
        videoFrame.src = ""; // Para parar o vídeo
    });
    
    // Fechar ao clicar fora do vídeo
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            videoFrame.src = "";
        }
    });
});