// ===================
// 🔹 Selecctor lenguaje
// ===================
const toggleBtn = document.getElementById('toggleLang');
let isSpanish = true;

if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        isSpanish = !isSpanish;
        toggleBtn.textContent = isSpanish ? 'English' : 'Español';

        // ===================
        // 📄 CV (Currículum Vitae)
        // ===================
        if (document.getElementById('location')) {
            document.getElementById('location').textContent = isSpanish
                ? 'Técnico Programador | Pilar, Buenos Aires, Argentina'
                : 'Software Developer | Pilar, Buenos Aires, Argentina';
        }

        if (document.getElementById('availability')) {
            document.getElementById('availability').textContent = isSpanish
                ? 'Disponibilidad: Inmediata.'
                : 'Availability: Immediate.';
        }

        if (document.getElementById('profileTitle')) {
            document.getElementById('profileTitle').textContent = isSpanish ? 'Perfil Profesional' : 'Professional Profile';
            document.getElementById('profileText').textContent = isSpanish
                ? `Hola, soy Ignacio Andrés Alfonso, recibido de técnico programador con más de 6 años de experiencia en desarrollo de aplicaciones, diseño web y gestión de bases de datos.
                Especializado en entornos ASP.NET y C#, con sólidos conocimientos en HTML5, CSS3, JavaScript y MySQL.
                Experiencia en ASP.NET MVC y ASP.NET API Core para el desarrollo de soluciones escalables y seguras.
                Experiencia en normalización y migración de datos, desarrollo de sistemas a medida y optimización de procesos internos.
                Enfocado en la resolución de problemas, trabajo en equipo y mejora continua.`
                : `Hi, I am Ignacio Andrés Alfonso, a qualified programming technician with over 6 years of experience in application development, web design, and database management. 
                Specialized in ASP.NET and C#, with strong knowledge of HTML5, CSS3, JavaScript, and MySQL. 
                Experienced in ASP.NET MVC and ASP.NET API Core for building scalable and secure solutions. 
                Skilled in data normalization and migration, custom system development, and internal process optimization. 
                Focused on problem-solving, teamwork, and continuous improvement.`;
        }

        if (document.getElementById('expTitle')) {
            document.getElementById('expTitle').textContent = isSpanish ? 'Experiencia Laboral' : 'Work Experience';
            document.getElementById('expDate').textContent = isSpanish ? 'Administrador / Técnico | Dic 2018 – Feb 2025' : 'Administrator / Technician | Dec 2018 – Feb 2025';
            document.getElementById('expList').innerHTML = isSpanish
                ? `<li>Normalización y organización de datos en sistemas internos.</li>
                <li>Importación y migración de datos entre plataformas.</li>
                <li>Creación de consultas SQL para administración y mantenimiento de bases de datos.</li>
                <li>Desarrollo de sistemas y aplicaciones a medida según requerimientos del área.</li>
                <li>Colaboración con diferentes departamentos para la optimización de procesos.</li>`
                : `<li>Data normalization and organization in internal systems.</li>
                <li>Data import and migration between platforms.</li>
                <li>SQL query creation for database administration and maintenance.</li>
                <li>Custom system and application development based on departmental requirements.</li>
                <li>Collaboration with various departments to optimize processes.</li>`;
        }

        if (document.getElementById('eduTitle')) {
            document.getElementById('eduTitle').textContent = isSpanish ? 'Formación Académica' : 'Education';
            document.getElementById('eduTitle2').textContent = isSpanish ? 'Técnico Programador' : 'Programming Technician'
            document.getElementById('eduDate').textContent = isSpanish ? 'Graduado: Diciembre 2016' : 'Graduated : December 2016'
            document.getElementById('eduList').innerHTML = isSpanish
                ? `<li>Especialización en programación con C# y ASP.NET.</li>
                <li>Desarrollo web con HTML, CSS3, JavaScript y MySQL.</li>`
                : `<li>Specialization in programming with C# and ASP.NET.</li>
                <li>Web development with HTML, CSS3, JavaScript, and MySQL.</li>`;
        }

        if (document.getElementById('skillsTitle')) {
            document.getElementById('skillsTitle').textContent = isSpanish ? 'Habilidades Técnicas' : 'Technical Skills';
            document.getElementById('softSkillsTitle').textContent = isSpanish ? 'Habilidades Blandas' : 'Soft Skills';
            document.getElementById('languagesTitle').textContent = isSpanish ? 'Idiomas' : 'Languages';

            document.getElementById('skill1desc').textContent = isSpanish ? 'Desarrollo de aplicaciones escalables y seguras con C# y .NET.' : 'Development of scalable and secure applications with C# and .NET.';
            document.getElementById('skill2desc').textContent = isSpanish ? 'Diseño web moderno, responsivo y optimizado para rendimiento.' : 'Modern, responsive, and performance-optimized web design.';
            document.getElementById('skill3desc').textContent = isSpanish ? 'Gestión, migración y normalización de datos en sistemas internos.' : 'Management, migration, and normalization of data in internal systems.';
            document.getElementById('skill4desc').textContent = isSpanish ? 'Desarrollo y mantenimiento de proyectos personales y profesionales en GitHub.' : 'Development and maintenance of personal and professional projects on GitHub.';

            document.getElementById('soft1').textContent = isSpanish ? 'Trabajo en equipo' : 'Teamwork';
            document.getElementById('soft2').textContent = isSpanish ? 'Resolución de problemas' : 'Problem-solving';
            document.getElementById('soft3').textContent = isSpanish ? 'Gestión del tiempo' : 'Time management';

            document.getElementById('lang1').textContent = isSpanish ? 'Español: Nativo' : 'Spanish: Native';
            document.getElementById('lang2').textContent = isSpanish ? 'Inglés: Técnico' : 'English: Technical';
        }

        // ===================
        // 🌐 Portafolio
        // ===================
        if (document.getElementById('role')) {
            document.getElementById('role').textContent = isSpanish
                ? "Técnico Programador | Desarrollador Web"
                : "Software Developer | Web Developer";
        }

        if (document.getElementById('projectsTitle')) {
            document.getElementById('projectsTitle').textContent = isSpanish ? "Proyectos" : "Projects";
        }

        if (document.getElementById('proj1title')) {
            document.getElementById('proj1title').textContent = isSpanish ? "Portafolio Web Personal" : "Personal Web Portfolio";
            document.getElementById('proj1desc').textContent = isSpanish
                ? "Sitio web responsivo en HTML, CSS y JavaScript con modo oscuro y multilenguaje."
                : "Responsive website built with HTML, CSS, and JavaScript featuring dark mode and multilingual support.";
            document.getElementById('proj1btnProj').innerHTML = isSpanish 
                ? '<i class="fa-brands fa-github"></i> Ver Proyecto' 
                : '<i class="fa-brands fa-github"></i> View Project';
            document.getElementById('proj1btnWeb').innerHTML = isSpanish ? '<i class="fa-solid fa-globe"></i> Visitar sitio' : '<i class="fa-solid fa-globe"></i> Visit site';
        }

        if (document.getElementById('proj2title')) {
            document.getElementById('proj2title').textContent = isSpanish ? "Centro CEDAR" : "Centro CEDAR";
            document.getElementById('proj2desc').textContent = isSpanish
                ? "Centro de Entrenadores Deportivos de Alto Rendimiento (CEDAR). Esta plataforma permite a los usuarios adquirir conocimientos y habilidades relacionadas con el fitness y la salud desde cualquier dispositivo conectado a la web."
                : "High-Performance Sports Coaching Center (CEDAR). This platform enables users to acquire knowledge and skills related to fitness and health from any internet-connected device.";
            document.getElementById('proj2btnWeb').innerHTML = isSpanish ? '<i class="fa-solid fa-globe"></i> Visitar sitio' : '<i class="fa-solid fa-globe"></i> Visit site';
        }

        if (document.getElementById('proj3title')) {
            document.getElementById('proj3title').textContent = isSpanish ? "Más Organicos" : "Más Organicos";
            document.getElementById('proj3desc').textContent = isSpanish
                ? "Más Orgánicos es una tienda en línea que permite a los usuarios realizar pedidos de productos orgánicos de forma sencilla y rápida. La plataforma cuenta con registro de usuarios, inicio de sesión con Google, carrito de compras y gestión de pedidos personalizada para cada cliente."
                : "Más Orgánicos is an online store that allows users to order organic products quickly and easily. The platform includes user registration, Google sign-in, a shopping cart, and personalized order management for each customer.";
            document.getElementById('proj3btnWeb').innerHTML = isSpanish ? '<i class="fa-solid fa-globe"></i> Visitar sitio' : '<i class="fa-solid fa-globe"></i> Visit site';
        }
    });
}

// ===================
// 🌙 Dark Mode
// ===================
const themeBtn = document.getElementById('toggleTheme');
if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        themeBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });
}

// ===================
// 📥 PDF Download (solo CV)
// ===================
const downloadBtn = document.getElementById('downloadPDF');
if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
        const element = document.getElementById('cv-content');

        const opt = {
            margin: 0.2,
            filename: 'CV_Ignacio_Alfonso.pdf',
            image: { type: 'jpeg', quality: 1 },
            html2canvas: { 
                scale: 3,
                logging: false,  
                dpi: 300,        
                scrollY: 0
            },
            jsPDF: { 
                unit: 'in', 
                format: 'letter', 
                orientation: 'portrait' 
            },
            pagebreak: { 
                mode: ['css', 'legacy']
            }
        };

        html2pdf().set(opt).from(element).save();
    });
}
