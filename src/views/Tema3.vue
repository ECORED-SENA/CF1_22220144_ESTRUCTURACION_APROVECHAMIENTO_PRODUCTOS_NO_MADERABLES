<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.tema3   
    .titulo-principal.color-acento-contenido.mb-0
      .titulo-principal__numero
        span 3 
      h1 Análisis del mercado para productos no maderables del bosque

    .fondo31.p-0.pt-4.m-0
      p.mb-4(data-aos="fade-left") Los productos no maderables del bosque cumplen un papel importante en todas las comunidades, que en su mayoría son rurales, puesto que ayudan a su mantenimiento y bienestar; además, contribuyen a la creación de empleos e ingresos económicos y son una fuente de seguridad alimentaria para las familias...

      .cajon.color-primario.p-4.mb-4(data-aos="fade-right")
        p.mb-0 En esta sección se describe la manera más simple para la comercialización de los productos no maderables, por lo que se inicia mencionando la gran importancia que han tomado estos productos además de los orgánicos en la sociedad actual que hoy más consciente frente al tipo de alimentos que consume para su bienestar, por lo anterior, es importante resaltar los pasos lo que se indican en el siguiente recurso de aprendizaje:

      ImagenInfograficaB.color-acento-botones
        template(v-slot:imagen)
          figure(data-aos="fade-left")
            img(src='@/assets/curso/tema3/img02.svg')
                      
        div(x="23.5%" y="42%"  numero="+")
          img(src='@/assets/curso/tema3/img08.png')

        div(x="80%" y="42%"  numero="+")          
          p.mb-0 <span style="color: #942E19">●</span> Se debe realizar una primera selección de los productos identificados.
          p.mb-0 <span style="color: #942E19">●</span> Se debe visitar a los posibles compradores.
          p.mb-0 <span style="color: #942E19">●</span> Se debe determinar el precio del producto y el precio de venta al público.
          p.mb-0 <span style="color: #942E19">●</span> Se debe diseñar la presentación que llevará el producto.
          p.mb-0 <span style="color: #942E19">●</span> Se debe calcular el volumen de productos a ofrecer.
          p.mb-0 <span style="color: #942E19">●</span> Se debe analizar la periocidad de las compras de insumos.
          p.mb-0 <span style="color: #942E19">●</span> Se debe analizar la cantidad de compradores y su capacidad de compra del producto. 
          p.mb-0 <span style="color: #942E19">●</span> Se deben identificar los diferentes medios de pago.
          p.mb-0 <span style="color: #942E19">●</span> Todo esto se podrá determinar realizando unas visitas previas a otras organizaciones, como lo son las que están dedicadas a la comercialización de plantas ornamentales, medicinales, artesanías, carbón, y comestibles., entre otros.
          
        div(x="23.5%" y="75%"  numero="+")
          .row.justify-content-center.align-items-center
            .col-lg-6
              img(src='@/assets/curso/tema3/img06.png')
            .col-lg-6
              p.mb-0 La identificación preliminar de los productos y su recolección son importante en el proceso, estos la realizan personas con conocimientos previos, ya sea a nivel local, regional o nacional. Por otro lado, es vital realizarla con la comunidad, ya que son ellos quienes conocen sus usos, por lo que no debe ser impuesta por los técnicos. 
        div(x="80%" y="75%"  numero="+")
          .row.justify-content-center.align-items-center
            .col-lg-6
              img(src='@/assets/curso/tema3/img07.png')
            .col-lg-6
              p.mb-0 Se realiza con base en la información que se recolectó anteriormente, por lo que se hace un cálculo de costo de elaboración, producción y comercialización de los productos, para finalmente concretar un estudio de mercado. 
        
      Separador
      #t_3_1.titulo-segundo.color-acento-contenido
        h2 3.1. Identificación de fuentes de consulta (bases de datos especializadas y medios de búsqueda)

    p.mb-4(data-aos="fade-right") Para iniciar, es importante resaltar la importancia de los productos no maderables en la actualidad, ya que su consumo ha aumentado por lo que tienen potencial para su comercialización, tanto que hay una enorme cantidad de productos que ofrecen diversas oportunidades para empezar algún tipo de iniciativa o emprendimiento de productos no maderables en futuros mercados.
    
    .row.justify-content-center.fondo2.mb-5(data-aos="fade-left")
      .col-lg-1
      .col-lg-7.py-4
        p.mb-4 Por lo anterior, se hace necesario el conocimiento de fuentes de consulta confiables que provean información de alta calidad y validada por entidades nacionales e internacionales. Una de ellas es la Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO), donde se podrá encontrar diversos artículos sobre los Productos Forestales No Madereros (PFNM), al hacer investigación sobre el tema, se ha visto el aumento de su uso lo que ha llevado al desarrollo de distintas estadísticas, informes, datos y programas, etc., que aportarán información desde diferentes puntos de vista, por ejemplo: 
        div.slider-espcial.d-flex.justify-content-center.align-items-center.px-3.mb-5
            .row.d-flex.justify-content-center.align-items-center.w-100
              .col-1.indicador__container.p-0
                img(src="@/assets/curso/tema3/img04.svg", v-on:click="anterior" @mouseover="mostrarIndicador = false")
                .indicador--click(v-if="mostrarIndicador")
              .col-10
                p.mb-0.text-center(v-if="espacial1==1", data-aos="slide-left") <span style="color: #942E19">●</span> La recolección de saberes ancestrales. 
                p.mb-0.text-center(v-if="espacial1==2", data-aos="slide-left") <span style="color: #942E19">●</span> Su uso.
                p.mb-0.text-center(v-if="espacial1==3", data-aos="slide-left") <span style="color: #942E19">●</span> La ubicación. 
                p.mb-0.text-center(v-if="espacial1==4", data-aos="slide-left") <span style="color: #942E19">●</span> Su producción o transformación. 
                p.mb-0.text-center(v-if="espacial1==5", data-aos="slide-left") <span style="color: #942E19">●</span> La comercialización, entre otras cosas.                
              .col-1.p-0
                img(src="@/assets/curso/tema3/img05.svg" v-on:click="siguiente" )
      .col-lg-4.p-0
        img(src='@/assets/curso/tema3/img03.png')
    
    p.mb-5.text-center(data-aos="fade-right")  A continuación, se muestra una tabla con algunos sitios web o repositorios de contenidos digitales que le ayudaran a profundizar en el tema.

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10
        .tabla-b.color-acento-contenido
          table        
            tr.tabla-b__header
              th(colspan=7) 
                h4.mb-0 Descripción
              th(colspan=3) 
                h4.mb-0 Enlace
            tr(style="background-color: white !important")
              td(colspan=7) La FAO es una dependencia de la Unesco, que se encarga de promover el uso sostenible del ambiente, en el enlace que se le entrega puede encontrar información clave a nivel internacional.                
              td(colspan=3 align="center")
                 a.anexo.border.w-100.border(href="https://www.fao.org/3/y1457s/y1457s00.htm#TopOfPage" target="_blank")
                  .anexo__icono
                    img(src="@/assets/curso/tema3/img09.svg")
                  .anexo__texto
                    p Enlace web. 
            tr(style="background-color: #F6FAF0 !important")
              td(colspan=7) El Estado colombiano tiene una página web donde centraliza información sobre repositorios y bases de datos de contenidos abiertos en diferentes temas, por lo que le invito a revisar el enlace y hacer la búsqueda de información que requiera.
              td(colspan=3 align="center")
                 a.anexo.border.w-100.border(href="https://www.sic.gov.co/bases-y-repositorios-bibliograficos-de-libre-acceso" target="_blank")
                  .anexo__icono
                    img(src="@/assets/curso/tema3/img09.svg")
                  .anexo__texto
                    p Enlace web. 
            tr(style="background-color: white !important")
              td(colspan=7) El Instituto Humboldt cuenta con una serie de investigaciones realizadas por ellos mismos y un banco de recursos de externos mediante el catálogo de revistas sobre biodiversidad en Colombia, este material se encuentra en la sección de publicaciones.
              td(colspan=3 align="center")
                 a.anexo.border.w-100.border(href="http://www.humboldt.org.co/es/" target="_blank")
                  .anexo__icono
                    img(src="@/assets/curso/tema3/img09.svg")
                  .anexo__texto
                    p Enlace web. 
            tr(style="background-color: #F6FAF0 !important")
              td(colspan=7) La Universidad Nacional de Colombia posee un departamento en ciencias agrarias, por lo que ha desarrollado un repositorio de contenidos en diferentes temas, entre ellos los productos no maderables.
              td(colspan=3 align="center")
                 a.anexo.border.w-100.border(href="http://www.humboldt.org.co/es/" target="_blank")
                  .anexo__icono
                    img(src="@/assets/curso/tema3/img09.svg")
                  .anexo__texto
                    p Enlace web. 
            tr(style="background-color: white !important")
              td(colspan=7) Scielo es un repositorio de contenidos digitales abierto, donde se indexan revistas y artículos de diferentes entidades, al ingresar podrá descubrir excelente material sobre el tema.
              td(colspan=3 align="center")
                 a.anexo.border.w-100.border(href="https://search.scielo.org/?q=productos+no+maderalbes&lang=es&count=15&from=0&output=site&sort=&format=summary&fb=&page=1&q=productos+no+maderables&lang=es&page=1" target="_blank")
                  .anexo__icono
                    img(src="@/assets/curso/tema3/img09.svg")
                  .anexo__texto
                    p Enlace web. 
            tr(style="background-color: #F6FAF0 !important")
              td(colspan=7) Redalyc es un repositorio de contenidos abiertos, allí se podrá ingresar para buscar información sobre el tema, por lo que le invito a revisar el siguiente enlace.
              td(colspan=3 align="center")
                 a.anexo.border.w-100.border(href="https://www.redalyc.org/busquedaArticuloFiltros.oa?q=productos%20no%20maderables" target="_blank")
                  .anexo__icono
                    img(src="@/assets/curso/tema3/img09.svg")
                  .anexo__texto
                    p Enlace web. 
            tr(style="background-color: white !important")
              td(colspan=7) La biblioteca del SENA cuenta con diferentes tipos de contenidos sobre el tema, en adición existe un repositorio especializado en temas de biodiversidad, por lo que se invita a ingresar con el usuario y contraseña asignados por el Servicio Nacional del Aprendizaje.
              td(colspan=3 align="center")
                 a.anexo.border.w-100.border(href="https://sena-primo.hosted.exlibrisgroup.com/primo-explore/search?query=any,contains,productos%20no%20maderables&tab=sena_completo&search_scope=sena_completo&vid=SENA&mode=Basic" target="_blank")
                  .anexo__icono
                    img(src="@/assets/curso/tema3/img09.svg")
                  .anexo__texto
                    p Enlace web. 
            tr(style="background-color: #F6FAF0 !important")
              td(colspan=7) La Universidad Distrital tiene en su repositorio contenidos sobre productos no maderables del bosque, por lo que le invito a revisar el enlace que se anexa.
              td(colspan=3 align="center")
                 a.anexo.border.w-100.border(href="https://sena-primo.hosted.exlibrisgroup.com/primo-explore/search?query=any,contains,productos%20no%20maderables&tab=sena_completo&search_scope=sena_completo&vid=SENA&mode=Basic" target="_blank")
                  .anexo__icono
                    img(src="@/assets/curso/tema3/img09.svg")
                  .anexo__texto
                    p Enlace web. 
            
    .fondo3.mb-5 
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido
        h2 3.2. América del sur (Brasil, Colombia, Ecuador, Paraguay, Venezuela y Perú).
      
      p.mb-4(data-aos="fade-right") Para entender en realidad los deseos y necesidades de los clientes potenciales del mercado se debe investigar el mercado y las alternativas de comercialización de los productos no maderables, para que estos lleguen al consumidor final, cabe resaltar que cada producto tiene diferente oferta y demanda, lo que dice que hay público objetivo para cada uno.
      p.mb-5(data-aos="fade-left") A continuación, se presentan algunos productos no maderables que se producen en América del Sur:

      .titulo-sexto.color-acento-contenido
        p.mb-0 Descripción y clasificación de las partes de la planta
      
      img.mb-5(src="@/assets/curso/tema3/img11.svg" data-aos="fade-right")

      .row.justify-content-center(data-aos="fade-left")
        .col-lg-10
          .cajon.color-acento-contenido.p-4.px-5
            p.mb-0 La oferta de estos productos va ligada con la demanda que se tiene, ya que no son productos que se almacenen en grandes cantidades y se comercialicen inmediatamente a los diferentes compradores (exceptuando a los compradores industriales), por esto es importante la realización de estudios de mercado que se centren en estos productos forestales no madereros, los cuales pueden ayudar a determinar estadísticamente las diferentes variables para estos productos.

    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10
        p.mb-5 Dichos productos forestales no madereros contemplan un alto grado de complejidad por su comercialización, debido a su versatilidad y cantidad, un claro ejemplo de esto es que a nivel mundial se conocen alrededor de 3.000 aceites, pero cerca de 10% es decir, 300 aceites, tienen relevancia comercial.  

        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/img12.png')})`}"
          )
          .bloque-texto-g__texto.p-4.py-4
            p.mb-0 Existen varios mercados para estos productos no maderables, los cuales pueden ser las personas naturales, mercados locales, mercados especializados y avanzados en diferentes técnicas de transformación en diferentes países desarrollados o en vía de desarrollo.
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    espacial1: 1,
    mostrarIndicador: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
  methods: {
    siguiente: function() {
      this.espacial1++
      if (this.espacial1 > 5) {
        this.espacial1 = 1
      }
    },
    anterior: function() {
      this.espacial1--
      if (this.espacial1 < 1) {
        this.espacial1 = 5
      }
    },
  },
}
</script>

<style lang="sass">
.tema3
  .fondo3
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
      background-image: url("../assets/curso/tema3/img10.png")
      // background-size: contain
      background-repeat: no-repeat

  .anexo
    background-color: #F0DDD8 !important
    p
      color: #942E19
      font-size: 14px
      font-weight: bold

  .img-infografica-b__modal
    border-radius: 15px !important
    background: rgba(255,247,228,1);
    background: -moz-linear-gradient(top, rgba(255,247,228,1) 0%, rgba(246,250,240,1) 100%);
    background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(255,247,228,1)), color-stop(100%, rgba(246,250,240,1)));
    background: -webkit-linear-gradient(top, rgba(255,247,228,1) 0%, rgba(246,250,240,1) 100%);
    background: -o-linear-gradient(top, rgba(255,247,228,1) 0%, rgba(246,250,240,1) 100%);
    background: -ms-linear-gradient(top, rgba(255,247,228,1) 0%, rgba(246,250,240,1) 100%);
    background: linear-gradient(to bottom, rgba(255,247,228,1) 0%, rgba(246,250,240,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fff7e4', endColorstr='#f6faf0', GradientType=0 );
    p
      color: $color-sistema-texto !important

  .img-infografica-b__modal__btn-cerrar
    i
      border-radius: 6px
      padding: 5px
      background-color: #FFFFFF
      color: $color-sistema-texto

  .fondo2
    background: rgba(246,250,240,1);
    background: -moz-linear-gradient(top, rgba(246,250,240,1) 0%, rgba(229,239,212,1) 100%);
    background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(246,250,240,1)), color-stop(100%, rgba(229,239,212,1)));
    background: -webkit-linear-gradient(top, rgba(246,250,240,1) 0%, rgba(229,239,212,1) 100%);
    background: -o-linear-gradient(top, rgba(246,250,240,1) 0%, rgba(229,239,212,1) 100%);
    background: -ms-linear-gradient(top, rgba(246,250,240,1) 0%, rgba(229,239,212,1) 100%);
    background: linear-gradient(to bottom, rgba(246,250,240,1) 0%, rgba(229,239,212,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f6faf0', endColorstr='#e5efd4', GradientType=0 );

  .fondo31
    position: relative
    padding-bottom: 1rem
    p
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
