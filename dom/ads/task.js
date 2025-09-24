document.querySelectorAll('.rotator').forEach(rotator => {
    const cases = rotator.querySelectorAll('.rotator__case');
    let currentIndex = 0;

    function changeCase() {
        const currentCase = cases[currentIndex];
        const speed = parseInt(currentCase.getAttribute('data-speed'), 10);
        const color = currentCase.getAttribute('data-color');

        currentCase.style.color = color;

        currentCase.classList.remove('rotator__case_active');

        currentIndex = (currentIndex + 1) % cases.length;

        const nextCase = cases[currentIndex];

        nextCase.classList.add('rotator__case_active');

        
        setTimeout(changeCase, speed);
    }

    
    changeCase();
});
