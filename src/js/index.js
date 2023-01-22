const modal = document.querySelector('.modal')
const botaoTrailer = document.querySelector('.botao-trailer')
const botaoFecharModal = document.querySelector('.fechar-modal')
const video = document.getElementById('video')
const linkVideo = video.src

function alternarModal() {
    modal.classList.toggle('aberto')
}

botaoTrailer.addEventListener('click', () => {
    alternarModal()
    video.setAttribute('src', linkVideo)
    
} )

botaoFecharModal.addEventListener('click', ()=> {
    alternarModal()
    video.setAttribute('src', '')
})

