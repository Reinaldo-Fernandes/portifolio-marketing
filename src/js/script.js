document.addEventListener('DOMContentLoaded', () => {

    const portfolioGrid = document.getElementById('portfolio-grid');

    // Array de objetos com os dados dos seus projetos
    const projects = [
        {
            title: "Campanha de Lançamento de Produto",
            description: "Criação de estratégia de marketing 360°, incluindo mídias sociais, e-mail marketing e anúncios pagos.",
            image: "src/img/lancamento.png",
            link: "#" // Link para o estudo de caso ou detalhes do projeto
        },
        {
            title: "Estratégia de Conteúdo para Blog",
            description: "Aumento de 150% no tráfego orgânico em 6 meses com conteúdo focado em SEO.",
            image: "src/img/estra-blog.webp",
            link: "#"
        },
        {
            title: "Gestão de Mídias Sociais",
            description: "Crescimento de 50% no engajamento e aumento de seguidores em 3 meses.",
            image: "src/img/gestao-midia.png",
            link: "#"
        },
        // Adicione mais projetos aqui seguindo o mesmo padrão
        {
            title: "Análise de Dados de Marketing",
            description: "Implementação de dashboards de performance para otimização de campanhas.",
            image: "src/img/analise.png",
            link: "#"
        }
    ];

    // Função para criar o HTML de um cartão de projeto
    const createProjectCard = (project) => {
        const card = document.createElement('a');
        card.href = project.link;
        card.classList.add('project-card');
        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </div>
        `;
        return card;
    };

    // Adicionar todos os projetos ao grid
    projects.forEach(project => {
        const card = createProjectCard(project);
        portfolioGrid.appendChild(card);
    });

    // Animação de rolagem suave para os links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Lidar com o envio do formulário (exemplo)
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Mensagem enviada com sucesso! Em breve, entraremos em contato.');
        contactForm.reset();
    });
});
