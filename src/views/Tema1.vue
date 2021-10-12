<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Generalidades de la industria de la confección

    .row.justify-content-center.mb-5
      .col-6
        .bloque-texto-d.color-acento-contenido
          .bloque-texto-d__texto.mb-2.p-5
            figure
              img(src='@/assets/curso/tema1/img01.png')
                
      .col-6
        p.mb-4 En Colombia la industria de la confección está conformada por un 99% de empresas micro, pequeñas y medianas, menos del 1% se consideran grandes empresas. A nivel nacional las empresas más reconocidas son Leonisa, Crystal, Línea Directa, Grupo Éxito, Grupo Uribe, entre otras.   Es común encontrar entre las grandes marcas la subcontratación de sus procesos de producción y ensamble, esta subcontratación generalmente se realiza con plantas de producción más pequeñas y especializadas en algún tipo de proceso o de prenda, que prestan sus servicios a marcas o plantas de producción más grandes. 
        p.mb-0 Las modalidades de prestación de servicios en estas empresas se presentan de la siguiente manera: 

    .row.justify-content-center
      .col-5
        ImagenInfografica.color-secundario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/img02.svg')              

          .tarjeta.tarjeta--gris.p-3(x="40%" y="10%")
            .h5.mb-2 Servicios de maquila
            p.mb-0 Empresas cuyos procesos se enfocan en fabricar productos para grandes marcas, a partir de subcontratación de algunas operaciones o procesos de fabricación.  Una característica importante es que la marca entrega todos los materiales para el proceso de fabricación y   establece el control del proceso productivo.

          .tarjeta.tarjeta--gris.p-3(x="75%" y="45%")
            .h5.mb-2 Servicio de tercerización
            p.mb-0 Fabrican productos para grandes marcas, subcontratando operaciones, se diferencian de la maquila, porque en este modelo de negocio la empresa fabricante ofrece algunos materiales (hilos, botones, etiquetas) para el proceso de fabricación.

          .tarjeta.tarjeta--gris.p-3(x="35%" y="80%")
            .h5.mb-2 Servicio de paquete completo
            p.mb-0 Es un modelo de negocio donde la marca subcontrata todo el proceso de fabricación hasta la entrega del producto terminado final. 

          .tarjeta.tarjeta--gris.p-3(x="10%" y="45%")
            .h5.mb-2 Marca propia
            p.mb-0 Es un modelo de negocio que, por lo general está asociado a grandes y medianas empresas, se caracteriza por realizar todo el proceso de diseño, fabricación y comercialización del producto.

    Separador

    #t_1_1.titulo-segundo
      h2 1.1 Características de la industria en el mundo, América Latina y Colombia
    p.mb-5 Lafayette (2019) indica que <b>“La industria de la moda por mucho tiempo ha colocado como protagonista a ciudades cosmopolitas como Nueva York, Milán y París, a las que ahora se suman Japón, Los Ángeles y Berlín”</b> (párr.1). Durante los últimos años Latinoamérica se está convirtiendo en el futuro de este sector de la moda hasta llegar a ser una de las potencias con más ojos de inversores en la mira. Según Lafayette (2019):
    
    .row.justify-content-center.mb-5
      .col-8
        .bloque-texto-d.color-primario.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            h3.text-regular Un fenómeno importante de transformación es que algunos de los inversionistas se han dado cuenta como marcas colombianas, peruanas, mexicanas o argentinas se encuentran más que listas para competir en el ámbito de la industria textil a una dimensión global, convirtiendo a América Latina en uno de los nuevos protagonistas en el mercado. (párr. 3)
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 Lafayette, 2019.            

    p.mb-4 La industria a nivel mundial está organizada según las fortalezas de los países y continentes, por ello es importante que se utilicen adecuadamente los modelos a emplear, basándose en parámetros objetivos, como la confiabilidad de los resultados a la realidad económica del entorno, a su capacidad de producción y financiación.
    p.mb-5 A continuación, se darán los elementos para saber cómo funciona esta organización.
    
    .row.justify-content-center
      .col-8
        ImagenInfografica.color-secundario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/img03.png')              

          .tarjeta.tarjeta--gris.p-3(x="16.5%" y="42%")
            .h5.mb-2 Estados Unidos
            p.mb-0 Se ha convertido en una potencia en la construcción   y comercialización de marcas en todo el mundo, grandes marcas como Nike, H y M,  Gap,  Reebok  entre otras, hoy  se encuentran entre las mas reconocidas.

          .tarjeta.tarjeta--gris.p-3(x="76.4%" y="35%")
            .h5.mb-2 Asia
            p.mb-0 Se caracteriza por ser la fábrica del mundo, su abundante mano de obra, la implementación de métodos de trabajo y su estructura política y económica hacen que más del 50% de las prendas del mundo sean fabricadas en   países como China, Vietnam, Blangadesh.

          .tarjeta.tarjeta--gris.p-3(x="53.3%" y="23%")
            .h5.mb-2 Europa
            p.mb-0 Se caracterizan por procesos de investigación aplicados al desarrollo técnico en textiles, materiales, insumos y diseños de productos especializados según su funcionalidad.  En países como Italia, Francia, España existen los centros de I+D+i  más reconocidos a nivel mundial   por  el avance en cada uno de los procesos.

          .tarjeta.tarjeta--gris.p-3(x="25.5%" y="62%")
            .h5.mb-2 Colombia
            p.mb-4 La industria textil-confección tiene un excelente posicionamiento en la región por su calidad, mano de obra y diseños exclusivos, además tiene una posición estratégica que lo hace una plataforma exportadora ideal para aquellas empresas que quieren ampliar sus operaciones en América latina.
            p.mb-0 Entre los productos que se ofertan, se producen y se exportan están los jeans, ropa interior femenina y masculina, ropa de hogar, fajas, ropa formal, suéteres, vestidos de baño femeninos y masculinos, calcetería, ropa de bebe/infantil, ropa deportiva, uniformes, ropa casual, calzado, manufacturas de cuero, joyería y bisutería entre otros.

    Separador 

    #t_1_2.titulo-segundo
      h2 1.2 Estructura de la cadena textil confección 

    p.mb-5 La industria textil abarca la producción de los hilados y tejidos para la confección de prendas de vestir y artículos para el hogar (lencería, toallas, cortinas, etc.) pero además también la producción de fibras técnicas utilizadas por otras industrias, la agricultura y la construcción, en forma de productos tan diversos como cintas transportadoras, filtros, materiales de aislamiento y de techar, textiles para empaques, cuerdas, redes, fibras para revestimiento y alfombras. 
    
    .row.justify-content-center.mb-5
      .col-6
        figure
          img(src='@/assets/curso/tema1/img04.svg')    
    
    p.mb-5 La confección en Colombia se ha venido desarrollando de manera sostenible basando su crecimiento en los recursos financieros, tecnológicos y capacidad instalada que posee.  El reto para la industria nacional está en la capacidad de gestionar el talento humano desde sus emociones y habilidades, dado que es un gran reto para mejorar los indicadores de productividad. 
    
    div.mb-2.BorTit      
      p.mb-0 Prodceso de manufactura
    figure.mb-5
      img(src='@/assets/curso/tema1/img05.png') 
      figcaption Nota. https://bit.ly/3wCMrKc

    .row.justify-content-center
      .col-6
        a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=2F5nOEfttIk" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>¿Cómo se hace la ropa? Proceso completo de producción.</b> Para conocer los procesos que conforman la cadena fibra textil confección, lo invitamos a ver el video.
        

    Separador

    #t_1_3.titulo-segundo
      h2 1.3 Buenas prácticas de manufactura en confección
    .row.justify-content-center.mb-5
      .col-5
        h4.mb-0 Se consideran buenas prácticas de manufactura al conjunto de procesos y procedimientos que permiten la adecuada fabricación de un producto.
      .col-7
        p.mb-0 Incluyen la estandarización generada en los sistemas de calidad, la implementación de las normas para la gestión de capital humano, normas ambientales y de seguridad y salud en el trabajo. Así mismo acciones simples como puntualidad, higiene, orden, limpieza y disposición adecuada de residuos generado en cada proceso. 
    
    .row.justify-content-center.mb-5
      .col-2
      .col-5
        p.mb-0 De acuerdo a la Justicia Ambiental Colombia (2012):
      .col-5
    .row.justify-content-center.mb-5
      .col-2
      .col-5     
        .bloque-texto-d.color-primario.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            h3.text-regular Las buenas prácticas son muy útiles tanto por su simplicidad como por los rápidos y sorprendentes resultados que se obtienen; además de que reducen la contaminación ambiental con cambios en la organización de sus procesos y actividades, pero especialmente como los cambios de actitud de las personas.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 Justicia Ambiental Colombia, 2012    
      .col-4
        figure
          img(src='@/assets/curso/tema1/img06.svg') 
      .col-1

    p.mb-4 Además, estas buenas prácticas contribuyen a que los empresarios y trabajadores del sector textil puedan trabajar en la mejora continua del sector, protegiendo al medio ambiente y al mismo tiempo mejorando la eficiencia productiva en las empresas; logrando un desarrollo sostenible para la industria manufacturera.
    p.mb-5 La implementación de las buenas prácticas proporciona un capital humano empoderado de sus funciones y capaz de enfrentar el manejo de cualquier área o proyecto de la empresa relacionado con el desarrollo de una colección. 
    
    .row.justify-content-center.mb-5
      .col-10
        figure
          img(src='@/assets/curso/tema1/img07.svg') 

    .row.justify-content-center
      .col-6
        a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=2F5nOEfttIk" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Lean Manufacturing.</b> Ahora vamos a ver el video Lean Manufacturing de Buenas prácticas de manufactura, para comprender un poco más la temática
        

    Separador

    #t_1_4.titulo-segundo
      h2 1.4 Variables que intervienen en el proceso productivo

    p.mb-5 La producción es el proceso de transformación de los factores (materiales, insumos, materias primas) que se toman del entorno, para generar valor agregado mediante un proceso de transformación en bienes (productos) terminados. 
    .row.justify-content-center.mb-5
      .col-6
        figure
          img(src='@/assets/curso/tema1/img08.svg') 
    p.mb-5 Todo proceso productivo se ve afectado en mayor o menor grado por las siguientes variables: 

    .row.justify-content-center.mb-5
      .col-4
        figure.mb-4
          img(src='@/assets/curso/tema1/img09.svg') 
        h4 Talento humano
        p.mb-0 Colaboradores que deben tener un nivel de conocimientos, habilidades y destrezas para el desarrollo de un proceso, mente abierta y totalmente creativos
      .col-4
        figure.mb-4
          img(src='@/assets/curso/tema1/img10.svg') 
        h4 Máquinas y equipos
        p.mb-0 Nivel de tecnología acorde con los requerimientos del producto a procesar; en la confección se cuenta con tecnología de primera, segunda, tercera y cuarta generación
      .col-4
        figure.mb-4
          img(src='@/assets/curso/tema1/img11.svg') 
        h4 Materia prima e insumos
        p.mb-0 Los materiales que son necesarios para elaborar el respectivo producto y que contienen las características que son deseadas por el consumidor final.

    p.mb-0 Para lograr mejorar la productividad especialmente en la industria de la moda, es fundamental contar con un talento humano altamente competente, donde las capacidades técnicas, tecnológicas, humanas, sociales y de adaptación al cambio, le permitan hacer lectura e interpretación de las tendencias del mercado para solucionar las problemáticas del día a día de las empresas.

    Separador

    


</template>

<script>
export default {
  name: 'Tema1',
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
