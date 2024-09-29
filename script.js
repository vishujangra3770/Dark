// Simple toggle for dark/light mode
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Dark Mode';
document.body.prepend(toggleButton);

toggleButton.addEventListener('click', () => 
{
    document.body.classList.toggle('dark-mode');
});
