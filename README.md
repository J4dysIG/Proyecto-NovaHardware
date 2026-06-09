## **Proyecto-NovaHardware.**

## Información del Producto.

**Nombre del Producto:** *NovaHardware.*

**Descripción:** *Aplicación dedicada a la gestión de inventario.*

## Integrantes del Equipo

* *Barraza Chavez Diego Alejandro*
* *Barreras Castro María José*
* *Calleros Valdenegro José Adrián*
* *Gonzales Aguilar Natalia Berenice*
* *Inzunza Gómez Jesús Daniel*
* *Urias Ruiz Ernesto*

# **1.Introduccion.**  
  
**Descripción general:** NovaHardware Es una plataforma digital de gestión de inventario inteligente orientada a el manejo de pequeños y medianos negocios de hardware (Componentes de computación). Su objetivo principal es eliminar el error humano y la falta de stock mediante la automatización y el análisis de datos en tiempo real. La empresa se diferencia por ofrecer una interfaz limpia y robusta, capaz de procesar miles de SKUs (códigos de artículo) sin complicaciones técnicas.
  
**Audiencia:** Clientes finales, administradores del sitio, equipo de desarrollo y soporte técnico.  
  
**Cobertura:** El sistema logra cubrir las necesidades del registro e inicio de sesión para los usuarios, cuenta con una administración eficiente, eficaz y moderna para los productos disponibles que se encuentren en la empresa, cuenta con un apartado de pagos y pedidos donde puedes consultar toda la información necesaria, esta incluye un seguimiento de envíos adecuado, contamos con notificaciones de bajo stock y reportes en tiempo real.

# **2.Resumen del Sistema**

**Objetivo general:** Desarrollar una plataforma digital de gestor de inventario para la empresa NovaHardware proporcionando una interfaz intuitiva, eficaz y moderna, logrando así transacciones ágiles y un seguimiento preciso posicionando a la empresa como un referente de modernidad y fiabilidad.

**Funcionalidades principales:** 

* Registro/Login de usuarios
* Reportes en Tiempo Real
* Inventario de Componentes
* Alertas de Bajo Stock Automáticas
* Gestión de Pedidos Unificados
* Apartado de Ventas
* Gestión de Usuarios
* Carrito de Compras 
* Notificaciones automáticas
* Configuración del Sistema
* Cierre de Sesión 

**Arquitectura del diseño:** 

* **Capa de presentación:**
*HTML, CSS, JavaScript*
**Capa de aplicación:**
* *Node.js, Express
* **Capa de datos:**
*Postgresql, Node Js*

**Diagrama de arquitectura:**
![](https://github.com/J4dysIG/Proyecto-NovaHardware/blob/main/public/images/Captura%20de%20pantalla%202026-06-08%20173335.png)

# **3. Requisitos**
**Funcionales:**    
- * El sistema deberá permitir a los usuarios iniciar sesión ingresando su id y contraseña, validándolos en la base de datos.
- * El sistema debe permitir la creación de nuevos perfiles.
- * El sistema debe validar en tiempo real que el formato de las credenciales sea valido y que los campos no estén vacíos antes de enviar la solicitud al servidor.
- * El sistema debe de notificar al usuario mediante un mensaje un error claro cuando las credenciales sean incorrectas.
- * El sistema deberá de contar con un menú capaz de mostrar u ocultar opciones según los permisos del usuario.
- * El sistema deberá integrar una barra de búsqueda rápida para localizar módulos específicos sin navegar por submenús.
- * El sistema deberá contar con un acceso visible para gestionar la cuenta del usuario y salir del sistema de forma segura.
- * El sistema deberá contar con un catálogo de los pruductos de forma detallada.
- * El sistema debe alertar cuando un artículo tenga poco stock.
- * El sistema deberá de ter botones para finalizar venta.
- * El sistema deberá de dejar poner el método de pago.
- * El sistema permitirá visualizar la lista de pedidos registrados, mostrando información como número de pedido, proveedor, fecha y estado del pedido.
- * El sistema permitirá modificar la información de un pedido siempre que este no haya sido marcado como recibido.
- * El sistema permitirá registrar nuevos pedidos de componentes a proveedores, almacenando información como proveedor, fecha del pedido, productos solicitados y cantidades.


**No funcionales:**  
- * El sistema debe estar disponible 24/7
- * El sistema debe ser compatible con cualquier sistema operativo y/o dispositivo disponible.
- * El sistema no puede tardar más de 3 segundos en dar respuesta a un proceso en condiciones normales de este.
- * El sistema debe tener un diseño completamente intuitivo e inclusivo para una mejor experiencia del usuario.
- * El sistema deberá permitir la incorporación de nuevos productos o proveedores sin afectar el funcionamiento del módulo.
- * El sistema debe contar con un sistema de seguridad basado en roles.

**Técnicos:**  

* **Lenguajes:**  *Javascript, HML y CSS.*
* **Frameworks/Librerías**: PG, Nodemon, Express.js
* **Base de datos:** *Postgresql, Node Js*
* **Herramientas:** *Figma, GitHub, VS Code* 

  
**Arquitectura del Sistema**

# **4. Diagramas de Casos de Uso**
*Inicio de Sesión*
![](
*Gestion de Catalago*
![](
*Edición de perfiles*
![](https://github.com/J4dysIG/Proyecto-NovaHardware/blob/main/public/Captura%20de%20pantalla%202026-06-08%20173802.png)

# **5. Descripción de Casos de Uso**

# **6. Diagrama Entidad-Relación**

# **7. Interfaz Figma**
![](https://github.com/J4dysIG/Proyecto-NovaHardware/blob/main/public/images/Captura%20de%20pantalla%202026-06-08%20171336.png)
![](https://github.com/J4dysIG/Proyecto-NovaHardware/blob/main/public/images/Captura%20de%20pantalla%202026-06-08%20171350.png)

# **8.Instalación**
**Requisitos de software:**
* Node.js
* Express.js
* PostgreSQL 
* Cualquier Navegador actualizado

**Requisitos de hardware:**
* 4GB RAM mínimo
* Procesador 2 GHz
* 1GB de espacio libre

**Pasos detallados de la instalación:**

* **Requisitos de Software:**
* Node.js: Asegúrase de tener la versión mas actualiozada de Node.js. 
* Express.js: Express.js se instalará posteriormente usando npm 
* PostgreSQL: Asegurese de contar con la versión mas actualizda de posgretSQL
* Navegador: Utiliza el navegador de tu preferencia pero con la version mas actualizada que tenga.
  
* **Requisitos de Hardware:**
* RAM: Tu sistema debe contar con al menos 4GB de RAM.
* Procesador: Se recomienda un procesador con una velocidad de 2 GHz o superior.
* Espacio Libre: Asegúrate de tener al menos 1GB de espacio libre en disco.

 ## **Pasos para la instalación:**



# **5. Uso del Sistema**
*Guía detallada para usuarios*

Paso 1: Ingresar al sitio web

Abre el navegador y escribe la URL del sitio web de Lugavi MX.

https://lugavi-mx.github.io/Web/
Verás la página de inicio con opciones para iniciar sesión o registrarte.
Paso 2: Registro de nuevo usuario

Haz clic en "Regístrate".
Completa el formulario con: nombre completo, correo electrónico, contraseña.
Verifica que los datos sean correctos y haz clic en “Registrarse”.
Recibirás un correo de confirmación (si aplica).
Paso 3: Inicio de sesión

En la página principal, haz clic en “Iniciar sesión”.
Introduce tu correo y contraseña.
Si los datos son correctos, accederás al panel de usuario.
Paso 4: Navegar por el catálogo

Desde el menú superior, selecciona “Catálogo”.
Filtra los productos por categoría, talla, color o precio.
Haz clic sobre un producto para ver su ficha detallada.
Paso 5: Agregar productos al carrito

En la ficha del producto, selecciona la talla y cantidad.
Presiona el botón “Agregar al carrito”.
Aparecerá una notificación indicando que el producto fue agregado.
Paso 6: Revisar y modificar el carrito

Haz clic en el ícono del carrito (parte superior derecha).
Verás una lista con todos los productos agregados.
Puedes cambiar la cantidad o eliminar productos.
El total se actualiza automáticamente.
Paso 7: Realizar una compra

Desde el carrito, presiona “Proceder al pago”.
Elige o agrega una dirección de envío.
Selecciona método de pago (tarjeta o PayPal).
Confirma la compra.
Recibirás un mensaje de éxito.
Paso 8: Consultar tus pedidos

En el menú, selecciona “Mis pedidos”.
Verás un historial con los pedidos realizados, su fecha, estado y total.
Paso 9: Actualizar tu perfil

Haz clic en “Perfil”.
Desde ahí puedes modificar tus datos personales, cambiar tu contraseña o gestionar direcciones de envío.
Paso 10: Cerrar sesión

Desde el menú superior, haz clic en “Cerrar sesión” para salir del sistema de forma segura.
Esta guía asegura una experiencia clara y accesible para todos los usuarios que interactúan con la tienda en línea de Lugavi MX.

Guía detallada para usuarios (Administrador)
Esta sección describe el flujo de trabajo para el administrador del sistema Lugavi MX, encargado de gestionar productos, pedidos, usuarios y generar reportes.

Paso 1: Iniciar sesión como administrador

Accede al sitio web de Lugavi MX.
Introduce el correo y contraseña de administrador previamente asignados.
Serás redirigido al panel administrativo si las credenciales son válidas.
Paso 2: Acceder al panel de administración

Desde el menú, selecciona la opción “Panel de control” o “Administrador”.
Verás un tablero con accesos rápidos a módulos clave: productos, pedidos, usuarios, estadísticas.
Paso 3: Gestión de productos

Ir a la sección “Artículos” o “Productos”.
Acciones disponibles:
Crear nuevo artículo (vestido): ingresar nombre, descripción, talla, precio, stock, categoría, imagen.
Editar artículo existente.
Eliminar artículos.
Filtrar y buscar artículos por nombre o categoría.
Paso 4: Gestión de pedidos

Accede a “Pedidos”.
Lista de pedidos ordenados por fecha o estado.
Acciones disponibles:
Ver detalles del pedido: cliente, artículos, monto total.
Cambiar el estado del pedido (pendiente, enviado, entregado).
Añadir comentarios o activar notificaciones al cliente.
Paso 5: Gestión de usuarios (clientes)

Ir a la sección “Clientes”.
Consultar lista de usuarios registrados.
Acciones disponibles:
Ver historial de pedidos por cliente.
Ver/editar información básica del cliente.
Suspender cuentas en caso de actividad sospechosa.
Paso 6: Consultar estadísticas

Ir a la sección “Informes” o “Estadísticas”.
Visualizar gráficas y reportes de:
Ventas totales por mes.
Productos más vendidos.
Usuarios más activos.
Estados de pedidos.
Paso 7: Gestión del inventario

Desde “Productos”, verificar stock.
El sistema puede notificar automáticamente cuando un artículo tiene bajo inventario.
Paso 8: Cerrar sesión

Desde el menú superior, seleccionar “Cerrar sesión” para proteger el acceso administrativo.
Esta guía proporciona al administrador una ruta clara para el uso eficiente del sistema, facilitando la operatividad de la tienda virtual de Lugavi MX.

Flujo de procesos:
Flujo de Procesos General

El flujo de uso para el usuario final dentro del sistema Lugavi MX se divide en dos perfiles principales: Cliente y Administrador.

Cliente:

Login → Catálogo → Carrito → Pago → Pedido → Confirmación por correo
Administrador:

Gestión de recursos del sistema (clientes, pedidos, artículos).
Flujos de Procesos Detallados por Funcionalidad

A. Cliente (comprador)

Inicio de sesión o registro

El usuario accede al sitio web.
Si ya tiene cuenta: ingresa correo y contraseña.
Si es nuevo: completa el formulario de registro.
Exploración del catálogo

Navega por la página principal o ingresa al menú "Catálogo".
Utiliza filtros para buscar por talla, precio, color o categoría.
Visualiza productos con imagen, descripción, precio y disponibilidad.
Gestión del carrito de compras

Agrega uno o varios productos.
Visualiza el carrito: puede aumentar/disminuir cantidades o eliminar artículos.
El sistema actualiza el total en tiempo real.
Confirmación de pedido

Revisa el resumen del carrito.
Selecciona una dirección de envío (existente o nueva).
Elige un método de pago: tarjeta o PayPal.
Pago y finalización

Completa los datos necesarios para el pago.
Confirma la compra.
Recibe una notificación por correo con el resumen del pedido.
Seguimiento y perfil

Accede a "Mis Pedidos" para revisar el estado de cada orden.
Desde su perfil puede cambiar contraseñas, actualizar datos o gestionar direcciones.
B. Administrador (gestión del sistema)

Inicio de sesión administrativo

Accede con cuenta de administrador (nivel de acceso).
Gestión de productos

CRUD de artículos (agregar, editar, eliminar, actualizar stock).
Gestión de pedidos

Visualiza pedidos recibidos, su estado y detalles.
Cambia el estado de un pedido: recibido, en proceso, enviado, entregado.
Envía notificaciones al cliente sobre cambios en su pedido.
Gestión de usuarios

Ver listado de clientes.
Consultar historial de pedidos por usuario.
Estadísticas

Visualiza informes de ventas, productos más vendidos, comportamiento de usuarios.
