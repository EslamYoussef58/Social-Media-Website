const menuitem = document.querySelectorAll(".menu-item");
const messagesNotifications = document.getElementById("Messages-Notification");
const messages = document.querySelector(".messages");
const Message = document.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search"); 
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll(".choose-size span");
var root = document.querySelector(":root");
const colorPalette = document.querySelectorAll(".choose-color span")
const bg1 = document.querySelector(".bg-1");
const bg2 = document.querySelector(".bg-2");
const bg3 = document.querySelector(".bg-3");

//remove active
const chagneActiveItem = () =>{
    menuitem.forEach(item =>{
        item.classList.remove("active")
    })
}


menuitem.forEach(item =>{
    item.addEventListener("click", ()=>{
        chagneActiveItem()
        item.classList.add("active")
        if(item.id != "Notifications"){
            document.querySelector(".notifications-popup")
            .style.display = "none"
        }else{
            document.querySelector(".notifications-popup").
            style.display = "block";
            document.querySelector("#Notifications .Notification-count").style.display = "none"
        }
    })
})
//=======================


//================messages===========
//search chats
const searchMessage = () =>{
    const val = messageSearch.value.toLowerCase();
    Message.forEach(chat => {
        let name = chat.querySelector("h5").textContent.toLocaleLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = "flex";
        }else{
            chat.style.display = "none"
        }
    })
}


messageSearch.addEventListener("keyup", searchMessage);


messagesNotifications.addEventListener("click", () =>{
    messages.style.boxShadow = "0 0 1rem var(--color-primary)"
    messagesNotifications.querySelector(".Notification-count").style.display ="none"
    setTimeout(() =>{
        messages.style.boxShadow = "none";
    }, 2000)
})

//=======theme=========

//open modal
const openThemeModal = () =>{
    themeModal.style.display = "grid";
}

//close modal
const closeThemeModal = (e) =>{
    if(e.target.classList.contains("customize-theme")){
        themeModal.style.display = "none";
    }
}


themeModal.addEventListener("click", closeThemeModal);

theme.addEventListener("click", openThemeModal);

//remove active class from span
const removeSizeSelector = () =>{
    fontSizes.forEach(size =>{
        size.classList.remove("active")
    })
}

//========= FONTS ========

fontSizes.forEach(size =>{
    size.addEventListener("click", () =>{
        removeSizeSelector();
        let fontSizes;
        size.classList.toggle("active")

        if(size.classList.contains("font-size-1")){
            fontSizes = "10px";
            root.style.setProperty("--sticky-top-left", "5.4rem");
            root.style.setProperty("--sticky-top-right", "5.4rem");

        }else if(size.classList.contains("font-size-2")){
            fontSizes = "13px";
            root.style.setProperty("--sticky-top-left", "5.4rem");
            root.style.setProperty("--sticky-top-right", "-7rem");

        }else if(size.classList.contains("font-size-3")){
            fontSizes = "16px";
            root.style.setProperty("--sticky-top-left", "-2rem");
            root.style.setProperty("--sticky-top-right", "-17rem");

        }else if(size.classList.contains("font-size-4")){
            fontSizes = "19px";
            root.style.setProperty("--sticky-top-left", "-5rem");
            root.style.setProperty("--sticky-top-right", "-25rem");

        }else if(size.classList.contains("font-size-5")){
            fontSizes = "22px";
            root.style.setProperty("--sticky-top-left", "-12rem");
            root.style.setProperty("--sticky-top-right", "-35rem");
        }
        document.querySelector("html").style.fontSizes = fontSizes;
    })

})


//remove active

const changeActivecolor = () =>{
    colorPalette.forEach(colorPicker =>{
        colorPicker.classList.remove("active")
    })
}

// change primary colors

colorPalette.forEach(color =>{
    color.addEventListener("click", () =>{
        let primary;
        changeActivecolor();

        if(color.classList.contains("color-1")){
            primaryHue = 252;
        }else if(color.classList.contains("color-2")){
            primaryHue = 52;
        }else if(color.classList.contains("color-3")){
            primaryHue = 352;
        }else if(color.classList.contains("color-4")){
            primaryHue = 152;
        }else if(color.classList.contains("color-5")){
            primaryHue = 202;
        }
        color.classList.add("active")
        

        root.style.setProperty("--primary-color-hue", primaryHue)
    })
})


//============ bg ===========

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

//change bg color
const changeBG = () =>{
    root.style.setProperty("--light-color-lightness", lightColorLightness);
    root.style.setProperty("--white-color-lightness", whiteColorLightness);
    root.style.setProperty("--dark-color-lightness", darkColorLightness);
}
bg1.addEventListener("click", () =>{
    bg1.classList.add("active");
    //remove
    bg2.classList.remove("active");
    bg3.classList.remove("active");
    //remove customized 
    window.location.reload();
})




bg2.addEventListener("click", () =>{
    darkColorLightness = "95%";
    whiteColorLightness = "20%";
    lightColorLightness = "15%"

    //add active class

    bg2.classList.add("active");
    //remove active
    bg1.classList.remove("active");
    bg3.classList.remove("active");
    changeBG();
})

bg3.addEventListener("click", () =>{
    darkColorLightness = "95%";
    whiteColorLightness = "10%";
    lightColorLightness = "0%"

    bg3.classList.add("active");

    //remove active
    bg1.classList.remove("active");
    bg2.classList.remove("active");
    changeBG();
})