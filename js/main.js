import { renderNavbar } from './sections/navbar.js';
import { renderHero } from './sections/hero.js';
import { renderAbout } from './sections/about.js';
import { renderSkills } from './sections/skills.js';
import { renderProjects } from './sections/projects.js';
import { renderContact } from './sections/contact.js';
import { renderFooter } from './sections/footer.js';

const app = document.getElementById('app');

app.innerHTML = `
  ${renderNavbar()}
  <main>
    ${renderHero()}
    ${renderAbout()}
    ${renderSkills()}
    ${renderProjects()}
    ${renderContact()}
  </main>
  ${renderFooter()}
`;
