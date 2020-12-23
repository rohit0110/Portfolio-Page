const navSlide = () =>{  
    console.log("words");
    const toggleButton=document.querySelector('.toggle-button');
    const nav=document.querySelector('.nav-links');
    toggleButton.addEventListener('click',()=>{
        nav.classList.toggle('active');
    });
}

navSlide();
