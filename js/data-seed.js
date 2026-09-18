window.LANONNA_SEED = {
  users: [
    {id:1,name:'María Rossi',email:'admin@lanonna.local',password:'Admin123!',role:'Administrador',avatar:'MR'},
    {id:2,name:'Lucía Ferrufino',email:'manager@lanonna.local',password:'Manager123!',role:'Gerencia',avatar:'LF'},
    {id:3,name:'Camila Vargas',email:'ventas@lanonna.local',password:'Ventas123!',role:'Ventas',avatar:'CV'},
    {id:4,name:'Elena Quiroga',email:'produccion@lanonna.local',password:'Prod123!',role:'Producción',avatar:'EQ'},
    {id:5,name:'Diego Salinas',email:'delivery@lanonna.local',password:'Delivery123!',role:'Reparto',avatar:'DS'}
  ],
  clients: [
    {id:1,name:'Andrea Molina',phone:'70700111',email:'andrea.molina@email.com',address:'Av. América Oeste 1250',birthday:'1993-05-18',status:'Activo',notes:'Prefiere contacto por WhatsApp.'},
    {id:2,name:'Valeria Rojas',phone:'76433210',email:'valeria.rojas@email.com',address:'Cala Cala, calle Los Álamos 44',birthday:'1988-11-02',status:'Activo',notes:'Cliente frecuente de tortas infantiles.'},
    {id:3,name:'Paola Méndez',phone:'77982033',email:'paola.mendez@email.com',address:'Queru Queru, Edif. Mirador',birthday:'1996-08-14',status:'Activo',notes:'Solicita opciones sin nuez.'},
    {id:4,name:'Javier Arce',phone:'70311992',email:'javier.arce@email.com',address:'Tiquipaya, Av. Ecológica 310',birthday:'1985-02-21',status:'Activo',notes:'Pedidos empresariales.'},
    {id:5,name:'Sofía Heredia',phone:'72290118',email:'sofia.heredia@email.com',address:'Zona Norte, calle Potosí 78',birthday:'1990-12-09',status:'Activo',notes:''},
    {id:6,name:'Empresa Marea SRL',phone:'4459122',email:'eventos@marea.bo',address:'Av. Ballivián 880',birthday:'',status:'Corporativo',notes:'Facturación a nombre de Marea SRL.'}
  ],
  suppliers: [
    {id:1,name:'Molinos Andinos',contact:'Carla Soria',phone:'4450033',email:'ventas@molinosandinos.bo',leadTimeDays:2,status:'Activo'},
    {id:2,name:'Lácteos del Valle',contact:'Mario Rocha',phone:'4481188',email:'pedidos@lacteosvalle.bo',leadTimeDays:1,status:'Activo'},
    {id:3,name:'Dulce Insumo',contact:'Patricia Flores',phone:'72241199',email:'ventas@dulceinsumo.bo',leadTimeDays:3,status:'Activo'},
    {id:4,name:'Empaques Premium',contact:'José Paredes',phone:'76588210',email:'comercial@empaquespremium.bo',leadTimeDays:4,status:'Activo'}
  ],
  ingredients: [
    {id:1,name:'Harina de trigo',unit:'kg',stock:42,minStock:15,costPerUnit:8.5,supplierId:1,expiryDate:'2026-12-20'},
    {id:2,name:'Azúcar',unit:'kg',stock:28,minStock:10,costPerUnit:9.2,supplierId:1,expiryDate:'2027-02-15'},
    {id:3,name:'Mantequilla',unit:'kg',stock:9,minStock:6,costPerUnit:44,supplierId:2,expiryDate:'2026-10-05'},
    {id:4,name:'Crema de leche',unit:'L',stock:7,minStock:8,costPerUnit:28,supplierId:2,expiryDate:'2026-09-24'},
    {id:5,name:'Chocolate cobertura',unit:'kg',stock:12,minStock:5,costPerUnit:76,supplierId:3,expiryDate:'2027-01-30'},
    {id:6,name:'Fondant blanco',unit:'kg',stock:6,minStock:4,costPerUnit:52,supplierId:3,expiryDate:'2026-11-18'},
    {id:7,name:'Huevos',unit:'unidad',stock:156,minStock:60,costPerUnit:1.25,supplierId:2,expiryDate:'2026-09-28'},
    {id:8,name:'Frutilla',unit:'kg',stock:4.5,minStock:5,costPerUnit:32,supplierId:3,expiryDate:'2026-09-21'},
    {id:9,name:'Caja torta 30 cm',unit:'unidad',stock:24,minStock:15,costPerUnit:7.5,supplierId:4,expiryDate:''},
    {id:10,name:'Base dorada 30 cm',unit:'unidad',stock:20,minStock:12,costPerUnit:6,supplierId:4,expiryDate:''}
  ],
  products: [
    {id:1,name:'Torta Clásica de Chocolate',category:'Tortas',size:'20 cm',price:180,cost:82,active:true,stockReady:2,leadTimeDays:2,description:'Bizcochuelo de chocolate, ganache y decoración clásica.'},
    {id:2,name:'Torta Red Velvet',category:'Tortas',size:'20 cm',price:210,cost:96,active:true,stockReady:1,leadTimeDays:2,description:'Red velvet con frosting de queso crema.'},
    {id:3,name:'Cheesecake de Frutilla',category:'Postres',size:'10 porciones',price:165,cost:78,active:true,stockReady:2,leadTimeDays:1,description:'Cheesecake horneado con cobertura de frutilla.'},
    {id:4,name:'Caja de Cupcakes',category:'Cupcakes',size:'12 unidades',price:120,cost:54,active:true,stockReady:4,leadTimeDays:1,description:'Doce cupcakes decorados según temporada.'},
    {id:5,name:'Torta Personalizada Premium',category:'Personalizados',size:'30 cm',price:390,cost:175,active:true,stockReady:0,leadTimeDays:5,description:'Torta personalizada con diseño temático y detalles en fondant.'},
    {id:6,name:'Box Mini Postres',category:'Boxes',size:'16 unidades',price:145,cost:62,active:true,stockReady:3,leadTimeDays:1,description:'Selección de mini postres para reuniones.'},
    {id:7,name:'Torta Bodas 2 Pisos',category:'Eventos',size:'50 porciones',price:680,cost:315,active:true,stockReady:0,leadTimeDays:7,description:'Torta de dos pisos con diseño personalizado.'}
  ],
  recipes: [
    {id:1,productId:1,yield:1,laborCost:18,overhead:9,notes:'Base estándar chocolate.',items:[{ingredientId:1,qty:0.55},{ingredientId:2,qty:0.42},{ingredientId:3,qty:0.22},{ingredientId:5,qty:0.35},{ingredientId:7,qty:6},{ingredientId:9,qty:1},{ingredientId:10,qty:1}]},
    {id:2,productId:2,yield:1,laborCost:20,overhead:10,notes:'Frosting refrigerado.',items:[{ingredientId:1,qty:0.5},{ingredientId:2,qty:0.38},{ingredientId:3,qty:0.25},{ingredientId:4,qty:0.3},{ingredientId:7,qty:5},{ingredientId:9,qty:1},{ingredientId:10,qty:1}]},
    {id:3,productId:5,yield:1,laborCost:45,overhead:18,notes:'Diseño personalizado; revisar briefing.',items:[{ingredientId:1,qty:0.8},{ingredientId:2,qty:0.65},{ingredientId:3,qty:0.35},{ingredientId:4,qty:0.5},{ingredientId:6,qty:1.2},{ingredientId:7,qty:8},{ingredientId:9,qty:1},{ingredientId:10,qty:1}]}
  ],
  orders: [
    {id:1,code:'PED-2026-1041',clientId:2,type:'Personalizado',eventDate:'2026-09-20',deliveryMethod:'Delivery',deliveryAddress:'Cala Cala, calle Los Álamos 44',status:'En producción',paymentStatus:'Parcial',total:420,deposit:200,balance:220,priority:'Alta',assignedTo:4,createdAt:'2026-09-14',notes:'Confirmar topper un día antes.',items:[{productId:5,qty:1,unitPrice:420,flavor:'Chocolate y frutilla',customText:'Feliz cumple Emma',design:'Unicornio pastel'}],customDetails:{theme:'Unicornio',colors:'Rosa, lila y dorado',message:'Feliz cumple Emma',servings:28,referenceUrl:'',allergies:'Sin nuez'}},
    {id:2,code:'PED-2026-1042',clientId:4,type:'Estándar',eventDate:'2026-09-19',deliveryMethod:'Recojo',deliveryAddress:'',status:'Listo',paymentStatus:'Pagado',total:330,deposit:330,balance:0,priority:'Media',assignedTo:4,createdAt:'2026-09-15',notes:'Pedido corporativo.',items:[{productId:3,qty:2,unitPrice:165,flavor:'',customText:'',design:''}],customDetails:null},
    {id:3,code:'PED-2026-1043',clientId:6,type:'Personalizado',eventDate:'2026-09-23',deliveryMethod:'Delivery',deliveryAddress:'Av. Ballivián 880',status:'Confirmado',paymentStatus:'Parcial',total:820,deposit:400,balance:420,priority:'Alta',assignedTo:4,createdAt:'2026-09-16',notes:'Evento aniversario empresa.',items:[{productId:7,qty:1,unitPrice:680,flavor:'Vainilla y maracuyá',customText:'10 años Marea',design:'Corporativo minimalista'},{productId:4,qty:1,unitPrice:140,flavor:'Mixtos',customText:'',design:'Colores corporativos'}],customDetails:{theme:'Corporativo',colors:'Azul petróleo y blanco',message:'10 años Marea',servings:60,referenceUrl:'',allergies:'Ninguna informada'}},
    {id:4,code:'PED-2026-1044',clientId:1,type:'Estándar',eventDate:'2026-09-18',deliveryMethod:'Recojo',deliveryAddress:'',status:'Entregado',paymentStatus:'Pagado',total:180,deposit:180,balance:0,priority:'Baja',assignedTo:4,createdAt:'2026-09-16',notes:'',items:[{productId:1,qty:1,unitPrice:180,flavor:'',customText:'',design:''}],customDetails:null},
    {id:5,code:'PED-2026-1045',clientId:3,type:'Personalizado',eventDate:'2026-09-25',deliveryMethod:'Recojo',deliveryAddress:'',status:'Pendiente aprobación',paymentStatus:'Pendiente',total:390,deposit:0,balance:390,priority:'Media',assignedTo:4,createdAt:'2026-09-17',notes:'Esperando aprobación del diseño.',items:[{productId:5,qty:1,unitPrice:390,flavor:'Red velvet',customText:'Happy 30',design:'Minimalista floral'}],customDetails:{theme:'Floral minimalista',colors:'Blanco y vino',message:'Happy 30',servings:25,referenceUrl:'',allergies:'Sin nuez'}}
  ],
  deliveries: [
    {id:1,orderId:1,date:'2026-09-20',timeSlot:'15:00 - 16:00',status:'Programado',driver:'Diego Salinas',fee:20,address:'Cala Cala, calle Los Álamos 44',notes:'Llamar 15 min antes.'},
    {id:2,orderId:3,date:'2026-09-23',timeSlot:'10:30 - 11:30',status:'Programado',driver:'Diego Salinas',fee:25,address:'Av. Ballivián 880',notes:'Recepción del edificio.'},
    {id:3,orderId:4,date:'2026-09-18',timeSlot:'12:00 - 13:00',status:'Entregado',driver:'Recojo en tienda',fee:0,address:'Sucursal principal',notes:''}
  ],
  payments: [
    {id:1,orderId:1,date:'2026-09-14',method:'QR',amount:200,reference:'QR-84521',status:'Confirmado',notes:'Anticipo 48%.'},
    {id:2,orderId:2,date:'2026-09-15',method:'Transferencia',amount:330,reference:'TR-20331',status:'Confirmado',notes:'Pago completo.'},
    {id:3,orderId:3,date:'2026-09-16',method:'Transferencia',amount:400,reference:'TR-20408',status:'Confirmado',notes:'Anticipo corporativo.'},
    {id:4,orderId:4,date:'2026-09-18',method:'Efectivo',amount:180,reference:'CAJA-0918-01',status:'Confirmado',notes:'Pago completo.'}
  ],
  purchases: [
    {id:1,code:'OC-2026-031',supplierId:2,date:'2026-09-18',status:'Pendiente',total:620,notes:'Prioridad crema y mantequilla.',items:[{ingredientId:4,qty:15,unitCost:28},{ingredientId:3,qty:4.5,unitCost:44}]},
    {id:2,code:'OC-2026-030',supplierId:4,date:'2026-09-15',status:'Recibido',total:270,notes:'Reposición semanal de empaques.',items:[{ingredientId:9,qty:20,unitCost:7.5},{ingredientId:10,qty:20,unitCost:6}]}
  ],
  production: [
    {id:1,orderId:1,productId:5,qty:1,dueDate:'2026-09-20',status:'Decoración',station:'Decoración',assignedTo:4,notes:'Bizcocho horneado, falta fondant y topper.'},
    {id:2,orderId:3,productId:7,qty:1,dueDate:'2026-09-23',status:'Planificado',station:'Horneado',assignedTo:4,notes:'Iniciar producción 21/09.'},
    {id:3,orderId:3,productId:4,qty:1,dueDate:'2026-09-23',status:'Planificado',station:'Cupcakes',assignedTo:4,notes:'Colores corporativos.'},
    {id:4,orderId:2,productId:3,qty:2,dueDate:'2026-09-19',status:'Listo',station:'Frío',assignedTo:4,notes:'Conservar refrigerado.'}
  ],
  activity: [
    {id:1,at:'2026-09-18T09:10:00',userId:3,action:'Actualizó pedido',module:'Pedidos',detail:'PED-2026-1041 pasó a En producción.'},
    {id:2,at:'2026-09-18T08:45:00',userId:2,action:'Aprobó compra',module:'Compras',detail:'OC-2026-031 enviada a proveedor.'},
    {id:3,at:'2026-09-17T18:20:00',userId:3,action:'Registró pedido',module:'Pedidos',detail:'PED-2026-1045 creado para Paola Méndez.'},
    {id:4,at:'2026-09-17T16:05:00',userId:4,action:'Actualizó producción',module:'Producción',detail:'PED-2026-1041 avanzó a Decoración.'}
  ],
  settings: {
    businessName:'La Nonna',
    currency:'BOB',
    taxLabel:'NIT',
    phone:'+591 70000000',
    address:'Cochabamba, Bolivia',
    lowStockThresholdMode:'per-item',
    theme:'light',
    orderStatuses:['Pendiente aprobación','Confirmado','En producción','Listo','En ruta','Entregado','Cancelado'],
    paymentStatuses:['Pendiente','Parcial','Pagado','Reembolsado'],
    deliveryStatuses:['Programado','En ruta','Entregado','Incidencia'],
    productionStatuses:['Planificado','Preparación','Horneado','Relleno','Decoración','Listo']
  }
};
