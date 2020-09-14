import string from './css'

const player = {
    id:undefined,
    time:100,
    ui:{
        code: document.querySelector('#code'),
        writeStyle: document.querySelector('#writeStyle')
    },
    events:{
        '#btnPause':'pause',
        '#btnPlay':'play',
        '#btnSlow': 'slow',
        '#btnNormal':'normal',
        '#btnFast':'fast'
    },
    n:1,
    init: ()=>{
        player.ui.code.innerText = string.substr(0, player.n);
        player.ui.writeStyle.innerText = string.substr(0,player.n);
        player.bindEvents();
        player.play();
    },
    bindEvents:() => {
        for(let key in player.events){
            if(player.events.hasOwnProperty(key)) {
                const value = player.events[key];
                document.querySelector(key).onclick = player[value];
            }
        }
    },
    run: () => {
        player.n += 1;
        if(player.n > string.length){
            window.clearInterval(player.id)
            return 
        }
        player.ui.code.innerText = string.substr(0,player.n);
        player.ui.code.scrollTop = player.ui.code.scrollHeight;
        player.ui.writeStyle.innerHTML = string.substr(0,player.n);
    },
    play: () => {
        player.id = setInterval(player.run, player.time);
    },
    pause: () => {
        window.clearInterval(player.id);
    },
    slow: () => {
        player.pause();
        player.time = 300;
        player.play();
    },
    normal: () => {
        player.pause();
        player.time = 100;
        player.play();
    },
    fast: () => {
        player.pause();
        player.time = 0;
        player.play();
    }
    
}

player.init()

