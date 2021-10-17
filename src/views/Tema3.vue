<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Modelos de producción

    p.mb-5 Antes de empezar a hablar sobre producción es muy importante definirla como el estudio de las técnicas de gestión empleadas para conseguir la mayor diferencia entre el valor agregado y el costo incorporado consecuencia de la transformación de recursos en productos finales.
    .row.justify-content-center.mb-5
      .col-lg-4 
        h4.mb-0 Existen diferentes modelos de producción según los sectores económicos, primario, secundario y terciario. 
      .col-lg-8 
        p.mb-0 Se podría decir que la industria del diseño y la moda se encuentra en estos últimos dos, no solo porque transforma la materia prima, sino que también se le presta un servicio intangible por medio de las redes comerciales de productos en el mundo al consumidor final. 
    figure.mb-5
      img(src='@/assets/curso/tema3/img01.png')      

    p.mb-5 Los modelos de producción en la industria de la moda integran principios y fundamentos conceptuales que deben ser apropiados por el personal que trabaja en el sector, a continuación, se hace referencia de ciertos términos que son importante conocer. 

    h3 Modelos de producción
    p.mb-5 Los sistemas de producción se dividen en producción continua y en sistemas de producción intermitente, ambos a su vez se dividen en otros subsistemas; la producción continua se divide en producción en masa y producción por procesos, la producción intermitente se divide en sistemas de producción modular, por lotes y por proyectos.
    .row.justify-content-center.mb-5
      .col-lg-8
        figure
          img(src='@/assets/curso/tema3/img02.svg')   

    h3 Fundamentos conceptuales para procesos de producción   
    p.mb-5 Los modelos de producción en la industria de la moda integran principios y fundamentos conceptuales que se manejan deben ser apropiados por el personal que trabaja en el sector, a continuación, se hace referencia de ciertos términos que son importante conocer
    
    div.mb-5
      .row.justify-content-center
        .col-lg-3
          button.btn.mb-3(id="button2" style="width:100%" autofocus v-on:click="clickBoton(1)") Productividad
          button.btn.mb-3(id="button2" style="width:100%" v-on:click="clickBoton(2)") Eficiencia
          button.btn.mb-3(id="button2" style="width:100%" v-on:click="clickBoton(3)") Efectividad
          button.btn.mb-3(id="button2" style="width:100%" v-on:click="clickBoton(4)") Balanceo de operaciones
          button.btn.mb-3(id="button2" style="width:100%" v-on:click="clickBoton(5)") Cuello de botella
          button.btn.mb-3(id="button2" style="width:100%" v-on:click="clickBoton(6)") Tiempo estándar permitido (SAM)
          button.btn.mb-3(id="button2" style="width:100%" v-on:click="clickBoton(7)") Tiempo de espera
          button.btn(id="button2" style="width:100%" v-on:click="clickBoton(8)") Tiempo de producción
        .col-lg-6.d-flex.py-1
          div.d-flex.align-items-top.py-5(style="width:100%; background-color: #F6F6F6; border-radius:15px")
            div.align-items-center(style="width:100%" v-if="mostrardiv==1")
              .row.mb-4
                .col-lg-2
                .col-lg-4
                  figure
                    img(src='@/assets/curso/tema3/img23.svg')   
              .row.mb-0
                .col-lg-2
                .col-lg-8
                  h4 Productividad
                  p.mb-0 Es la relación entre la cantidad de productos obtenida por un sistema productivo y los recursos utilizados para obtener dicha producción. También puede definirse como la relación entre los resultados y el tiempo utilizado para obtenerlos: cuanto menor sea el tiempo que lleve obtener el resultado deseado, más productivo es el sistema.
            div.align-items-center(style="width:100%" v-if="mostrardiv==2")             
              .row.mb-4
                .col-lg-2
                .col-lg-4
                  figure
                    img(src='@/assets/curso/tema3/img24.svg')   
              .row.mb-0
                .col-lg-2
                .col-lg-8
                  h4 Eficiencia
                  p.mb-0 Indica la utilización apropiada de los recursos y los resultados obtenidos( producir más con menos).
            div.align-items-center(style="width:100%" v-if="mostrardiv==3")
              .row.mb-4
                .col-lg-2
                .col-lg-4
                  figure
                    img(src='@/assets/curso/tema3/img25.svg')   
              .row.mb-0
                .col-lg-2
                .col-lg-8
                  h4 Efectividad
                  p.mb-0 Referencia la capacidad o habilidad que puede demostrar una persona, una máquina, un dispositivo o cualquier elemento para obtener determinado resultado a partir de una acción.
            div.align-items-center(style="width:100%" v-if="mostrardiv==4")
              .row.mb-4
                .col-lg-2
                .col-lg-4
                  figure
                    img(src='@/assets/curso/tema3/img22.svg')   
              .row.mb-0
                .col-lg-2
                .col-lg-8
                  h4 Balanceo de operaciones
                  p.mb-0 Es la forma de organizar el trabajo en el módulo de producción, se planea acorde a los tiempos de las operaciones asignadas para la fabricación de producto y el total de la meta a producir. Tienen como objetivo determinar el número de operarios y máquinas   disponibles para lograr la meta de producción   en los tiempos establecidos por el área de ingeniería, de manera que las cargas de trabajo (tiempo) sean los más similares posibles.
            div.align-items-center(style="width:100%" v-if="mostrardiv==5")
              .row.mb-4
                .col-lg-2
                .col-lg-4
                  figure
                    img(src='@/assets/curso/tema3/img26.svg')   
              .row.mb-0
                .col-lg-2
                .col-lg-8
                  h4 Cuello de botella
                  p.mb-0 En un proceso productivo se denomina cuello de botella al proceso más lento, debido a la complejidad de la operación por el método o herramienta utilizado. 
            div.align-items-center(style="width:100%" v-if="mostrardiv==6")
              .row.mb-4
                .col-lg-2
                .col-lg-4
                  figure
                    img(src='@/assets/curso/tema3/img27.svg')   
              .row.mb-0
                .col-lg-2
                .col-lg-8
                  h4 Tiempo estándar permitido (SAM)
                  p.mb-0 Son los tiempos permitidos y asignados a una operación, una vez se haya realizado un estudio de métodos y tiempos. 
            div.align-items-center(style="width:100%" v-if="mostrardiv==7")
              .row.mb-4
                .col-lg-2
                .col-lg-4
                  figure
                    img(src='@/assets/curso/tema3/img28.svg')   
              .row.mb-0
                .col-lg-2
                .col-lg-8
                  h4 Tiempo de espera
                  p.mb-0 Son aquellos tiempos en que tiene que esperar un producto, antes de ser atendido en el proceso en la línea de producción. 
            div.align-items-center(style="width:100%" v-if="mostrardiv==8")
              .row.mb-4
                .col-lg-2
                .col-lg-4
                  figure
                    img(src='@/assets/curso/tema3/img29.svg')   
              .row.mb-0
                .col-lg-2
                .col-lg-8
                  h4 Tiempo de producción
                  p.mb-0 Es el tiempo total de producción desde que inicia la primera operación hasta que termina la última operación, no se tienen en cuenta los tiempos perdidos del proceso productivo. 
            div.align-items-center(style="width:100%" v-if="mostrardiv==9")
              .row.mb-4
                .col-lg-2
                .col-lg-4
                  figure
                    img(src='@/assets/curso/tema3/img30.svg')   
              .row.mb-0
                .col-lg-2
                .col-lg-8
                  h4 Tiempo de prepación
                  p.mb-0 Son los tiempos asignados para la preparación de los equipos y las personas para estar en capacidad de realizar una producción.
            div.align-items-center(style="width:100%" v-if="mostrardiv==10")
              .row.mb-4
                .col-lg-2
                .col-lg-4
                  figure
                    img(src='@/assets/curso/tema3/img31.svg')   
              .row.mb-0
                .col-lg-2
                .col-lg-8
                  h4 Tiempo de operación
                  p.mb-0 Es el tiempo estándar de producción (SAM)para realizar una operación .
            div.align-items-center(style="width:100%" v-if="mostrardiv==11")
              .row.mb-4
                .col-lg-2
                .col-lg-4
                  figure
                    img(src='@/assets/curso/tema3/img32.svg')   
              .row.mb-0
                .col-lg-2
                .col-lg-8
                  h4 Valor minuto
                  p.mb-0 Es el valor pagado por cada minuto de operación en un proceso de fabricación .
            div.align-items-center(style="width:100%" v-if="mostrardiv==12")
              .row.mb-4
                .col-lg-2
                .col-lg-4
                  figure
                    img(src='@/assets/curso/tema3/img33.svg')   
              .row.mb-0
                .col-lg-2
                .col-lg-8
                  h4 Procesos en serie
                  p.mb-0 Es la producción secuencial de un producto a partir de un orden operacional, la estandarización de tiempos y las operaciones. 
            div.align-items-center(style="width:100%" v-if="mostrardiv==13")
              .row.mb-4
                .col-lg-2
                .col-lg-4
                  figure
                    img(src='@/assets/curso/tema3/img34.svg')   
              .row.mb-0
                .col-lg-2
                .col-lg-8
                  h4 UR: Unidades realizadas
                  p.mb-0 Son las unidades realizadas en un periodo de tiempo determinado.
            div.align-items-center(style="width:100%" v-if="mostrardiv==14")
              .row.mb-4
                .col-lg-2
                .col-lg-4
                  figure
                    img(src='@/assets/curso/tema3/img35.svg')   
              .row.mb-0
                .col-lg-2
                .col-lg-8
                  h4 TW: Tiempo trabajado
                  p.mb-0 Son los tiempos de trabajo reales, una vez se descuentan los tiempos perdidos de producción (paros fallas de máquinas u otras).
            div.align-items-center(style="width:100%" v-if="mostrardiv==15")
              .row.mb-4
                .col-lg-2
                .col-lg-4
                  figure
                    img(src='@/assets/curso/tema3/img36.svg')   
              .row.mb-0
                .col-lg-2
                .col-lg-8
                  h4 T.T: Tiempo total
                  p.mb-0 Es el tiempo total del lote de producción, incluidos los tiempos perdidos.
            div.align-items-center(style="width:100%" v-if="mostrardiv==16")
              .row.mb-4
                .col-lg-2
                .col-lg-4
                  figure
                    img(src='@/assets/curso/tema3/img37.svg')   
              .row.mb-0
                .col-lg-2
                .col-lg-8
                  h4 Op: Operación
                  p.mb-0 Acción realizada sobre un producto en una etapa  de su proceso de producción .
              
        .col-lg-3
          button.btn.mb-3(id="button2" style="width:100%" v-on:click="clickBoton(9)") Tiempo de prepación
          button.btn.mb-3(id="button2" style="width:100%" v-on:click="clickBoton(10)") Tiempo de operación
          button.btn.mb-3(id="button2" style="width:100%" v-on:click="clickBoton(11)") Valor minuto
          button.btn.mb-3(id="button2" style="width:100%" v-on:click="clickBoton(12)") Procesos en serie
          button.btn.mb-3(id="button2" style="width:100%" v-on:click="clickBoton(13)") UR: Unidades realizadas
          button.btn.mb-3(id="button2" style="width:100%" v-on:click="clickBoton(14)") TW: Tiempo trabajado
          button.btn.mb-3(id="button2" style="width:100%" v-on:click="clickBoton(15)") T.T: Tiempo total
          button.btn.mb-3(id="button2" style="width:100%" v-on:click="clickBoton(16)") Op: Operación
      

    h3 La planificación de la producción

    .row.justify-content-center.mb-5
      .col-lg-10
        LineaTiempoD.color-primario
          div(numero="1" titulo="Planificación de la producción")   
            .row.justify-content-center
              .col-lg-5
                figure
                  img(src='@/assets/curso/tema3/img03.png')   
              .col-lg-7
                p.mb-4 Está determinada por la unidad a vender en un periodo de tiempo determinado, con base en esta información se analiza la capacidad instalada de la planta, en cuanto a maquinaria, capital humano, tiempos de producción, suministro de materiales, tiempo de las operaciones, distribución de los módulos, según  complejidad de las prendas a fabricar. 
                p.mb-0 La organización de las plantas de producción está determinada por el flujo del proceso productivo, la flexibilidad en la ubicación de los puestos de trabajo, el flujo continuo de las operaciones, la comodidad de los trabajadores, la iluminación y aireación en beneficio del trabajador, las distancias en cada una de las operaciones, y la funcionalidad de manera efectiva.
          div(numero="2" titulo="Organización por módulos (Celdas) de producción en confecciones")           
            p.mb-4 La manufactura modular o celda de producción es la forma de organización más utilizada en plantas de producción en confecciones, es un concepto desarrollado por Toyota en los años 40's, su principio fundamental es el justo a tiempo, la reducción de inventarios, flexibilidad en los cambios de referencia, reducción de los costos y ciclos de producción a partir de la optimización de los tiempos  y la mejora de los indicadores de productividad. 
            .row.justify-content-center            
              .col-lg-5
                figure
                  img(src='@/assets/curso/tema3/img04.png')   
              .col-lg-7
                p.mb-4 El módulo o celda de producción se organiza de manera lineal de acuerdo con el orden operacional definido para el producto(vestuario), en un puesto de trabajo se realiza una o dos operaciones según el tipo de maquinaria, tiempo de producción y habilidad del operario.  Se tienen mesas auxiliares para descargar la producción terminada que será entregada al operario siguiente. 
                p.mb-0 Este sistema de producción se caracteriza por lotes de productos de una misma serie o referencia, por lo general son pequeños en el número de unidades, debido a las tendencias de la moda según la temporada. Su forma de organización es en pequeños módulos de producción conformado entre 3 y 6 operarios, cada uno encargado de una o varias operaciones.
          div(numero="3" titulo="El flujo de producción")
            .row.justify-content-center
              .col-lg-5
                figure
                  img(src='@/assets/curso/tema3/img05.png')   
              .col-lg-7
                p.mb-4 El flujo de producción en los sistemas modulares es en forma de U de acuerdo con el orden operacional definido en la ficha técnica del producto(vestuario), En ocasiones quien rota es el operario según su habilidad y conocimiento en la operación y manejo de la maquinaria. 
                p.mb-0 Para su implementación se deben tener en cuenta aspectos como cohesión del grupo, definición de normas y roles, determinar los objetivos de producción para el módulo, distribución y asignación de tarea y cargas de trabajo, compresión de la interrelación de sus operaciones y operarios. <b>La meta de uno es la meta de todos.</b>                            
        
    .row.justify-content-center.mb-5
      .col-lg-10
        div.t3-div.py-5
          .row.justify-content-start.mb-2
            .col-lg-1
            .col-lg-1.p-0
              figure
                img(src='@/assets/curso/tema3/img06.svg')  
            .col-lg-5.p-0
              div.BorTit2.m-0.pb-0.mb-0
                h2.m-0 La ficha
              div.BorTit3.m-0.pt-0.mt-0
                h1.m-0 técnica
          .row.justify-content-center.mb-5
            .col-lg-5
              figure
                img(src='@/assets/curso/tema3/img07.png')  
            .col-lg-5
              p.mb-0 La ficha técnica es un documento cuya función principal es informar de una manera estandarizada y sencilla las características técnicas de su producto, describiendo las operaciones, tiempos, maquinaria, las imágenes del producto, las lupas, las observaciones de diseño o calidad   y normas técnicas requerida para la elaboración de este.   Esta información tiene utilidad a nivel comercial y productivo. La ficha técnica cuenta con el orden específico en que se va realizando la prenda: diseño, patronaje, trazo, corte, tiqueteado, confección, y terminación. 
          .row.justify-content-center.mb-5
            .col-lg-10
              figure
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)      

    .row.justify-content-center.mb-5
      .col-lg-10
        div.t3-div.py-5
          .row.justify-content-start.mb-2
            .col-lg-1
            .col-lg-1.p-0
              figure
                img(src='@/assets/curso/tema3/img08.svg')  
            .col-lg-5.p-0
              div.BorTit2.m-0.pb-0.mb-0
                h2.m-0 La orden de 
              div.BorTit3.m-0.pt-0.mt-0
                h1.m-0 producción
          .row.justify-content-center.mb-5
            .col-lg-5
              figure
                img(src='@/assets/curso/tema3/img09.png')  
            .col-lg-5
              p.mb-0 La orden de producción es un documento que establece los tiempos en días, describe el total de unidades a elaborar por referencia, las condiciones de entrega, los tiempos programados por lotes según la cantidad de piezas que conforman cada prenda. Este documento permite el control individualizado que se lleva a cada pedido o trabajo que se está elaborado.
          
    h3 Tipos de maquinaria para el proceso productivo en la industria de la confección
    .row.justify-content-center.mb-5
      .col-10
        .cajon.color-primario.py-4.px-5
          .row.justify-content-center
            .col-2
              figure
                img(src='@/assets/curso/tema3/img10.svg')              
            .col-10.d-flex.align-items-center
              p.mb-0 La identificación de los tipos de maquinaria del proceso productivo es primordial para la calidad en la costura de las prendas, cada máquina está dotada de aditamentos especializados según el tipo de tejido, prenda y tipo de operación. 
    p.mb-5 La maquinaria utilizada en el proceso productivo de confección tiene varias características, entre ellas está el tipo de tecnología que va desde primera generación (máquinas mecánicas), segunda (maquina eléctricas), tercera (electrónicas)  y cuarta generación (autómatas), cada máquina ofrece  ventajas para el confeccionista, razón por la cual  una persona que quiera trabajar en el mundo de la moda debe adquirir este conocimiento, porque le permitirá ser más creativo y realista en el desarrollo de sus prendas. Las máquinas más utilizadas en los diferentes procesos de confección son: maquina plana, maquina plana dos agujas, maquina fileteadora, maquina recubridora y maquina presilladora.

    .row.justify-content-center.mb-5
      .col-7
        figure
          img(src='@/assets/curso/tema3/img11.png')   

    h3 Métodos y tiempos    
    p.mb-4 En la industria de la confección hablar de rapidez en los procesos permite pensar siempre que hay una forma correcta para hacer las cosas y a su vez eficiente, es aquí donde los conceptos de métodos y tiempos toman poder.
    p.mb-5 En cualquier actividad que se realice y más aún en el desarrollo de colecciones, se necesita utilizar métodos adecuados para las diferentes operaciones y permitir ejecutarlas con mayor precisión, esta habilidad se desarrolla a través del conocimiento que se adquiere por el trabajo repetitivo; el saber estandarizar un proceso o una prenda de vestir permite identificar fechas de entrega y poder adquirir compromisos con los clientes internos y externos de la compañía.          

    .row.justify-content-center.mb-5
      .col-10
        div.t3-div2.py-4 
          .row.justify-content-center
            .col-lg-2
              figure
                img(src='@/assets/curso/tema3/img12.svg')   
            .col-lg-8
              h4 Los métodos
              p.mb-0 Los métodos son un conjunto de técnicas para realizar una actividad en un proceso productivo, determinando de forma clara, cuál es la mejor manera de realiza un trabajo, tienen como finalidad mejorar la productividad en una empresa.  Los métodos de trabajo siempre tendrán influencia en los tiempos de operación de una prenda, por lo tanto, para mejorar los tiempos se debe mejorar los métodos de trabajo.

    .row.justify-content-center.mb-5
      .col-10
        div.t3-div2.py-4 
          .row.justify-content-center
            .col-lg-2
              figure
                img(src='@/assets/curso/tema3/img13.svg')   
            .col-lg-8
              h4 Los tiempos
              p.mb-0 Son los minutos requeridos para fabricar un producto o prestar un servicio. En la industria de la confección estos dos elementos son fundamentales, porque los costos en los procesos de producción en confecciones además de los materiales están determinados por los tiempos de producción.

    .row.justify-content-center.mb-5
      .col-10
        div.t3-div2.py-4 
          .row.justify-content-center
            .col-lg-2
              figure
                img(src='@/assets/curso/tema3/img14.svg')   
            .col-lg-8
              h4 Tiempo estándar (SAM)
              p.mb-0 Los tiempos SAM o tiempo estándar, es el tiempo que se demora la fabricación de una prenda una vez realizado un análisis de tiempos. En la industria de la confección el mercado ya tiene identificado los tiempos en los cuales se debe fabricar una prenda. Este conocimiento es fundamental para un diseñador porque a mayor complejidad en el diseño,  se requiere más  tiempo de fabricación  y por ende mayor  costo de la prenda. 

    .row.justify-content-center.mb-5
      .col-6
        figure
          img(src='@/assets/curso/tema3/img16.svg') 

    p.mb-5 A continuación, conoceremos algunos conceptos importantes para entender a mayor profundidad un estudio de tiempos. 
    h3 Tiempos en los procesos de producción
    p.mb-5 Los tiempos son calculados de acuerdo con las operaciones y es el área de ingeniería la encargada de realizar los estudios de métodos y tiempos para balancear una planta de producción.

    TabsA.color-acento-contenido.mb-5      
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Medición del trabajo")
        h4 Medición del trabajo
        .row
          .col-lg-2
            figure
              img(src='@/assets/curso/tema3/img17.svg') 
          .col-lg-10.d-flex.align-items-center
            p.mb-0 Es la aplicación de técnicas para determinar el tiempo que invierte un trabajador en llevar a cabo una tarea definida efectuándose según una norma de ejecución preestablecida.
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Estudio de tiempos")
        h4 Estudio de tiempos
        p.mb-5 Es una técnica empleada para registrar los tiempos y ritmos de trabajo correspondientes a los elementos de una tarea definida, efectuada en condiciones determinadas y para analizar los datos a fin de averiguar el tiempo requerido para efectuar la tarea según una norma de ejecución establecida.
        h4 Etapas del estudio de tiempos:
        figure
          img(src='@/assets/curso/tema3/img18.svg') 

      .tarjeta.color-acento-contenido--borde.p-4(titulo="Tiempo real")
        h4 Tiempo real
        .row
          .col-lg-4
            div.BorTit
              p.mb-0 Total minutos máquina y día
            figure
              img(src='@/assets/curso/tema3/img19.svg') 
          .col-lg-8.d-flex.align-items-center
            p.mb-0 Se define como el tiempo medio del elemento empleado realmente por el operario durante un estudio de tiempos.
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Tiempo suplementario")
        h4 Tiempo suplementario
        .row
          .col-lg-2           
            figure
              img(src='@/assets/curso/tema3/img20.svg') 
          .col-lg-10.d-flex.align-items-center
            p.mb-0 Es el tiempo que se le concede al trabajador con el objeto de compensar la fatiga, las necesidades fisiológicas y los imprevistos, que se presentan en el desarrollo de sus tareas. 
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Tiempos estándar")
        h4 Tiempos estándar
        p.mb-5 Es el tiempo que se determina necesario para que un trabajador calificado, trabajando a un ritmo normal, con fatigas y demoras normales, realice una cantidad definida de trabajo con una calidad especificada, siguiendo los métodos establecidos.
        .row.justify-content-start
          .col-10
            .tabla-a.color-acento-contenido
              table            
                thead
                  tr
                    th Elemento
                    th Ttc (Tiempo Total Concedido)                    
                tbody.text-center(style="background-color:white")
                  tr
                    td A
                    td 1.113
                  tr
                    td B
                    td 2.106
                  tr
                    td C
                    td 1.590
                  tr
                    td D
                    td 3.520
                  tr
                    td E
                    td 1.008
                  tr
                    td F
                    td 1.464
                  tr
                    td Tiempo Estándar (Σ(Ttc))
                    td 10.345                  

      .tarjeta.color-acento-contenido--borde.p-4(titulo="Trabajador calificado")
        h4 Estudios de tiempo con cronómetro
        .row                     
          .col-lg-12.d-flex.align-items-center
            p.mb-0 Es aquel que tiene experiencia, los conocimientos y otras cualidades necesarias para efectuar el trabajo en curso según normas satisfactorias de seguridad, cantidad y calidad. 
        
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Estudio de tiempos con cronómetro")
        h4 Estudios de tiempo con cronómetro
        .row
          .col-lg-2           
            figure
              img(src='@/assets/curso/tema3/img21.svg') 
          .col-lg-10.d-flex.align-items-center
            p.mb-0 Este método para establecer estándares de tiempo se basa en los resultados de la observación directa del tiempo de una tarea tal como se efectúa. Este tiempo se ajusta para reflejar el ritmo y la habilidad de un trabajador promedio, al cual llamamos tiempo normal. Finalmente, el tiempo normal se modifica para reflejar cualquier tiempo adicional requerido (tolerancias) para obtener así el tiempo estándar final. 


    .row.justify-content-center
      .col-7
        a.anexo.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p.mb-0 Work Study on Textile Industry. Para Ampliar la información de cómo se analiza en una empresa de confecciones lo invitamos a ver "Estudio de tiempos en industria textil confección".
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    mostrardiv: 1,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
  methods: {
    clickBoton: function(capa) {
      this.mostrardiv = capa
    },
  },
}
</script>

<style lang="sass" scoped></style>
