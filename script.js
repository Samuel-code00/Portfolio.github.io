[
    {
        "title": "Project Title 1",
        "description": "A brief description of the project goes here.",
        "technologies": "HTML, CSS, JavaScript",
        "link": "https://first-app-three-theta.vercel.app/"
    },
    {
        "title": "Project Title 2",
        "description": "A brief description of the project goes here.",
        "technologies": "Python, Django, PostgreSQL",
        "link": "https://first-app-three-theta.vercel.app/"
    }
]

async function fetchProjects() {
    const response = await fetch('projects.json');
    const projects = await response.json();
    const projectsContainer = document.getElementById('projects');

    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project';
        projectElement.innerHTML = `
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <p class="technologies">Technologies used: ${project.technologies}</p>
            <p><a href="${project.link}" target="_blank">View Project</a></p>
        `;
        projectsContainer.appendChild(projectElement);
    });
}

fetchProjects();