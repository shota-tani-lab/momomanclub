
window.onload = ()=>{
    const loader = document.getElementById('load');
    loader.classList.add('loaded');
    const content = document.querySelector('.main');
    content.style.visibility = "visible";

    imgreload();
}


function imgreload(){
    // var wall = Math.floor(Math.random() * 2);
	// document.body.background = (wall == 0) ? "img/back.jpg" : "img/moa.png";
    var imglist = new Array(
        "img/akuma.png",
        "img/roll.png",
        "img/moa.png",
        "img/roll.png",
        "img/sumaho.png",
        "img/teitei.png"
        );
    var selectnum = Math.floor(Math.random() * imglist.length);
    //時間で変わる
    
    var imgrand = imglist[selectnum];
    document.body.background = imgrand;
}

setInterval(imgreload, 4000);