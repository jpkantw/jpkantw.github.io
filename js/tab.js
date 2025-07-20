document.addEventListener('scroll', () => {
    const navbar = document.querySelector('navbar');
    
    if (window.scrollY > 0){
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
})




// const nav = document.querySelector('.sticky');

// window.addEventListener('scroll', () =>{
//     if (window.scrollY >= 0) {
//         nav.classList.add('scrolled');
//     } else {
//         nav.classList.remove('scrolled');
//     }
// });

// window.addEventListener('scroll', () =>{
//     if (window.scrollY >= 450) {
//         header.classList.add('scrolled');
//     } else if (window.scrollY <= 400) {
//         header.classList.remove('scrolled');
//     }
// });



var tabs = document.querySelectorAll(".tabs_header ul li");
var tabs_info = document.querySelectorAll(".tabs_info");


tabs.forEach(function(tab, tab_index){
    tab.addEventListener("click", function(){
        tabs.forEach(function(tab){
            tab.classList.remove("active");
            })
            tab.classList.add("active");

            tabs_info.forEach(function(info, info_index){
                if(info_index == tab_index){
                    info.style.display = "block";
                }
                else{
                    info.style.display = "none";
                }
        });
    })
});