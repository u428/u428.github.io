export function renderContact() {
  return `
    <section id="contact" class="section section-alt">
        <div class="container contact-grid">
            <div>
                <h2 class="section-title">Let's work together</h2>
                <p class="section-text">
                    Agar loyihangiz uchun backend developer izlayotgan bo'lsangiz,
                    menga bemalol yozishingiz mumkin. Texnik tafsilotlarni muhokama
                    qilishni, yaxshi savollar berishni va eng to'g'ri yechimni
                    topishni yoqtiraman.
                </p>
                <ul class="contact-list">
                    <li><span>Email:</span> <a href="mailto:ulugbek@example.com">ulugbek@example.com</a></li>
                    <li><span>GitHub:</span> <a href="https://github.com/username" target="_blank">github.com/username</a></li>
                    <li><span>Telegram:</span> <a href="https://t.me/username" target="_blank">@username</a></li>
                    <li><span>LinkedIn:</span> <a href="#" target="_blank">linkedin.com/in/ulugbek</a></li>
                </ul>
            </div>

            <form class="contact-form" onsubmit="return false;">
                <h3>Quick message (demo)</h3>
                <label>
                    Name
                    <input type="text" placeholder="Your name" required />
                </label>
                <label>
                    Email
                    <input type="email" placeholder="you@example.com" required />
                </label>
                <label>
                    Message
                    <textarea rows="4" placeholder="Project idea, question or hello..." required></textarea>
                </label>
                <button type="submit" class="btn primary full">Send message</button>
                <p class="form-note">
                    Bu demo forma. Backend ulansa, xabarlar email yoki Telegram
                    bot orqali yuborilishi mumkin.
                </p>
            </form>
        </div>
    </section>
  `;
}
