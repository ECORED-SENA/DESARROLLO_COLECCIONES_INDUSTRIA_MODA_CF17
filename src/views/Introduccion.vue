<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-5
      .video        
        iframe(width="1255" height="706" src="https://www.youtube.com/embed/PJ-1Zc8Hju4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)    
    
    p.mb-5 Elaborar una prenda o una colección de moda, generalmente surge con una idea o investigación sobre tendencias en el contexto o fuera de él; la elaboración de bosquejos sobre los diseños, la selección de insumos, telas y ensamble de los detalles, son los pasos fundamentales para que exista un proceso de producción que exige la industria de la moda.

    .row.justify-content-center.mb-5
      .col-10
        .cajon.color-primario.py-4.px-5
          p.mb-0 Los Procesos de Producción están directamente relacionados con el campo empresarial como la correcta gestión de la materia prima; la organización en los tiempos de producción y entrega; su óptimo traslado, y la calidad del producto, factores que aseguran o perjudican el éxito de la marca. 

    p.mb-0 Por tanto, el presente componente busca brindar la información necesaria sobre el proceso de producción y las estrategias que se requieren en los procesos que conforman la cadena de fibra, textil, confección y sus variables.

    Separador
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
