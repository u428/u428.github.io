export function renderSkills() {
  return `
    <section id="skills" class="section section-alt">
        <div class="container">
            <h2 class="section-title center">Tech stack</h2>
            <p class="section-sub center">
                Men kundalik ishlatadigan texnologiyalar. Yangi stack o'rganishdan
                qo'rqmayman, lekin avval asosiyni mukammal qilish tarafdoriman.
            </p>
            <div class="skills-grid">
                <div class="skill-group">
                    <h3>Languages</h3>
                    <ul>
                        <li>Java (Core, OOP)</li>
                        <li>SQL</li>
                        <li>JavaScript (basic)</li>
                    </ul>
                </div>
                <div class="skill-group">
                    <h3>Backend</h3>
                    <ul>
                        <li>Spring Boot, Spring MVC</li>
                        <li>Spring Security, JWT</li>
                        <li>RESTful API dizayni</li>
                        <li>Microservices architecture</li>
                    </ul>
                </div>
                <div class="skill-group">
                    <h3>Databases</h3>
                    <ul>
                        <li>PostgreSQL</li>
                        <li>MySQL</li>
                        <li>JPA / Hibernate</li>
                    </ul>
                </div>
                <div class="skill-group">
                    <h3>DevOps &amp; Tools</h3>
                    <ul>
                        <li>Docker, Docker Compose</li>
                        <li>Git &amp; GitHub</li>
                        <li>Maven / Gradle</li>
                        <li>GitHub Actions (CI/CD)</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  `;
}
