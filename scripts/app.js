const navSlide = () =>{  
    console.log("words");
    const toggleButton=document.querySelector('toggle-button')[0];
    const nav=document.querySelector('nav-links')[0];
    toggleButton.addEventListener('click',()=>{
        nav.classList.toggle('active');
    });
}

navSlide();
