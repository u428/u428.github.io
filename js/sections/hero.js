export function renderHero() {
  return `
    <section id="home" class="hero">
        <div class="container hero-content">
            <div class="hero-left">
                <p class="badge">Java &amp; Spring Boot • Backend</p>
                <h1>
                    Backend developer<br />
                    <span class="gradient-text">who loves clean architecture</span>
                </h1>
                <p class="hero-sub">
                    Salom, men <strong>Ulugbek Qurbanov</strong>. Men ishonchli,
                    kengaytiriluvchi va xavfsiz backend tizimlar qurishga
                    ixtisoslashganman. Microservislar, REST API, ma'lumotlar
                    bazasi dizayni va devops jarayonlari – mening kunlik ishlarim.
                </p>
                <div class="hero-actions">
                    <a href="#projects" class="btn primary">See Projects</a>
                    <a href="#contact" class="btn ghost">Hire Me</a>
                </div>
                <div class="hero-metas">
                    <div class="meta-chip">Available for remote</div>
                    <div class="meta-chip">Timezone: Tashkent (UTC+5)</div>
                </div>
            </div>

            <div class="hero-right">
                <div class="card hologram">
                    <div class="orbit orbit-1"></div>
                    <div class="orbit orbit-2"></div>
                    <div class="orbit orbit-3"></div>
                    <div class="avatar-circle">
                        <span>UQ</span>
                    </div>
                    <p class="holo-title">Backend Energy</p>
                    <p class="holo-sub">Java • Spring • PostgreSQL • Docker</p>
                </div>

                <div class="small-stats">
                    <div class="pill-card">
                        <span class="pill-label">Production APIs</span>
                        <span class="pill-value">20+</span>
                    </div>
                    <div class="pill-card">
                        <span class="pill-label">Avg. uptime</span>
                        <span class="pill-value">99.9%</span>
                    </div>
                    <div class="pill-card">
                        <span class="pill-label">Lines of code</span>
                        <span class="pill-value">100k+</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  `;
}
