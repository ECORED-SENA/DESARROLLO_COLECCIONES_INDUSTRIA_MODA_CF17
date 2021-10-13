<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 La prenda y sus costos

    p El desempeño y la rentabilidad de la empresa siempre se verá afectada por los costos y gastos de la misma, por lo que controlarlos en cada etapa del proceso es fundamental para una buena gestión   de los recursos empresariales.     
    Separador 
    #t_4_1.titulo-segundo
      h2 4.1 Definición de los costos

    .row.justify-content-center
      .col-lg-8
        p.mb-0 Conocer los costos de una empresa, conlleva a manejar los recursos con mayor responsabilidad; por lo que es indispensable identificarlos. Con base en los costos incurridos en el proceso de producción y en los procesos de apoyo, se puede determinar con mayor precisión el costo de la prenda y así generar un precio de venta competitivo en el mercado. 
      .col-lg-4
        h4.mb-0 El conocer que son estos y el impacto de los mismos en todo el proceso de producción, facilitará el ejercicio de la labor a realizar.

    .row.justify-content-center
      .col-6
        ImagenInfografica.color-secundario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema4/img01.svg')              

          .tarjeta.tarjeta--gris.p-3(x="50.2%" y="20%")
            .h5.mb-2 Costo
            p.mb-0 Son los recursos invertidos en el proceso de fabricación de un producto, los más reconocidos son mano de obra, materias primas, materiales e insumos entre otros. 

          .tarjeta.tarjeta--gris.p-3(x="71%" y="28%")
            .h5.mb-2 Costo Fijo
            p.mb-0 Se denominan costos fijos a los costos que tienden a permanecer iguales dentro de un determinado período de tiempo o rango de actividad.  Por ejemplo, el arriendo, los salarios fijos entre otros.

          .tarjeta.tarjeta--gris.p-3(x="80%" y="49.5%")
            .h5.mb-2 Costo Variable
            p.mb-0 Son costos que fluctúan según el número de unidades a fabricar, a mayor volumen en unidades menor costo. Un ejemplo son la materia prima o los insumos. 

          .tarjeta.tarjeta--gris.p-3(x="71.5%" y="70.5%")
            .h5.mb-2 Costo Directo
            p.mb-0 Son los costos que tienen una relación directa con el proceso de fabricación del producto como por ejemplo materias primas, mano de obra del personal asociado a la producción o prestación de un servicio. 

          .tarjeta.tarjeta--gris.p-3(x="50.2%" y="79%")
            .h5.mb-2 Costo Indirecto
            p.mb-0 Se le denominan costos indirectos aquellos costos que no tienen relación directa con el proceso de fabricación de un producto.

          .tarjeta.tarjeta--gris.p-3(x="29%" y="70.5%")
            .h5.mb-2 Materia Prima
            p.mb-0 Es el recurso de mayor presencia en la composición del producto.

          .tarjeta.tarjeta--gris.p-3(x="20%" y="49.5%")
            .h5.mb-2 Insumos
            p.mb-0 Otros elementos necesarios para completar el producto.

          .tarjeta.tarjeta--gris.p-3(x="29%" y="28%")
            .h5.mb-2 Mano de Obra
            p.mb-0 Son los costos asociados al personal encargado del proceso de producción de un producto o en la prestación de un servicio en confecciones se costea por valor minuto.



    Separador 

    #t_4_2.titulo-segundo
      h2 4.2 Valor del minuto

    .row.justify-content-center.mb-5
      .col-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4/img02.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Reconocer el costo del minuto en el proceso de elaboración de una prenda es de gran importancia en los procesos de manufactura de una empresa de confecciones, identificarlos y saber calcularlo es la base de negociación en la industria de la moda. <br><br>Los minutos de producción son aquellos que se calculan con los tiempos estándares (SAM) y con las unidades que se realizan, por lo general están registrados en la ficha técnica y basados en estos posteriormente se calcula el costo de la prenda a realizar.

    p.mb-5 La importancia del valor minuto se engloba en todo el concepto de productividad, la cotización de prendas y el valor de servicios externos, esto permite presupuestar y medir la gestión de los jefes y gerentes de cualquier empresa en el sector textil- confección.

    h3.mb-5 ¿Cómo saber el costo de un minuto?
    .row.justify-content-center.mb-5.py-4(style="background-color: #E8F0F8")
      .col-lg-1
      .col-lg-3
        figure
          img(src='@/assets/curso/tema4/img03.svg')              
      .col-lg-1
      .col-lg-6
        .titulo-segundo
          h2 Costo de un minuto
        p.mb-5 Para saber el costo de un minuto es importante conocer el salario mensual con todas las prestaciones sociales que se provisionan cada mes como se muestra a continuación: 
        a.boton.color-acento-botones.texto-blanco(style="background-color: #FFD947;" :href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
          span(style="color: #12263F !important") Descargar
          i.fas.fa-file-download(style="color: #12263F !important")
      .col-lg-1

    p.mb-5 Para una mayor comprensión le invitamos a ver el anexo E <b>“Valor del minuto”</b> y el video <b>Cómo calcular el costo minuto mano de obra directos.</b>
    
    .row.justify-content-center.mb-5
      .col-4.d-flex
        a.anexo.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Video.</b> Cómo calcular el costo minuto mano de obra directos.
      .col-4.d-flex
        a.anexo.mb-4.mb-lg-0(style="width:100%" :href="obtenerLink('/downloads/Anexo_E_Valor_minuto.xlsx')"  target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-xls.svg")
          .anexo__texto
            p <b>Anexo.</b> Valor del minuto.
    
    
    Separador 

    #t_4_3.titulo-segundo
      h2 4.3 Costos de una prenda

    .row.justify-content-center.mb-5.py-4(style="background-color: #E8F0F8")
      .col-lg-1
      .col-lg-3
        figure
          img(src='@/assets/curso/tema4/img03.svg')              
      .col-lg-1
      .col-lg-6
        .titulo-segundo
          h2 Costos de una prenda
        p.mb-5 Para saber los costos de una prenda, es importante entender la estructura de una hoja de costos por unidad, la cual comprende los componentes del producto, los procesos de la prenda y el empaque, así como las unidades de consumo y el precio por unidad.  Para una mayor comprensión lo invitamos a analizar la siguiente hoja de costos. 
        a.boton.color-acento-botones.texto-blanco(style="background-color: #FFD947;" :href="obtenerLink('/downloads/Anexo F_Tabla-CostosDeUnaPrenda.xlsx')" target="_blank")
          span(style="color: #12263F !important") Descargar
          i.fas.fa-file-download(style="color: #12263F !important")
      .col-lg-1

    Separador

    #t_4_4.titulo-segundo
      h2 4.4 Costos de un lote
    p.mb-5 Se denomina costos de un lote, al valor económico que tiene una línea de producción conformada por una misma referencia de productos, esto se calcula acorde con las cantidades a producir. En las empresas de confección el costo total mensual de producción está conformado por el total de unidades y lotes fabricados en un periodo de tiempo. 

    .row.justify-content-center.mb-5
      .col-10
        .cajon.color-primario.py-4.px-5
          .row.justify-content-center
            .col-2
              figure
                img(src='@/assets/curso/tema4/img04.svg')              
            .col-10.d-flex.align-items-center
              p.mb-0 De acuerdo con el ejemplo del numeral anterior, el costo por unidad sería de $28.663, si la producción mensual de ese producto es de 50 unidades al mes, el costo del lote sería de: $1.433.150.
    Separador

    

    
</template>

<script>
export default {
  name: 'Tema4',
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
