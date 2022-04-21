<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5    
    .titulo-principal.color-acento-contenido.mb-0
      .titulo-principal__numero
        span 1 
      h1 Identificación de productos no maderables del bosque

    .fondo1.p-0.pt-4.m-0.position-relative
      .row.justify-content-center
        .col-lg-10
          img(src="@/assets/curso/tema1/img02.png")
      .position-absolute(style="top: 50px")
        .row.justify-content-center
          .col-lg-5
          .col-lg-6.px-5
            p.mb-0 Para identificar los productos no maderables del bosque se debe tener claro los términos a los que hace referencia y que componentes lo conforman; los productos no maderables son los que excluyen a la madera del producto beneficio o servicio, por lo que este material debe proceder de un bosque.
          .col-lg-1

      Separador
      #t_1_1.titulo-segundo.color-acento-contenido
        h2 1.1. Definición de productos no maderables del bosque
      
      p.mb-4 El término Productos No Maderables - PNM hace referencia frecuentemente a los productos forestales no leñosos y según la FAO (1999) “… consisten en bienes de origen biológico distintos de la madera, procedentes de los bosques, de otros terrenos arbolados y de árboles situados fuera de los bosques”. Estos son extraídos de un ecosistema natural o plantaciones ordenadas, son utilizados en el hogar y distribuidos en el mercado como:
      .row
        .col-lg-3
          div.fondo2.py-4
            div.px-5
              img.mb-4(src="@/assets/curso/tema1/img03.svg")
            h4.mb-0.text-center Alimento
        .col-lg-3
          div.fondo3.py-4
            div.px-5
              img.mb-4(src="@/assets/curso/tema1/img04.svg")
            h4.mb-0.text-center Medicina
        .col-lg-3
          div.fondo2.py-4
            div.px-5
              img.mb-4(src="@/assets/curso/tema1/img05.svg")
            h4.mb-0.text-center Forraje
        .col-lg-3
          div.fondo3.py-4
            div.px-5
              img.mb-4(src="@/assets/curso/tema1/img06.svg")
            h4.mb-0.text-center Material de construcción


    

    Separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2. Tipos de productos no maderables del bosque

    p.mb-5 Dentro de las investigaciones realizadas para la clasificación de productos no maderables se encuentran las de origen animal y las de origen vegetal, en este curso se hablarán de los de origen vegetal que se exponen a continuación. 
    
    
    
    .row.justify-content-center
      .col-lg-10.px-2
        .titulo-sexto.color-acento-contenido
          p.mb-0 Vegetal

    SlyderF.mb-5(columnas="col-lg-4")
      .tarjeta.color-principal.p-0        
        img(src='@/assets/curso/tema1/img07.png')
        div.slyder1 
          p.text-center.py-2.mb-0 Semillas: árboles y plantas 

      .tarjeta.color-principal.p-0        
        img(src='@/assets/curso/tema1/img08.png')
        div.slyder1 
          p.text-center.py-2.mb-0 Raíces

      .tarjeta.color-principal.p-0        
        img(src='@/assets/curso/tema1/img09.png')
        div.slyder1 
          p.text-center.py-2.mb-0 Hojas

      .tarjeta.color-principal.p-0        
        img(src='@/assets/curso/tema1/img10.png')
        div.slyder1 
          p.text-center.py-2.mb-0 Nueces

      .tarjeta.color-principal.p-0        
        img(src='@/assets/curso/tema1/img11.png')
        div.slyder1 
          p.text-center.py-2.mb-0 Exudados: savia, látex, cera y goma 

      .tarjeta.color-principal.p-0        
        img(src='@/assets/curso/tema1/img12.png')
        div.slyder1 
          p.text-center.py-2.mb-0 Fibras

      .tarjeta.color-principal.p-0        
        img(src='@/assets/curso/tema1/img13.png')
        div.slyder1 
          p.text-center.py-2.mb-0 Frutos 

      .tarjeta.color-principal.p-0        
        img(src='@/assets/curso/tema1/img14.png')
        div.slyder1 
          p.text-center.py-2.mb-0 Flores

      .tarjeta.color-principal.p-0        
        img(src='@/assets/curso/tema1/img15.png')
        div.slyder1 
          p.text-center.py-2.mb-0 Hongos

    .row.justify-content-center.mb-0
      .col-lg-10
        p.mb-0 Además, el objetivo de este curso es mostrar el aprovechamiento de estos productos y la sostenibilidad ambiental de los mismos, por lo que se puede aprovechar sin destruir, palmas, arbustos o árboles que son los que producen el elemento no maderable y que es consumido por la comunidad en general.

        

    .fondo4.mb-5
      Separador

      #t_1_3.titulo-segundo.color-acento-contenido
        h2 1.3. Métodos de cosecha o recolección

      p.mb-5 La cosecha de productos no maderables, ya sean silvestres o en cultivos, no involucra plantas o árboles enteros y en esta no se requieren tecnologías, por lo que lo normal en la cosecha de PNM es la recolección de nueces y hojas hasta el sangrado para extracción de resina/látex, por lo que se invita a revisar la siguiente figura donde se mencionan algunos procesos y usos de estos productos.
      img(src='@/assets/curso/tema1/img17.svg')

    .row.justify-content-center.mb-4
      .col-lg-10
        p.mb-3 Por otro lado, es necesario recordar…
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img18.png')})`}"
          )
          .bloque-texto-g__texto.p-4.py-5
            p.mb-0 … que todo lo que mejore el rendimiento de la extracción de productos no maderables incrementará el valor del recurso, por ejemplo el trabajo que se hace con el árbol de caucho para producir látex o goma.            

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3
        img(src='@/assets/curso/tema1/img19.svg')
      .col-lg-5
        p.mb-4 Esto se puede lograr de la siguiente forma:
        p.mb-0 <span style="color: #942E19">●</span> Aplicando métodos perfeccionados de recolección.
        p.mb-0 <span style="color: #942E19">●</span> Empleando mejor el equipo. 
        p.mb-0 <span style="color: #942E19">●</span> Capacitando debidamente a la gente. 
        p.mb-0 <span style="color: #942E19">●</span> Reduciendo los desperdicios en todo el proceso de recolección. 
        p.mb-0 <span style="color: #942E19">●</span> Planeando la recolección de productos de alta calidad. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.fondo5.p-0.pt-4.pb-1.mb-4        
        p.text-center.mb-5 Por lo anterior, se hace necesario adelantar un aprovechamiento óptimo de los productos no maderables del bosque y esto inicia con:        
        .row.justify-content-center
          .col-lg-1
          .col-lg-7.pe-0
              p.mb-0 <span style="color: #942E19">●</span> La identificación taxonómica confiable de las especies. 
              p.mb-3 <span style="color: #942E19">●</span> La selección de especies dominantes con base en los siguientes aspectos: 
              img.mb-3(src='@/assets/curso/tema1/img21.svg')
              p.mb-0 <span style="color: #942E19">●</span> La revisión inicial de la oferta del recurso.
          .col-lg-4.ps-0
            img(src='@/assets/curso/tema1/img20.svg')

    p.text-center.mb-3 Además, para hacer un buen aprovechamiento se deben aplicar los siguientes elementos:        

    img.mb-4(src='@/assets/curso/tema1/img22.svg')

    p.text-center.mb-0 Todo lo anterior se hace para mejorar el proceso de recolección y determinar la capacidad de recuperación, el impacto generado y la periodicidad de las cosechas.
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

<style lang="sass">
.fondo5
  background: rgba(255,255,255,1);
  background: -moz-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(229,239,212,1) 100%);
  background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(255,255,255,1)), color-stop(100%, rgba(229,239,212,1)));
  background: -webkit-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(229,239,212,1) 100%);
  background: -o-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(229,239,212,1) 100%);
  background: -ms-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(229,239,212,1) 100%);
  background: linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(229,239,212,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#e5efd4', GradientType=0 );

.fondo4
  margin-top: 45px

  .separador-container
    padding: 0px 0px 45px 0px;

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
    background-image: url("../assets/curso/tema1/img16.png")
    // background-size: contain
    background-repeat: no-repeat

.fa-chevron-left:before
  color: #942E19

.fa-chevron-right:before
  color: #942E19

.slyder1
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background: #E5EFD4;
  p
    font-size: 17
    font-weight: bold

.fondo2
  border-radius: 23px;
  background: rgba(229,239,212,1);
  background: -moz-linear-gradient(left, rgba(229,239,212,1) 0%, rgba(246,250,240,1) 100%);
  background: -webkit-gradient(left top, right top, color-stop(0%, rgba(229,239,212,1)), color-stop(100%, rgba(246,250,240,1)));
  background: -webkit-linear-gradient(left, rgba(229,239,212,1) 0%, rgba(246,250,240,1) 100%);
  background: -o-linear-gradient(left, rgba(229,239,212,1) 0%, rgba(246,250,240,1) 100%);
  background: -ms-linear-gradient(left, rgba(229,239,212,1) 0%, rgba(246,250,240,1) 100%);
  background: linear-gradient(to right, rgba(229,239,212,1) 0%, rgba(246,250,240,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e5efd4', endColorstr='#f6faf0', GradientType=1 );
  transition: transform  0.5s;
  &:hover
    cursor: pointer;
    filter: saturate(200%);
    transform: scale(1.15);


.fondo3
  border-radius: 23px;
  background: rgba(255,240,203,1);
  background: -moz-linear-gradient(left, rgba(255,240,203,1) 0%, rgba(255,250,238,1) 100%);
  background: -webkit-gradient(left top, right top, color-stop(0%, rgba(255,240,203,1)), color-stop(100%, rgba(255,250,238,1)));
  background: -webkit-linear-gradient(left, rgba(255,240,203,1) 0%, rgba(255,250,238,1) 100%);
  background: -o-linear-gradient(left, rgba(255,240,203,1) 0%, rgba(255,250,238,1) 100%);
  background: -ms-linear-gradient(left, rgba(255,240,203,1) 0%, rgba(255,250,238,1) 100%);
  background: linear-gradient(to right, rgba(255,240,203,1) 0%, rgba(255,250,238,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fff0cb', endColorstr='#fffaee', GradientType=1 );
  transition: transform  0.5s;
  &:hover
    cursor: pointer;
    filter: saturate(200%);
    transform: scale(1.15);


.fondo1
  position: relative
  padding-bottom: 1rem
  div, p
    position: relative
  &::before
    content: ""
    position: absolute
    top: 0
    left: 2.5%
    width: 108%
    height: 100%
    margin: 0 -5rem
    background-image: url("../assets/curso/tema1/img01.png")
    // background-size: contain
    background-repeat: no-repeat
</style>
