## **Proyecto-NovaHardware.**

## Información del Producto.

**Nombre del Producto:** *NovaHardware.*

**Descripción:** *Aplicación dedicada a la gestión de inventario.*

## Integrantes del Equipo

* *Barraza Chavez Diego Alejandro*
* *Barreras Castro María José*
* *Calleros Valdenegro José Adrián*
* *González Aguilar Natalia Berenice*
* *Inzunza Gómez Jesús Daniel*
* *Urias Ruiz Ernesto*

# **1. Introducción.**  
  
**Descripción general:** NovaHardware Es una plataforma digital de gestión de inventario inteligente orientada a el manejo de pequeños y medianos negocios de hardware (Componentes de computación). Su objetivo principal es eliminar el error humano y la falta de stock mediante la automatización y el análisis de datos en tiempo real. La empresa se diferencia por ofrecer una interfaz limpia y robusta, capaz de procesar miles de SKUs (códigos de artículo) sin complicaciones técnicas.
  
**Audiencia:** Clientes finales, administradores del sitio, equipo de desarrollo y soporte técnico.  
  
**Cobertura:** El sistema logra cubrir las necesidades del registro e inicio de sesión para los usuarios, cuenta con una administración eficiente, eficaz y moderna para los productos disponibles que se encuentren en la empresa, cuenta con un apartado de pagos y pedidos donde puedes consultar toda la información necesaria, esta incluye un seguimiento de envíos adecuado, contamos con notificaciones de bajo stock y reportes en tiempo real.

# **2. Resumen del Sistema**

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
- * El sistema debe validar en tiempo real que el formato de las credenciales sea válido y que los campos no estén vacíos antes de enviar la solicitud al servidor.
- * El sistema debe de notificar al usuario mediante un mensaje un error claro cuando las credenciales sean incorrectas.
- * El sistema deberá de contar con un menú capaz de mostrar u ocultar opciones según los permisos del usuario.
- * El sistema deberá integrar una barra de búsqueda rápida para localizar módulos específicos sin navegar por submenús.
- * El sistema deberá contar con un acceso visible para gestionar la cuenta del usuario y salir del sistema de forma segura.
- * El sistema deberá contar con un catálogo de los productos de forma detallada.
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

![](https://github.com/J4dysIG/Proyecto-NovaHardware/blob/main/public/images/Captura%20de%20pantalla%202026-06-08%20173745.png)

*Gestion de Catálogo*

![](https://github.com/J4dysIG/Proyecto-NovaHardware/blob/main/public/images/Captura%20de%20pantalla%202026-06-08%20173752.png)

*Edición de perfiles*

![](https://github.com/J4dysIG/Proyecto-NovaHardware/blob/main/public/Captura%20de%20pantalla%202026-06-08%20173802.png)

# **5. Descripción de Casos de Uso**
*Inicio de Sesión*

![](https://github.com/J4dysIG/Proyecto-NovaHardware/blob/main/public/images/Captura%20de%20pantalla%202026-06-08%20173910.png)

*Edición de perfiles*

![](https://github.com/J4dysIG/Proyecto-NovaHardware/blob/main/public/images/Captura%20de%20pantalla%202026-06-08%20173843.png)

# **6. Diagrama Entidad-Relación**

![](https://github.com/J4dysIG/Proyecto-NovaHardware/blob/main/public/images/Diagrama%20Entidad-Relacion.jpeg)

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
* Node.js: Asegúrese de tener la versión más actualizada de Node.js. 
* Express.js: Express.js se instalará posteriormente usando npm 
* PostgreSQL: Asegúrese de contar con la versión más actualizada de posgretSQL
* Navegador: Utiliza el navegador de tu preferencia, pero con la versión más actualizada que tenga.
  
* **Requisitos de Hardware:**
* RAM: Tu sistema debe contar con al menos 4GB de RAM.
* Procesador: Se recomienda un procesador con una velocidad de 2 GHz o superior.
* Espacio Libre: Asegúrate de tener al menos 1GB de espacio libre en disco.

 ## **Pasos para la instalación:**}

 1.  Clona el repositorio de GitHub:
2.  Instala las dependencias del backend, incluyendo Express.js.
3.  Crea el archivo de configuración de las variables de entorno.
4.  Inicia la base de datos PostgreSQL.
5.  Inicia el servidor de Node.js.
6.  Abre la aplicación en tu navegador web.


**Estructura de carpetas:**  
   
Equipo NovaHardware
├── Public
├── Css
├── imagenes
├── Views
├── .gitgnore
├── README.md 
├── dbConfig.js
├── package-lock.json 
├── package.json 
└── server.js

# **9. Uso del Sistema**
**Guía detallada para Administradores**

 **Paso 1: Ingresar al sitio web**
* Abre el navegador y escribe la URL del sitio web.
* Podrás observar la página de inicio, donde te pedirá Registrarte o Iniciar sesión segun sea tu caso.

**Paso 2: Inicio de sesión**
  * En la página principal, haga clic en “Iniciar sesión”.
  * Complete lo pedido.

**Paso 3: Navegar por la página**  
 * En la parte izquierda podras navegar en las diferentes opciones para ti.
 * Si vas a inventario podrás distinguir los faltantes y hacer pedidos nuevos.
 * En pedidos puedes visualizar los pedidos hechos.
 * Puedes comprar y verificar las ventas en el apartado "Ventas".
  
**Paso 4: Agregar productos al carrito**
  * Dirígete al aparado de "Ventas".
  * Coloca lo que deseas en el buscador "Buscara Articulo".
  * Especifica la cantidad que se desea comprar.
  * Pulsa "Agregar".

**Paso 5: Revisar y modificar el carrito**
   * Haz clic en el apartado "Ventas".
   * En este tendrás una lista de los productos agregados al carrito.
   * Podrás Cambiar la cantidad de producto o eliminarlo.
   * Sabrás la cantidad total a pagar y el precio de cada artículo.

**Paso 6: Realizar una compra**
  * Desde el apartado "Ventas" podrás realizar tu pagó.
  * Coloca que tipo de cliente eres.
  * Especifica tu método de pago
  * Haz clic en "Finalizar y Cobrar.
  * Te llegara una notificación de compra.

**Paso 7: Consultar tus pedidos**
  * Haga Clic en "Pedidos"
  * Varas una lista de los pedidos registrados.

**Paso 8: Cerrar sesión**
  * En la parte izquierda abajo podrás cerrar sesión 
  
**Guía detallada para Vendedores**

**Paso 1: Ingresar al sitio web**
  * Abre el navegador y escribe la URL del sitio web.
  * Podrás observar la página de inicio, donde te pedirá Registrarte o Iniciar sesión según sea tu caso.*

**Paso 2: Registrar un nuevo usuario**
   * Haga Clic en registrar Nuevo
   * Complete el formulario con lo solicitado en este.
   * Haga clic en “Registrarse”.
  
**Paso 3: Inicio de sesión**
   * En la página principal, haga clic en “Iniciar sesión”.
   * Complete lo pedido.

**Paso 4: Navegar por la pagina**
   * En la parte izquierda podrás navegar en las diferentes opciones para ti.
   * Si vas a inventario podrás distinguir los faltantes y hacer pedidos nuevos.
   * En pedidos puedes visualizar los pedidos hechos.
   * Puedes comprar y verificar las ventas en el apartado "Ventas".
  
**Paso 5: Agregar nuevos productos**
  * Dirígete al aparado de "Inventario".
  * Coloca lo que deseas agregar en "Nuevo Producto".
  * Especifica tu nuevo producto.
  * Pulsa "Agregar".

**Paso 6: Consultar tus pedidos**
  * Haga Clic en "Pedidos"
  * Varas una lista de los pedidos registrados.

**Paso 7: Cerrar sesión**
  * En la parte izquierda abajo podrás cerrar sesión 

*Guías Proporcionadas para un mejor uso de la aplicación web*

## **Flujo de procesos:**  

**Flujo de Procesos General**

El flujo de uso para el usuario final se divide en dos perfiles principales: Vendedor y Administrador.

-   **Cliente:**
    -   Login → inicio → Inventario → Pedidos → Ventas → Configuración → Cerrar sesión 
        
-   **Administrador:**
    -  Login → inicio → Inventario → Pedidos → Ventas → Usuarios → Reportes → Configuración → Cerrar sesión 

**Flujos de Procesos Detallados por Funcionalidad**
  
**A. Cliente (Vendedor)**  
  
**Inicio de sesión o registro**  
  
* El usuario accede al sitio web.  
* Si ya tiene cuenta: ingresa usuario y contraseña.  
* Si es nuevo: completa el formulario de registro.  
  
**Inicio**  
  
* Navega por la página principal o ingresa a cualquiera de los aparatados de la parte izquierda".  
* Utiliza filtros para buscar en el sistema el objeto deseado.    
* Utiliza la opción "Nuevo Producto" para agregar un nuevo producto a el catalogo del inventario.

**Gestión Inventario**  

* Muestra una lista de objetos ya existentes con su respectivo precio, nombre, stock y otras características únicas.
* En el aparado de "Nuevo producto" puedes agregar un nuevo producto.
* Tienes la opción de filtrar los objetos para encontrar el deseado.

**Pedidos**

* Puedes ver los pedidos que tienes pendientes y los anteriores.

**Ventas**

* Puedes comprar más objetos para tu negocio
* Tienes la opción de filtrar lo objetos
* Cuentas con un buscador para que sea más fácil encontrar lo que necesitas.
* En el mismo apartado puedes ver la lista de los productos que compraras y un desglose de los precios.
* Tienes diferentes métodos de pago.
  
**Usuarios**

* Solo puedes ver los diferentes tipos de usuario.
  
**Reportes**

* Puedes divisar tus estadísticas y pedidos pendientes.

**configuración**

* Solo puedes configurar la moneda con la que deseas pagar.
  
**B. Administrador (Administrador)**  
  
**Inicio de sesión**  
  
* Accede con cuenta de administrador (nivel de acceso).  
  
**Gestión de productos**  
  
* CRUD de artículos (agregar, editar, eliminar, actualizar stock).  
  
**Gestión de pedidos**  
  
* Visualiza pedidos recibidos, su estado y detalles.  
* Cambia el estado de un pedido: recibido, en proceso, enviado, entregado.  
* Envía notificaciones al cliente sobre cambios en su pedido.
* Utiliza la opción de "Nuevo pedido" para agregar manualmente un pedido.   
  
**Gestión de usuarios**  

* Ver listado de los usuarios.  

**Estadísticas**  
  
* Visualiza informes de ventas, productos más vendidos.
  
# **Capturas de pantalla**
**Link de Figma** 
https://www.figma.com/design/KihWZmMrZL4ETI6zDzgbgN/Untitled?node-id=0-1&p=f&t=J43oF2a5e1fdlURn-0

- **Inicio de Sesión**
  
  ![](https://github.com/J4dysIG/Proyecto-NovaHardware/blob/main/public/images/Inicio%20de%20Sesi%C3%B3n.png)
  
  **Descripción:**
  Inicio de sesión: Mensaje de bienvenida, explicación lo que hace NovaHardware, aparatado para colocar el Usuario, contraseña y Registrase.

- **Inicio**
  
  ![](https://github.com/J4dysIG/Proyecto-NovaHardware/blob/main/public/images/Inicio.png)
  
  **Descripción:**
  Carrusel de imágenes destacadas de vestidos.
  Menú superior fijo con accesos a: Catálogo, Mi Perfil, Mis Pedidos, Carrito, Cerrar sesión.

- **Inventario**
  
![](https://github.com/J4dysIG/Proyecto-NovaHardware/blob/main/public/images/Inventario.png)

**Descripción**
Puedes Agregar nuevos productos, eliminar, editar y actualizar Stock.
veras una lista de los productos y la cantidad de ellos disponible.

- **Pedidos**

![](https://github.com/J4dysIG/Proyecto-NovaHardware/blob/main/public/images/Pedidos.png)

**Descripción**
Puedes ver una lista de tus pedidos, agregar manualmente otros colocando proveedor y fecha.
Tienes la opción de editar los pedidos existentes y puedes comprobar su estado.

- **Ventas**

![](https://github.com/J4dysIG/Proyecto-NovaHardware/blob/main/public/images/Ventas.png)

**Descripción**
En el apartado ventas se reflejará la lista de los productos que deseas comprar.
Puedes buscar los productos existentes para realizar un pedido.
En este mismo lugar puedes pagar el total de tus productos seleccionados teniendo a la vista un desglose de precios y el precio final a pagar.
Tienes diferentes opciones de pago y puedes comprar colocando que tipo de cliente eres.

- **Usuarios**
  
![](https://github.com/J4dysIG/Proyecto-NovaHardware/blob/main/public/images/U.png)

**Descripción**
Puedes observar los diferentes tipos de usuarios, puedes ver quiénes son y su actividad reciente.

- **Reportes**
  
![](https://github.com/J4dysIG/Proyecto-NovaHardware/blob/main/public/images/Reportes.png)

**Descripción**
Tienes la opción de exportar tu pdf.
Puedes observar las estadísticas de venta de los últimos días, el valor del inventario y los pedidos pendientes.

- **Configuración**

![](https://github.com/J4dysIG/Proyecto-NovaHardware/blob/main/public/images/Configuración.png)

**Descripción**
Puedes cambiar el tipo de moneda y cuanto IVA se tiene que cobrar.

# **10 . Base de Datos**  
  
**Modelo de datos:**
El modelo de base de datos aqui presentado se ha realizado en PostgreSQL
  
* **Usuario:** Datos personales.
* **Componentes:** Información sobre los productos.
* **Carrito-Compras:** Lista de articulos a comprar.
* **Pedidos-Ventas:** Historial de pedidos y ventas.
* **Detalle-Pedido:** Control de pedidos.
* **Notificaciones:** Notificaciones de actividades.
* **Configuracion-Sistema:** Informacion de la configuración.
* **Roles:** Sistema de roles.
  
**Diagrama entidad-relación:** 

 ![](https://github.com/J4dysIG/Proyecto-NovaHardware/blob/main/public/images/Diagrama%20Entidad-Relacion.jpeg)

Las entidades clave incluyen:

- Usuarios.
- Componentes
- Carrito-Compras.
- Pedidos-Ventas.
- Detalle-Pedido.
- Notificaciones.
- Configuracion-Sistema.
- Roles.

**Diagrama de clases:** 

  FOTOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO

   
   **Descripción de las Entidades y Relaciones:**

-   **Usuarios:**
    -   Atributos: Información personal del cliente.
    -   Relaciones: Pedidos-Ventas.
        
-   **Componentes:**
    -   Atributos: Información de stcok.
    -   Relaciones: Detalles de pedidos.
      
-   **Carrito_Compras:**
    -   Atributos: Articulos a comprar.
    -   Relaciones: Usuario, Componentes.
 
-   **Pedidos-Ventas**
    -   Atributos: Información sobre cada pedido.
    -   Relaciones: Usuario, Detalle-pedido.
      
-   **Detalle-Pedido:**
    -   Atributos: Información sobre el pedido.
    -   Relaciones: Usuario, Pedidos-ventas.

-   **Notificaciones:**
    -   Atributos: Notificar al usuario.
    -   Relaciones: Usuario, Pedido.
 
-   **Configuracion-Sistema:**
    -   Atributos: Configurar el sistema.
    -   Relaciones: Notificaciones.

-   **Roles:**
    -   Atributos: Identificar tu rol
    -   Relaciones: Usuario.


**Consultas Principales a Base de Datos:**  

 - Clientes

![](https://github.com/J4dysIG/Proyecto-NovaHardware/blob/main/public/ventas.jpg)

- Poductos

![](https://github.com/J4dysIG/Proyecto-NovaHardware/blob/main/public/productos.jpg)

- Provedores

![](https://github.com/J4dysIG/Proyecto-NovaHardware/blob/main/public/Proveedores.jpg)
  
- Usuarios

![](https://github.com/J4dysIG/Proyecto-NovaHardware/blob/main/public/Usuarios.jpg)

- Ventas

![](https://github.com/J4dysIG/Proyecto-NovaHardware/blob/main/public/ventas.jpg)

## 11. Seguridad

NovaHardware esta completamente comprometida con la seguridad de sus usuarios y la integridad del sistema, para ello se tomaron metidas para salvaguardar los datos de los mismos.

**Mecanismos de seguridad existentes:**

- **Autenticación segura:**  
  - Inicio de sesión controlado.
  - Cifrado de contraseñas.

- **Control de acceso por roles:**  
  - Limita el acceso a rutas no autorizadas.
  - Interfaz de administración protegida por sesión activa.

- **Validación de entradas:**  
  - Prevención de infecciones y datos maliciosos.

- **Protección de información sensible:**  
  - Conexión a base de datos protegida y segura.

- **Manejo de errores:**  
  - Captura de errores.
 
## Conclusiones

### ¿Cumple el software con los requisitos de calidad?

- **Requisitos funcionales:** Los requisitos en este aparatdo han sido en su mayoria cumplidos con éxito. (Pagos, login, Catálogo, roles, perfil, etc)
- **Requisitos no funcionales:** La mayoria de los requisitos han sido cumplidos con bastante satisfacción.


### ¿Es apto para pasar a producción?

- El sistema es apto para usarse en su propósito inicial el cual es meramente académico. 
- No esta diseñado ni es recomendable el uso en un entorno de producción final, Hasta corregir detalles pequeños que este necesita.


## **12. Referencias y Recursos**

Para el desarrollo y buen funcionamiento de *NovaHardware* nos apoyamos de muy buenas herramientas y recursos académicos.
 
*Recursos Tecnológicos*

- [Node.js](https://nodejs.org/) 
- [Express.js](https://expressjs.com/) 
- [PostgreSQL](https://www.postgresql.org/)
- [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)

**Herramientas de Desarrollo**

- [Visual Studio Code](https://code.visualstudio.com/)
- [GitHub (Repositorio NovaHardware)](https://github.com/J4dysIG/Proyecto-NovaHardware)
- [PostgreSQL](https://www.postgresql.org/)

**Prototipado y Diseño**

- [Figma - Prototipo NovaHardware](https://www.figma.com/design/KihWZmMrZL4ETI6zDzgbgN/Untitled?node-id=0-1&p=f&t=J43oF2a5e1fdlURn-0)

