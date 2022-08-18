function spiner(){
    let div = document.getElementById('spinner');
    div.classList.add('hidden');
    var div2 = document.getElementById('main'); 
    div2.classList.remove('hidden');
}

setTimeout(spiner, 100);
