document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.querySelector('.toggle-theme');
    const sunIcon = document.querySelector('.sun');
    const moonIcon = document.querySelector('.moon');
    const spanText = document.querySelector('.span-text')
    const btnStudents = document.querySelector('.students')
    const footerBtn = document.querySelector('.footer-container-btn')
    sunIcon.style.fill = '#f5f84d';
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        // Dacă modul light este activat
        if (document.body.classList.contains('light-mode')) {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
            document.body.style.backgroundColor = "#fff"; 
            spanText.style.color ="#545454";
            btnStudents.style.color="#545454";
            footerBtn.style.color ="#545454";
            sunIcon.style.fill = '#f5f84d';
        } else { // Dacă modul dark este activat
            moonIcon.style.display = 'block';
            sunIcon.style.display = 'none';
            document.body.style.backgroundColor = "#000000e6"; 
            document.body.style.color = "#fff";
            spanText.style.color ="#fff";
            btnStudents.style.color="#fff";
            footerBtn.style.color ="#ca2525";
            moonIcon.style.fill = '#5469c7';
        }
    });
});
