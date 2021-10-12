<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 La prenda y sus costos

    #t_4_1.titulo-segundo
      h2 4.1 Definición de los costos
    Separador 

    #t_4_2.titulo-segundo
      h2 4.2 Valor del minuto
    Separador 

    #t_4_3.titulo-segundo
      h2 4.3 Costos de una prenda
    Separador

    #t_4_4.titulo-segundo
      h2 4.4 Costos de un lote
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
