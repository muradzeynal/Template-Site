const navMenu=document.querySelector(".nav-menu")
const menu =document.querySelector("#header .header-middle")

navMenu.addEventListener("click",function(){
    menu.classList.toggle("menu-active")
})

const header=document.getElementById("header")
window.onscroll=function(){
    if(this.scrollY>100){
        header.classList.add("header-active")
    }
    else{
        header.classList.remove("header-active")
    }
}

//scrollTop***********
$(window).on("scroll",function(){
    if($(window).scrollTop()>50){
        $(".isShowBtn").addClass("bottom-active")
    }
    else {
        $(".isShowBtn").removeClass("bottom-active")
    }
}) 
$(".isShowBtn").click(function(){
    toTop();
})
function toTop(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
}
