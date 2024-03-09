document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.querySelector('.toggle-theme');
    const sunIcon = document.querySelector('.sun');
    const moonIcon = document.querySelector('.moon');
    sunIcon.style.fill = '#f5f84d';
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        // Dacă modul light este activat
        if (document.body.classList.contains('light-mode')) {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
            document.body.style.backgroundColor = "#fff"; 
            sunIcon.style.fill = '#f5f84d';
        } else { // Dacă modul dark este activat
            moonIcon.style.display = 'block';
            sunIcon.style.display = 'none';
            document.body.style.backgroundColor = "#000000e6"; 
            moonIcon.style.fill = '#5469c7';
        }
    });
});
