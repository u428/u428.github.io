export function renderProjects() {
  return `
    <section id="projects" class="section">
        <div class="container">
            <h2 class="section-title center">Selected projects</h2>
            <p class="section-sub center">
                Quyidagi loyihalar backend tomonidan hal qilingan real muammolarni
                aks ettiradi. Linklar demo sifatida qo'yilgan – Ulugbek o'z
                GitHub manzillarini qo'shishi mumkin.
            </p>

            <div class="projects-grid">
                <article class="project-card">
                    <div class="project-chip">Backend • API</div>
                    <h3>Laboratory Test Management API</h3>
                    <p>
                        Sinov laboratoriyasi uchun namuna qabul qilish, navbat,
                        protokol va hisobotlar jarayonini boshqaruvchi REST API.
                        Rolga asoslangan ruxsat, audit log va monitoring
                        tizimlari bilan.
                    </p>
                    <ul class="tag-list">
                        <li>Java</li>
                        <li>Spring Boot</li>
                        <li>PostgreSQL</li>
                        <li>Docker</li>
                    </ul>
                    <div class="project-links">
                        <a href="#" target="_blank">GitHub</a>
                        <a href="#" target="_blank">API Docs</a>
                    </div>
                </article>

                <article class="project-card">
                    <div class="project-chip">Security • Auth</div>
                    <h3>Secure Booking Service</h3>
                    <p>
                        Mijozlar uchun onlayn bron qilish servisi. JWT asosidagi
                        autentifikatsiya, email tasdiqlash va admin paneli orqali
                        buyurtmalarni boshqarish imkoniyati.
                    </p>
                    <ul class="tag-list">
                        <li>Spring Security</li>
                        <li>REST</li>
                        <li>MySQL</li>
                    </ul>
                    <div class="project-links">
                        <a href="#" target="_blank">GitHub</a>
                        <a href="#" target="_blank">Live demo</a>
                    </div>
                </article>

                <article class="project-card">
                    <div class="project-chip">Integrations</div>
                    <h3>Payment Integration Service</h3>
                    <p>
                        Bir nechta to'lov providerlari bilan integratsiya
                        qiluvchi modul. Webhook qayta jo'natish, tranzaksiya
                        loglari va xatoliklarni kuzatuvchi servislar.
                    </p>
                    <ul class="tag-list">
                        <li>Java</li>
                        <li>Spring</li>
                        <li>Kafka (optional)</li>
                    </ul>
                    <div class="project-links">
                        <a href="#" target="_blank">GitHub</a>
                    </div>
                </article>
            </div>
        </div>
    </section>
  `;
}
