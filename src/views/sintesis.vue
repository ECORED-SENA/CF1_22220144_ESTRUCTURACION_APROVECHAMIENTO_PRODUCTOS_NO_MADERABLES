<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .fondo1.p-0.pt-4.m-0.position-relative(data-aos="fade-left")
      .row.justify-content-center.align-items-center
        .col-lg-8
          p.mb-3 Este documento contiene la descripción de las características y procedimientos que se deben tener en cuenta para la identificación de productos no maderables del bosque. Reconocer inicialmente las plantas, identificar cuáles son los productos que se consideran no maderables, conocer su botánica y taxonomía para saber cómo es su funcionalidad y encontrar mejor aprovechamiento de dichas plantas es lo primordial. Todo esto para maximizar los mercados y potencializar la comercialización de estos productos a escala local, nacional e internacional.
          .cajon.color-primario.p-4.mb-4
            p.mb-0 El objetivo principal de este componente formativo es mostrar cómo identificar y diagnosticar los productos potenciales de la biodiversidad vegetal según condicionantes técnicos, normativos, de sostenibilidad y del mercado. Por tal motivo, se describen los procedimientos a tener en cuenta, sobre todo en el protocolo de toma de muestras para su envío al laboratorio para contar y estar seguros de la calidad del material con el fin de trabajarlo según las normativas colombianas que lo rigen y teniendo en cuenta los convenios internacionales. 
        .col-lg-4
          img(src="@/assets/curso/sintesis/img02.png")

      p.mb-4.py-3.py-xl-0(data-aos="fade-right") Todo esto es importante, ya que se busca generar propuestas de uso y aprovechamiento coherentes con la oferta del ecosistema y la demanda en los mercados; es de aclarar que se inicia a partir del conocimiento ancestral de las comunidades locales para entrar en la disciplina de la botánica económica, entendida esta como la ciencia que considera aspectos: taxonómicos, farmacológicos, ecológicos y económicos de los productos del bosque, con el fin de abrir paso a la economía sostenible.

      

      .row.justify-content-center(data-aos="fade-left")
        .col-lg-12.mb-5
          figure
            img(src="@/assets/curso/sintesis/img03.svg" data-aos="fade-left")
        .col-auto
          a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p Anexo. Síntesis
</template>

<script>
export default {
  name: 'Sintesis',
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

<style lang="sass">
.fondo1
  position: relative
  padding-bottom: 1rem
  div, p, img
    position: relative
  &::before
    content: ""
    position: absolute
    top: 0
    left: 2.5%
    width: 108%
    height: 100%
    margin: 0 -5rem
    background-image: url("../assets/curso/sintesis/img01.png")
    // background-size: contain
    background-repeat: no-repeat
</style>
