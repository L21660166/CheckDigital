export class DashboardComponent {
  constructor() {
    this.lineChart = null;
    this.doughnutChart = null;
  }

  init() {
    this.render();
    this.initCharts();
  }

  render() {
    return `
      <div class="grid" id="dashboard-page">
        <main class="main">
          <!-- KPI row -->
          <div class="card kpis">
            <div class="kpi">
              <div class="label">Cumplimiento 5S</div>
              <div class="value">87%</div>
              <div class="trend muted">Promedio por áreas</div>
              <div class="progress"><i style="width:87%;background:linear-gradient(90deg,var(--accent),var(--accent-2))"></i></div>
            </div>

            <div class="kpi">
              <div class="label">Auditorías este mes</div>
              <div class="value">24</div>
              <div class="trend muted">Programadas y realizadas</div>
              <div class="progress"><i style="width:60%;background:linear-gradient(90deg,var(--accent-2),#60a5fa)"></i></div>
            </div>

            <div class="kpi">
              <div class="label">Hallazgos abiertos</div>
              <div class="value">6</div>
              <div class="trend muted">Acciones pendientes</div>
              <div class="progress"><i style="width:40%;background:linear-gradient(90deg,#f59e0b,#f97316)"></i></div>
            </div>

            <div class="kpi">
              <div class="label">Acciones resueltas</div>
              <div class="value">78%</div>
              <div class="trend muted">Cerradas a tiempo</div>
              <div class="progress"><i style="width:78%;background:linear-gradient(90deg,var(--success),#34d399)"></i></div>
            </div>
          </div>

          <!-- Indicadores 5S -->
          <div class="card">
            <h3 style="margin-top:0">Indicadores por cada S</h3>
            <div class="s5-indicators">
              <div class="s5-indicator" style="border-left:4px solid #3b82f6">
                <div class="s5-label">Seiri (Clasificar)</div>
                <div class="s5-value">92%</div>
                <div class="s5-desc">Elementos innecesarios</div>
                <div class="progress-container">
                  <div class="progress-label">
                    <span>Objetos identificados</span>
                    <span>92%</span>
                  </div>
                  <div class="progress-bar">
                    <div class="progress-fill" style="width:92%;background:#3b82f6"></div>
                  </div>
                </div>
              </div>
              <div class="s5-indicator" style="border-left:4px solid #10b981">
                <div class="s5-label">Seiton (Ordenar)</div>
                <div class="s5-value">85%</div>
                <div class="s5-desc">Todo en su lugar</div>
                <div class="progress-container">
                  <div class="progress-label">
                    <span>Herramientas etiquetadas</span>
                    <span>85%</span>
                  </div>
                  <div class="progress-bar">
                    <div class="progress-fill" style="width:85%;background:#10b981"></div>
                  </div>
                </div>
              </div>
              <div class="s5-indicator" style="border-left:4px solid #f59e0b">
                <div class="s5-label">Seiso (Limpiar)</div>
                <div class="s5-value">79%</div>
                <div class="s5-desc">Áreas limpias</div>
                <div class="progress-container">
                  <div class="progress-label">
                    <span>Puntos de limpieza</span>
                    <span>79%</span>
                  </div>
                  <div class="progress-bar">
                    <div class="progress-fill" style="width:79%;background:#f59e0b"></div>
                  </div>
                </div>
              </div>
              <div class="s5-indicator" style="border-left:4px solid #ef4444">
                <div class="s5-label">Seiketsu (Estandarizar)</div>
                <div class="s5-value">88%</div>
                <div class="s5-desc">Procedimientos</div>
                <div class="progress-container">
                  <div class="progress-label">
                    <span>Checklists completados</span>
                    <span>88%</span>
                  </div>
                  <div class="progress-bar">
                    <div class="progress-fill" style="width:88%;background:#ef4444"></div>
                  </div>
                </div>
              </div>
              <div class="s5-indicator" style="border-left:4px solid #8b5cf6">
                <div class="s5-label">Shitsuke (Disciplina)</div>
                <div class="s5-value">91%</div>
                <div class="s5-desc">Cumplimiento continuo</div>
                <div class="progress-container">
                  <div class="progress-label">
                    <span>Auditorías aprobadas</span>
                    <span>91%</span>
                  </div>
                  <div class="progress-bar">
                    <div class="progress-fill" style="width:91%;background:#8b5cf6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Charts -->
          <div class="card charts">
            <div>
              <h3 style="margin:0 0 8px 0">Tendencia de cumplimiento 5S</h3>
              <div class="chart-container">
                <canvas id="lineChart" width="600" height="300"></canvas>
              </div>
              <div style="display:flex;gap:8px;margin-top:12px;align-items:center">
                <div class="muted">Últimos 6 meses</div>
                <div style="margin-left:auto" class="muted">Fuente: Reportes de auditoría</div>
              </div>
            </div>

            <aside class="small-list">
              <div>
                <h4 style="margin:0 0 8px 0">Cumplimiento por área</h4>
                <div class="chart-container-small">
                  <canvas id="doughnutChart" width="300" height="200"></canvas>
                </div>
              </div>

              <div style="margin-top:8px">
                <h4 style="margin:0 0 8px 0">Últimas auditorías</h4>
                <table>
                  <thead><tr><th>Área</th><th>Fecha</th><th>Resultado</th></tr></thead>
                  <tbody>
                    <tr><td>Taller Electrónica</td><td>2025-09-20</td><td>85%</td></tr>
                    <tr><td>Lab Química</td><td>2025-09-18</td><td>72%</td></tr>
                    <tr><td>Estación 4</td><td>2025-09-12</td><td>94%</td></tr>
                  </tbody>
                </table>
              </div>
            </aside>
          </div>

          <div class="card">
            <h3 style="margin-top:0">Hallazgos críticos (pendientes)</h3>
            <table>
              <thead><tr><th>Área</th><th>Hallazgo</th><th>S afectada</th><th>Responsable</th><th>Vence</th></tr></thead>
              <tbody>
                <tr><td>Lab Química</td><td>Faltan etiquetas en estantes</td><td>Seiton</td><td>Rosa</td><td>2025-09-30</td></tr>
                <tr><td>Taller Electrónica</td><td>Cables sueltos</td><td>Seiri</td><td>Andrés</td><td>2025-10-02</td></tr>
                <tr><td>Estación 4</td><td>Contenedor de residuos incompleto</td><td>Seiso</td><td>María</td><td>2025-10-05</td></tr>
                <tr><td>Almacén</td><td>Falta procedimiento de limpieza</td><td>Seiketsu</td><td>Carlos</td><td>2025-10-10</td></tr>
              </tbody>
            </table>
          </div>
        </main>

        <aside class="sidebar card">
          <div class="section">
            <h4 style="margin:0 0 8px 0">Áreas y trazabilidad</h4>
            <div class="areas-list">
              <div class="area-item"><div><strong>Taller Electrónica</strong><div class="muted">Última: 2025-09-20</div></div><div>85%</div></div>
              <div class="area-item"><div><strong>Lab Química</strong><div class="muted">Última: 2025-09-18</div></div><div>72%</div></div>
              <div class="area-item"><div><strong>Estación 4</strong><div class="muted">Última: 2025-09-12</div></div><div>94%</div></div>
              <div class="area-item"><div><strong>Almacén</strong><div class="muted">Última: 2025-08-30</div></div><div>68%</div></div>
            </div>
          </div>

          <div class="section">
            <h4 style="margin:0 0 8px 0">Filtros rápidos</h4>
            <div style="display:flex;flex-direction:column;gap:8px">
              <select style="padding:8px;border-radius:8px;border:1px solid #e5e7eb">
                <option>Últimos 30 días</option>
                <option>Últimos 90 días</option>
                <option>Desde inicio del año</option>
              </select>
              <select style="padding:8px;border-radius:8px;border:1px solid #e5e7eb">
                <option>Todos los responsables</option>
                <option>Rosa</option>
                <option>Andrés</option>
              </select>
              <button style="padding:10px;border-radius:8px;border:0;background:linear-gradient(90deg,var(--accent),var(--accent-2));color:white;cursor:pointer">Aplicar filtros</button>
            </div>
          </div>

          <div class="section">
            <h4 style="margin:0 0 8px 0">Indicadores rápidos</h4>
            <div style="display:flex;flex-direction:column;gap:8px">
              <div class="muted">Auditorías atrasadas <strong>2</strong></div>
              <div class="muted">Acciones por vencer <strong>4</strong></div>
              <div class="muted">Áreas con bajo cumplimiento <strong>2</strong></div>
              <div class="muted">Mejor S: Shitsuke <strong>91%</strong></div>
              <div class="muted">S a mejorar: Seiso <strong>79%</strong></div>
            </div>
          </div>
        </aside>
      </div>
    `;
  }

  initCharts() {
    // Gráfica de línea estática
    const ctxLine = document.getElementById('lineChart').getContext('2d');
    this.lineChart = new Chart(ctxLine, {
      type: 'line',
      data: {
        labels: ['Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep'],
        datasets: [{
          label: 'Cumplimiento 5S (%)',
          data: [72, 78, 81, 85, 83, 87],
          fill: true,
          tension: 0.3,
          backgroundColor: 'rgba(30,143,110,0.12)',
          borderColor: 'rgba(30,143,110,1)',
          pointBackgroundColor: 'white',
          pointBorderColor: 'rgba(30,143,110,1)',
          pointBorderWidth: 2,
          pointRadius: 4
        }]
      },
      options: {
        responsive: false,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            grid: { display: true },
            ticks: { stepSize: 20 }
          },
          x: { grid: { display: false } }
        },
        interaction: { mode: null, intersect: false },
        animation: false,
        hover: { mode: null, animationDuration: 0 },
        elements: { line: { tension: 0.3 } }
      }
    });

    // Gráfica de dona estática
    const ctxDough = document.getElementById('doughnutChart').getContext('2d');
    this.doughnutChart = new Chart(ctxDough, {
      type: 'doughnut',
      data: {
        labels: ['Taller Electrónica', 'Lab Química', 'Estación 4', 'Almacén'],
        datasets: [{
          data: [85, 72, 94, 68],
          backgroundColor: ['#1e8f6e', '#3aa0d8', '#34d399', '#f59e0b'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: false,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              boxWidth: 12,
              font: { size: 11 }
            }
          },
          tooltip: { enabled: false }
        },
        interaction: { mode: null, intersect: false },
        animation: false,
        cutout: '60%'
      }
    });

    // Prevenir interacciones
    [this.lineChart, this.doughnutChart].forEach(chart => {
      chart.canvas.style.pointerEvents = 'none';
    });
  }
}