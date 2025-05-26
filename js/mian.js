let offcanvas = document.querySelector(".offcanvas")
let NavLinsk = document.querySelectorAll(".offcanvas-body a")
let = Close = document.querySelector('.close-btn')
let btn_UP = document.querySelector('.button_Up')
// Close Nav Bar
NavLinsk.forEach((ele) => {
    ele.addEventListener('click', () => {
        Close.click()
    })
})

// Check Window > 900
window.addEventListener('scroll', () => {
    if (window.scrollY >= 900) {
        btn_UP.style.right = '35px'
    }
    else {
        btn_UP.style.right = '-90px'
    }

})
// Click buton To Scroll UP
btn_UP.addEventListener('click', (e) => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})
// Document Load //
window.addEventListener('DOMContentLoaded', () => {
    if (window.scrollY >= 900) {
        btn_UP.style.right = '35px'
    }
    else {
        btn_UP.style.right = '-90px'
    }
})



//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', (req, res) => {
    console.log(req);
    
});