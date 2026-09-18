# Arquitectura — La Nonna

## Versión incluida

- Frontend: HTML5, CSS3 y JavaScript
- Datos iniciales: JSON
- Fallback: `js/data-seed.js`
- Persistencia: localStorage
- Respaldo: JSON exportable/importable
- PWA: manifest + service worker

## Evolución recomendada para operación multiusuario

1. API REST/ASP.NET Core, Node.js u otra plataforma de servidor.
2. Base de datos SQL con tablas para usuarios, clientes, pedidos, productos, recetas, insumos, movimientos, pagos, entregas y auditoría.
3. Autenticación y autorización en servidor.
4. Contraseñas con hashing seguro.
5. Control de concurrencia y transacciones para stock y pagos.
6. Almacenamiento de adjuntos para diseños y referencias de pedidos personalizados.
7. Auditoría central e historial por entidad.
8. Backups programados y políticas de recuperación.
9. Integración con facturación, QR/pasarela de pago o WhatsApp según requerimientos del negocio.
