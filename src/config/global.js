export default {
  global: {
    componenteFormativo: 'Procesos de producción y ensamble',
    descripcionCurso:
      'La producción debe entenderse como la capacidad de desarrollar cualquier actividad productiva, abarcando todos los procesos que hay entre la transformación de las materias primas hasta la confección de prendas acabadas, pasando por cada uno de sus procesos, conociendo la influencia de los tiempos en los métodos de producción, costos del proceso de la prenda y técnicas de trabajo para agilizar la fabricación.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Generalidades de la industria de la confección',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Características de la industria en el mundo, América Latina y Colombia',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Estructura de la cadena textil confección ',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Buenas prácticas de manufactura en confección ',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Variables que intervienen en el proceso productivo',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Los procesos en la empresa de confección',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Modelos de producción',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'La prenda y sus costos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Definición de los costos',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Valor del minuto',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Costos de una prenda',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Costos de un lote',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Clasificación de las empresas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Clasificación jurídica de las empresas',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Relaciones laborales',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'El diseño como propiedad intelectual',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Ananth, I., Seshadri, S., & Vasher, R. (2010). Administración de la cadena de suministro Toyota. México: Mc Graw Hill. ',
    },
    {
      referencia:
        'Cherly ( 4 junio del 2918) Fábrica modelo Cheverly (video). You tube.  ',
      link: 'https://www.youtube.com/watch?v=D6sT0pOeGPM',
    },
    {
      referencia:
        'Chiavenato, I., y Villamizar, G. (2001). Administración (3ª ed., Págs. 147 - 200). Bogotá [etc.]: McGraw-Hill.',
    },
    {
      referencia:
        'Carrillo, J., Gomis, R. (2003). “Los retos de las maquiladoras ante la pérdida de competitividad”, Comercio Exterior, Vol. 53, No. 4, pp. 318-327, abril.',
    },
    {
      referencia:
        'Código Civil.  Secretaría del Senado. Colombia, Diario Oficial 9 de noviembre 2020.',
    },
    {
      referencia:
        'Código Sustantivo del Trabajo. Secretaría del Senado. Colombia, Diario Oficial 9 de noviembre 2020.',
    },
    {
      referencia: 'Código de Comercio. Quinta edición septiembre 2000. Legis. ',
    },
    {
      referencia:
        'Decreto 957 Departamento Administrativo de la Función Pública.  Colombia 5 de junio del 2019. ',
    },
    {
      referencia:
        'Dussan Y, (2017) Estudio de métodos y tiempos para mejorar y/o fortalecer los procesos en el area de producción de la empresa confecciones. Tesis de grado. ',
    },
    {
      referencia:
        'Nieto V., Lopez J., (2017). Cadena de Textil-Confecciones Estructura, Comercio Internacional y Protección',
    },
    {
      referencia:
        'Hincapié, S. and Saker, F. (2014). “Implementar un sistema de producción para la confección de camisas en Medellín para la marca Camisería Europea”. Tesis de grado, Universidad Pontificia Bolivariana, Medellín.',
    },
    {
      referencia:
        'Ingeniería de confección, (2018). Ejemplo de cómo calcular el costo de un minuto de producción del personal directo de una planta. (video). YouTube.  ',
      link: 'https://www.youtube.com/watch?v=J_GvujxudnI',
    },
    {
      referencia:
        'Krajewski, L. J., Ritzman, L. P., & Malhotra, M. K. (2008). Administración de operaciones. Procesos y cadenas de valor. Mexico: Pearson Educación.',
    },
    {
      referencia:
        'Kilubo (2019). Coser para vender. Como calcular el costo de tus productos hechos a mano.(video).YouTube.  ',
      link: 'https://www.youtube.com/watch?v=O8AF_tLLAxQ',
    },
    {
      referencia:
        'Medina, J. (2007). Modelo Integral de la productividad. Bogotá: Fondo de publicaciones Universidad Sergio Arboleda.',
    },
    {
      referencia:
        'Medina, J., & Cordero, N. (2010). Gestión Estratégica de la Calidad. Bogotá: Fondo de publicaciones Universidad Sergio Arboleda. Ministerio de Comercio, Industria y Turismo. (2009). Desarrollando sectores de clase mundial en Colombia. Bogotá: Autor. Organización de las Naciones Unidas para el Desarrollo Industrial. (S.f.). Guía para el Desarrollo de Proveedores. ',
      link:
        'https://www.unido.org/fileadmin/import/9605_GuaparelDesarrollodeProveedores.pdf',
    },
    {
      referencia:
        'Quantum tech hd, (2020), Como se hace la ropa proceso completo de confección, (video). YouTube.  ',
      link: 'https://www.youtube.com/watch?v=2F5nOEfttIk',
    },
    {
      referencia:
        'Ley 23 de 1982. Secretaría del Senado. Colombia. Diario Oficial 9 noviembre 2020.',
    },
    {
      referencia:
        'P.A. Sánchez, F. Ceballos, G. Sánchez Torres. (2015). Análisis del proceso productivo de una empresa de confecciones: modelación y simulación. Ciencia e Ingeniería Neogranadina, 25 (2), pp 137 - 150, DOI:   ',
      link: 'http://dx.doi.org/10.18359/rcin.1436',
    },
    {
      referencia:
        'García, S (1999). Administración financiera fundamentos y aplicaciones. ',
    },
    {
      referencia:
        'Ramírez (2015) Proceso Productivo de una camisa (video). YouTube.  ',
      link: 'https://www.youtube.com//watch?v=iXYdI-6xC3s',
    },
    {
      referencia:
        'Vélez, L., Rodríguez, E., Camacho, M. (2013). “Informe desempeño del sector textil de confecciones 2008-2012”. Superintendencia de Sociedades. Bogotá. ',
    },
  ],
  glosario: [
    {
      termino: 'Capacidad productiva',
      significado:
        'La capacidad que tiene una unidad productiva para producir su máximo nivel de bienes o servicios con una serie de recursos disponibles. Para su cálculo, se toma de referencia un periodo de tiempo determinado.',
    },
    {
      termino: 'Costos',
      significado:
        'Son aquellos que influyen directamente en la producción o fabricación de un producto o servicio e influirá en el precio final del mismo.',
    },
    {
      termino: 'Cuello de botella',
      significado:
        'Se denomina así a aquellas actividades que disminuyen el proceso de producción, incrementando los tiempos de espera y reduciendo la productividad, lo cual genera un aumento en el costo final del producto.',
    },
    {
      termino: 'Escalado',
      significado:
        'Es el nombre que recibe el proceso de crear diferentes tallas del mismo vestido, habitualmente se desarrollan todas las tallas, haciendo crecer el patrón en los puntos precisos.',
    },
    {
      termino: 'Estandarizar',
      significado:
        'Es el proceso de ajustar o adaptar características en un producto, servicio o procedimiento; con el objetivo de que éstos se asemejan a un tipo, modelo o norma en común.',
    },
    {
      termino: 'Moldería',
      significado:
        'Se encarga de moldear la ropa a cada persona, de tomar muestras de diseños llevadas individualmente y luego unirlas para crear un estilo de ropa en particular, cabe destacar que la persona que se encarga de esto, debe tener capacidades para las medidas exactas, para el dibujo y el diseño, además de poseer una inmensa creatividad.',
    },
    {
      termino: 'MTM',
      significado:
        'MTM es el acrónimo en inglés de Methods Time Measurement, es decir, Medida del Tiempo de los Métodos. En el contexto del estudio del trabajo los sistemas de tiempos predeterminados se definen como procedimientos que permiten calcular tiempos teóricos de ejecución de actividades totalmente influenciables por el hombre.',
    },
    {
      termino: 'Proceso productivo',
      significado:
        'Serie de operaciones y procesos necesarios que se realizan de forma planificada y sucesiva para lograr la elaboración de productos.',
    },
    {
      termino: 'Proceso de flujo continuo',
      significado:
        'Son los elementos se procesan y pasan directamente al siguiente proceso de una sola pieza a la vez. Cada paso de procesamiento completa su trabajo antes del siguiente proceso necesita el elemento, y el tamaño del lote de transferencia es una.',
    },
    {
      termino: 'Procesos en serie',
      significado:
        'La producción en serie o producción en masa aparece en la elaboración de productos estandarizados que pasan de forma secuencial por las distintas etapas del proceso de fabricación, siguiendo un ritmo controlado y manteniendo un escaso nivel de inventario entre cada una de las operaciones que integran el proceso.',
    },
    {
      termino: 'Procesos sin flujo',
      significado:
        'Se refieren a aquellos procesos donde se disponen las operaciones alrededor del producto. No existe de antemano ningún flujo definido, por consiguiente, son los adecuados para los productos por diseño.',
    },
    {
      termino: 'Producción continua',
      significado:
        'Este método de producción se utiliza para fabricar, producir, o procesar materiales sin interrupción, a través de un proceso de flujo continuo que permite mantener los materiales en continuo movimiento y, generalmente, funcionando las 24 horas al día, siete días a la semana con alguna parada de mantenimiento, aunque poco frecuentes.',
    },
    {
      termino: 'Producción en masa',
      significado:
        'Es la producción de grandes cantidades de productos estandarizados en base a líneas de montaje. Se caracteriza por la mecanización como medio para lograr un alto volumen de unidades producidas, obtenidas partiendo de una cuidadosa organización de flujo de materiales a través de varias etapas de la fabricación, y en base a la supervisión de los estándares de calidad y la división del trabajo.',
    },
    {
      termino: 'Producción intermitente',
      significado:
        'Los procesos de transformación de este tipo se suceden a intervalos irregulares y sin continuidad de flujo. Los productos son fabricados en base a los pedidos del cliente y, por eso, los bienes se producen en pequeña escala. En este sistema, se producen grandes variedades de productos en los que tamaño, diseño y otras características intrínsecas al bien pueden variar.',
    },
    {
      termino: 'Producción por procesos',
      significado:
        'En este caso, el flujo de materiales también es continuo, pero todo el sistema productivo se destina a la fabricación de un solo bien el cual, una vez obtenido, no puede de ninguna manera descomponerse en sus materias primas.',
    },
    {
      termino: 'Restricción de tiempo',
      significado:
        'Las restricciones de tiempo son límites de tiempo que se aplican a los elementos sometidos a apelación y que se utilizan para controlar el número de días en los que debe realizarse alguna acción.',
    },
    {
      termino: 'Sistemas de producción continua',
      significado:
        'Producción continua o lineal es el caso del tratamiento y envasado de leche. Las operaciones se van realizando sobre el producto básico según una secuencia, de forma que cada una de ellas le va añadiendo valor al producto, ya que le va modificando y mejorando.',
    },
    {
      termino: 'Sistemas de producción intermitente',
      significado:
        'Los procesos de transformación de este tipo se suceden a intervalos irregulares y sin continuidad de flujo. Los productos son fabricados en base a los pedidos del cliente y, por eso, los bienes se producen en pequeña escala. En este sistema, se producen grandes variedades de productos en los que tamaño, diseño y otras características intrínsecas al bien pueden variar, por lo que la flexibilidad es una de las principales características que las diferencias de los tipos de sistemas de producción continua.',
    },
    {
      termino: 'Sistemas de producción modular',
      significado:
        'Esta forma de producción parte de un enfoque que subdivide un sistema en partes más pequeñas, denominadas módulos, y que pueden ser creadas de forma independiente. Su uso puede aplicarse a sistemas distintos para obtener múltiples funcionalidades.',
    },
    {
      termino: 'Tiempo de producción',
      significado:
        'El tiempo de producción ("lead time") es el tiempo que transcurre desde que se inicia un proceso de producción hasta que se completa.',
    },
    {
      termino: 'Tiempo de espera',
      significado:
        'El tiempo que el proceso de producción espera a que el sistema acepte órdenes de producción antes de que se produzca un tiempo de espera excedido y el proceso se detenga.',
    },
    {
      termino: 'Tiempo de operación',
      significado:
        'Es el tiempo necesario para realizar una o varias operaciones. Está compuesto por los tiempos de: espera, preparación, operación y transferencia.',
    },
    {
      termino: 'Valor minuto',
      significado:
        'Es el valor que le cuesta a las empresas producir durante un minuto.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
