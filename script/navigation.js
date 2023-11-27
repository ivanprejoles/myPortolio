const pageBlocks = document.querySelectorAll('#navigation li a[href^="#"]').forEach(navigation => {
    navigation.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if(targetElement){
            // targetElement.scrollIntoView({ behavior: 'smooth' });
            window.scrollTo({
                top: targetElement.offsetTop - 60,
                behavior: 'smooth'
            })
        }
    })
});
