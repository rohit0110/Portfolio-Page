const navSlide = () =>{  
    console.log("words");
    const toggleButton=document.querySelector('.toggle-button');
    const nav=document.querySelector('.nav-links');
    toggleButton.addEventListener('click',(event)=>{
        nav.classList.toggle('active');
        event.preventDefault()
    });
}

navSlide();
