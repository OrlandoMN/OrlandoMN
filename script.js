document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('.project');
    const modal = document.getElementById('project-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalTools = document.getElementById('modal-tools');
    const closeButton = document.querySelector('.close-button');
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    projects.forEach(project => {
        project.addEventListener('click', () => {
            modalImg.src = project.querySelector('img').src;
            modalTitle.textContent = project.dataset.title;
            modalDescription.textContent = project.dataset.description;
            modalTools.innerHTML = '';
            const tools = project.dataset.tools.split(',').map(tool => tool.trim());
            tools.forEach(tool => {
                const li = document.createElement('li');
                li.textContent = tool;
                modalTools.appendChild(li);
            });
            modal.style.display = 'flex';
        });
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});
