function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      }
    });
  }
  function initObserver(){
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  for (let elm of elements) {
    observer.observe(elm);
  }
  }

  function showAll(a){
    console.log(a);
    var divs = document.getElementsByClassName('element-appearance');
    for (let i=0; i<divs.length; i++){
        divs[i].classList.remove('element-appearance');
    }
    let unSwow = document.getElementById('reset');
    unSwow.classList.add('hidden');
  }
