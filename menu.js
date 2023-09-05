// Captura os elementos relevantes
const statusMenuItems = document.querySelectorAll('.status-menu-item');
const statusMenuItem = document.getElementById('status-menu-item');

// Adiciona um ouvinte de eventos de clique a cada item do menu
statusMenuItems.forEach(function(item) {
  item.addEventListener('click', function(event) {
    // Impede o comportamento padrão do link
    event.preventDefault();

    // Remove a classe 'active' de todos os itens do menu
    statusMenuItems.forEach(function(item) {
      item.classList.remove('active');
    });

    // Adiciona a classe 'active' apenas ao item clicado
    this.classList.add('active');

    // Obtém o texto personalizado a partir do atributo de dados 'data-status'
    const customText = this.getAttribute('data-status');

    // Define o conteúdo do elemento #status-menu-item com o texto personalizado
    statusMenuItem.textContent = customText;
  });
});

// Captura os elementos relevantes
const profileMenuLinks = document.querySelectorAll('.profile-menu-link');
const timelines = document.querySelectorAll('.timeline');

// Adiciona um ouvinte de eventos de clique a cada link do menu
profileMenuLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        // Impede o comportamento padrão do link
        event.preventDefault();

        // Remove a classe 'active' de todos os links do menu
        profileMenuLinks.forEach(function(menuLink) {
            menuLink.classList.remove('active');
        });

        // Adiciona a classe 'active' apenas ao link clicado
        this.classList.add('active');

        // Oculta todas as timelines
        timelines.forEach(function(timeline) {
            timeline.style.display = 'none';
        });

        // Exibe a timeline correspondente com base no ID do link
        const timelineId = this.id.replace('profile-menu-', 'timeline-');
        const timelineToShow = document.getElementById(timelineId);
        timelineToShow.style.display = 'block';
    });
});
