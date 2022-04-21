<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Legislación ambiental para productos no maderables del bosque

    Separador
    #t_4_1.titulo-segundo.color-acento-contenido.mb-0
      h2 4.1  Contextualización: Plan de Ordenamiento Territorial y Planes de Ordenamiento Ambiental

    Separador
    #t_4_2.titulo-segundo.color-acento-contenido.mb-0
      h2 4.2  Áreas de manejo ambiental especial

    Separador
    #t_4_3.titulo-segundo.color-acento-contenido.mb-0
      h2 4.3  Régimen de aprovechamiento de recursos naturales

    Separador
    #t_4_4.titulo-segundo.color-acento-contenido.mb-0
      h2 4.4  Convenios internacionales de sostenibilidad

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

<style lang="sass"></style>
