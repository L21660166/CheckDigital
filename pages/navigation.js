export class NavigationComponent {
  constructor() {
    this.dropdownNotif = null;
    this.dropdownProfile = null;
  }

  init() {
    this.render();
    this.setupEventListeners();
  }

  render() {
    return `
      <nav class="nav">
        <div style="display:flex;align-items:center">
          <div class="hamburger-menu" id="hamburger-menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="brand">
            <div class="logo">5S</div>
            <div>
              <h1>Panel 5S — Trazabilidad</h1>
              <p>Monitoreo de cumplimiento y auditorías</p>
            </div>
          </div>
        </div>

        <div class="nav-actions">
          <button class="icon-btn" id="btn-notif" aria-label="Notificaciones">
            <i class="material-icons">notifications</i>
            <span class="badge" id="notif-count">3</span>
          </button>
          <button class="icon-btn" id="btn-profile" aria-label="Perfil">
            <i class="material-icons">account_circle</i>
          </button>
        </div>

        <!-- Dropdowns -->
        <div class="dropdown" id="dropdown-notif" style="right:80px;">
          <h4 style="margin:6px 0 8px 0">Notificaciones</h4>
          <div class="notif-item"><div style="width:10px;height:10px;border-radius:50%;background:var(--accent);margin-top:6px"></div>
            <div><strong>Auditoría pendiente</strong><br><small class="muted">Taller Electrónica — vence en 2 días</small></div></div>
          <div class="notif-item"><div style="width:10px;height:10px;border-radius:50%;background:var(--accent-2);margin-top:6px"></div>
            <div><strong>Hallazgo nuevo</strong><br><small class="muted">Lab Química — 1 hallazgo asignado</small></div></div>
          <div class="notif-item"><div style="width:10px;height:10px;border-radius:50%;background:var(--success);margin-top:6px"></div>
            <div><strong>Acción cerrada</strong><br><small class="muted">Estación 4 — corregido</small></div></div>
        </div>

        <div class="dropdown" id="dropdown-profile" style="right:20px;">
          <div style="display:flex;gap:10px;align-items:center;margin-bottom:8px">
            <div style="width:44px;height:44px;border-radius:8px;background:linear-gradient(135deg,var(--accent),var(--accent-2));display:flex;align-items:center;justify-content:center;color:white;font-weight:700">JM</div>
            <div>
              <strong>Jimena Mendoza</strong><br><small class="muted">Administrador</small>
            </div>
          </div>
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:8px 0">
          <div style="display:flex;flex-direction:column;gap:8px">
            <button style="padding:8px;border-radius:8px;border:1px solid #e5e7eb;background:transparent;cursor:pointer">Mi perfil</button>
            <button style="padding:8px;border-radius:8px;border:1px solid #e5e7eb;background:transparent;cursor:pointer">Ajustes</button>
            <button style="padding:8px;border-radius:8px;border:1px solid #e5e7eb;background:transparent;cursor:pointer">Cerrar sesión</button>
          </div>
        </div>
      </nav>
    `;
  }

  setupEventListeners() {
    const btnNotif = document.getElementById('btn-notif');
    const btnProfile = document.getElementById('btn-profile');
    this.dropdownNotif = document.getElementById('dropdown-notif');
    this.dropdownProfile = document.getElementById('dropdown-profile');

    btnNotif.addEventListener('click', (e) => {
      this.dropdownNotif.classList.toggle('show');
      this.dropdownProfile.classList.remove('show');
      e.stopPropagation();
    });

    btnProfile.addEventListener('click', (e) => {
      this.dropdownProfile.classList.toggle('show');
      this.dropdownNotif.classList.remove('show');
      e.stopPropagation();
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!btnNotif.contains(e.target) && !this.dropdownNotif.contains(e.target)) 
        this.dropdownNotif.classList.remove('show');
      if (!btnProfile.contains(e.target) && !this.dropdownProfile.contains(e.target)) 
        this.dropdownProfile.classList.remove('show');
    });
  }
}