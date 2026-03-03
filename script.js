const tools = [
    {
        name: "Full Stack FastAPI Template",
        category: "Development",
        description: "Plantilla de proyecto para comenzar rápidamente con FastAPI (backend en Python) + frontend moderno con React + Tailwind.",
        price: "Gratuita (open-source)",
        usage: "Aceleración de APIs REST y frontends con mejores prácticas.",
        icon: "⚡",
        favorite: true
    },
    {
        name: "Google AI Studio",
        category: "Development",
        description: "IDE web para prototipar con modelos generativos de Google (Gemini) sin instalar nada.",
        price: "Free tier / Pro (~$20/mes)",
        usage: "Refinar código y probar prototipos de IA conversacionales.",
        icon: "🎨"
    },
    {
        name: "Antigravity (Google)",
        category: "Development",
        description: "IDE centrado en agentes autónomos de IA basados en Gemini para coordinar tareas de desarrollo.",
        price: "Gratuito (Public Preview)",
        usage: "Automatizar tareas complejas de codificación y orquestar agentes.",
        icon: "🚀",
        favorite: true
    },
    {
        name: "Firebase Studio",
        category: "Automation",
        description: "Plataforma 'prompt-to-app' para construir aplicaciones completas con soporte AI integrado.",
        price: "Gratuito / Según uso",
        usage: "Prototipar y generar apps completas sin configuración manual.",
        icon: "🔥"
    },
    {
        name: "Eraser.io",
        category: "Design",
        description: "Copiloto de IA para diagramas técnicos y documentación: genera flujos, ERD y arquitectura desde prompts.",
        price: "~$10 - $25/mes",
        usage: "Automatizar diagramas de arquitectura y documentación técnica.",
        icon: "📐"
    },
    {
        name: "NotebookLM (Google)",
        category: "Research",
        description: "Asistente de investigación que analiza tus propios documentos para resumir y contestar preguntas.",
        price: "Gratis / Pro (~$20/mes)",
        usage: "Analizar documentación técnica y generar resúmenes ejecutivos.",
        icon: "📓",
        favorite: true
    },
    {
        name: "Whimsical",
        category: "Design",
        description: "Herramienta colaborativa para crear diagramas, wireframes y mind maps con integración de IA.",
        price: "~$10 - $20/mes",
        usage: "Diseño de pantallas y arquitectura de producto.",
        icon: "✨"
    },
    {
        name: "Otter.ai",
        category: "Productivity",
        description: "IA para transcripción y colaboración en reuniones con speaker ID y búsqueda en vivo.",
        price: "~$8 - $30/mes",
        usage: "Documentar reuniones de planificación y extraer decisiones clave.",
        icon: "🎤"
    },
    {
        name: "Blackbox.ai",
        category: "Development",
        description: "Herramienta de IA para código con autocompletado, ejemplos y búsqueda de snippets.",
        price: "~$10 - $15/mes",
        usage: "Soporte en codificación con sugerencias y ejemplos.",
        icon: "⬛"
    },
    {
        name: "Skywork AI",
        category: "Research",
        description: "Suite de 'workspace agentes' que transforma contenido en múltiples formatos con agentes especializados.",
        price: "~$20 - $40/mes",
        usage: "Generación y transformación de contenido de proyecto (pitches, documentos).",
        icon: "🏗️"
    },
    {
        name: "Scribehow",
        category: "Productivity",
        description: "IA para documentar procesos y generar guías paso a paso automáticamente a partir de acciones.",
        price: "~$12 - $20/mes",
        usage: "Crear manuales y guías de procesos técnicos rápidamente.",
        icon: "✍️",
        favorite: true
    },
    {
        name: "Make",
        category: "Automation",
        description: "Plataforma de automatización de workflows (sin código) extremadamente flexible.",
        price: "~$10 - $20/mes",
        usage: "Conectar herramientas y automatizar flujos de trabajo (Slack, GitHub, etc.).",
        icon: "🔗"
    },
    {
        name: "Perplexity",
        category: "Research",
        description: "Motor de búsqueda e IA con respuestas directas y citas de fuentes verificadas.",
        price: "Gratis / Pro (~$20/mes)",
        usage: "Investigación técnica profunda y obtención de evidencia.",
        icon: "🔍"
    },
    {
        name: "GitHub Copilot",
        category: "Development",
        description: "Copiloto de código para autocompletado inteligente integrado en VS Code y JetBrains.",
        price: "~$10/mes",
        usage: "Generar código, tests y refactorizaciones inline.",
        icon: "🤖"
    },
    {
        name: "SiliconFlow",
        category: "Development",
        description: "Generador de flujos de trabajo y pipelines de ingeniería asistido por IA.",
        price: "~$10 - $20/mes",
        usage: "Sugerencia de arquitecturas y canales de despliegue.",
        icon: "🌊"
    },
    {
        name: "Fireworks AI",
        category: "Productivity",
        description: "Plataforma de IA generativa para productividad y asistencia en tareas creativas.",
        price: "~$10 - $20/mes",
        usage: "Búsqueda y generación de contenido productivo.",
        icon: "🎆"
    },
    {
        name: "Gemini Code Assist",
        category: "Development",
        description: "Asistente de codificación de Google basado en Gemini, integrado en el ecosistema Google Cloud.",
        price: "~$20/mes",
        usage: "Asistencia de código robusta para entornos corporativos.",
        icon: "♊"
    },
    {
        name: "Read IA",
        category: "Research",
        description: "Herramienta de IA para analizar y resumir lecturas largas, artículos y documentos complejos.",
        price: "Freemium / Pro",
        usage: "Optimizar el tiempo de lectura y comprensión de material técnico.",
        icon: "📖",
        favorite: true
    }
];

const toolsGrid = document.getElementById('toolsGrid');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');
const noResults = document.getElementById('noResults');
const toolModal = document.getElementById('toolModal');
const modalBody = document.getElementById('modalBody');
const closeModalBtn = document.getElementById('closeModal');
const modalOverlay = document.getElementById('modalOverlay');

function createCard(tool, index) {
    const card = document.createElement('div');
    card.className = 'tool-card';
    card.setAttribute('data-category', tool.category);
    card.style.animationDelay = `${index * 0.05}s`;

    card.innerHTML = `
        <div class="card-header">
            <div class="logo-container">
                <span class="emoji-logo">${tool.icon}</span>
            </div>
            <h3 class="tool-name">${tool.name}</h3>
            <span class="tool-category">${tool.category}</span>
        </div>
        <p class="tool-description">${tool.description}</p>
        
        <div class="expand-hint">
            <span>Ver más detalles</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </div>

        <div class="tool-details">
            <div class="detail-item">
                <span class="detail-label">Uso Principal</span>
                <span class="detail-value">${tool.usage}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Precio</span>
                <span class="price-tag">${tool.price}</span>
            </div>
        </div>
    `;

    card.addEventListener('click', () => {
        openModal(tool);
    });

    return card;
}

function openModal(tool) {
    modalBody.innerHTML = `
        <div class="card-header">
            <div class="logo-container">
                <span class="emoji-logo">${tool.icon}</span>
            </div>
            <h2 class="tool-name">${tool.name}</h2>
            <span class="tool-category">${tool.category}</span>
        </div>
        <p class="tool-description">${tool.description}</p>
        
        <div class="tool-details-full">
            <div class="detail-item">
                <span class="detail-label">¿Qué es?</span>
                <span class="detail-value">${tool.description}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Uso Principal</span>
                <span class="detail-value">${tool.usage}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Precio Estimado</span>
                <span class="price-tag">${tool.price}</span>
            </div>
        </div>
    `;
    toolModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scroll
}

function closeModal() {
    toolModal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restore scroll
}

// Modal Event Listeners
closeModalBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

function renderTools(filter = 'all', query = '') {
    toolsGrid.innerHTML = '';
    let visibleCount = 0;

    const filteredTools = tools.filter(tool => {
        let matchesFilter = false;
        if (filter === 'all') {
            matchesFilter = true;
        } else if (filter === 'Favoritas') {
            matchesFilter = tool.favorite === true;
        } else {
            matchesFilter = tool.category === filter;
        }

        const matchesQuery = tool.name.toLowerCase().includes(query.toLowerCase()) ||
            tool.category.toLowerCase().includes(query.toLowerCase()) ||
            tool.description.toLowerCase().includes(query.toLowerCase());

        return matchesFilter && matchesQuery;
    });

    filteredTools.forEach((tool, index) => {
        toolsGrid.appendChild(createCard(tool, index));
        visibleCount++;
    });

    if (visibleCount === 0) {
        noResults.classList.remove('hidden');
    } else {
        noResults.classList.add('hidden');
    }
}

// Event Listeners
searchInput.addEventListener('input', (e) => {
    const activeFilter = document.querySelector('.filter-btn.active').dataset.category;
    renderTools(activeFilter, e.target.value);
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderTools(btn.dataset.category, searchInput.value);
    });
});

// Initial Render
renderTools();
