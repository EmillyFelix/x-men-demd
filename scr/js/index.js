// esse é umcomentário

const personagens = document.querySelectorAll('.personagem');


// passo 2 - adicionar a classe selecioado no personagem que o usuário passar o cursor do mouse
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        // passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');
        personagem.classList.add('selecionado');

        // objvo 2 - qnd passar o ome em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande

        //passo 1 - pegar o elemnento do personagem pra adicionar as info nele.
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');

        //passo 2 - alterar a imagem do p. grande
        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `./scr/imagens/imagens/card-${idPersonagem}.png`;

        //passo 3 - alterar o nome do p grande
        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        //passo4- alterar a descrição do personagem
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');

    })
})
