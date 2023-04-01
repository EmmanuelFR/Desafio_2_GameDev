const sonic = document.querySelector('.sonic');
const crab = document.querySelector('.crab');


const pulo = () => {
    sonic.classList.add('pulo');
    setTimeout(()=>{ sonic.classList.remove('pulo')},800);
}

document.addEventListener('keydown', pulo);

const loop = setInterval(()=>{
    const crabPosition = crab.offsetLeft;
    const crabH = +window.getComputedStyle(sonic).bottom.replace('px','');
    if(crabPosition <=200 && crabPosition >0 && crabH<=300 ){
        crab.style.animation = 'none';
        crab.style.left = '200px';
        clearInterval(loop);
    }

},10);