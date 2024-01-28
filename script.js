document.addEventListener('DOMContentLoaded',function () {
    const menuBtn = document.querySelector('.menu-btn');
    const sidebar = document.querySelector('.sidebar');
    const close = document.querySelector('.close-btn');
    const sub_toggle = document.querySelectorAll('.sub-btn');

    // menu button
    menuBtn.addEventListener('click' , ()=>{
        sidebar.classList.add('active');
        menuBtn.style.visibility = 'hidden';
    });
    //close button 
    close.addEventListener('click',()=>{
        sidebar.classList.remove('active')
        menuBtn.style.visibility = 'visible'
    });


    sub_toggle.forEach((btn)=>{
        btn.addEventListener("click",function(e){
            e.preventDefault();

            const container = document.getElementById(this.dataset.container);

            if(!container.classList.contains("active")){
                //add rotate to arrow
                this.querySelector(".dropdown").classList.add("rotate")
                //add active to sub menu
                container.classList.add("active");
                container.style.height = "auto";
                const height = container.clientHeight + "px";
                container.style.height = "0px";
                setTimeout(function(){
                    container.style.height = height;
                },0);
            }else{
                //remove active from sub move
                this.querySelector(".dropdown").classList.remove("rotate")
                container.style.height = "0px";
                container.addEventListener("transitionend",function(){
                    container.classList.remove("active");
                },{
                    once:true
                });

            }
        })
    })



});