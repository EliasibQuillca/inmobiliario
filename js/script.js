// Estructura base para cargar dinámicamente datos en tarjetas/tablas
// Puedes conectar aquí tu backend o APIs para actualizar la UI en todas las páginas

// Ejemplo: cargar departamentos dinámicamente
function renderDepartamentos(departamentos) {
  const tbody = document.querySelector('#tablaDepartamentos tbody');
  if (!tbody) return;
  tbody.innerHTML = '';
  departamentos.forEach(dep => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${dep.nombre}</td>
      <td>${dep.ubicacion}</td>
      <td>${dep.estado}</td>
      <td><span class="badge badge-${dep.estado.toLowerCase()}">${dep.estado}</span></td>
    `;
    tbody.appendChild(tr);
  });
}

// Renderizar clientes dinámicamente
function renderClientes(clientes) {
  const tbody = document.querySelector('#tablaClientes');
  if (!tbody) return;
  tbody.innerHTML = '';
  clientes.forEach(cli => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${cli.nombre}</td>
      <td>${cli.email}</td>
      <td>${cli.telefono}</td>
      <td><span class="badge badge-${cli.estado.toLowerCase()}">${cli.estado}</span></td>
      <td><button class="btn-outline">Ver</button></td>
    `;
    tbody.appendChild(tr);
  });
}

// Renderizar ventas dinámicamente
function renderVentas(ventas) {
  const tbody = document.querySelector('#tablaVentas');
  if (!tbody) return;
  tbody.innerHTML = '';
  ventas.forEach(venta => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${venta.propiedad}</td>
      <td>${venta.cliente}</td>
      <td>${venta.monto}</td>
      <td><span class="badge badge-${venta.estado.toLowerCase()}">${venta.estado}</span></td>
      <td><button class="btn-outline">Ver</button></td>
    `;
    tbody.appendChild(tr);
  });
}

// Renderizar reservas dinámicamente
function renderReservas(reservas) {
  const tbody = document.querySelector('#tablaReservas');
  if (!tbody) return;
  tbody.innerHTML = '';
  reservas.forEach(res => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${res.propiedad}</td>
      <td>${res.cliente}</td>
      <td>${res.fecha}</td>
      <td><span class="badge badge-${res.estado.toLowerCase()}">${res.estado}</span></td>
      <td><button class="btn-outline">Ver</button></td>
    `;
    tbody.appendChild(tr);
  });
}

// Renderizar cotizaciones dinámicamente
function renderCotizaciones(cotizaciones) {
  const tbody = document.querySelector('#tablaCotizaciones');
  if (!tbody) return;
  tbody.innerHTML = '';
  cotizaciones.forEach(cot => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${cot.propiedad}</td>
      <td>${cot.cliente}</td>
      <td>${cot.monto}</td>
      <td><span class="badge badge-${cot.estado.toLowerCase()}">${cot.estado}</span></td>
      <td><button class="btn-outline">Ver</button></td>
    `;
    tbody.appendChild(tr);
  });
}

// Renderizar propiedades/lotes dinámicamente
function renderPropiedades(propiedades) {
  const contenedor = document.getElementById('contenedorPropiedades');
  if (!contenedor) return;
  contenedor.innerHTML = '';
  propiedades.forEach(prop => {
    const card = document.createElement('div');
    card.className = 'card p-4 flex flex-col';
    card.innerHTML = `
      <img src="${prop.imagen}" alt="${prop.nombre}" class="rounded-lg mb-4 h-48 object-cover">
      <h3 class="text-xl font-bold mb-2">${prop.nombre}</h3>
      <p class="text-gray-600 mb-2">${prop.ubicacion}</p>
      <span class="badge badge-${prop.estado.toLowerCase()}">${prop.estado}</span>
      <button class="btn-main mt-4">Ver Detalles</button>
    `;
    contenedor.appendChild(card);
  });
}

// Renderizar paneles de resumen (dashboard y reportes)
function renderResumenActividad(resumen) {
  const contenedor = document.getElementById('resumenActividad');
  if (!contenedor) return;
  contenedor.innerHTML = '';
  resumen.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card p-6 text-center';
    card.innerHTML = `
      <div class="text-3xl font-bold mb-2" style="color:${item.color}">${item.valor}</div>
      <div class="text-gray-700">${item.titulo}</div>
    `;
    contenedor.appendChild(card);
  });
}

function renderPanelesDashboard(data) {
  document.getElementById('panelClientes').querySelector('div.text-3xl').textContent = data.clientes;
  document.getElementById('panelDepartamentos').querySelector('div.text-3xl').textContent = data.departamentos;
  document.getElementById('panelVentas').querySelector('div.text-3xl').textContent = data.ventas;
}
