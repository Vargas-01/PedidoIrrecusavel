const img = document.getElementById('img')
const nao = document.getElementById('nao')
const sim = document.getElementById('sim')
const res = document.getElementById('res')
const voltar = document.getElementById('voltar')
const gatoTriste1 = './img/gato1.png'
const gatoTriste2 = './img/gato2.jpg'
const gatoTriste3 = './img/gato3.jpg'
const CapivaraTriste1 = './img/Sadcapivara.png'
const pandaSad = './img/PandaSad.jpg'
const Gato4 = './img/gatoTriste4.jpg'
const euMando = './img/EuMando.jpg'
let fotoAtual = 0
voltar.style.display = 'none'

sim.addEventListener('click', ()=>{
    sim.style.display = 'none'
    nao.style.display = 'none'
    voltar.style.display = 'block'
    res.innerHTML = 'Sempre Soube 😘🥰'
    img.src = './img/gato fofo.jpg'
})
voltar.addEventListener( 'click', () => {
    img.src = ''
    voltar.style.display = 'none'
    sim.style.display = 'block'
    nao.style.display = 'block'
    sim.style.transform = 'scale(1.1)'
    res.innerHTML = 'Errou a decisão ou o que??😡'
})
nao.addEventListener('click', ()=>{
    if(fotoAtual == 0){
        res.innerHTML = 'Pensa Bem!'
        img.src = gatoTriste1
        sim.style.transform += 'scale(1.1)';
        fotoAtual++
    }else if(fotoAtual == 1){
        res.innerHTML = 'É isso msm?😡'
        img.src = gatoTriste2
        sim.style.transform += 'scale(1.1)';
        fotoAtual++
    }else if(fotoAtual == 2){
        res.innerHTML = 'Mais uma vez,Quer casar cmg?💔'
        img.src = gatoTriste3
        sim.style.transform += 'scale(1.1)';
        fotoAtual++
    }else if(fotoAtual == 3){
        res.innerHTML = 'Bom saber Rhaiana!!'
        img.src = CapivaraTriste1
        sim.style.transform += 'scale(1.1)';
        fotoAtual++
    }else if(fotoAtual == 4){
        res.innerHTML = 'Deixa então 👍'
        sim.style.transform += 'scale(1.1)';
        img.src = Gato4
        fotoAtual++
    }else if(fotoAtual == 5){
        res.innerHTML = '👍👍👍👍'
        img.src = pandaSad
        sim.style.transform += 'scale(1.1)';
        fotoAtual++
    }else{
        res.innerHTML = 'Pode aceitar eu que mando!!!'
        img.src = euMando
        sim.style.transform += 'scale(1.1)';
        fotoAtual = 0
    }
})