import { NavigationComponent } from './navigation.js';
import { HamburgerMenuComponent } from './hamburger-menu.js';
import { DashboardComponent } from './dashboard.js';
import { Pages } from './pages.js';

class App {
  constructor() {
    this.navigation = new NavigationComponent();
    this.hamburgerMenu = new HamburgerMenuComponent();
    this.dashboard = new DashboardComponent();
    this.currentPage = 'dashboard';
  }

  init() {
    this.render();
    this.setupEventListeners();
  }

  render() {
    const appContainer = document.getElementById('app');
    appContainer.innerHTML = `
      <div class="app">
        ${this.navigation.render()}
        ${this.hamburgerMenu.render()}
        ${this.dashboard.render()}
      </div>
    `;

    // Inicializar componentes
    this.navigation.init();
    this.hamburgerMenu.init();
    this.dashboard.init();
  }

  setupEventListeners() {
    // Escuchar cambios de página
    document.addEventListener('pageChange', (event) => {
      this.navigateToPage(event.detail.page);
    });
  }

  navigateToPage(page) {
    this.currentPage = page;
    
    // Ocultar todas las páginas
    const pages = document.querySelectorAll('[id$="-page"]');
    pages.forEach(pageElement => {
      pageElement.style.display = 'none';
    });

    // Mostrar la página seleccionada
    let pageContent = '';
    
    switch (page) {
      case 'dashboard':
        document.getElementById('dashboard-page').style.display = 'block';
        return;
        
      case 'reportes':
        pageContent = Pages.renderReportes();
        break;
        
      case 'checklist':
        pageContent = Pages.renderChecklist();
        break;
        
      case 'qr':
        pageContent = Pages.renderQR();
        break;
        
      case 'auditorias':
        pageContent = Pages.renderAuditorias();
        break;
        
      case 'hallazgos':
        pageContent = Pages.renderHallazgos();
        break;
        
      case 'areas':
        pageContent = Pages.renderAreas();
        break;
        
      case 'configuracion':
        pageContent = Pages.renderConfiguracion();
        break;
        
      default:
        pageContent = this.dashboard.render();
    }

    // Reemplazar el contenido principal
    const gridElement = document.querySelector('.grid');
    if (gridElement) {
      gridElement.outerHTML = pageContent;
    }
  }
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.init();
});