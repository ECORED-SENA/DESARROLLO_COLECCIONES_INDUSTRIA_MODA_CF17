(function(e){function a(a){for(var n,i,t=a[0],s=a[1],d=a[2],l=0,u=[];l<t.length;l++)i=t[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&u.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);m&&m(a);while(u.length)u.shift()();return c.push.apply(c,d||[]),o()}function o(){for(var e,a=0;a<c.length;a++){for(var o=c[a],n=!0,i=1;i<o.length;i++){var t=o[i];0!==r[t]&&(n=!1)}n&&(c.splice(a--,1),e=s(s.s=o[0]))}return e}var n={},i={app:0},r={app:0},c=[];function t(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"5945eab3","chunk-0206bfa0":"70d7fd13","chunk-04b93936":"2f9563f4","chunk-13a6037e":"cefd43b0","chunk-16015154":"0976b51a","chunk-17977988":"8e0e8cc3","chunk-2c06842c":"bd8f6317","chunk-2d208d90":"d4a42c93","chunk-2d21d0e2":"6b5e1dea","chunk-2d22c123":"aab16ffa","chunk-2e80bb9a":"88c163e2","chunk-3145fe0f":"ace4a31c","chunk-319206de":"a11cfeba","chunk-328f70dd":"2da5fd41","chunk-3807499c":"b8b56c51","chunk-3dc647fd":"d9693972","chunk-4cdd78c0":"c9630ea1","chunk-4fde0a08":"52a4dbe6","chunk-515a8379":"e467fe65","chunk-53ccb27e":"cffb1abe","chunk-59974754":"dd69640e","chunk-766a929b":"ce1246e8","chunk-839300a6":"443635ff","chunk-c796899c":"0116c011","chunk-dbb9869e":"a43a1efd",comple:"ac82979f",creditos:"b8764e06",glosario:"374aba8d",intro:"ef578133",referencias:"b780a750",tema1:"81ec4868",tema2:"04bb06f0",tema3:"979b99a8"}[e]+".js"}function s(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(e){var a=[],o={"chunk-04b93936":1,"chunk-16015154":1,"chunk-17977988":1,"chunk-3145fe0f":1,"chunk-328f70dd":1,"chunk-3807499c":1,"chunk-3dc647fd":1,"chunk-4fde0a08":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-766a929b":1,"chunk-839300a6":1,"chunk-dbb9869e":1,comple:1,creditos:1,glosario:1,intro:1,referencias:1};i[e]?a.push(i[e]):0!==i[e]&&o[e]&&a.push(i[e]=new Promise((function(a,o){for(var n="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-04b93936":"2cd5135e","chunk-13a6037e":"31d6cfe0","chunk-16015154":"d035a47c","chunk-17977988":"d035a47c","chunk-2c06842c":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-3145fe0f":"d035a47c","chunk-319206de":"31d6cfe0","chunk-328f70dd":"d035a47c","chunk-3807499c":"d035a47c","chunk-3dc647fd":"d035a47c","chunk-4cdd78c0":"31d6cfe0","chunk-4fde0a08":"5d24a906","chunk-515a8379":"af523a77","chunk-53ccb27e":"31d6cfe0","chunk-59974754":"aca61583","chunk-766a929b":"d05dea55","chunk-839300a6":"b67dc245","chunk-c796899c":"31d6cfe0","chunk-dbb9869e":"d035a47c",comple:"10775c03",creditos:"33e0638d",glosario:"84a96c6a",intro:"0e433876",referencias:"61c3bfbc",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0"}[e]+".css",r=s.p+n,c=document.getElementsByTagName("link"),t=0;t<c.length;t++){var d=c[t],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===n||l===r))return a()}var u=document.getElementsByTagName("style");for(t=0;t<u.length;t++){d=u[t],l=d.getAttribute("data-href");if(l===n||l===r)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var n=a&&a.target&&a.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete i[e],m.parentNode.removeChild(m),o(c)},m.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){i[e]=0})));var n=r[e];if(0!==n)if(n)a.push(n[2]);else{var c=new Promise((function(a,o){n=r[e]=[a,o]}));a.push(n[2]=c);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=t(e);var u=new Error;d=function(a){l.onerror=l.onload=null,clearTimeout(m);var o=r[e];if(0!==o){if(o){var n=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",u.name="ChunkLoadError",u.type=n,u.request=i,o[1](u)}r[e]=void 0}};var m=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(a)},s.m=e,s.c=n,s.d=function(e,a,o){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)s.d(o,n,function(a){return e[a]}.bind(null,n));return o},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=a,d=d.slice();for(var u=0;u<d.length;u++)a(d[u]);var m=l;c.push([0,"chunk-vendors"]),o()})({0:function(e,a,o){e.exports=o("56d7")},"230f":function(e,a,o){e.exports=o.p+"img/fondo-banner-principal.4523462b.svg"},"52e5":function(e,a,o){e.exports=o.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,o){"use strict";o.r(a);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("68f3"),i=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"app",attrs:{id:"app"}},[o("Header"),o("div",{staticClass:"contenedor-principal"},[o("AsideMenu"),o("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[o("router-view")],1)],1),o("BarraAvance"),o("Accesibilidad")],1)},r=[],c={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},t=c,s=o("2877"),d=Object(s["a"])(t,i,r,!1,null,null,null),l=d.exports,u=(o("d3b7"),o("3ca3"),o("ddb0"),o("b0c0"),o("2b0e")),m=o("8c4f"),p=o("ae58"),f=o("7e58");u["a"].use(m["a"]);var b=new m["a"]({routes:[{path:"/",name:"inicio",component:p["a"]},{path:"/introduccion",name:"introduccion",component:function(){return o.e("intro").then(o.bind(null,"5167"))}},{path:"/curso",name:"curso",component:f["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return o.e("tema1").then(o.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return o.e("tema2").then(o.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return o.e("tema3").then(o.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return o.e("tema3").then(o.bind(null,"3eb5"))}},{path:"tema5",name:"tema5",component:function(){return o.e("tema3").then(o.bind(null,"5029"))}},{path:"tema6",name:"tema6",component:function(){return o.e("tema3").then(o.bind(null,"92ea"))}},{path:"tema7",name:"tema7",component:function(){return o.e("tema3").then(o.bind(null,"a2b2"))}}]},{path:"/actividad",name:"actividad",component:function(){return o.e("actividad").then(o.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return o.e("glosario").then(o.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return o.e("comple").then(o.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return o.e("referencias").then(o.bind(null,"64ef"))}},{path:"/creditos",name:"creditos",component:function(){return o.e("creditos").then(o.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var o={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?o:new Promise((function(e){setTimeout((function(){e(o)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),h=b,g=o("1c2c"),v=(o("a3a0"),{global:{componenteFormativo:"Procesos de producción y ensamble",descripcionCurso:"La producción debe entenderse como la capacidad de desarrollar cualquier actividad productiva, abarcando todos los procesos que hay entre la transformación de las materias primas hasta la confección de prendas acabadas, pasando por cada uno de sus procesos, conociendo la influencia de los tiempos en los métodos de producción, costos del proceso de la prenda y técnicas de trabajo para agilizar la fabricación.",imagenBannerPrincipal:o("ae0a"),fondoBannerPrincipal:o("230f")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Generalidades de la industria de la confección",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Características de la industria en el mundo, América Latina y Colombia",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Estructura de la cadena textil confección ",hash:"t_1_2"},{icono:"far fa-file-alt",numero:"1.3",titulo:"Buenas prácticas de manufactura en confección ",hash:"t_1_3"},{icono:"far fa-file-alt",numero:"1.4",titulo:"Variables que intervienen en el proceso productivo",hash:"t_1_4"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Los procesos en la empresa de confección",desarrolloContenidos:!0,subMenu:[]},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Modelos de producción",desarrolloContenidos:!0,subMenu:[]},{nombreRuta:"tema4",icono:"far fa-file-alt",numero:"4",titulo:"La prenda y sus costos",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"4.1",titulo:"Definición de los costos",hash:"t_4_1"},{icono:"far fa-file-alt",numero:"4.2",titulo:"Valor del minuto",hash:"t_4_2"},{icono:"far fa-file-alt",numero:"4.3",titulo:"Costos de una prenda",hash:"t_4_3"},{icono:"far fa-file-alt",numero:"4.4",titulo:"Costos de un lote",hash:"t_4_4"}]},{nombreRuta:"tema5",icono:"far fa-file-alt",numero:"5",titulo:"Clasificación de las empresas",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"5.1",titulo:"Clasificación jurídica de las empresas",hash:"t_5_1"},{icono:"far fa-file-alt",numero:"5.2",titulo:"Relaciones laborales",hash:"t_5_2"}]},{nombreRuta:"tema6",icono:"far fa-file-alt",numero:"6",titulo:"El diseño como propiedad intelectual",desarrolloContenidos:!0,subMenu:[]}],subMenu:[{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"Ananth, I., Seshadri, S., & Vasher, R. (2010). Administración de la cadena de suministro Toyota. México: Mc Graw Hill. "},{referencia:"Cherly ( 4 junio del 2918) Fábrica modelo Cheverly (video). You tube.  ",link:"https://www.youtube.com/watch?v=D6sT0pOeGPM"},{referencia:"Chiavenato, I., y Villamizar, G. (2001). Administración (3ª ed., Págs. 147 - 200). Bogotá [etc.]: McGraw-Hill."},{referencia:"Carrillo, J., Gomis, R. (2003). “Los retos de las maquiladoras ante la pérdida de competitividad”, Comercio Exterior, Vol. 53, No. 4, pp. 318-327, abril."},{referencia:"Código Civil.  Secretaría del Senado. Colombia, Diario Oficial 9 de noviembre 2020."},{referencia:"Código Sustantivo del Trabajo. Secretaría del Senado. Colombia, Diario Oficial 9 de noviembre 2020."},{referencia:"Código de Comercio. Quinta edición septiembre 2000. Legis. "},{referencia:"Decreto 957 Departamento Administrativo de la Función Pública.  Colombia 5 de junio del 2019. "},{referencia:"Dussan Y, (2017) Estudio de métodos y tiempos para mejorar y/o fortalecer los procesos en el area de producción de la empresa confecciones. Tesis de grado. "},{referencia:"Nieto V., Lopez J., (2017). Cadena de Textil-Confecciones Estructura, Comercio Internacional y Protección"},{referencia:"Hincapié, S. and Saker, F. (2014). “Implementar un sistema de producción para la confección de camisas en Medellín para la marca Camisería Europea”. Tesis de grado, Universidad Pontificia Bolivariana, Medellín."},{referencia:"Ingeniería de confección, (2018). Ejemplo de cómo calcular el costo de un minuto de producción del personal directo de una planta. (video). YouTube.  ",link:"https://www.youtube.com/watch?v=J_GvujxudnI"},{referencia:"Krajewski, L. J., Ritzman, L. P., & Malhotra, M. K. (2008). Administración de operaciones. Procesos y cadenas de valor. Mexico: Pearson Educación."},{referencia:"Kilubo (2019). Coser para vender. Como calcular el costo de tus productos hechos a mano.(video).YouTube.  ",link:"https://www.youtube.com/watch?v=O8AF_tLLAxQ"},{referencia:"Medina, J. (2007). Modelo Integral de la productividad. Bogotá: Fondo de publicaciones Universidad Sergio Arboleda."},{referencia:"Medina, J., & Cordero, N. (2010). Gestión Estratégica de la Calidad. Bogotá: Fondo de publicaciones Universidad Sergio Arboleda. Ministerio de Comercio, Industria y Turismo. (2009). Desarrollando sectores de clase mundial en Colombia. Bogotá: Autor. Organización de las Naciones Unidas para el Desarrollo Industrial. (S.f.). Guía para el Desarrollo de Proveedores. ",link:"https://www.unido.org/fileadmin/import/9605_GuaparelDesarrollodeProveedores.pdf"},{referencia:"Quantum tech hd, (2020), Como se hace la ropa proceso completo de confección, (video). YouTube.  ",link:"https://www.youtube.com/watch?v=2F5nOEfttIk"},{referencia:"Ley 23 de 1982. Secretaría del Senado. Colombia. Diario Oficial 9 noviembre 2020."},{referencia:"P.A. Sánchez, F. Ceballos, G. Sánchez Torres. (2015). Análisis del proceso productivo de una empresa de confecciones: modelación y simulación. Ciencia e Ingeniería Neogranadina, 25 (2), pp 137 - 150, DOI:   ",link:"http://dx.doi.org/10.18359/rcin.1436"},{referencia:"García, S (1999). Administración financiera fundamentos y aplicaciones. "},{referencia:"Ramírez (2015) Proceso Productivo de una camisa (video). YouTube.  ",link:"https://www.youtube.com//watch?v=iXYdI-6xC3s"},{referencia:"Vélez, L., Rodríguez, E., Camacho, M. (2013). “Informe desempeño del sector textil de confecciones 2008-2012”. Superintendencia de Sociedades. Bogotá. "}],glosario:[{termino:"Capacidad productiva",significado:"La capacidad que tiene una unidad productiva para producir su máximo nivel de bienes o servicios con una serie de recursos disponibles. Para su cálculo, se toma de referencia un periodo de tiempo determinado."},{termino:"Costos",significado:"Son aquellos que influyen directamente en la producción o fabricación de un producto o servicio e influirá en el precio final del mismo."},{termino:"Cuello de botella",significado:"Se denomina así a aquellas actividades que disminuyen el proceso de producción, incrementando los tiempos de espera y reduciendo la productividad, lo cual genera un aumento en el costo final del producto."},{termino:"Escalado",significado:"Es el nombre que recibe el proceso de crear diferentes tallas del mismo vestido, habitualmente se desarrollan todas las tallas, haciendo crecer el patrón en los puntos precisos."},{termino:"Estandarizar",significado:"Es el proceso de ajustar o adaptar características en un producto, servicio o procedimiento; con el objetivo de que éstos se asemejan a un tipo, modelo o norma en común."},{termino:"Moldería",significado:"Se encarga de moldear la ropa a cada persona, de tomar muestras de diseños llevadas individualmente y luego unirlas para crear un estilo de ropa en particular, cabe destacar que la persona que se encarga de esto, debe tener capacidades para las medidas exactas, para el dibujo y el diseño, además de poseer una inmensa creatividad."},{termino:"MTM",significado:"MTM es el acrónimo en inglés de Methods Time Measurement, es decir, Medida del Tiempo de los Métodos. En el contexto del estudio del trabajo los sistemas de tiempos predeterminados se definen como procedimientos que permiten calcular tiempos teóricos de ejecución de actividades totalmente influenciables por el hombre."},{termino:"Proceso productivo",significado:"Serie de operaciones y procesos necesarios que se realizan de forma planificada y sucesiva para lograr la elaboración de productos."},{termino:"Proceso de flujo continuo",significado:"Son los elementos se procesan y pasan directamente al siguiente proceso de una sola pieza a la vez. Cada paso de procesamiento completa su trabajo antes del siguiente proceso necesita el elemento, y el tamaño del lote de transferencia es una."},{termino:"Procesos en serie",significado:"La producción en serie o producción en masa aparece en la elaboración de productos estandarizados que pasan de forma secuencial por las distintas etapas del proceso de fabricación, siguiendo un ritmo controlado y manteniendo un escaso nivel de inventario entre cada una de las operaciones que integran el proceso."},{termino:"Procesos sin flujo",significado:"Se refieren a aquellos procesos donde se disponen las operaciones alrededor del producto. No existe de antemano ningún flujo definido, por consiguiente, son los adecuados para los productos por diseño."},{termino:"Producción continua",significado:"Este método de producción se utiliza para fabricar, producir, o procesar materiales sin interrupción, a través de un proceso de flujo continuo que permite mantener los materiales en continuo movimiento y, generalmente, funcionando las 24 horas al día, siete días a la semana con alguna parada de mantenimiento, aunque poco frecuentes."},{termino:"Producción en masa",significado:"Es la producción de grandes cantidades de productos estandarizados en base a líneas de montaje. Se caracteriza por la mecanización como medio para lograr un alto volumen de unidades producidas, obtenidas partiendo de una cuidadosa organización de flujo de materiales a través de varias etapas de la fabricación, y en base a la supervisión de los estándares de calidad y la división del trabajo."},{termino:"Producción intermitente",significado:"Los procesos de transformación de este tipo se suceden a intervalos irregulares y sin continuidad de flujo. Los productos son fabricados en base a los pedidos del cliente y, por eso, los bienes se producen en pequeña escala. En este sistema, se producen grandes variedades de productos en los que tamaño, diseño y otras características intrínsecas al bien pueden variar."},{termino:"Producción por procesos",significado:"En este caso, el flujo de materiales también es continuo, pero todo el sistema productivo se destina a la fabricación de un solo bien el cual, una vez obtenido, no puede de ninguna manera descomponerse en sus materias primas."},{termino:"Restricción de tiempo",significado:"Las restricciones de tiempo son límites de tiempo que se aplican a los elementos sometidos a apelación y que se utilizan para controlar el número de días en los que debe realizarse alguna acción."},{termino:"Sistemas de producción continua",significado:"Producción continua o lineal es el caso del tratamiento y envasado de leche. Las operaciones se van realizando sobre el producto básico según una secuencia, de forma que cada una de ellas le va añadiendo valor al producto, ya que le va modificando y mejorando."},{termino:"Sistemas de producción intermitente",significado:"Los procesos de transformación de este tipo se suceden a intervalos irregulares y sin continuidad de flujo. Los productos son fabricados en base a los pedidos del cliente y, por eso, los bienes se producen en pequeña escala. En este sistema, se producen grandes variedades de productos en los que tamaño, diseño y otras características intrínsecas al bien pueden variar, por lo que la flexibilidad es una de las principales características que las diferencias de los tipos de sistemas de producción continua."},{termino:"Sistemas de producción modular",significado:"Esta forma de producción parte de un enfoque que subdivide un sistema en partes más pequeñas, denominadas módulos, y que pueden ser creadas de forma independiente. Su uso puede aplicarse a sistemas distintos para obtener múltiples funcionalidades."},{termino:"Tiempo de producción",significado:'El tiempo de producción ("lead time") es el tiempo que transcurre desde que se inicia un proceso de producción hasta que se completa.'},{termino:"Tiempo de espera",significado:"El tiempo que el proceso de producción espera a que el sistema acepte órdenes de producción antes de que se produzca un tiempo de espera excedido y el proceso se detenga."},{termino:"Tiempo de operación",significado:"Es el tiempo necesario para realizar una o varias operaciones. Está compuesto por los tiempos de: espera, preparación, operación y transferencia."},{termino:"Valor minuto",significado:"Es el valor que le cuesta a las empresas producir durante un minuto."}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Fernelis Mauricio Echeverri",cargo:"Instructor",centro:"Centro de Formación en Diseño Confección y Moda - Regional Antioquia"},{nombre:"Marisol Osorio",cargo:"Líder Sennova",centro:"Centro de Formación en Diseño Confección y Moda - Regional Antioquia"},{nombre:"Catherine Bedoya",cargo:"Diseñador y evaluador instruccional",centro:"Centro de Gestión industrial - Regional Distrito Capital"},{nombre:"Andrés Felipe Velandia",cargo:"Revisión Metodológica y pedagógica",centro:""},{nombre:"Sandra Patricia Hoyos Sepúlveda",cargo:"Edición y corrección de estilo",centro:"Centro para la Industria de la Comunicación Gráfica"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"María Natalia Maldonado Delgado",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Adriana Marcela Suárez Eljure",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Carmen Alicia Martínez Torres",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Gilberto Junior Rodríguez Rodríguez",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"José Jaime Luis Tang Pinzón",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Nelson Iván Vera Briceño",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Wilson Andrés Arenales Cáceres",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Zuleidy Maria Ruiz Torres",cargo:"Producción audiovisual",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Edgar Mauricio Cortes García",cargo:"Desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Yuli Marcela Gómez Tarazona ",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"}]}});n["a"].prototype.$config=v;var y=o("9224");n["a"].prototype.$package=y,new n["a"]({router:h,store:g["a"],render:function(e){return e(l)}}).$mount("#app")},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"4.2.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"3.2.0","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},"9eb5":function(e,a,o){e.exports=o.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,o){},ae0a:function(e,a,o){e.exports=o.p+"img/banner-princiapal.e5d04883.svg"}});
//# sourceMappingURL=app.f7456842.js.map