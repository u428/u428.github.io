export function renderAbout() {
  return `
    <section id="about" class="section">
        <div class="container two-col">
            <div>
                <h2 class="section-title">About me</h2>
                <p class="section-text">
                    Men real biznes jarayonlarini avtomatlashtiradigan backend
                    tizimlar bilan ishlashni yaxshi ko'raman. Kodimda
                    <strong>tozalikka, o'qilishi oson bo'lishiga</strong> va
                    keyinchalik kengaytirish qulayligiga alohida e'tibor beraman.
                </p>
                <p class="section-text">
                    Arxitektura tarafdori sifatida layered architecture, hexagonal
                    yondashuv, DTO mapping va testing kulturasi (unit + integration)
                    bilan ishlayman. CI/CD pipeline'lar orqali kodning production'ga
                    xavfsiz tarzda chiqishini yo'lga qo'yishni yaxshi ko'raman.
                </p>
            </div>
            <div class="about-cards">
                <article class="about-card">
                    <h3>Backend fokus</h3>
                    <p>
                        REST API, mikroservislar, autentifikatsiya, throttling,
                        caching, monitoring va log'lash.
                    </p>
                </article>
                <article class="about-card">
                    <h3>Team work</h3>
                    <p>
                        Git workflow, code review, readable commit history va
                        documentation yozish men uchun odatiy jarayon.
                    </p>
                </article>
                <article class="about-card">
                    <h3>Clean code</h3>
                    <p>
                        SOLID, DRY, KISS va domain-driven fikrlash orqali
                        uzoq muddatli loyihalarda barqaror kod.
                    </p>
                </article>
            </div>
        </div>
    </section>
  `;
}
