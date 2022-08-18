function showAbout(entry) {
    entry.forEach(change => {
        let div = document.getElementById('aboutProg');
        if (change.isIntersecting) {
            div.classList.remove('progressHidden');
        }
        else {
            div.classList.add('progressHidden');
        }
    });
}
function showPortfolio(entry){
    entry.forEach(change => {
        let div = document.getElementById('potfolioProg');
        if (change.isIntersecting) {
            div.classList.remove('progressHidden');          
        }
        else {
            div.classList.add('progressHidden');
        }
    });
}   
function showBlog(entry) {
    entry.forEach(change => {
        let div = document.getElementById('blogProg');
        if (change.isIntersecting) {
            div.classList.remove('progressHidden');
        }
        else {div.classList.add('progressHidden');
    }
    })
}
function showContact(entry) {
    entry.forEach(change => {
        let div = document.getElementById('contactProg');
        if (change.isIntersecting) {   
            div.classList.remove('progressHidden');
        }
        else {div.classList.add('progressHidden');
    }
    })
    
}

function initProgressAbout(){
let options = { threshold: [0] };
let observer = new IntersectionObserver(showAbout, options);
let element = document.getElementById('about');
console.log(element);
observer.observe(element);
}

function initProgressPortfolio(){
    let options = { threshold: [0] };
    let observer = new IntersectionObserver(showPortfolio, options);
    let element = document.getElementById('portfolio');
    console.log(element);
      observer.observe(element);
    }

function initProgresBlog(){
    let options = { threshold: [0] };
    let observer = new IntersectionObserver(showContact, options);
    let element = document.getElementById('blog');
    observer.observe(element);
    }

function initProgressContact(){
    let options = { threshold: [0] };
    let observer = new IntersectionObserver(showBlog, options);
    let element = document.getElementById('contact');
    observer.observe(element);
    }
