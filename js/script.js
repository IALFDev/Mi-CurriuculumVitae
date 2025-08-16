// PDF Download
document.getElementById('downloadPDF').addEventListener('click', () => {
    html2pdf().set({
        margin: 0.4,
        filename: 'CV_Ignacio_Alfonso.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 3, logging: false, dpi: 300 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    }).from(document.getElementById('cv-content')).save();
});

// Language Toggle
const toggleBtn = document.getElementById('toggleLang');
let isSpanish = true;
toggleBtn.addEventListener('click', () => {
    isSpanish = !isSpanish;
    toggleBtn.textContent = isSpanish ? 'English' : 'Español';
    document.getElementById('location').textContent = isSpanish ? 'Técnico Programador | Pilar, Buenos Aires, Argentina' : 'Software Developer | Pilar, Buenos Aires, Argentina';
    document.getElementById('availability').textContent = isSpanish ? 'Disponibilidad: Inmediata' : 'Availability: Immediate';
    document.getElementById('profileTitle').textContent = isSpanish ? 'Perfil Profesional' : 'Professional Profile';
    document.getElementById('profileText').textContent = isSpanish
        ? 'Técnico Programador con más de 6 años de experiencia en desarrollo de aplicaciones, diseño web y gestión de bases de datos. Especializado en entornos ASP.NET y C#, con sólidos conocimientos en HTML5, CSS3, JavaScript y MySQL. Experiencia en ASP.NET MVC y ASP.NET API Core para el desarrollo de soluciones escalables y seguras. Experiencia en normalización y migración de datos, desarrollo de sistemas a medida y optimización de procesos internos. Enfocado en la resolución de problemas, trabajo en equipo y mejora continua.'
        : 'Software Developer with over 6 years of experience in application development, web design, and database management. Specialized in ASP.NET and C#, with strong knowledge of HTML5, CSS3, JavaScript, and MySQL. Experienced in ASP.NET MVC and ASP.NET API Core for building scalable and secure solutions. Skilled in data normalization and migration, custom system development, and internal process optimization. Focused on problem-solving, teamwork, and continuous improvement.';
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
    document.getElementById('eduTitle').textContent = isSpanish ? 'Formación Académica' : 'Education';
    document.getElementById('eduList').innerHTML = isSpanish
        ? `<li>Especialización en programación con C# y ASP.NET.</li>
        <li>Desarrollo web con HTML, CSS3, JavaScript y MySQL.</li>`
        : `<li>Specialization in programming with C# and ASP.NET.</li>
        <li>Web development with HTML, CSS3, JavaScript, and MySQL.</li>`;
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
});

// Dark Mode
const themeBtn = document.getElementById('toggleTheme');
    themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});