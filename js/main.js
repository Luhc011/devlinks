const theme = document.querySelector('#switch')

theme.addEventListener('click', toggleMode)

function toggleMode() {
    const html = document.documentElement
    const switchImg = document.querySelector('#profile img')
    html.classList.toggle('light')

    if(html.classList.contains('light')) {
        switchImg.setAttribute('src', './assets/avatar-light.png')
    } else {
        switchImg.setAttribute('src', './assets/avatar.png')
    }
}