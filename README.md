# La Nonna — Gestión de Pastelería

Sistema web integral para la operación de una pastelería, desarrollado con HTML, CSS, JavaScript y JSON.

## Módulos

- Dashboard operativo y comercial
- Pedidos y pedidos personalizados
- Clientes
- Pagos, anticipos y saldos
- Productos y catálogo
- Recetas y costeo
- Producción
- Insumos e inventario
- Proveedores
- Compras
- Entregas
- Reportes
- Actividad / trazabilidad local
- Configuración y respaldos

## Funcionalidades

- Inicio de sesión por roles
- CRUD con acciones visuales mediante iconos
- Búsqueda y filtros
- Control de saldos por pedido
- Costeo de recetas basado en insumos
- Alertas de stock mínimo
- Seguimiento de producción
- Agenda de entregas
- Comprobante imprimible de pedido
- Exportación e importación del estado completo en JSON
- Persistencia local mediante localStorage
- Tema claro/oscuro
- Diseño responsive
- PWA básica

## Ejecución

Se recomienda abrir el proyecto con Live Server en Visual Studio Code:

1. Abrir la carpeta `LaNonna_Professional`.
2. Instalar la extensión Live Server si no está disponible.
3. Clic derecho sobre `index.html`.
4. Seleccionar `Open with Live Server`.

También puede abrirse directamente desde `index.html`. En ese caso, si el navegador bloquea la lectura de los JSON, el sistema usa automáticamente `js/data-seed.js`.

## Persistencia

La versión HTML/CSS/JS/JSON guarda la información en el navegador mediante `localStorage`. Es apropiada para demostración, portafolio o una estación local de trabajo. Para un entorno empresarial multiusuario se recomienda conectar el mismo frontend a una API y una base de datos centralizada.
