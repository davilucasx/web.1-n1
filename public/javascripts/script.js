function login(){
    window.location.href = 'login';
}

function entrar(){
    window.location.href = 'album';
}

function getAlbumParam() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('album');
    
}

// Mapeie os IDs dos álbuns para as URLs das imagens correspondentes
const album = {
    'album1': {
      image: './images/tyler.png',
      songs: ['/musicas/see you again.mp3'],
    },
    'album2': {
      image: 'images/am.png',
      songs: ['musicas/mardy bum.mp3'],
    },
    'album3': {
        image: 'images/tame.png',
        songs: ['musicas/tame.mp3'],
      },
      'album4': {
        image: 'images/thestrokes.png',
        songs: ['musicas/the adults are talking.mp3'],
      },
      'album5': {
        image: 'images/ye.png',
        songs: ['musicas/i wonder.mp3'],
      },
      'album6': {
        image: 'images/coldplay.png',
        songs: ['musicas/coldplay.mp3'],
      },
      'album7': {
        image: 'images/kendric.png',
        songs: ['musicas/money trees.mp3'],
      },
      'album8': {
        image: 'images/sza.png',
        songs: ['musicas/snooze.mp3'],
      },
    // Adicione mais álbuns e músicas conforme necessário
  };

// Obtenha o valor do parâmetro 'album' da URL
const albumSelecionado = getAlbumParam();

// Obtenha a referência à div da imagem do álbum
const albumImage = document.getElementById('imgPlayer');

// Verifique se o ID do álbum existe em nosso mapeamento
if (albumSelecionado in album) {
    const albumData = album[albumSelecionado];
    // Atualize a imagem do álbum com a URL correspondente
    albumImage.innerHTML = `<img src="${albumData.image}" alt="capa">`;
    playMusic(albumSelecionado, 0);
} else {
    albumImage.innerHTML = 'erro';
}

function playMusic(albumId, songIndex) {
    const albumData = album[albumId];
  
    if (!albumData) {
      console.log('Álbum não encontrado');
      return;
    }
  
    const audioPlayer = document.getElementById('audioPlayer');
  
    if (songIndex >= 0 && songIndex < albumData.songs.length) {
      const musicUrl = albumData.songs[songIndex];
      audioPlayer.src = musicUrl;
      audioPlayer.play();
    } else {
      console.log('Índice de música inválido');
    }
  }
  
  // Exemplo de uso da função playMusic
  playMusic('albumSelecionado', 0);

  