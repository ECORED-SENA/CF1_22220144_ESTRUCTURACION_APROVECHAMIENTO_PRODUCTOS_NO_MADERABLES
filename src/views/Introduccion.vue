<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-4(data-aos="fade-left") La sociedad actual ha tenido que enfrentar una crisis mundial en relación con el desarrollo económico y la sostenibilidad ambiental. Por esta razón, la Unesco elaboró una propuesta para alcanzar los Objetivos de Desarrollo Sostenible al 2030, los cuales se encuentran plasmados en la Agenda 2030. Sin embargo, se ha hecho necesario seguir haciendo reuniones periódicas con el fin de identificar si los países miembros realmente están cumpliendo con dichas metas. 
    
    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10.py-3.px-5(style="border-radius:13px; background-color:#E5EFD4")
        p.mb-0 Por lo anterior, se invita a ver el siguiente video en el cual se describen las temáticas que se tratarán en este componente formativo.

    figure(data-aos="fade-left")
      .video        
        iframe(width="1280" height="720" src="https://www.youtube.com/embed/0HMd6GuUchQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
