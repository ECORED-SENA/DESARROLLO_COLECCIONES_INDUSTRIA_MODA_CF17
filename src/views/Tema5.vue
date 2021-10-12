<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Clasificación de las empresas

    p.mb-5 Según el artículo 2° de la, Ley 590 del año 2000, Por la cual se dictan disposiciones para promover el desarrollo de las micro, pequeñas y medianas empresas”, define las micro, pequeñas y medianas empresas, así: 

    .row.justify-content-center.mb-5
      .col-lg-7
        .bloque-texto-d.color-acento-contenido.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left(style="color:#BF3976")
            h3.text-regular  Para todos los efectos, se entiende por empresa, toda unidad de explotación económica, realizada por persona natural o jurídica, en actividades agropecuarias, industriales, comerciales o de servicios, en el área rural o urbana. Para la clasificación por tamaño empresarial, entiéndase micro, pequeña, mediana y gran empresa, se podrá utilizar uno o varios de los siguientes criterios.
            i.fas.fa-quote-right(style="color:#BF3976")
          .bloque-texto-d__autor 
            .h5.mb-0 Artículo 2  
      .col-lg-1
        figure
          img(src='@/assets/curso/tema5/img01.svg')
      
    TabsC.color-primario
      .py-3.py-md-4(titulo="Tamaño de la empresa")
        .row.justify-content-center.mb-5
          .col-lg-3
            figure
              img(src='@/assets/curso/tema5/img02.svg')
          .col-lg-1
          .col-lg-5.d-flex.align-items-center
            div
              h4 Tamaño de la empresa
              p.mb-0 Acorde con el decreto 957 del 5 de junio del 2019, las empresas se clasifican por su nivel de ingresos según las Unidades de Valor Tributario (UVT), y cada unidad de valor tributario tiene su equivalente en pesos ($) que varía cada año, por ejemplo para el 2020 la UVT $35. 607.
        .row.justify-content-center.mb-5
          .col-lg-10
            div.mb-2.BorTit      
              p.mb-0 Tamaño de las empresas por nivel de ingreso
            .tabla-a.color-acento-contenido
              table
                caption Nota: Los datos son proporcionados por el decreto del 05 de junio del 2019
                thead
                  tr
                    th Ingreso
                    th Servicios
                    th Manufacturas
                    th Comerciales                   
                tbody
                  tr
                    td Microempresa
                    td (32.988 UVT)
                    td (23.563 UVT)
                    td (44.769 UVT)
                  tr
                    td Pequeña
                    td (131.951 UVT)
                    td Hasta (204.995 UVT)
                    td Hasta (431.196 UVT)
                  tr
                    td Mediana
                    td (483.034 UVT)
                    td Hasta (1.736.565 UVT)
                    td Hasta (2'160.692 UVT)
                  tr
                    td Grande     
                    td Superiores a (483.035UVT)
                    td Superiores a (1.736.565 UVT)
                    td Superiores a (2'160.692 UVT)                 
                  
      .py-3.py-md-4(titulo="Origen del capital")
        .row.justify-content-center.mb-5
          .col-lg-3
            figure
              img(src='@/assets/curso/tema5/img03.svg')
          .col-lg-1
          .col-lg-5.d-flex.align-items-center
            div
              h4 Origen del capital
              p.mb-0 Según el origen del capital, las empresas se clasifican en públicas, privadas y mixtas. En las empresas públicas el origen del capital es estatal, departamental o municipal. Las empresas privadas, el origen de capital es aportado por personas naturales o jurídicas de orden privado. Las empresas mixtas contemplan dos tipos de capital, público, privado. 
      .py-3.py-md-4(titulo="Según el fin de las utilidades")
        .row.justify-content-center.mb-5
          .col-lg-3
            figure
              img(src='@/assets/curso/tema5/img03.svg')
          .col-lg-1
          .col-lg-5.d-flex.align-items-center
            div
              h4 Según el fin de las utilidades
              p.mb-4 Según la distribución de las utilidades o excedentes, las empresas se clasifican en: Empresas con ánimo de lucro y sin ánimo de lucro.
              p.mb-4 En las empresas con ánimo de lucro, la distribución de las utilidades se hace a favor de los socios o dueños de la empresa. Normalmente se realizar por acuerdos internos o estatutos.
              p.mb-0 Las empresas sin ánimo de lucro , en tema de las utilidades o excedentes tienen una finalidad de reinversión social, y en la mayoría de los casos su forma de distribución es regulada por normas y decretos que establecen la  reinversión con un fin social. En este tipo de empresas, se encuentran las cooperativas, fundaciones, corporaciones, asociaciones entre otras.

    Separador 
    #t_5_1.titulo-segundo
      h2 5.1 Clasificación jurídica de las empresas
    p.mb-5 Otra forma de clasificación de la empresa es según sus formas societarias, las cuales   están determinadas por la legislación comercial en Colombia. De acuerdo con este tipo de clasificación las formas societarias más reconocidas son: 
    
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .div(titulo="Sociedad Anónima").px-4        
        .row.justify-content-center.mb-5
          .col-lg-3           
            figure
              img(src='@/assets/curso/tema5/img04.svg')
          .col-lg-8.d-flex.align-items-center           
            p.mb-0 Regulada en el Código de Comercio  en los artículos 373 a 460 inclusive. Se forma por las reunión de un fondo social (Capital) suministrado por los accionistas, los cuales son responsables hasta el monto de sus respetivos aportes, y a su nombre se le deberá incluir las palabra sociedad anónima o las letras S.A. (Artículo 373 del .C.C.)
      .div(titulo="Sociedad Anónima Simplificada S.A.S").px-4
        .row.justify-content-center.mb-5
          .col-lg-3            
            figure
              img(src='@/assets/curso/tema5/img05.svg')
          .col-lg-8.d-flex.align-items-center           
            p.mb-0 Regulada por la ley 1258 de 2008.  Es una sociedad  que puede constituirse por una o varias persona naturales o jurídicas, quienes sólo serán responsables hasta le monto de sus aportes (Artículo 1 de la ley 1258 de 2008). Es una sociedad que se caracteriza por su flexibilidad en la elaboración de sus estatutos.
      .div(titulo="Sociedad en Comandita").px-4
        .row.justify-content-center.mb-5
          .col-lg-3         
            figure
              img(src='@/assets/curso/tema5/img06.svg')
          .col-lg-8.d-flex.align-items-center           
            p.mb-0 Definida en el artículo 323 del Código de Comercio. La sociedad en comandita se formará siempre entre uno o más socios que compromete solidaria e ilimitadamente su responsabilidad por las operaciones sociales y otro  o varios socios que limitan la responsabilidad a sus respectivos aportes. Regulada en los artículos 323 a 357 del Código de Comercio.
      .div(titulo="Sociedad Limitada").px-4
        .row.justify-content-center.mb-5
          .col-lg-3          
            figure
              img(src='@/assets/curso/tema5/img07.svg')
          .col-lg-8.d-flex.align-items-center           
            p.mb-0 Es una sociedad de personas, en la que los socios responden en forma limitada por el monto de sus aportes, a su nombre se le debe acompañar la palabra limitada o la sigla Ltda, no puede estar compuesta por más de 25 socios y se encuentra regulada en el código de comercio desde el artículo 353 al 372.
      .div(titulo="Sociedades de Economía Mixta ").px-4
        .row.justify-content-center.mb-5
          .col-lg-3         
            figure
              img(src='@/assets/curso/tema5/img08.svg')
          .col-lg-8.d-flex.align-items-center           
            p.mb-0 Según en el Código de Comercio, artículo 461 son las sociedades comerciales que se constituyen con aportes estatales y de capital privado.
      .div(titulo="Sociedades Extranjeras").px-4
        .row.justify-content-center.mb-5
          .col-lg-2            
            figure
              img(src='@/assets/curso/tema5/img09.svg')
          .col-lg-8.d-flex.align-items-center           
            p.mb-0 Acorde con el artículo 469 del Código de Comercio, son extranjeras, las sociedades constituidas conforme a las ley de otro país, y con domicilio principal en el exterior.
      .div(titulo="Empresas Unipersonales").px-4
        .row.justify-content-center.mb-5
          .col-lg-2            
            figure
              img(src='@/assets/curso/tema5/img10.svg')
          .col-lg-8.d-flex.align-items-center           
            p.mb-0 Según ley 222 de 1995, es definida como una persona jurídica constituida por una sola persona, que destina todo o parte de sus activos a la realización de una o varias actividades de carácter mercantil .
      .div(titulo="Sociedad de Hecho").px-4
        .row.justify-content-center.mb-5
          .col-lg-2           
            figure
              img(src='@/assets/curso/tema5/img11.svg')
          .col-lg-8.d-flex.align-items-center           
            p.mb-0 Es la sociedad comercial que se ha establecido sin cumplir con los requisitos de ley, y se encuentra regulada por los artículos 498 y siguientes del Código de Comercio.
      .div(titulo="Comerciante").px-4
        .row.justify-content-center.mb-5
          .col-lg-2           
            figure
              img(src='@/assets/curso/tema5/img12.svg')
          .col-lg-8.d-flex.align-items-center           
            p.mb-0 El artículo 10 del Código de Comercio establece que son comerciantes las personas que profesionalmente se ocupan en alguna de las actividades que la ley considera mercantiles.

    .row.justify-content-center
      .col-lg-10 
        .cajon.color-acento-contenido.p-4
          .row.justify-content-center
            .col-lg-1
              figure
                img(src='@/assets/curso/tema5/img13.svg')
            .col-lg-10 
              p.mb-0 En la actualidad la forma societaria de mayor flexibilidad son las sociedades tipo SAS, las cuales ofrecen beneficios para sus dueños. 
    Separador 

    #t_5_2.titulo-segundo
      h2 5.2 Relaciones laborales

    p.mb-5 El contrato de trabajo: de acuerdo con el artículo 22 del Código Sustantivo del Trabajo (CST) el contrato de trabajo es aquél   por el cual una persona natural, se obliga a prestar un servicio personal a otra persona natural o jurídica, bajo la continuada   dependencia o subordinación de la segunda y mediante una remuneración.
    
    figure.mb-5
      img(src='@/assets/curso/tema5/img14.png')
    
    .row.justify-content-center.mb-4
      .col-lg-5
        p.mb-0 Los elementos esenciales del contrato de   trabajo son: la actividad personal del trabajador, la continua subordinación o dependencia del trabajador, respecto al empleador, y un salario como retribución. (Art. 1 de la Ley 50 de 1990)
      .col-lg-7
        p.mb-0 Se presume que toda relación de trabajo está regida por un contrato de trabajo (Art. 2. Ley 50 de 1990)   No obstante quien habitualmente preste sus servicios personales remunerados, en ejercicio de una profesión o desarrollo de un contrato civil o comercial, y pretenda alegar el carácter de laboral de la su relación deberá probar la subordinación de la relación .
    
    p.mb-5 Según el Código Sustantivo del Trabajo en sus artículos 37 y siguientes define las siguientes modalidades de contrato de trabajo:
    
    .row.justify-content-center.mb-4
      .col-lg-8
        div.div-t5.py-4
          .row.justify-content-center
            .col-lg-2.d-flex.align-items-center
              figure
                img(src='@/assets/curso/tema5/img15.svg')
            .col-lg-8.d-flex.align-items-center
              div
                h4 Según su forma
                p.mb-0 Verbal o escrito.

    .row.justify-content-center.mb-4
      .col-lg-8
        div.div-t5.py-4
          .row.justify-content-center
            .col-lg-2.d-flex.align-items-center
              figure
                img(src='@/assets/curso/tema5/img15.svg')
            .col-lg-8.d-flex.align-items-center
              diversos(style="width:100%")
                h4 Según su duración
                .row.justify-content-start
                  .col-lg-4
                    p.mb-1 <b>a.</b> Término fijo
                    p.mb-1 <b>b.</b> Duración de obra
                    p.mb-1 <b>c.</b> Término indefinido
                  .col-lg-4
                    p.mb-1 <b>d.</b> Ocasional
                    p.mb-1 <b>e.</b> Accidental
                    p.mb-1 <b>f.</b> Transitorio

    .row.justify-content-center
      .col-lg-8
        div.div-t5.py-4
          .row.justify-content-center
            .col-lg-2.d-flex.align-items-center
              figure
                img(src='@/assets/curso/tema5/img15.svg')
            .col-lg-8.d-flex.align-items-center
              diversos(style="width:100%")
                h4 Contratos especiales
                .row.justify-content-start
                  .col-lg-6
                    p.mb-1 <b>a.</b> Trabajo a domicilio
                    p.mb-1 <b>b.</b> Representantes
                    p.mb-1 <b>c.</b> Agentes viajeros y agentes vendedores
                    p.mb-1 <b>d.</b> Colocadores de seguros y títulos de capitalización
                  .col-lg-6
                    p.mb-1 <b>e.</b> Profesores de establecimientos particulares de enseñanza
                    p.mb-1 <b>f.</b> Trabajadores domésticos
                    p.mb-1 <b>g.</b> Conductores de servicio familiar
                    p.mb-1 <b>h.</b> Contrato de aprendices
 
    Separador 
    
      
</template>

<script>
export default {
  name: 'Tema5',
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
