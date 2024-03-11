 export function themeRender() {
    const themeToggleBtn = document.querySelector('.toggle-theme');
    const sunIcon = document.querySelector('.sun');
    const moonIcon = document.querySelector('.moon');
    const spanText = document.querySelector('.span-text');
    const btnStudents = document.querySelector('.students');
    const footerBtn = document.querySelector('.footer-container-btn');
    const cardTitle = document.querySelectorAll('.poster-list-title');

    const isLightMode = localStorage.getItem('isLightMode');
    sunIcon.style.fill = '#f5f84d';

    function applyTheme(lightMode) {
        if (lightMode) {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
            document.body.classList.add('light-mode');
            document.body.style.backgroundColor = "#fff"; 
            spanText.style.color ="#545454";
            btnStudents.style.color="#545454";
            footerBtn.style.color ="#545454";
            sunIcon.style.fill = '#f5f84d';
            cardTitle.forEach(title => {
                title.style.color = "#000"
            });
        } else {
            moonIcon.style.display = 'block';
            sunIcon.style.display = 'none';
            document.body.classList.remove('light-mode');
            document.body.style.backgroundColor = "#000000e6"; 
            document.body.style.color = "#fff";
            spanText.style.color ="#fff";
            btnStudents.style.color="#fff";
            footerBtn.style.color ="#ca2525";
            moonIcon.style.fill = '#5469c7';
            cardTitle.forEach(title => {
                title.style.color = "#fff"
            });
        }
    }
    if (isLightMode !== null) {
        applyTheme(isLightMode === 'true');
    }
    themeToggleBtn.addEventListener('click', () => {
        const isLightMode = document.body.classList.toggle('light-mode');
        localStorage.setItem('isLightMode', isLightMode);
        applyTheme(isLightMode);
    });
};
