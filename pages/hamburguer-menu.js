export class HamburgerMenuComponent {
  constructor() {
    this.sidebarMenu = null;
    this.overlay = null;
    this.hamburgerMenu = null;
  }

  init() {
    this.render();
    this.setupEventListeners();
  }

  render() {
    return `
      <div class="sidebar-menu" id="sidebar-menu">
        <div class="menu-header">
          <h3>Menú 5S</h3>
        </div>
        <div class="menu-item active" data-page="dashboard">
          <i class="material-icons">dashboard</i>
          <span>Dashboard</span>
        </div>
        <div class="menu-item" data-page="reportes">
          <i class="material-icons">assessment</i>
          <span>Reportes</span>
        </div>
        <div class="menu-item" data-page="checklist">
          <i class="material-icons">checklist</i>
          <span>Checklist</span>
        </div>
        <div class="menu-item" data-page="qr">
          <i class="material-icons">qr_code</i>
          <span>QR</span>
        </div>
        <div class="menu-item" data-page="auditorias">
          <i class="material-icons">assignment</i>
          <span>Auditorías</span>
        </div>
        <div class="menu-item" data-page="hallazgos">
          <i class="material-icons">warning</i>
          <span>Hallazgos</span>
        </div>
        <div class="menu-item" data-page="areas">
          <i class="material-icons">location_on</i>
          <span>Áreas</span>
        </div>
        <div class="menu-item" data-page="configuracion">
          <i class="material-icons">settings</i>
          <span>Configuración</span>
        </div>
      </div>
      <div class="overlay" id="overlay"></div>
    `;
  }

  setupEventListeners() {
    this.hamburgerMenu = document.getElementById('hamburger-menu');
    this.sidebarMenu = document.getElementById('sidebar-menu');
    this.overlay = document.getElementById('overlay');

    // Toggle menu
    this.hamburgerMenu.addEventListener('click', (e) => {
      this.toggleMenu();
      e.stopPropagation();
    });

    // Close menu when clicking on overlay
    this.overlay.addEventListener('click', () => {
      this.closeMenu();
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!this.sidebarMenu.contains(e.target) && !this.hamburgerMenu.contains(e.target)) {
        this.closeMenu();
      }
    });

    // Menu item click handlers
    const menuItems = document.querySelectorAll('.sidebar-menu .menu-item');
    menuItems.forEach(item => {
      item.addEventListener('click', () => {
        this.handleMenuItemClick(item);
      });
    });
  }

  toggleMenu() {
    this.sidebarMenu.classList.toggle('active');
    this.hamburgerMenu.classList.toggle('active');
    this.overlay.style.display = this.sidebarMenu.classList.contains('active') ? 'block' : 'none';
  }

  closeMenu() {
    this.sidebarMenu.classList.remove('active');
    this.hamburgerMenu.classList.remove('active');
    this.overlay.style.display = 'none';
  }

  handleMenuItemClick(item) {
    // Remove active class from all items
    const menuItems = document.querySelectorAll('.sidebar-menu .menu-item');
    menuItems.forEach(i => i.classList.remove('active'));
    
    // Add active class to clicked item
    item.classList.add('active');
    
    // Navigate to page
    const pageId = item.getAttribute('data-page');
    this.navigateToPage(pageId);
    
    // Close menu on mobile
    if (window.innerWidth <= 1080) {
      this.closeMenu();
    }
  }

  navigateToPage(page) {
    // Dispatch custom event for page navigation
    const event = new CustomEvent('pageChange', { detail: { page } });
    document.dispatchEvent(event);
  }
}