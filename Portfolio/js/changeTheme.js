function changeTheme(){
    let div = document.getElementById('changeAbout');
    let changer1 = document.getElementById('changeMenu');
    let changerH1= document.getElementById('changeH1');
    let changerForm= document.getElementById('changeForm');
    let changerH3= document.getElementById('changeH3');
    if (div.classList.contains('lightTheme')) {
        div.classList.remove('lightTheme');
        changer1.classList.remove('lightThemeColor');
        changerH1.classList.remove('lightThemeColor');
        changerForm.classList.remove('inputColor');
        changerH3.classList.remove('lightThemeColor');
    }
    else{
    div.classList.add('lightTheme');
    changer1.classList.add('lightThemeColor');
    changerH1.classList.add('lightThemeColor');
    changerForm.classList.add('inputColor');
    changerH3.classList.add('lightThemeColor');
    }

    let div2 = document.getElementById('changeSlider');
    if (div2.classList.contains('lightTheme')) {
        div2.classList.remove('lightTheme');
    }
    else{
    div2.classList.add('lightTheme');
    }

    let div3 = document.getElementById('changeHeader');
    if (div3.classList.contains('lightTheme')) {
        div3.classList.remove('lightTheme');
    }
    else{
    div3.classList.add('lightTheme');
    }

    let div4 = document.getElementById('changePortfolio');
    if (div4.classList.contains('lightTheme')) {
        div4.classList.remove('lightTheme');
    }
    else{
    div4.classList.add('lightTheme');
    }

    let div5 = document.getElementById('changeBlog');
    if (div5.classList.contains('lightTheme')) {
        div5.classList.remove('lightTheme');
    }
    else{
    div5.classList.add('lightTheme');
    }

    let div6 = document.getElementById('changeContact');
    if (div6.classList.contains('lightTheme')) {
        div6.classList.remove('lightTheme');
    }
    else{
    div6.classList.add('lightTheme');
    }

    let div7 = document.getElementById('changeFooter');
    if (div7.classList.contains('lightTheme')) {
        div7.classList.remove('lightTheme');
    }
    else{
    div7.classList.add('lightTheme');
    }

    let div8 = document.getElementById('changeDivider');
    if (div8.classList.contains('dividerWhite')) {
        div8.classList.remove('dividerWhite');
        div8.classList.add('dividerBlack');
    }
    else{
        div8.classList.remove('dividerBlack');
        div8.classList.add('dividerWhite');

    }
}



