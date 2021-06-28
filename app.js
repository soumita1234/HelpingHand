var btn = $('#button');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '300');
});

AOS.init();


// Contact : PNG illustration
let el = document.querySelector('.avatar')

el.addEventListener('mousemove', (e) => {
    let thisPX = el.getBoundingClientRect().left
    let thisPY = el.getBoundingClientRect().top
    let boxWidth = el.getBoundingClientRect().width
    let boxHeight = el.getBoundingClientRect().height
    let scrollTop = document.documentElement.scrollTop + document.body.scrollTop

    let mouseX = e.pageX - thisPX
    let mouseY = e.pageY - scrollTop - thisPY
    let X
    let Y

    X = mouseX - boxWidth / 2
    Y = boxHeight / 2 - mouseY

    el.style.transform = `perspective(300px) rotateY(${X / 10}deg) rotateX(${Y / 10}deg)`
    el.style.boxShadow = `${-X / 20}px ${Y / 20}px 50px rgba(0, 0, 0, 0.3)`
        })


el.addEventListener('mouseleave', () => {
    el.style.transform = `perspective(300px) rotateY(0deg) rotateX(0deg`
    el.style.boxShadow = ''
})