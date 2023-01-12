window.onload = function (){
    console.log("hi")

    titleEvt()

    aboutEvt()
}

function titleEvt(){
    const whiteP1 = document.querySelector(".main_white_p1")
    const whiteP2 = document.querySelector(".main_white_p2")
    const whiteP3 = document.querySelector(".main_white_p3")

    document.querySelector(".main_back").classList.add("on")

    setTimeout(function (){
        whiteP1.classList.add("on")
    }, 200)

    setTimeout(function (){
        whiteP2.classList.add("on")
    }, 400)

    setTimeout(function (){
        whiteP3.classList.add("on")
    }, 700)

    setTimeout(function (){
        document.querySelector(".main_back_border").classList.add("on")
    }, 700)

}

function aboutEvt(){
    const contents = document.querySelectorAll(".about_content")
    let time = 0

    for (let i=0; i<contents.length; i++){
        setTimeout(function (){
            console.log("Hhhh")
            contents[i].classList.add("on")
        },500 + i*150)
    }
    // document.querySelector(".about_content").classList.add("on")
}