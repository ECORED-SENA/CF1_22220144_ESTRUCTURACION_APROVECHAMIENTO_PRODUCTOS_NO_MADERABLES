<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3 
      h1 Análisis del mercado para productos no maderables del bosque

    Separador
    #t_3_1.titulo-segundo.color-acento-contenido.mb-0
      h2 3.1. Identificación de fuentes de consulta (bases de datos especializadas y medios de búsqueda)

    Separador
    #t_3_2.titulo-segundo.color-acento-contenido.mb-0
      h2 3.2. Contextualización del mercado externo (competidores, oferta y demanda)

</template>

<script>
export default {
  name: 'Tema3',
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

<style lang="sass"></style>
