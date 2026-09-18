(() => {
  const STORAGE_KEY = 'lanonna_state_v1';
  const SESSION_KEY = 'lanonna_session_v1';

  const ICONS = {
    dashboard:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/></svg>',
    orders:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2h12v20H6z"/><path d="M9 6h6M9 10h6M9 14h4"/></svg>',
    cake:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 10h16v10H4z"/><path d="M7 10V7h10v3"/><path d="M9 7V5m6 2V5"/><path d="M9 5c0-1 1-2 1-2s1 1 1 2m4 0c0-1 1-2 1-2s1 1 1 2"/></svg>',
    users:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    products:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 8l-9 5-9-5 9-5 9 5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 16 9 5 9-5"/></svg>',
    recipe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3h8l3 3v15H5V3h3Z"/><path d="M8 9h8M8 13h8M8 17h5"/></svg>',
    inventory:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7h18v14H3z"/><path d="M5 3h14l2 4H3l2-4Z"/><path d="M8 11h8"/></svg>',
    truck:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h11v10H3z"/><path d="M14 9h4l3 3v4h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>',
    money:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M7 9h.01M17 15h.01"/></svg>',
    supplier:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 21v-6h6v6"/></svg>',
    cart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/><path d="M3 4h2l2.5 11h10l2-7H7"/></svg>',
    production:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18V9l-6 3V9l-6 3V5H3v16Z"/><path d="M7 17h2m3 0h2m3 0h2"/></svg>',
    chart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="M7 15v3m5-8v8m5-13v13"/></svg>',
    activity:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    settings:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1v.1h-4v-.1a1.7 1.7 0 0 0-.4-1 1.7 1.7 0 0 0-1-.6 1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 3.6 15a1.7 1.7 0 0 0-.6-1 1.7 1.7 0 0 0-1-.4H2v-4h.1a1.7 1.7 0 0 0 1-.4 1.7 1.7 0 0 0 .6-1 1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 8 3.6a1.7 1.7 0 0 0 1-.6 1.7 1.7 0 0 0 .4-1V2h4v.1a1.7 1.7 0 0 0 .4 1 1.7 1.7 0 0 0 1 .6 1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.4 8c.14.37.35.7.6 1 .26.27.62.41 1 .4h.1v4H21a1.7 1.7 0 0 0-1 .4c-.27.26-.47.6-.6 1Z"/></svg>',
    plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>',
    search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3-3"/></svg>',
    eye:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>',
    edit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z"/></svg>',
    trash:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M8 6V4h8v2m3 0-1 14H6L5 6m5 5v5m4-5v5"/></svg>',
    check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m5 13 4 4L19 7"/></svg>',
    close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 6 12 12M18 6 6 18"/></svg>',
    moon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.8A9 9 0 1 1 11.2 3c0 .25 0 .5.04.75A7 7 0 0 0 20.25 12c.25 0 .5 0 .75-.04Z"/></svg>',
    sun:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4"/></svg>',
    download:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v12m-5-5 5 5 5-5M5 21h14"/></svg>',
    upload:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21V9m-5 5 5-5 5 5M5 3h14"/></svg>',
    logout:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 17l5-5-5-5M15 12H3M21 3v18h-6"/></svg>',
    menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
    print:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v7H6z"/></svg>'
  };

  const NAV = [
    {group:'Inicio',items:[['dashboard','Dashboard','dashboard']]},
    {group:'Ventas',items:[['orders','Pedidos','orders'],['custom','Personalizados','cake'],['clients','Clientes','users'],['payments','Pagos','money']]},
    {group:'Catálogo & Producción',items:[['products','Productos','products'],['recipes','Recetas y costos','recipe'],['production','Producción','production']]},
    {group:'Abastecimiento',items:[['inventory','Insumos','inventory'],['suppliers','Proveedores','supplier'],['purchases','Compras','cart']]},
    {group:'Logística',items:[['deliveries','Entregas','truck']]},
    {group:'Gestión',items:[['reports','Reportes','chart'],['activity','Actividad','activity'],['settings','Configuración','settings']]}
  ];

  const PAGE_META = {
    dashboard:['Dashboard','Visión general de ventas, pedidos, producción e inventario.'],
    orders:['Pedidos','Gestiona el ciclo completo de cada pedido.'],
    custom:['Pedidos personalizados','Briefing, diseño, anticipo, producción y entrega.'],
    clients:['Clientes','Historial y datos de contacto de clientes.'],
    payments:['Pagos','Control de anticipos, saldos y medios de pago.'],
    products:['Productos','Catálogo, precios, costos y disponibilidad.'],
    recipes:['Recetas y costos','Costeo de recetas e insumos por producto.'],
    production:['Producción','Planifica y sigue el trabajo del obrador.'],
    inventory:['Insumos','Stock, mínimos, vencimientos y alertas.'],
    suppliers:['Proveedores','Contactos y tiempos de entrega.'],
    purchases:['Compras','Órdenes de compra y reposición de insumos.'],
    deliveries:['Entregas','Agenda de reparto y estado de entregas.'],
    reports:['Reportes','Indicadores comerciales y operativos.'],
    activity:['Actividad','Trazabilidad local de operaciones relevantes.'],
    settings:['Configuración','Datos del negocio, respaldo y preferencias.']
  };

  let state, currentUser=null, currentView='dashboard';
  const $ = id => document.getElementById(id);
  const escapeHtml = v => String(v ?? '').replace(/[&<>"']/g, m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  const clone = o => JSON.parse(JSON.stringify(o));
  const money = n => `${Number(n||0).toLocaleString('es-BO',{minimumFractionDigits:2,maximumFractionDigits:2})} ${state.settings.currency}`;
  const dateFmt = d => d ? new Date(d+'T00:00:00').toLocaleDateString('es-BO',{day:'2-digit',month:'short',year:'numeric'}) : '—';
  const dtFmt = d => d ? new Date(d).toLocaleString('es-BO',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'}) : '—';
  const nextId = arr => Math.max(0,...arr.map(x=>Number(x.id)||0))+1;
  const get = (key,id) => state[key].find(x=>Number(x.id)===Number(id));
  const save = () => localStorage.setItem(STORAGE_KEY,JSON.stringify(state));
  const sessionSave = () => currentUser ? localStorage.setItem(SESSION_KEY,JSON.stringify({userId:currentUser.id})) : localStorage.removeItem(SESSION_KEY);

  function toast(message,type='success'){
    const node=document.createElement('div');node.className=`toast ${type}`;node.textContent=message;$('toastContainer').appendChild(node);setTimeout(()=>node.remove(),2800);
  }
  function chip(text){
    const t=String(text||''); const l=t.toLowerCase(); let c='';
    if(/pagado|entregado|recibido|listo|confirmado|activo/.test(l))c='success';
    else if(/parcial|programado|pendiente aprobación|preparación|horneado|relleno|decoración/.test(l))c='warning';
    else if(/cancelado|incidencia|reembolsado/.test(l))c='danger';
    else if(/en producción|en ruta|planificado/.test(l))c='info';
    return `<span class="chip ${c}">${escapeHtml(t)}</span>`;
  }
  function roleCan(module,action='view'){
    if(!currentUser)return false; const r=currentUser.role;
    if(['Administrador','Gerencia'].includes(r))return true;
    const map={
      Ventas:['dashboard','orders','custom','clients','payments','products','deliveries','reports','activity'],
      Producción:['dashboard','orders','custom','products','recipes','production','inventory','suppliers','purchases','activity'],
      Reparto:['dashboard','orders','clients','deliveries','activity']
    };
    if(!map[r]?.includes(module))return false;
    if(action==='delete' && r!=='Ventas')return false;
    if(['Reparto'].includes(r) && action!=='view' && module!=='deliveries')return false;
    return true;
  }
  function activity(action,module,detail){
    state.activity.unshift({id:nextId(state.activity),at:new Date().toISOString(),userId:currentUser?.id||1,action,module,detail});
    state.activity=state.activity.slice(0,150);
  }

  async function loadState(){
    const stored=localStorage.getItem(STORAGE_KEY); if(stored){try{return JSON.parse(stored)}catch{}}
    try{
      const keys=['users','clients','suppliers','ingredients','products','recipes','orders','deliveries','payments','purchases','production','activity','settings'];
      const vals=await Promise.all(keys.map(k=>fetch(`json/${k}.json`).then(r=>{if(!r.ok)throw new Error();return r.json()})));
      return Object.fromEntries(keys.map((k,i)=>[k,vals[i]]));
    }catch{return clone(window.LANONNA_SEED)}
  }

  function bindFixedIcons(){
    $('mailIcon').innerHTML=ICONS.money.replace('rect x="3" y="5" width="18" height="14" rx="2"','path d="M3 6h18v12H3z"').replace('<circle cx="12" cy="12" r="3"/>','<path d="m3 7 9 6 9-6"/>').replace('<path d="M7 9h.01M17 15h.01"/>','');
    $('lockIcon').innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>';
    $('togglePassword').innerHTML=ICONS.eye;$('loginIcon').innerHTML=ICONS.logout;$('sidebarToggle').innerHTML=ICONS.menu;$('searchIcon').innerHTML=ICONS.search;$('logoutBtn').innerHTML=ICONS.logout;$('mobileMenuBtn').innerHTML=ICONS.menu;$('plusIcon').innerHTML=ICONS.plus;$('backupBtn').innerHTML=ICONS.download;$('importIcon').innerHTML=ICONS.upload;$('themeBtn').innerHTML=ICONS.moon;$('closeModalBtn').innerHTML=ICONS.close;$('closeDrawerBtn').innerHTML=ICONS.close;$('paletteSearchIcon').innerHTML=ICONS.search;
  }

  function renderQuickLogins(){
    $('quickLoginGrid').innerHTML=state.users.map(u=>`<button class="quick-role" data-quick-user="${u.id}"><span class="avatar">${escapeHtml(u.avatar)}</span><span><strong>${escapeHtml(u.role)}</strong><small>${escapeHtml(u.name)}</small></span></button>`).join('');
  }

  function renderNav(){
    const counts={orders:state.orders.filter(o=>!['Entregado','Cancelado'].includes(o.status)).length,custom:state.orders.filter(o=>o.type==='Personalizado'&&!['Entregado','Cancelado'].includes(o.status)).length,inventory:state.ingredients.filter(i=>i.stock<=i.minStock).length,deliveries:state.deliveries.filter(d=>d.status!=='Entregado').length,payments:state.orders.filter(o=>o.balance>0).length,production:state.production.filter(p=>p.status!=='Listo').length};
    $('sidebarNav').innerHTML=NAV.map(g=>`<div class="nav-group">${g.group}</div>${g.items.filter(([key])=>roleCan(key)).map(([key,label,ic])=>`<button class="nav-item ${currentView===key?'active':''}" data-view="${key}">${ICONS[ic]}<span class="nav-label">${label}</span>${counts[key]!==undefined?`<span class="nav-badge">${counts[key]}</span>`:''}</button>`).join('')}`).join('');
  }

  function showApp(){
    $('authScreen').classList.add('hidden');$('app').classList.remove('hidden');
    $('sidebarAvatar').textContent=currentUser.avatar;$('sidebarName').textContent=currentUser.name;$('sidebarRole').textContent=currentUser.role;$('topAvatar').textContent=currentUser.avatar;$('topName').textContent=currentUser.name;$('topRole').textContent=currentUser.role;
    renderNav();renderView();
  }
  function setView(v){if(!roleCan(v))return;currentView=v;renderNav();renderView();if(window.innerWidth<900)$('sidebar').classList.remove('open')}

  function pageHead(actions=''){
    const [title,sub]=PAGE_META[currentView];$('pageTitle').textContent=title;$('breadcrumb').textContent=`Operaciones / ${title}`;
    return `<div class="page-head"><div><span class="eyebrow">LA NONNA</span><h2>${title}</h2><p>${sub}</p></div><div class="toolbar">${actions}</div></div>`;
  }
  function metric(label,value,foot,ic){return `<article class="metric-card"><div class="metric-top"><div><div class="metric-label">${label}</div><div class="metric-value">${value}</div></div><div class="metric-icon">${ICONS[ic]}</div></div><div class="metric-foot">${foot}</div></article>`}
  function actionButtons(module,id,extra=''){
    return `<div class="actions"><button class="action-btn view" data-action="view" data-module="${module}" data-id="${id}" title="Ver">${ICONS.eye}</button>${roleCan(module,'edit')?`<button class="action-btn edit" data-action="edit" data-module="${module}" data-id="${id}" title="Editar">${ICONS.edit}</button>`:''}${extra}${roleCan(module,'delete')?`<button class="action-btn delete" data-action="delete" data-module="${module}" data-id="${id}" title="Eliminar">${ICONS.trash}</button>`:''}</div>`;
  }

  function renderDashboard(){
    const open=state.orders.filter(o=>!['Entregado','Cancelado'].includes(o.status));
    const sales=state.payments.filter(p=>p.status==='Confirmado').reduce((s,p)=>s+Number(p.amount),0);
    const pending=state.orders.reduce((s,o)=>s+Number(o.balance||0),0);
    const low=state.ingredients.filter(i=>Number(i.stock)<=Number(i.minStock));
    const upcoming=[...open].sort((a,b)=>a.eventDate.localeCompare(b.eventDate)).slice(0,5);
    const pipeline=state.settings.productionStatuses.map(st=>({label:st,count:state.production.filter(p=>p.status===st).length}));
    $('content').innerHTML=pageHead(`<button class="primary-button" data-create="orders">${ICONS.plus}Nuevo pedido</button>`)+`
      <section class="metric-grid">${metric('Pedidos abiertos',open.length,'Pedidos activos en operación','orders')}${metric('Ventas registradas',money(sales),'Pagos confirmados','money')}${metric('Saldo por cobrar',money(pending),'Anticipos y saldos pendientes','chart')}${metric('Stock bajo',low.length,'Insumos por debajo del mínimo','inventory')}</section>
      <section class="grid-2">
        <article class="panel"><div class="panel-head"><div><h3>Próximos pedidos</h3><p>Prioridad operativa por fecha de evento.</p></div><button class="secondary-button" data-view="orders">Ver todos</button></div><div class="list">${upcoming.map(o=>`<div class="list-row"><div class="list-main"><strong>${o.code} · ${escapeHtml(get('clients',o.clientId)?.name||'Cliente')}</strong><span>${dateFmt(o.eventDate)} · ${o.type} · ${money(o.total)}</span></div><div>${chip(o.status)}</div></div>`).join('')||'<div class="list-row">Sin pedidos abiertos.</div>'}</div></article>
        <article class="panel"><div class="panel-head"><div><h3>Producción</h3><p>Carga por etapa del obrador.</p></div></div><div class="bar-list">${pipeline.map(x=>{const max=Math.max(1,...pipeline.map(y=>y.count));return `<div class="bar-row"><div class="bar-meta"><span>${x.label}</span><strong>${x.count}</strong></div><div class="progress"><span style="width:${Math.round(x.count/max*100)}%"></span></div></div>`}).join('')}</div></article>
      </section>
      <section class="grid-2">
        <article class="panel"><div class="panel-head"><div><h3>Alertas de insumos</h3><p>Reposición sugerida según mínimos configurados.</p></div><button class="secondary-button" data-view="inventory">Inventario</button></div><div class="list">${low.slice(0,6).map(i=>`<div class="list-row"><div class="list-main"><strong>${escapeHtml(i.name)}</strong><span>${i.stock} ${i.unit} disponibles · mínimo ${i.minStock}</span></div>${chip('Stock bajo')}</div>`).join('')||'<div class="list-row">Inventario dentro de mínimos.</div>'}</div></article>
        <article class="panel"><div class="panel-head"><div><h3>Actividad reciente</h3><p>Últimos movimientos del equipo.</p></div><button class="secondary-button" data-view="activity">Historial</button></div><div class="list">${state.activity.slice(0,5).map(a=>`<div class="list-row"><div class="list-main"><strong>${escapeHtml(a.action)}</strong><span>${escapeHtml(a.detail)} · ${dtFmt(a.at)}</span></div></div>`).join('')}</div></article>
      </section>`;
  }

  function renderOrders(customOnly=false){
    const rows=state.orders.filter(o=>!customOnly||o.type==='Personalizado');
    $('content').innerHTML=pageHead(`<button class="primary-button" data-create="orders">${ICONS.plus}Nuevo pedido</button>`)+tableShell('orders',rows,`<input class="filter-input" data-filter="orders" placeholder="Buscar pedido o cliente…"><select class="filter-select" data-status-filter="orders"><option value="">Todos los estados</option>${state.settings.orderStatuses.map(s=>`<option>${s}</option>`).join('')}</select>`,orderRows(rows));
  }
  function orderRows(rows){return rows.map(o=>`<tr data-row-text="${(o.code+' '+(get('clients',o.clientId)?.name||'')+' '+o.status).toLowerCase()}" data-row-status="${o.status}"><td><div class="table-title">${o.code}</div><div class="table-sub">${o.type}</div></td><td>${escapeHtml(get('clients',o.clientId)?.name||'—')}</td><td>${dateFmt(o.eventDate)}</td><td>${chip(o.status)}</td><td>${chip(o.paymentStatus)}</td><td>${money(o.total)}</td><td>${money(o.balance)}</td><td>${actionButtons('orders',o.id,`<button class="action-btn extra" data-action="print" data-module="orders" data-id="${o.id}" title="Comprobante">${ICONS.print}</button>`)}</td></tr>`).join('')}

  function tableShell(module,rows,filters,body){return `<section class="table-panel"><div class="table-tools"><div class="filters">${filters}</div><span class="chip">${rows.length} registros</span></div><div class="table-scroll"><table class="data-table"><thead>${tableHead(module)}</thead><tbody id="tableBody">${body}</tbody></table></div></section>`}
  function tableHead(module){
    const heads={orders:['Pedido','Cliente','Evento','Estado','Pago','Total','Saldo','Acciones'],clients:['Cliente','Contacto','Dirección','Estado','Notas','Acciones'],payments:['Pago','Pedido','Fecha','Método','Monto','Estado','Acciones'],products:['Producto','Categoría','Tamaño','Precio','Costo','Disponibilidad','Acciones'],inventory:['Insumo','Stock','Mínimo','Unidad','Costo','Proveedor','Vence','Acciones'],suppliers:['Proveedor','Contacto','Teléfono','Lead time','Estado','Acciones'],purchases:['OC','Proveedor','Fecha','Estado','Total','Acciones'],production:['Pedido','Producto','Cantidad','Fecha','Etapa','Estación','Acciones'],deliveries:['Pedido','Fecha','Ventana','Dirección','Estado','Responsable','Acciones']};
    return `<tr>${(heads[module]||[]).map(h=>`<th>${h}</th>`).join('')}</tr>`;
  }

  function renderClients(){const rows=state.clients;$('content').innerHTML=pageHead(`<button class="primary-button" data-create="clients">${ICONS.plus}Nuevo cliente</button>`)+tableShell('clients',rows,`<input class="filter-input" data-filter="clients" placeholder="Buscar cliente, teléfono o correo…">`,rows.map(c=>`<tr data-row-text="${(c.name+' '+c.phone+' '+c.email).toLowerCase()}"><td><div class="table-title">${escapeHtml(c.name)}</div><div class="table-sub">${escapeHtml(c.email)}</div></td><td>${escapeHtml(c.phone)}</td><td>${escapeHtml(c.address||'—')}</td><td>${chip(c.status)}</td><td>${escapeHtml(c.notes||'—')}</td><td>${actionButtons('clients',c.id)}</td></tr>`).join(''))}
  function renderPayments(){const rows=state.payments;$('content').innerHTML=pageHead(`<button class="primary-button" data-create="payments">${ICONS.plus}Registrar pago</button>`)+tableShell('payments',rows,`<input class="filter-input" data-filter="payments" placeholder="Buscar referencia o pedido…">`,rows.map(p=>`<tr data-row-text="${(p.reference+' '+(get('orders',p.orderId)?.code||'')+' '+p.method).toLowerCase()}"><td><div class="table-title">${escapeHtml(p.reference)}</div><div class="table-sub">${escapeHtml(p.notes||'')}</div></td><td>${get('orders',p.orderId)?.code||'—'}</td><td>${dateFmt(p.date)}</td><td>${p.method}</td><td>${money(p.amount)}</td><td>${chip(p.status)}</td><td>${actionButtons('payments',p.id)}</td></tr>`).join(''))}
  function renderProducts(){const rows=state.products;$('content').innerHTML=pageHead(`<button class="primary-button" data-create="products">${ICONS.plus}Nuevo producto</button>`)+tableShell('products',rows,`<input class="filter-input" data-filter="products" placeholder="Buscar producto…">`,rows.map(p=>`<tr data-row-text="${(p.name+' '+p.category).toLowerCase()}"><td><div class="table-title">${escapeHtml(p.name)}</div><div class="table-sub">${escapeHtml(p.description)}</div></td><td>${p.category}</td><td>${p.size}</td><td>${money(p.price)}</td><td>${money(p.cost)}</td><td>${p.active?chip('Activo'):chip('Inactivo')}<div class="table-sub">${p.stockReady} listos</div></td><td>${actionButtons('products',p.id)}</td></tr>`).join(''))}
  function recipeCost(r){return r.items.reduce((s,it)=>s+Number(get('ingredients',it.ingredientId)?.costPerUnit||0)*Number(it.qty||0),0)+Number(r.laborCost||0)+Number(r.overhead||0)}
  function renderRecipes(){
    $('content').innerHTML=pageHead(`<button class="primary-button" data-create="recipes">${ICONS.plus}Nueva receta</button>`)+`<section class="cards-grid">${state.recipes.map(r=>{const p=get('products',r.productId),cost=recipeCost(r),margin=p?((p.price-cost)/p.price*100):0;return `<article class="entity-card"><div class="entity-head"><div><span class="eyebrow">COSTEO</span><h3>${escapeHtml(p?.name||'Producto')}</h3></div>${chip(`${margin.toFixed(0)}% margen`)}</div><p>${escapeHtml(r.notes||'')}</p><div class="detail-grid"><div class="detail-box"><span>Costo receta</span><strong>${money(cost)}</strong></div><div class="detail-box"><span>Precio venta</span><strong>${money(p?.price||0)}</strong></div><div class="detail-box"><span>Mano de obra</span><strong>${money(r.laborCost)}</strong></div><div class="detail-box"><span>Insumos</span><strong>${r.items.length}</strong></div></div>${actionButtons('recipes',r.id)}</article>`}).join('')}</section>`;
  }
  function renderInventory(){const rows=state.ingredients;$('content').innerHTML=pageHead(`<button class="primary-button" data-create="inventory">${ICONS.plus}Nuevo insumo</button>`)+tableShell('inventory',rows,`<input class="filter-input" data-filter="inventory" placeholder="Buscar insumo…"><select class="filter-select" data-stock-filter><option value="">Todo el stock</option><option value="low">Solo stock bajo</option></select>`,rows.map(i=>`<tr class="${i.stock<=i.minStock?'low-stock':''}" data-row-text="${i.name.toLowerCase()}" data-low="${i.stock<=i.minStock}"><td><div class="table-title">${escapeHtml(i.name)}</div></td><td>${i.stock}</td><td>${i.minStock}</td><td>${i.unit}</td><td>${money(i.costPerUnit)}</td><td>${escapeHtml(get('suppliers',i.supplierId)?.name||'—')}</td><td>${dateFmt(i.expiryDate)}</td><td>${actionButtons('inventory',i.id)}</td></tr>`).join(''))}
  function renderSuppliers(){const rows=state.suppliers;$('content').innerHTML=pageHead(`<button class="primary-button" data-create="suppliers">${ICONS.plus}Nuevo proveedor</button>`)+tableShell('suppliers',rows,`<input class="filter-input" data-filter="suppliers" placeholder="Buscar proveedor…">`,rows.map(s=>`<tr data-row-text="${(s.name+' '+s.contact).toLowerCase()}"><td><div class="table-title">${escapeHtml(s.name)}</div><div class="table-sub">${escapeHtml(s.email)}</div></td><td>${escapeHtml(s.contact)}</td><td>${escapeHtml(s.phone)}</td><td>${s.leadTimeDays} días</td><td>${chip(s.status)}</td><td>${actionButtons('suppliers',s.id)}</td></tr>`).join(''))}
  function renderPurchases(){const rows=state.purchases;$('content').innerHTML=pageHead(`<button class="primary-button" data-create="purchases">${ICONS.plus}Nueva compra</button>`)+tableShell('purchases',rows,`<input class="filter-input" data-filter="purchases" placeholder="Buscar orden de compra…">`,rows.map(p=>`<tr data-row-text="${(p.code+' '+(get('suppliers',p.supplierId)?.name||'')).toLowerCase()}"><td><div class="table-title">${p.code}</div><div class="table-sub">${escapeHtml(p.notes||'')}</div></td><td>${escapeHtml(get('suppliers',p.supplierId)?.name||'—')}</td><td>${dateFmt(p.date)}</td><td>${chip(p.status)}</td><td>${money(p.total)}</td><td>${actionButtons('purchases',p.id)}</td></tr>`).join(''))}
  function renderProduction(){const rows=state.production;$('content').innerHTML=pageHead(`<button class="primary-button" data-create="production">${ICONS.plus}Planificar producción</button>`)+tableShell('production',rows,`<input class="filter-input" data-filter="production" placeholder="Buscar pedido o producto…">`,rows.map(p=>`<tr data-row-text="${((get('orders',p.orderId)?.code||'')+' '+(get('products',p.productId)?.name||'')+' '+p.status).toLowerCase()}"><td>${get('orders',p.orderId)?.code||'—'}</td><td><div class="table-title">${escapeHtml(get('products',p.productId)?.name||'—')}</div><div class="table-sub">${escapeHtml(p.notes||'')}</div></td><td>${p.qty}</td><td>${dateFmt(p.dueDate)}</td><td>${chip(p.status)}</td><td>${escapeHtml(p.station)}</td><td>${actionButtons('production',p.id)}</td></tr>`).join(''))}
  function renderDeliveries(){const rows=state.deliveries;$('content').innerHTML=pageHead(`<button class="primary-button" data-create="deliveries">${ICONS.plus}Programar entrega</button>`)+tableShell('deliveries',rows,`<input class="filter-input" data-filter="deliveries" placeholder="Buscar pedido o dirección…">`,rows.map(d=>`<tr data-row-text="${((get('orders',d.orderId)?.code||'')+' '+d.address+' '+d.status).toLowerCase()}"><td>${get('orders',d.orderId)?.code||'—'}</td><td>${dateFmt(d.date)}</td><td>${d.timeSlot}</td><td>${escapeHtml(d.address)}</td><td>${chip(d.status)}</td><td>${escapeHtml(d.driver)}</td><td>${actionButtons('deliveries',d.id)}</td></tr>`).join(''))}
  function renderActivity(){ $('content').innerHTML=pageHead()+`<section class="panel"><div class="list">${state.activity.map(a=>`<div class="list-row"><div class="list-main"><strong>${escapeHtml(a.action)}</strong><span>${escapeHtml(a.module)} · ${escapeHtml(a.detail)}</span></div><span class="table-sub">${dtFmt(a.at)}</span></div>`).join('')}</div></section>` }
  function renderReports(){
    const totalOrders=state.orders.length,delivered=state.orders.filter(o=>o.status==='Entregado').length,paid=state.orders.filter(o=>o.paymentStatus==='Pagado').length,custom=state.orders.filter(o=>o.type==='Personalizado').length;
    const byCat=Object.entries(state.products.reduce((a,p)=>(a[p.category]=(a[p.category]||0)+1,a),{}));
    const max=Math.max(1,...byCat.map(x=>x[1]));
    $('content').innerHTML=pageHead()+`<section class="metric-grid">${metric('Pedidos registrados',totalOrders,'Histórico local','orders')}${metric('Entregados',delivered,`${totalOrders?Math.round(delivered/totalOrders*100):0}% del total`,'truck')}${metric('Pedidos pagados',paid,'Estado de cobranza','money')}${metric('Personalizados',custom,'Pedidos con briefing','cake')}</section><section class="grid-2"><article class="panel"><div class="panel-head"><div><h3>Catálogo por categoría</h3><p>Distribución de productos.</p></div></div><div class="bar-list">${byCat.map(([k,v])=>`<div class="bar-row"><div class="bar-meta"><span>${k}</span><strong>${v}</strong></div><div class="progress"><span style="width:${Math.round(v/max*100)}%"></span></div></div>`).join('')}</div></article><article class="panel"><div class="panel-head"><div><h3>Estado financiero de pedidos</h3><p>Saldos abiertos por pedido.</p></div></div><div class="list">${state.orders.filter(o=>o.balance>0).map(o=>`<div class="list-row"><div class="list-main"><strong>${o.code}</strong><span>${escapeHtml(get('clients',o.clientId)?.name||'Cliente')}</span></div><strong>${money(o.balance)}</strong></div>`).join('')||'<div class="list-row">Sin saldos pendientes.</div>'}</div></article></section>`;
  }
  function renderSettings(){
    $('content').innerHTML=pageHead()+`<section class="grid-2"><article class="panel"><div class="panel-head"><div><h3>Datos del negocio</h3><p>Información general usada en el sistema.</p></div></div><form id="settingsForm" class="form-grid"><label class="form-field"><span>Nombre comercial</span><input name="businessName" value="${escapeHtml(state.settings.businessName)}"></label><label class="form-field"><span>Moneda</span><input name="currency" value="${escapeHtml(state.settings.currency)}"></label><label class="form-field"><span>Teléfono</span><input name="phone" value="${escapeHtml(state.settings.phone)}"></label><label class="form-field"><span>Dirección</span><input name="address" value="${escapeHtml(state.settings.address)}"></label><div class="form-actions"><button class="primary-button" type="submit">Guardar cambios</button></div></form></article><article class="panel"><div class="panel-head"><div><h3>Respaldo local</h3><p>Exporta o importa toda la información del sistema.</p></div></div><div class="list"><div class="list-row"><div class="list-main"><strong>Exportar backup</strong><span>Descarga un JSON con todos los datos actuales.</span></div><button class="secondary-button" id="settingsExport">Exportar</button></div><div class="list-row"><div class="list-main"><strong>Restaurar datos demo</strong><span>Reemplaza el estado actual por la semilla inicial.</span></div><button class="secondary-button" id="resetDemo">Restaurar</button></div></div></article></section>`;
  }

  function renderView(){
    renderNav();
    if(currentView==='dashboard')renderDashboard(); else if(currentView==='orders')renderOrders(false); else if(currentView==='custom')renderOrders(true); else if(currentView==='clients')renderClients(); else if(currentView==='payments')renderPayments(); else if(currentView==='products')renderProducts(); else if(currentView==='recipes')renderRecipes(); else if(currentView==='inventory')renderInventory(); else if(currentView==='suppliers')renderSuppliers(); else if(currentView==='purchases')renderPurchases(); else if(currentView==='production')renderProduction(); else if(currentView==='deliveries')renderDeliveries(); else if(currentView==='reports')renderReports(); else if(currentView==='activity')renderActivity(); else if(currentView==='settings')renderSettings();
  }

  function openModal(title,subtitle,html){$('modalTitle').textContent=title;$('modalSubtitle').textContent=subtitle||'';$('modalBody').innerHTML=html;$('modalOverlay').classList.remove('hidden')}
  function closeModal(){$('modalOverlay').classList.add('hidden');$('modalBody').innerHTML=''}
  function openDrawer(title,html){$('drawerTitle').textContent=title;$('drawerBody').innerHTML=html;$('drawerOverlay').classList.remove('hidden');$('drawer').classList.remove('hidden')}
  function closeDrawer(){$('drawerOverlay').classList.add('hidden');$('drawer').classList.add('hidden')}
  const fInput=(label,name,value='',type='text',span='')=>`<label class="form-field ${span}"><span>${label}</span><input type="${type}" name="${name}" value="${escapeHtml(value)}"></label>`;
  const fSelect=(label,name,opts,val='',span='')=>`<label class="form-field ${span}"><span>${label}</span><select name="${name}">${opts.map(o=>Array.isArray(o)?`<option value="${o[0]}" ${String(o[0])===String(val)?'selected':''}>${escapeHtml(o[1])}</option>`:`<option ${o===val?'selected':''}>${escapeHtml(o)}</option>`).join('')}</select></label>`;
  const fText=(label,name,value='',span='span-2')=>`<label class="form-field ${span}"><span>${label}</span><textarea name="${name}">${escapeHtml(value)}</textarea></label>`;

  function formFor(module,id=null){
    const item=id?get(module==='inventory'?'ingredients':module,id):null; let html='';
    if(module==='clients')html=`${fInput('Nombre / Razón social','name',item?.name)}${fInput('Teléfono','phone',item?.phone)}${fInput('Correo','email',item?.email,'email')}${fInput('Cumpleaños','birthday',item?.birthday,'date')}${fInput('Dirección','address',item?.address,'text','span-2')}${fSelect('Estado','status',['Activo','Corporativo','Inactivo'],item?.status||'Activo')}${fText('Notas','notes',item?.notes)}`;
    if(module==='products')html=`${fInput('Producto','name',item?.name)}${fInput('Categoría','category',item?.category)}${fInput('Tamaño / Presentación','size',item?.size)}${fInput('Precio','price',item?.price,'number')}${fInput('Costo base','cost',item?.cost,'number')}${fInput('Stock listo','stockReady',item?.stockReady,'number')}${fInput('Lead time (días)','leadTimeDays',item?.leadTimeDays,'number')}${fSelect('Activo','active',[['true','Sí'],['false','No']],String(item?.active??true))}${fText('Descripción','description',item?.description)}`;
    if(module==='inventory')html=`${fInput('Insumo','name',item?.name)}${fInput('Unidad','unit',item?.unit)}${fInput('Stock actual','stock',item?.stock,'number')}${fInput('Stock mínimo','minStock',item?.minStock,'number')}${fInput('Costo por unidad','costPerUnit',item?.costPerUnit,'number')}${fSelect('Proveedor','supplierId',state.suppliers.map(x=>[x.id,x.name]),item?.supplierId)}${fInput('Vencimiento','expiryDate',item?.expiryDate,'date')}`;
    if(module==='suppliers')html=`${fInput('Proveedor','name',item?.name)}${fInput('Contacto','contact',item?.contact)}${fInput('Teléfono','phone',item?.phone)}${fInput('Correo','email',item?.email,'email')}${fInput('Lead time (días)','leadTimeDays',item?.leadTimeDays,'number')}${fSelect('Estado','status',['Activo','Inactivo'],item?.status||'Activo')}`;
    if(module==='payments')html=`${fSelect('Pedido','orderId',state.orders.map(o=>[o.id,`${o.code} · ${get('clients',o.clientId)?.name||''}`]),item?.orderId)}${fInput('Fecha','date',item?.date||new Date().toISOString().slice(0,10),'date')}${fSelect('Método','method',['QR','Transferencia','Efectivo','Tarjeta'],item?.method||'QR')}${fInput('Monto','amount',item?.amount,'number')}${fInput('Referencia','reference',item?.reference)}${fSelect('Estado','status',['Confirmado','Pendiente','Anulado'],item?.status||'Confirmado')}${fText('Notas','notes',item?.notes)}`;
    if(module==='deliveries')html=`${fSelect('Pedido','orderId',state.orders.map(o=>[o.id,o.code]),item?.orderId)}${fInput('Fecha','date',item?.date,'date')}${fInput('Ventana horaria','timeSlot',item?.timeSlot||'10:00 - 11:00')}${fInput('Responsable','driver',item?.driver||'Diego Salinas')}${fInput('Costo entrega','fee',item?.fee||0,'number')}${fSelect('Estado','status',state.settings.deliveryStatuses,item?.status||'Programado')}${fInput('Dirección','address',item?.address,'text','span-2')}${fText('Notas','notes',item?.notes)}`;
    if(module==='production')html=`${fSelect('Pedido','orderId',state.orders.map(o=>[o.id,o.code]),item?.orderId)}${fSelect('Producto','productId',state.products.map(p=>[p.id,p.name]),item?.productId)}${fInput('Cantidad','qty',item?.qty||1,'number')}${fInput('Fecha límite','dueDate',item?.dueDate,'date')}${fSelect('Etapa','status',state.settings.productionStatuses,item?.status||'Planificado')}${fInput('Estación','station',item?.station||'Horneado')}${fSelect('Responsable','assignedTo',state.users.filter(u=>u.role==='Producción'||u.role==='Gerencia').map(u=>[u.id,u.name]),item?.assignedTo||4)}${fText('Notas','notes',item?.notes)}`;
    if(module==='purchases')html=`${fInput('Código OC','code',item?.code||`OC-${new Date().getFullYear()}-${String(nextId(state.purchases)).padStart(3,'0')}`)}${fSelect('Proveedor','supplierId',state.suppliers.map(s=>[s.id,s.name]),item?.supplierId)}${fInput('Fecha','date',item?.date||new Date().toISOString().slice(0,10),'date')}${fSelect('Estado','status',['Pendiente','Enviada','Recibido','Cancelado'],item?.status||'Pendiente')}${fInput('Total','total',item?.total||0,'number')}${fText('Notas','notes',item?.notes)}`;
    if(module==='orders')html=`${fInput('Código','code',item?.code||`PED-${new Date().getFullYear()}-${String(1040+nextId(state.orders)).padStart(4,'0')}`)}${fSelect('Cliente','clientId',state.clients.map(c=>[c.id,c.name]),item?.clientId)}${fSelect('Tipo','type',['Estándar','Personalizado'],item?.type||'Estándar')}${fInput('Fecha evento','eventDate',item?.eventDate,'date')}${fSelect('Entrega','deliveryMethod',['Recojo','Delivery'],item?.deliveryMethod||'Recojo')}${fInput('Dirección entrega','deliveryAddress',item?.deliveryAddress)}${fSelect('Estado','status',state.settings.orderStatuses,item?.status||'Pendiente aprobación')}${fSelect('Estado pago','paymentStatus',state.settings.paymentStatuses,item?.paymentStatus||'Pendiente')}${fInput('Total','total',item?.total||0,'number')}${fInput('Anticipo','deposit',item?.deposit||0,'number')}${fSelect('Prioridad','priority',['Alta','Media','Baja'],item?.priority||'Media')}${fSelect('Producto principal','productId',state.products.map(p=>[p.id,p.name]),item?.items?.[0]?.productId)}${fInput('Cantidad','qty',item?.items?.[0]?.qty||1,'number')}${fInput('Sabor','flavor',item?.items?.[0]?.flavor||'')}${fInput('Texto / mensaje','customText',item?.items?.[0]?.customText||'')}${fInput('Diseño','design',item?.items?.[0]?.design||'')}${fText('Notas','notes',item?.notes)}`;
    if(module==='recipes'){
      html=`${fSelect('Producto','productId',state.products.map(p=>[p.id,p.name]),item?.productId)}${fInput('Rendimiento','yield',item?.yield||1,'number')}${fInput('Mano de obra','laborCost',item?.laborCost||0,'number')}${fInput('Indirectos','overhead',item?.overhead||0,'number')}${fText('Notas','notes',item?.notes)}<div class="span-2"><div class="panel-head"><div><h3>Insumos</h3><p>Agrega hasta cuatro componentes principales.</p></div></div><div class="form-grid">${[0,1,2,3].map(i=>`${fSelect(`Insumo ${i+1}`,`ingredient${i}`,[['','— Seleccionar —'],...state.ingredients.map(x=>[x.id,x.name])],item?.items?.[i]?.ingredientId||'')}${fInput(`Cantidad ${i+1}`,`qty${i}`,item?.items?.[i]?.qty||0,'number')}`).join('')}</div></div>`;
    }
    return `<form id="entityForm" data-module="${module}" data-id="${id||''}" class="form-grid">${html}<div class="form-actions"><button type="button" class="secondary-button" data-close-modal>Cancelar</button><button class="primary-button" type="submit">Guardar</button></div></form>`;
  }

  function openForm(module,id=null){openModal(id?'Editar registro':'Nuevo registro',PAGE_META[module]?.[1]||'',formFor(module,id))}

  function persistForm(form){
    const module=form.dataset.module,id=form.dataset.id?Number(form.dataset.id):null,raw=Object.fromEntries(new FormData(form).entries());
    let key=module==='inventory'?'ingredients':module, payload={};
    if(module==='clients')payload={id:id||nextId(state.clients),name:raw.name,phone:raw.phone,email:raw.email,address:raw.address,birthday:raw.birthday,status:raw.status,notes:raw.notes};
    if(module==='products')payload={id:id||nextId(state.products),name:raw.name,category:raw.category,size:raw.size,price:Number(raw.price),cost:Number(raw.cost),active:raw.active==='true',stockReady:Number(raw.stockReady),leadTimeDays:Number(raw.leadTimeDays),description:raw.description};
    if(module==='inventory')payload={id:id||nextId(state.ingredients),name:raw.name,unit:raw.unit,stock:Number(raw.stock),minStock:Number(raw.minStock),costPerUnit:Number(raw.costPerUnit),supplierId:Number(raw.supplierId),expiryDate:raw.expiryDate};
    if(module==='suppliers')payload={id:id||nextId(state.suppliers),name:raw.name,contact:raw.contact,phone:raw.phone,email:raw.email,leadTimeDays:Number(raw.leadTimeDays),status:raw.status};
    if(module==='payments')payload={id:id||nextId(state.payments),orderId:Number(raw.orderId),date:raw.date,method:raw.method,amount:Number(raw.amount),reference:raw.reference,status:raw.status,notes:raw.notes};
    if(module==='deliveries')payload={id:id||nextId(state.deliveries),orderId:Number(raw.orderId),date:raw.date,timeSlot:raw.timeSlot,status:raw.status,driver:raw.driver,fee:Number(raw.fee),address:raw.address,notes:raw.notes};
    if(module==='production')payload={id:id||nextId(state.production),orderId:Number(raw.orderId),productId:Number(raw.productId),qty:Number(raw.qty),dueDate:raw.dueDate,status:raw.status,station:raw.station,assignedTo:Number(raw.assignedTo),notes:raw.notes};
    if(module==='purchases')payload={id:id||nextId(state.purchases),code:raw.code,supplierId:Number(raw.supplierId),date:raw.date,status:raw.status,total:Number(raw.total),notes:raw.notes,items:id?get('purchases',id)?.items||[]:[]};
    if(module==='orders'){
      const total=Number(raw.total),deposit=Number(raw.deposit),prod=get('products',raw.productId);
      payload={id:id||nextId(state.orders),code:raw.code,clientId:Number(raw.clientId),type:raw.type,eventDate:raw.eventDate,deliveryMethod:raw.deliveryMethod,deliveryAddress:raw.deliveryAddress,status:raw.status,paymentStatus:raw.paymentStatus,total,deposit,balance:Math.max(0,total-deposit),priority:raw.priority,assignedTo:id?get('orders',id)?.assignedTo||4:4,createdAt:id?get('orders',id)?.createdAt:new Date().toISOString().slice(0,10),notes:raw.notes,items:[{productId:Number(raw.productId),qty:Number(raw.qty),unitPrice:prod?.price||0,flavor:raw.flavor,customText:raw.customText,design:raw.design}],customDetails:raw.type==='Personalizado'?{theme:raw.design||'',colors:'',message:raw.customText||'',servings:'',referenceUrl:'',allergies:''}:null};
    }
    if(module==='recipes')payload={id:id||nextId(state.recipes),productId:Number(raw.productId),yield:Number(raw.yield),laborCost:Number(raw.laborCost),overhead:Number(raw.overhead),notes:raw.notes,items:[0,1,2,3].filter(i=>raw[`ingredient${i}`]).map(i=>({ingredientId:Number(raw[`ingredient${i}`]),qty:Number(raw[`qty${i}`])}))};
    const arr=state[key],idx=arr.findIndex(x=>x.id===payload.id);if(idx>=0)arr[idx]=payload;else arr.push(payload);
    if(module==='payments' && payload.status==='Confirmado'){
      const o=get('orders',payload.orderId); if(o){const paid=state.payments.filter(p=>p.orderId===o.id&&p.status==='Confirmado').reduce((s,p)=>s+Number(p.amount),0);o.deposit=paid;o.balance=Math.max(0,o.total-paid);o.paymentStatus=o.balance<=0?'Pagado':paid>0?'Parcial':'Pendiente'}
    }
    activity(id?'Editó registro':'Creó registro',PAGE_META[module]?.[0]||module,`${module} #${payload.id}`);save();closeModal();toast('Cambios guardados');renderView();
  }

  function viewEntity(module,id){
    const key=module==='inventory'?'ingredients':module,item=get(key,id);if(!item)return;
    let html='';
    if(module==='orders'){
      const c=get('clients',item.clientId);html=`<div class="detail-grid"><div class="detail-box"><span>Cliente</span><strong>${escapeHtml(c?.name||'—')}</strong></div><div class="detail-box"><span>Evento</span><strong>${dateFmt(item.eventDate)}</strong></div><div class="detail-box"><span>Estado</span><strong>${item.status}</strong></div><div class="detail-box"><span>Pago</span><strong>${item.paymentStatus}</strong></div><div class="detail-box"><span>Total</span><strong>${money(item.total)}</strong></div><div class="detail-box"><span>Saldo</span><strong>${money(item.balance)}</strong></div></div><div class="detail-section"><h3>Productos</h3>${item.items.map(it=>`<div class="list-row"><div class="list-main"><strong>${escapeHtml(get('products',it.productId)?.name||'Producto')}</strong><span>${it.qty} × ${money(it.unitPrice)} · ${escapeHtml(it.flavor||'')}</span></div></div>`).join('')}</div>${item.customDetails?`<div class="detail-section"><h3>Personalización</h3><div class="detail-box"><span>Diseño / Tema</span><strong>${escapeHtml(item.customDetails.theme||item.items[0]?.design||'—')}</strong><span style="margin-top:8px">Mensaje</span><strong>${escapeHtml(item.customDetails.message||item.items[0]?.customText||'—')}</strong><span style="margin-top:8px">Alergias</span><strong>${escapeHtml(item.customDetails.allergies||'—')}</strong></div></div>`:''}<div class="detail-section"><h3>Notas</h3><p>${escapeHtml(item.notes||'Sin notas')}</p></div>`;
    }else if(module==='recipes'){
      const cost=recipeCost(item);html=`<div class="detail-grid"><div class="detail-box"><span>Producto</span><strong>${escapeHtml(get('products',item.productId)?.name||'—')}</strong></div><div class="detail-box"><span>Costo calculado</span><strong>${money(cost)}</strong></div><div class="detail-box"><span>Mano de obra</span><strong>${money(item.laborCost)}</strong></div><div class="detail-box"><span>Indirectos</span><strong>${money(item.overhead)}</strong></div></div><div class="detail-section"><h3>Ingredientes</h3>${item.items.map(it=>`<div class="list-row"><div class="list-main"><strong>${escapeHtml(get('ingredients',it.ingredientId)?.name||'—')}</strong><span>${it.qty} ${get('ingredients',it.ingredientId)?.unit||''}</span></div><strong>${money((get('ingredients',it.ingredientId)?.costPerUnit||0)*it.qty)}</strong></div>`).join('')}</div>`;
    }else html=`<div class="detail-grid">${Object.entries(item).filter(([k])=>!['id','items'].includes(k)).map(([k,v])=>`<div class="detail-box"><span>${escapeHtml(k)}</span><strong>${escapeHtml(typeof v==='object'?JSON.stringify(v):v)}</strong></div>`).join('')}</div>`;
    openDrawer(module==='orders'?item.code:PAGE_META[module]?.[0]||'Detalle',html);
  }

  function deleteEntity(module,id){
    if(!roleCan(module,'delete'))return toast('No tienes permisos para eliminar','error');
    const numericId=Number(id);
    if(module==='clients' && state.orders.some(o=>o.clientId===numericId))return toast('El cliente tiene pedidos vinculados y no puede eliminarse. Cámbialo a Inactivo.','error');
    if(module==='products' && (state.orders.some(o=>o.items?.some(i=>i.productId===numericId)) || state.recipes.some(r=>r.productId===numericId)))return toast('El producto tiene pedidos o recetas vinculadas. Desactívalo en lugar de eliminarlo.','error');
    if(module==='inventory' && state.recipes.some(r=>r.items?.some(i=>i.ingredientId===numericId)))return toast('El insumo está utilizado en una receta y no puede eliminarse.','error');
    if(module==='suppliers' && (state.ingredients.some(i=>i.supplierId===numericId) || state.purchases.some(p=>p.supplierId===numericId)))return toast('El proveedor tiene insumos o compras vinculadas. Cámbialo a Inactivo.','error');
    if(module==='orders' && (state.payments.some(p=>p.orderId===numericId) || state.deliveries.some(d=>d.orderId===numericId) || state.production.some(p=>p.orderId===numericId)))return toast('El pedido tiene pagos, producción o entregas vinculadas. Usa el estado Cancelado en lugar de eliminarlo.','error');
    if(!confirm('¿Eliminar este registro?'))return;
    const key=module==='inventory'?'ingredients':module;state[key]=state[key].filter(x=>x.id!==numericId);activity('Eliminó registro',PAGE_META[module]?.[0]||module,`${module} #${id}`);save();toast('Registro eliminado');renderView();
  }

  function printOrder(id){
    const o=get('orders',id),c=get('clients',o.clientId);if(!o)return;const w=window.open('','_blank','width=720,height=800');w.document.write(`<html><head><title>${o.code}</title><style>body{font-family:Arial;padding:32px;color:#2f2728}h1{font-family:Georgia}.box{border:1px solid #ddd;padding:16px;border-radius:10px;margin:12px 0}.row{display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #eee}</style></head><body><h1>La Nonna</h1><p>Comprobante de pedido</p><div class="box"><div class="row"><b>Pedido</b><span>${o.code}</span></div><div class="row"><b>Cliente</b><span>${escapeHtml(c?.name||'')}</span></div><div class="row"><b>Evento</b><span>${dateFmt(o.eventDate)}</span></div><div class="row"><b>Estado</b><span>${o.status}</span></div></div><div class="box">${o.items.map(it=>`<div class="row"><span>${escapeHtml(get('products',it.productId)?.name||'Producto')} × ${it.qty}</span><b>${money(it.qty*it.unitPrice)}</b></div>`).join('')}<div class="row"><b>Total</b><b>${money(o.total)}</b></div><div class="row"><b>Saldo</b><b>${money(o.balance)}</b></div></div><script>window.onload=()=>window.print()<\/script></body></html>`);w.document.close();
  }

  function exportBackup(){const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`la-nonna-backup-${new Date().toISOString().slice(0,10)}.json`;a.click();URL.revokeObjectURL(a.href);toast('Respaldo exportado')}
  function importBackup(file){const r=new FileReader();r.onload=e=>{try{const d=JSON.parse(e.target.result),required=['users','clients','suppliers','ingredients','products','recipes','orders','deliveries','payments','purchases','production','activity','settings'];if(!required.every(k=>k in d))throw new Error();state=d;save();renderNav();renderView();toast('Respaldo importado')}catch{toast('El archivo no es un respaldo válido','error')}};r.readAsText(file)}

  function initFilters(){
    document.querySelectorAll('[data-filter]').forEach(input=>input.addEventListener('input',()=>{const q=input.value.toLowerCase();document.querySelectorAll('#tableBody tr').forEach(tr=>tr.style.display=(tr.dataset.rowText||'').includes(q)?'':'none')}));
    document.querySelectorAll('[data-status-filter]').forEach(sel=>sel.addEventListener('change',()=>{document.querySelectorAll('#tableBody tr').forEach(tr=>tr.style.display=!sel.value||tr.dataset.rowStatus===sel.value?'':'none')}));
    const sf=document.querySelector('[data-stock-filter]');if(sf)sf.addEventListener('change',()=>document.querySelectorAll('#tableBody tr').forEach(tr=>tr.style.display=sf.value!=='low'||tr.dataset.low==='true'?'':'none'));
  }

  function searchOpen(){
    $('searchOverlay').classList.remove('hidden');$('searchInput').value='';$('searchResults').innerHTML='<div class="search-result">Escribe para buscar en pedidos, clientes y productos.</div>';$('searchInput').focus();
  }
  function searchRender(q){q=q.toLowerCase();const results=[];state.orders.forEach(o=>{if((o.code+' '+(get('clients',o.clientId)?.name||'')).toLowerCase().includes(q))results.push({title:o.code,sub:`Pedido · ${get('clients',o.clientId)?.name||''}`,view:'orders'})});state.clients.forEach(c=>{if((c.name+' '+c.email+' '+c.phone).toLowerCase().includes(q))results.push({title:c.name,sub:'Cliente',view:'clients'})});state.products.forEach(p=>{if((p.name+' '+p.category).toLowerCase().includes(q))results.push({title:p.name,sub:'Producto',view:'products'})});$('searchResults').innerHTML=results.slice(0,12).map(r=>`<button class="search-result" data-search-view="${r.view}"><span><strong>${escapeHtml(r.title)}</strong><span class="table-sub">${escapeHtml(r.sub)}</span></span><span>→</span></button>`).join('')||'<div class="search-result">Sin resultados.</div>'}

  function bindEvents(){
    $('loginForm').addEventListener('submit',e=>{e.preventDefault();const email=$('loginEmail').value.trim().toLowerCase(),pass=$('loginPassword').value,user=state.users.find(u=>u.email.toLowerCase()===email&&u.password===pass);if(!user)return toast('Credenciales incorrectas','error');currentUser=user;sessionSave();showApp();toast(`Bienvenida, ${user.name}`)});
    $('togglePassword').addEventListener('click',()=>{$('loginPassword').type=$('loginPassword').type==='password'?'text':'password'});
    $('logoutBtn').addEventListener('click',()=>{currentUser=null;sessionSave();$('app').classList.add('hidden');$('authScreen').classList.remove('hidden')});
    $('sidebarToggle').addEventListener('click',()=>document.body.classList.toggle('sidebar-collapsed'));
    $('mobileMenuBtn').addEventListener('click',()=>$('sidebar').classList.toggle('open'));
    $('newOrderBtn').addEventListener('click',()=>openForm('orders'));
    $('backupBtn').addEventListener('click',exportBackup);$('backupInput').addEventListener('change',e=>{if(e.target.files[0])importBackup(e.target.files[0]);e.target.value=''});
    $('themeBtn').addEventListener('click',()=>{document.body.classList.toggle('dark');state.settings.theme=document.body.classList.contains('dark')?'dark':'light';$('themeBtn').innerHTML=state.settings.theme==='dark'?ICONS.sun:ICONS.moon;save()});
    $('closeModalBtn').addEventListener('click',closeModal);$('modalOverlay').addEventListener('click',e=>{if(e.target===$('modalOverlay'))closeModal()});$('closeDrawerBtn').addEventListener('click',closeDrawer);$('drawerOverlay').addEventListener('click',closeDrawer);
    $('globalSearchBtn').addEventListener('click',searchOpen);$('searchOverlay').addEventListener('click',e=>{if(e.target===$('searchOverlay'))$('searchOverlay').classList.add('hidden')});$('searchInput').addEventListener('input',e=>searchRender(e.target.value));
    document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();searchOpen()}if(e.key==='Escape'){$('searchOverlay').classList.add('hidden');closeModal();closeDrawer()}});
    document.addEventListener('click',e=>{
      const quick=e.target.closest('[data-quick-user]');if(quick){const u=get('users',quick.dataset.quickUser);$('loginEmail').value=u.email;$('loginPassword').value=u.password;return}
      const view=e.target.closest('[data-view]');if(view)return setView(view.dataset.view);
      const create=e.target.closest('[data-create]');if(create)return openForm(create.dataset.create);
      if(e.target.closest('[data-close-modal]'))return closeModal();
      const act=e.target.closest('[data-action]');if(act){const {action,module,id}=act.dataset;if(action==='view')return viewEntity(module,Number(id));if(action==='edit')return openForm(module,Number(id));if(action==='delete')return deleteEntity(module,Number(id));if(action==='print')return printOrder(Number(id))}
      const sr=e.target.closest('[data-search-view]');if(sr){$('searchOverlay').classList.add('hidden');setView(sr.dataset.searchView);return}
      if(e.target.closest('#settingsExport'))return exportBackup();
      if(e.target.closest('#resetDemo')){if(confirm('¿Restaurar todos los datos demo?')){state=clone(window.LANONNA_SEED);save();toast('Datos demo restaurados');renderView()}return}
    });
    document.addEventListener('submit',e=>{if(e.target.id==='entityForm'){e.preventDefault();persistForm(e.target)}if(e.target.id==='settingsForm'){e.preventDefault();Object.assign(state.settings,Object.fromEntries(new FormData(e.target).entries()));save();toast('Configuración guardada')}});
  }

  async function init(){
    state=await loadState();bindFixedIcons();renderQuickLogins();
    if(state.settings.theme==='dark'){document.body.classList.add('dark');$('themeBtn').innerHTML=ICONS.sun}
    const sess=localStorage.getItem(SESSION_KEY);if(sess){try{const id=JSON.parse(sess).userId;currentUser=get('users',id)}catch{}}
    bindEvents();if(currentUser)showApp();
    const observer=new MutationObserver(()=>initFilters());observer.observe($('content'),{childList:true,subtree:true});
    if('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('./service-worker.js').catch(()=>{});
  }

  document.addEventListener('DOMContentLoaded',init);
})();
