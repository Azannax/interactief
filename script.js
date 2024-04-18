const frontendSection = document.getElementById('frontend');
const backendSection = document.getElementById('backend');

frontendSection.addEventListener('click', () => {
    frontendSection.classList.add('active');
    backendSection.classList.remove('active');
});

backendSection.addEventListener('click', () => {
    backendSection.classList.add('active');
    frontendSection.classList.remove('active');
});
