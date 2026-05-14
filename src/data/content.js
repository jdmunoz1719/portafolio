export const content = {
  es: {
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      projects: "Proyectos",
      skills: "Habilidades",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      name: "David Gallego",
      roles: [
        "Líder Técnico",
        "Full Stack Developer",
        "Arquitecto de Software",
      ],
      description:
        "Diseño y construyo soluciones de software de alto impacto. Especializado en Angular, .NET y arquitecturas cloud-native.",
      cta: "Ver mi trabajo",
      ctaContact: "Contáctame",
    },
    about: {
      title: "Sobre mí",
      subtitle: "Un poco de mi historia",
      p1: "Líder Técnico y Desarrollador Full Stack con más de 5 años de experiencia construyendo soluciones de software de alto impacto. He liderado equipos, definido estándares de calidad, tomado decisiones de arquitectura y traducido necesidades de negocio en productos funcionales, escalables y mantenibles.",
      p2: "Me apasiona construir software bien estructurado, aprender continuamente y aplicar herramientas de inteligencia artificial para acelerar y mejorar el ciclo de desarrollo.",
      location: "Medellín, Colombia",
      experience: "5+ años de experiencia",
      english: "Inglés B2",
    },
    experience: {
      title: "Experiencia",
      subtitle: "Mi trayectoria profesional",
      jobs: [
        {
          role: "Analista Full Stack · Líder Técnico",
          company: "Ofima",
          period: "Jun 2025 – Actualidad",
          current: true,
          bullets: [
            "Lideré el equipo definiendo estándares técnicos, distribuyendo tareas y guiando decisiones de arquitectura y buenas prácticas.",
            "Diseñé e implementé la infraestructura completa de frontend, backend y ambientes de despliegue (dev, QA, producción).",
            "Construí y optimicé pipelines CI/CD logrando reducción significativa en tiempos de despliegue y mejora en la estabilidad de los releases.",
            "Integré herramientas de IA en el flujo de trabajo para acelerar documentación técnica, generación de código y análisis de errores.",
          ],
        },
        {
          role: "Desarrollador Frontend Advanced",
          company: "Pirani",
          period: "Oct 2022 – Jun 2025",
          current: false,
          bullets: [
            "Desarrollé y optimicé módulos críticos de una plataforma SaaS enterprise de gestión de riesgos.",
            "Diseñé e implementé un design system propio que mejoró la consistencia visual y redujo los tiempos de desarrollo de nuevos módulos.",
            "Colaboré activamente con equipos de producto y diseño bajo metodología Scrum.",
            "Reconocido reiteradamente por calidad técnica, velocidad de entrega y atención al detalle en cada sprint.",
          ],
        },
        {
          role: "Desarrollador Full Stack Junior",
          company: "Garantías Comunitarias",
          period: "Jun 2020 – Oct 2022",
          current: false,
          bullets: [
            "Desarrollé una tienda virtual con gestión de inventario, moneda virtual y comunicación en tiempo real mediante WebSockets.",
            "Construí una aplicación web de mapeo de planos de oficinas para control y gestión de limpieza.",
            "Lideré el desarrollo de GCRisk: plataforma integral de gestión de riesgos empresariales desde su concepción hasta producción.",
          ],
        },
      ],
    },
    skills: {
      title: "Habilidades",
      subtitle: "Tecnologías que manejo",
      categories: [
        {
          name: "Frontend",
          items: [
            "Angular", "React", "TypeScript", "RxJS", "Angular Material",
            "Bootstrap", "Tailwind CSS", "HTML5", "CSS3", "Flutter",
          ],
        },
        {
          name: "Backend",
          items: [
            ".NET / C#", "Entity Framework", "Node.js", "Java / Spring Boot",
            "Spring WebFlux", "Python", "Flask", "Laravel / PHP",
            "REST APIs", "WebSockets", "JWT", "Cronjobs",
          ],
        },
        {
          name: "Bases de datos",
          items: ["PostgreSQL", "SQL Server", "MySQL", "SQLite", "MongoDB"],
        },
        {
          name: "DevOps & Cloud",
          items: ["Azure DevOps", "AWS", "Kubernetes", "Terraform", "CI/CD", "Git", "Docker"],
        },
        {
          name: "Herramientas",
          items: ["Figma", "Jira", "Scrum / Agile", "Postman"],
        },
        {
          name: "Calidad & IA",
          items: ["Jest", "Jasmine", "Pruebas Unitarias", "Code Review", "GitHub Copilot", "Claude Code", "JMeter"],
        },
      ],
    },
    projects: {
      title: "Proyectos",
      subtitle: "Apps en las que he trabajado",
      items: [
        {
          name: "GCRisk",
          company: "Garantías Comunitarias",
          period: "Jun 2020 – Oct 2022",
          description:
            "Plataforma integral de gestión de riesgos corporativos. Matrices de riesgo, planes de acción, reportes y dashboards en tiempo real.",
          url: "https://www.gcrisk.co",
          image: "/screenshots/gcrisk.png",
          accent: "#6366f1",
        },
        {
          name: "Pirani",
          company: "Pirani Risk",
          period: "Oct 2022 – Jun 2025",
          description:
            "SaaS de gestión de riesgos empresariales. Módulos de riesgo operacional, SARLAFT, continuidad de negocio y cumplimiento regulatorio.",
          url: "https://appweb.pirani.co",
          image: "/screenshots/pirani.png",
          accent: "#06b6d4",
        },
        {
          name: "Domonow",
          company: "Ofima",
          period: "Jun 2025 – Actualidad",
          description:
            "Plataforma de gestión para conjuntos residenciales. Diseñé y construí desde cero la arquitectura de componentes, el sistema de diseño y toda la infraestructura frontend. Módulos de administración de propiedades, pagos, comunicados y control de acceso.",
          url: "https://app.domonow.com",
          image: "/screenshots/domonow.png",
          accent: "#22c55e",
        },
        {
          name: "Sistema de Parqueaderos",
          company: "MicroWest Technologies",
          period: "Freelance",
          badge: "Freelance",
          description:
            "Todos los componentes diseñados y construidos por mí desde cero. Sistema completo para administración de parqueaderos: roles y permisos por empleado, validación de slots disponibles, convenios, tarifas por horario y sede, turnos de porteros, reservas mensuales y quincenales, registro de clientes y vehículos, facturación electrónica e impresión térmica USB/Bluetooth. Instalada como PWA.",
          url: "https://park.microwesttechnologies.com/",
          image: "",
          accent: "#f59e0b",
        },
        {
          name: "Gestión de Estudios Webcam",
          company: "MicroWest Technologies",
          period: "Freelance",
          badge: "Freelance",
          description:
            "Componentes y arquitectura frontend construidos íntegramente por mí. Plataforma para estudios de transmisión en vivo: gestión de modelos, asignación de habitaciones con control de horarios, historial de sesiones por plataforma y módulo de nómina para liquidación de pagos.",
          url: "https://vicas.microwesttechnologies.com/",
          image: "",
          accent: "#a855f7",
        },
        {
          name: "CustoDocs",
          company: "MicroWest Technologies",
          period: "Freelance",
          badge: "Freelance",
          description:
            "Diseñé y desarrollé cada componente desde cero. Gestor documental empresarial con registro de empleados, clientes y compañías, validación de permisos por rol, eliminación temporal de archivos con restauración, ranking de productividad por carga de documentos, historial de archivos, carpetas organizables, favoritos y filtros avanzados. Instalada como PWA.",
          url: "https://custodocs.microwesttechnologies.com/",
          image: "",
          accent: "#ec4899",
        },
        {
          name: "O&G Ingeniería",
          company: "O&G Ingeniería",
          period: "Freelance",
          badge: "Freelance",
          description:
            "Sitio web corporativo para empresa de ingeniería eléctrica y energía solar con más de 15 años de trayectoria en Colombia. Presentación de servicios de instalación fotovoltaica, infraestructura eléctrica de media y alta tensión, auditorías energéticas y consultoría para transición energética.",
          url: "https://oygingenieria.com/",
          image: "",
          accent: "#f97316",
        },
      ],
    },
    contact: {
      title: "Contacto",
      subtitle: "¿Tienes un proyecto en mente?",
      description:
        "Estoy disponible para proyectos freelance, posiciones senior o conversaciones sobre arquitectura de software.",
      email: "Davidgallego092@gmail.com",
      whatsapp: "https://wa.me/573054422132",
      linkedin: "linkedin.com/in/jesus-david-mu%C3%B1oz-gallego-051b9a232/",
      phone: "+57 305 442 2132",
      emailLabel: "Enviar email",
      whatsappLabel: "WhatsApp",
      linkedinLabel: "Ver LinkedIn",
    },
    footer: {
      built: "Construido con React · Desplegado en Vercel",
    },
  },

  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "David Gallego",
      roles: ["Technical Lead", "Full Stack Developer", "Software Architect"],
      description:
        "I design and build high-impact software solutions. Specialized in Angular, .NET, and cloud-native architectures.",
      cta: "See my work",
      ctaContact: "Contact me",
    },
    about: {
      title: "About me",
      subtitle: "A bit about my story",
      p1: "Technical Lead and Full Stack Developer with 5+ years of experience building high-impact software solutions. I've led teams, defined quality standards, made architecture decisions, and translated business needs into functional, scalable, and maintainable products.",
      p2: "I'm passionate about building well-structured software, learning continuously, and applying AI tools to accelerate and improve the development cycle.",
      location: "Medellín, Colombia",
      experience: "5+ years of experience",
      english: "English B2",
    },
    experience: {
      title: "Experience",
      subtitle: "My professional journey",
      jobs: [
        {
          role: "Full Stack Analyst · Technical Lead",
          company: "Ofima",
          period: "Jun 2025 – Present",
          current: true,
          bullets: [
            "Led the development team defining technical standards, distributing tasks, and guiding architecture decisions and best practices.",
            "Designed and implemented the full frontend, backend, and deployment infrastructure (dev, QA, production).",
            "Built and optimized CI/CD pipelines achieving significant reduction in deployment times and improved release stability.",
            "Integrated AI tools into the team workflow to accelerate technical documentation, code generation, and error analysis.",
          ],
        },
        {
          role: "Advanced Frontend Developer",
          company: "Pirani",
          period: "Oct 2022 – Jun 2025",
          current: false,
          bullets: [
            "Developed and optimized critical modules of an enterprise risk management SaaS platform.",
            "Designed and implemented a proprietary design system that improved visual consistency and reduced development time for new modules.",
            "Actively collaborated with product and design teams under Scrum methodology.",
            "Consistently recognized for technical quality, delivery speed, and attention to detail each sprint.",
          ],
        },
        {
          role: "Junior Full Stack Developer",
          company: "Garantías Comunitarias",
          period: "Jun 2020 – Oct 2022",
          current: false,
          bullets: [
            "Built a virtual store with inventory management, virtual currency, and real-time communication via WebSockets.",
            "Developed an office floor plan mapping app for cleaning control and management.",
            "Led the development of GCRisk: a full enterprise risk management platform from conception to production.",
          ],
        },
      ],
    },
    skills: {
      title: "Skills",
      subtitle: "Technologies I work with",
      categories: [
        {
          name: "Frontend",
          items: [
            "Angular", "React", "TypeScript", "RxJS", "Angular Material",
            "Bootstrap", "Tailwind CSS", "HTML5", "CSS3", "Flutter",
          ],
        },
        {
          name: "Backend",
          items: [
            ".NET / C#", "Entity Framework", "Node.js", "Java / Spring Boot",
            "Spring WebFlux", "Python", "Flask", "Laravel / PHP",
            "REST APIs", "WebSockets", "JWT", "Cronjobs",
          ],
        },
        {
          name: "Databases",
          items: ["PostgreSQL", "SQL Server", "MySQL", "SQLite", "MongoDB"],
        },
        {
          name: "DevOps & Cloud",
          items: ["Azure DevOps", "AWS", "Kubernetes", "Terraform", "CI/CD", "Git", "Docker"],
        },
        {
          name: "Tools",
          items: ["Figma", "Jira", "Scrum / Agile", "Postman"],
        },
        {
          name: "Quality & AI",
          items: ["Jest", "Jasmine", "Unit Testing", "Code Review", "GitHub Copilot", "Claude Code", "JMeter"],
        },
      ],
    },
    projects: {
      title: "Projects",
      subtitle: "Apps I've worked on",
      items: [
        {
          name: "GCRisk",
          company: "Garantías Comunitarias",
          period: "Jun 2020 – Oct 2022",
          description:
            "Enterprise risk management platform. Risk matrices, action plans, reports, and real-time dashboards.",
          url: "https://www.gcrisk.co",
          image: "/screenshots/gcrisk.png",
          accent: "#6366f1",
        },
        {
          name: "Pirani",
          company: "Pirani Risk",
          period: "Oct 2022 – Jun 2025",
          description:
            "Enterprise risk management SaaS. Modules for operational risk, SARLAFT, business continuity, and regulatory compliance.",
          url: "https://appweb.pirani.co",
          image: "/screenshots/pirani.png",
          accent: "#06b6d4",
        },
        {
          name: "Domonow",
          company: "Ofima",
          period: "Jun 2025 – Present",
          description:
            "Residential complex management platform. I designed and built the full component architecture and design system from scratch. Modules covering property management, payments, announcements, and access control.",
          url: "https://app.domonow.com",
          image: "/screenshots/domonow.png",
          accent: "#22c55e",
        },
        {
          name: "Parking Management System",
          company: "MicroWest Technologies",
          period: "Freelance",
          badge: "Freelance",
          description:
            "Every component designed and built by me from scratch. Complete parking lot management system: role-based access control per employee, real-time slot availability validation, agreements, dynamic pricing by schedule and branch, porter shift control, monthly and biweekly reservations, client and vehicle registration, electronic billing, and USB/Bluetooth thermal printing. Deployed as a PWA.",
          url: "https://park.microwesttechnologies.com/",
          image: "",
          accent: "#f59e0b",
        },
        {
          name: "Webcam Studio Manager",
          company: "MicroWest Technologies",
          period: "Freelance",
          badge: "Freelance",
          description:
            "Frontend components and architecture built entirely by me. Platform for live streaming studios: model management, room assignment with shift scheduling, per-platform session history, and a full payroll module for earnings calculation and payment processing.",
          url: "https://vicas.microwesttechnologies.com/",
          image: "",
          accent: "#a855f7",
        },
        {
          name: "CustoDocs",
          company: "MicroWest Technologies",
          period: "Freelance",
          badge: "Freelance",
          description:
            "Every component designed and developed by me from scratch. Enterprise document management system with employee, client, and company registration, role-based permission validation, soft-delete with file restoration, productivity ranking by upload volume, file history, folder organization, favorites, and advanced search filters. Deployed as a PWA.",
          url: "https://custodocs.microwesttechnologies.com/",
          image: "",
          accent: "#ec4899",
        },
        {
          name: "O&G Ingeniería",
          company: "O&G Ingeniería",
          period: "Freelance",
          badge: "Freelance",
          description:
            "Corporate website for an electrical engineering and solar energy company with 15+ years of experience in Colombia. Showcases photovoltaic installation services, medium and high-voltage electrical infrastructure, energy audits, and consulting for energy transition strategies.",
          url: "https://oygingenieria.com/",
          image: "",
          accent: "#f97316",
        },
      ],
    },
    contact: {
      title: "Contact",
      subtitle: "Have a project in mind?",
      description:
        "I'm available for freelance projects, senior positions, or conversations about software architecture.",
      email: "Davidgallego092@gmail.com",
      whatsapp: "https://wa.me/573054422132",
      linkedin: "linkedin.com/in/jesus-david-mu%C3%B1oz-gallego-051b9a232/",
      phone: "+57 305 442 2132",
      emailLabel: "Send email",
      whatsappLabel: "WhatsApp",
      linkedinLabel: "View LinkedIn",
    },
    footer: {
      built: "Built with React · Deployed on Vercel",
    },
  },
};
