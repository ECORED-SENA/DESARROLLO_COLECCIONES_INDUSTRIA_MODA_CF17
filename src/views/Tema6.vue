<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5    
    .titulo-principal
      .titulo-principal__numero
        span 6
      h1 El diseño como propiedad intelectual

    p.mb-5 La propiedad intelectual protege todas las creaciones del intelecto, (Artículo 671 Código Civil) y en Colombia se dividen en Derechos de Autor y Propiedad Industrial, en el siguiente video se describe en qué consisten.

    .row.justify-content-center.mb-5
      .col-5
        a.anexo(:href="obtenerLink('/downloads/Anexo_H7_EscaletaProduccion.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p <b>Anexo H</b>. Para ampliar la temática acceder al Anexo Presentación Propiedad Industrial.
        

    figure
      .video        
        iframe(width="1255" height="706" src="https://www.youtube.com/embed/5DAsmI-spQM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)    
    
    Separador
</template>

<script>
export default {
  name: 'Tema6',
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
