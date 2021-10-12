<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Los procesos en la empresa de confección
    
    .row.justify-content-center.mb-5
      .col-4
        .bloque-texto-e.color-acento-contenido.p-4
          .bloque-texto-e__texto
            i.fas.fa-quote-left(style="color:#BF3976")
            h4 Donde hay una empresa de éxito, alguien tomó alguna vez una decisión valiente.
            br
            br
            h5.mb-0 Peter Drucker<br>
            h6.mb-0 Empresario de Austria 1909-2005.
            i.fas.fa-quote-right(style="color:#BF3976")
                      
      .col-6
        p.mb-4 Los procesos en la empresa de confección necesitan para su desarrollo contar con áreas como: diseño y patronaje, trazo y corte, producción, terminación y acabados, estas áreas están relacionadas entre sí, y son indispensables para desarrollar una colección con potencial comercial para el cliente y usuario final.  
        p.mb-0 El área de diseño y patronaje desde el enfoque de producción son los encargados de crear prendas de vestir que cumplen con las técnicas de construcción y deconstrucción de prendas, a partir de una previa investigación sobre las necesidades de determinada población y de su caracterización.
    
    p.mb-5 El desarrollo de la colección no es sólo pensar en el diseño; sino también en los insumos y material textil, las cuales influyen en la realización del trazo y corte de la prenda, estas influyen en la optimización y aprovechamiento de la materia prima y en los costos de producción. 

    .row.justify-content-center.mb-5
      .col-6
        p.mb-4 Las personas creativas del área de diseño hacen equipo con el área de producción; este acercamiento ocurre desde el área de muestras o desarrollo técnico del producto, en donde se identifican las diferentes herramientas tales como guías, prensatelas, y aditamentos que influyen en el desarrollo de la producción. 
        p.mb-0 En el momento de comercializar una colección; la presentación del producto y la distribución de este juegan un papel determinante en el éxito de éste; por ende, se hace necesario tener el conocimiento acorde a la caracterización que el área de diseño tiene del desarrollo de la colección.
      .col-6
        .bloque-texto-d.color-acento-contenido
          .bloque-texto-d__texto.mb-2.p-5
            figure
              img(src='@/assets/curso/tema2/img01.png')

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .div(titulo="Proceso de diseño").px-4
        .row.justify-content-center        
          .col-12.px-5
            div.mb-2.BorTit
              p.mb-0 <b>Figura 2</b>
              p.mb-0 Diseño y realidad en el vestuario
        .row.justify-content-center.mb-5
          .col-lg-5            
            figure
              img(src='@/assets/curso/tema2/img03.png')
          .col-lg-7
            p.mb-4 En el departamento de diseño ocurre la magia que después se vuelve realidad, sin embargo este es un proceso que no ocurre de la noche a la mañana y por lo tanto debe tener unas etapas para su desarrollo, entre ellas, se encuentra el cronograma de colecciones que evidencia las fechas que deben ser de conocimiento de todos los colaboradores del departamento  para cumplir con las fechas de entrega; en estas fechas deben aparecer los tiempos que se demora el montaje de colecciones, recolección de información, realización de patrones de la muestra, prueba de la muestra, montaje del muestrario, industrialización de moldería y escalado, elaboración de la ficha técnica y por último la elaboración de la orden de producción que permitirá la fácil identificación de los tiempos en días de cada  proceso del departamento de diseño. 
            p.mb-0 Cada etapa de estas permite identificar cual es la restricción de tiempo que maneja el proceso, para lograr entregar a tiempo las órdenes de producción correspondientes a la colección. 
      .div(titulo="Proceso de corte").px-4
        .row.justify-content-center        
          .col-12.px-5
            div.mb-2.BorTit
              p.mb-0 <b>Figura 3</b>
              p.mb-0 Proceso de corte
        .row.justify-content-center.mb-5
          .col-lg-5            
            figure
              img(src='@/assets/curso/tema2/img04.png').px-4
          .col-lg-7
            p.mb-4 Las etapas del corte en confección empiezan desde que se tienen los moldes y el escalado de las tallas necesarias que deben cortarse; de acuerdo con la orden de producción, el corte se puede realizar de dos formas: manual e industrial. El tiempo de reposo de las telas, consiste en desenrollar el textil en forma plegada y dejarlo reposar por un período determinado para que recupere su forma, el extendido se debe hacer sin generar tensiones, y además tener una superficie libre de asperezas.
            p.mb-4 En cuanto al trazo, al aplicar la técnica adecuada se logrará una alta optimización de la tela; el proceso de extendido se puede hacer por medio de un carro extendedor o manualmente. 
            p.mb-0 El proceso de corte se puede hacer con una cortadora vertical o circular, máquina láser o simplemente con tijeras, esta última es la más utilizada en el desarrollo de colecciones en el mundo de la moda.
      .div(titulo="Producción y terminación").px-4
        .row.justify-content-center        
          .col-12.px-5
            div.mb-2.BorTit
              p.mb-0 <b>Figura 4</b>
              p.mb-0 Producción y comercialización
        .row.justify-content-center.mb-5
          .col-lg-5            
            figure
              img(src='@/assets/curso/tema2/img05.png')
          .col-lg-7
            p.mb-4 El proceso de producción es el área de la empresa encargada de transformar la materia prima en producto terminado, los procesos de producción en la industria de la moda, se caracterizan por tener un estricto control en los tiempos de operación, sistemas de control de calidad, análisis de métodos y tiempos de operación, sistemas modulares de producción, sistemas flexibles de fabricación. 
            p.mb-0 Las grandes marcas primero comercializan y luego producen, la producción está sujeta a las ventas, los cambios rápidos de la moda y a la implementación de herramientas que mejoren la productividad de la empresa. Los procesos de terminación son los encargados realizar aquellas operaciones finales revisión y control de calidad de la prenda. 
      .div(titulo="Proceso de comercialización y entrega").px-4
        .row.justify-content-center         
          .col-12.px-5
            div.mb-2.BorTit
              p.mb-0 <b>Figura 5</b>
              p.mb-0 Comercialización de vestuario
        .row.justify-content-center.mb-5
          .col-lg-5           
            figure
              img(src='@/assets/curso/tema2/img02.png')
          .col-lg-7
            p.mb-4 El proceso de comercialización y entrega se enfoca en las cuatro P’S del mercado, se establecen el precio de venta, determinan el lugar o la plaza donde se distribuirá el producto, determinan las promociones y temporadas según los ciclos de la moda. 
            p.mb-0 La comercialización es quizás el proceso más importante para una empresa, entender al cliente que le gusta, cuáles son sus necesidades y preferencias, comprender su estilo de vida, es el gran reto que enfrentan los diseñadores de hoy.

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)    
    
    Separador
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
