<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.tema2
    .titulo-principal.color-acento-contenido.mb-0
      .titulo-principal__numero
        span 2 
      h1 Caracterizar taxonómicamente productos no maderables

    .fondo1.p-0.pt-4.m-0.position-relative
      .row.justify-content-center(data-aos="fade-left")
        .col-12.col-xl-10
          //img.d-none.d-xl-block(src="@/assets/curso/tema2/img02.png")
          img.mb-3(src="@/assets/curso/tema2/img02.png")
          div.p-3.d-block.d-xl-none(style="background-color: #F1F6EA; border-radius: 15px")
            p.mb-0 Las plantas son muy importantes para que exista la vida en la Tierra, ya que además de ser receptoras de energía solar, son las que generan el oxígeno y todo lo que consumimos como sociedad está relacionado directamente con ellas. Por lo anterior, en el siguiente recurso de aprendizaje se explican las dos definiciones clave para entender su producción, por lo que se invita a revisarlo detalladamente.
      .position-absolute.d-none.d-lg-block(style="top: 60px")
        .row.justify-content-center
          .col-3.col-xl-4.col-xxl-4
          .col-9.col-xl-7.col-xxl-7.px-3
            p.mb-0 Las plantas son muy importantes para que exista la vida en la Tierra, ya que además de ser receptoras de energía solar, son las que generan el oxígeno y todo lo que consumimos como sociedad está relacionado directamente con ellas. Por lo anterior, en el siguiente recurso de aprendizaje se explican las dos definiciones clave para entender su producción, por lo que se invita a revisarlo detalladamente.
          .col-1.col-xxl-1

      Separador
      #t_2_1.titulo-segundo.color-acento-contenido
        h2 2.1. Conceptos: botánica y taxonomía

      p.mb-4(data-aos="fade-right") Las plantas son muy importantes para que exista la vida en la Tierra, ya que además de ser receptoras de energía solar, son las que generan el oxígeno y todo lo que consumimos como sociedad está relacionado directamente con ellas. Por lo anterior, en el siguiente recurso de aprendizaje se explican las dos definiciones clave para entender su producción, por lo que se invita a revisarlo detalladamente.

      .row.justify-content-center.mb-4(data-aos="fade-left")
        .col-lg-6(style="border: 1px solid #FFC846")

      SlyderE(indicadores="derecha" data-aos="fade-right")
        .row
          .col-xl-4
            h4 Taxonomía
            p.mb-4 Es la ciencia que trata los principios de la clasificación de los seres vivos y este comprende: 
            p.mb-0 <span style="color: #FFC846">●</span> La identificación. 
            p.mb-0 <span style="color: #FFC846">●</span> Nomenclatura. 
            p.mb-4 <span style="color: #FFC846">●</span> Clasificación de los mismos.
            p.mb-4 Acá se parte de las propiedades generales a las más específicas.
            p.mb-4 Esta tiene en cuenta criterios como lo son las característica de cada planta. entre estas se tiene:
            p.mb-0 <span style="color: #FFC846">●</span> Anatómicas.
            p.mb-0 <span style="color: #FFC846">●</span> Fisiológicas.
            p.mb-0 <span style="color: #FFC846">●</span> Morfológicas.
            p.mb-0 <span style="color: #FFC846">●</span> Citológicas.
            p.mb-3.mb-xl-0 <span style="color: #FFC846">●</span> Otras de los organismos.

          .col-xl-8
            img(src="@/assets/curso/tema2/img03.png")
        .row
          .col-xl-4
            h4 Botánica
            p.mb-3mb-xl-0 Es la disciplina que estudia, describe y clasifica las plantas y su relación entre sí con otros organismos, siendo esta una rama de la biología. La biología estudia los reinos plantae, es decir, las plantas entre los cuales incluye: fungi, hongos y chromista. Todos estos tienen en común que no tienen cloroplastos ni movilidad. 
          .col-xl-8
            img(src="@/assets/curso/tema2/img04.png")

    Separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2. Principios de taxonomía 

    p.mb-4(data-aos="fade-left") La taxonomía consiste fundamentalmente en dar el nombre a los seres vivos y poder poner todo en categorías, lo que permite su clasificación según características similares que los agrupa.

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10
        div.p-3.mb-4(style="background-color: #E5EFD4; border-radius: 13px")
          p.text-center.mb-0 La unidad básica para clasificar dichos seres vivos son las especies y de allí se subcategorizan, tal como se muestra en la siguiente figura.
        img(src="@/assets/curso/tema2/img05.png")        

    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-10
        p.mb-3 Por otro lado, es necesario recordar…
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img06.png')})`}"
          )
          .bloque-texto-g__texto.p-4.py-5
            p.mb-0 … que todo lo que mejore el rendimiento de la extracción de productos no maderables incrementará el valor del recurso, por ejemplo el trabajo que se hace con el árbol de caucho para producir látex o goma.
    
    p.text-center.mb-5(data-aos="fade-right") En la siguiente tabla se muestra la taxonomía de algunos productos no maderables. 
    
    .row.mb-3.mb-xl-5
      .col-xl-6.pe-4
        .row.align-items-center.fondo2.mb-3.mb-xl-0(data-aos="fade-left")
          .col-lg-6.p-0
            img(src="@/assets/curso/tema2/img07.png")
          .col-lg-6.px-4.py-3
            h4.mb-2 Palma milpesos
            p.mb-2 Se usa para hacer aceite.
            a.boton.color-acento-botones.me-0(href="https://www.ecured.cu/%C3%81rbol_del_caucho" target="_blank" type="application/pdf")
              span Enlace web
              i.fas.fa-link.p-1(style="background-color:#FFFFFF; color: #942E19")
      .col-xl-6.ps-4
        .row.align-items-center.fondo2.mb-0(data-aos="fade-right")
          .col-lg-6.p-0
            img(src="@/assets/curso/tema2/img08.png")
          .col-lg-6.px-4.py-3
            h4.mb-2 Guarumo
            p.mb-2 Se usa para hacer medicamentos para la diabetes.
            a.boton.color-acento-botones.me-0(href="https://panama.inaturalist.org/taxa/145603-Bertholletia-excelsa" target="_blank" type="application/pdf")
              span Enlace web
              i.fas.fa-link.p-1(style="background-color:#FFFFFF; color: #942E19")
    
    .row.mb-3.mb-xl-5
      .col-xl-6.pe-4
        .row.align-items-center.fondo2.mb-3.mb-xl-0(data-aos="fade-left")
          .col-lg-6.p-0
            img(src="@/assets/curso/tema2/img09.png")
          .col-lg-6.px-4.py-3
            h4.mb-2 Árbol de caucho
            p.mb-2 Látex, se usa para hacer goma.
            a.boton.color-acento-botones.me-0(href="https://colombia.inaturalist.org/taxa/365688-Oenocarpus-bataua" target="_blank" type="application/pdf")
              span Enlace web
              i.fas.fa-link.p-1(style="background-color:#FFFFFF; color: #942E19")
      .col-xl-6.ps-4
        .row.align-items-center.fondo2.mb-0(data-aos="fade-right")
          .col-lg-6.p-0
            img(src="@/assets/curso/tema2/img10.png")
          .col-lg-6.px-4.py-3
            h4.mb-2 Nuez del Brasil
            p.mb-2 Se utiliza como alimento.
            a.boton.color-acento-botones.me-0(href="https://colombia.inaturalist.org/taxa/160255-Cecropia-obtusifolia" target="_blank" type="application/pdf")
              span Enlace web
              i.fas.fa-link.p-1(style="background-color:#FFFFFF; color: #942E19")
    
    .row(data-aos="fade-left")
      .col-xl-6.pe-4
        .row.align-items-center.fondo2.mb-0
          .col-lg-6.p-0
            img(src="@/assets/curso/tema2/img11.png")
          .col-lg-6.px-4.py-3
            h4.mb-2 Achiote
            p.mb-2 Se usa contra el dolor, en la selva amazónica, y para tinturar objetos.
            a.boton.color-acento-botones.me-0(href="https://www.ecured.cu/%C3%81rbol_del_caucho" target="_blank" type="application/pdf")
              span Enlace web
              i.fas.fa-link.p-1(style="background-color:#FFFFFF; color: #942E19")

    .fondo3.mb-5
      Separador
      #t_2_3.titulo-segundo.color-acento-contenido
        h2 2.3. Toma de muestras y protocolo para productos no maderables

      p.mb-4(data-aos="fade-right") Para los inventarios en los que se saca una sola muestra se cuenta con una estructura básica de un diseño de inventario en la que se tiene en cuenta la población, su área a explorar y especies que se estudiarán; por otro lado, el diseño del muestreo es el que se decide la forma en la que se situarán las parcelas, por lo que en su configuración se incluye: la dimensión de las parcelas y el método de enumeración, es necesario enfatizar que según las características de las plantas se hace cada sección. 

      .row.justify-content-center
        .col-lg-10
          .cajon.color-primario.p-4.mb-4
            p.mb-0 Por lo anterior, se disponen por protocolo unos requisitos para la toma de muestras y así enviarlas a laboratorio a ser examinadas, para lo anterior, se tienen en cuenta tres criterios, a saber: 

          .row(data-aos="fade-right")
            .col-lg-4
              .tarjeta-avatar
                img(src='@/assets/curso/tema2/img13.svg' alt='AvatarTop')            
                .tarjeta(style="background-color: #F0DDD8")
                  .p-5
                    h4.text-center Dimensiones
                    p.mb-0 Las piezas deben medir mínimo 6 x 5 x 3 cm y poseer albura como duramen. 
            .col-lg-4
              .tarjeta-avatar
                img(src='@/assets/curso/tema2/img14.svg' alt='AvatarTop')            
                .tarjeta(style="background-color: #F0DDD8")
                  .p-5
                    h4.text-center Dimensiones
                    p.mb-0 Las piezas deben medir mínimo 6 x 5 x 3 cm y poseer albura como duramen. 
            .col-lg-4
              .tarjeta-avatar
                img(src='@/assets/curso/tema2/img15.svg' alt='AvatarTop')            
                .tarjeta(style="background-color: #F0DDD8")
                  .p-5
                    h4.text-center Dimensiones
                    p.mb-0 Las piezas deben medir mínimo 6 x 5 x 3 cm y poseer albura como duramen. 

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10
        p.mb-4 Información muy importante…                        
        .bloque-texto-g.color-secundario.p-4.px-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img16.png')})`}"
          )
          .bloque-texto-g__texto.p-4.py-4
            p.mb-0 La marcación de las muestras debe llevar la información de la procedencia y el nombre común de la misma, después de esto se manejarán con cadena de custodia para no alterar, contaminar o destruir las condiciones de la muestra y que llegue en perfecto estado al laboratorio que vaya a examinarlas.


    Separador
    #t_2_4.titulo-segundo.color-acento-contenido
      h2 2.4. Descripción y clasificación de las partes de la planta

    p.mb-4(data-aos="fade-right") Las plantas son creadoras de su propio alimento por medio de la fotosíntesis, captan la energía a través de la clorofila y convirtiendo así el dióxido de carbono y el agua en azúcares que consume como energía. Por lo anterior, se invita a revisar el siguiente recurso de aprendizaje que menciona las partes principales de las plantas y sus funciones.

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 Descripción y clasificación de las partes de la planta

        ImagenInfografica.color-acento-botones.mb-5(data-aos="fade-left")
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/img17.png')              

          .tarjeta.color-acento-botones.p-3(x="1%" y="55%" numero="+")
            p.mb-0 La raíz el cual se encarga de fijarse al suelo, el medio por el cual absorbe agua y los minerales que son necesarios para elaborar su propio alimento, la raíz está conformada por cuello, raíz principal, pelos absorbentes y cofia.
          .tarjeta.color-acento-botones.p-3(x="15%" y="55%" numero="+")
            p.mb-0 Las flores son los órganos reproductivos y de allí se generan después los frutos y las semillas, las flores se componen de estambre y pistilos, pero también encontramos flores que nunca florecen. 
          .tarjeta.color-acento-botones.p-3(x="25.5%" y="55%" numero="+")
            p.mb-0 Las semillas se producen después de la fecundación de la flor algunas semillas tienen carnosidad como frutos, y los frutos son recubrimientos carnosos o secos de la semilla casi siempre son nutritivas y de consumo para los seres vivos.
          .tarjeta.color-acento-botones.p-3(x="47%" y="75%" numero="+")
            p.mb-0 El tallo es la parte aérea la cual sostiene sus otros órganos vegetales, este crece en sentido opuesto a la gravedad, se encuentran diferentes tipos de tallos pero esto depende del medio en el que se desarrolle siendo así subterráneos o aéreos y su función consiste en sostener toda la planta, transportar los nutrientes por el interior de la planta.
          .tarjeta.color-acento-botones.p-3(x="87%" y="55%" numero="+")
            p.mb-0 Las hojas tiene diferentes forman y nacen del tallo son las encargadas de realizar la fotosíntesis, por lo general se caen cuando hace mucho frío para prevenir la pérdida de agua del árbol.

          

    br
    br
    br
    
</template>

<script>
export default {
  name: 'Tema2',
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
.tema2
  .img-infografica
    .tarjeta.color-acento-botones
      background-color: #F0DDD8 !important
      p
        color: $color-sistema-texto

  .fondo3
    margin-top: 45px

    .separador-container
      padding: 0px 0px 45px 0px;

    position: relative
    padding-bottom: 1rem
    div, p
      position: relative
    img
      position: absolute
      z-index: 10000
    &::before
      content: ""
      position: absolute
      top: 0
      left: 2.5%
      width: 134%
      //width: 108%
      height: 100%
      margin: 0 -5rem
      background-image: url("../assets/curso/tema2/img12.png")
      //background-size: contain
      background-repeat: no-repeat

  .fondo2
    background-color: #E5EFD4;
    border-top-right-radius: 21px;
    border-bottom-right-radius: 21px;

  .slyder__btn
    background-color: #942E19;

  .fa-angle-right:before
    color: white
  .fa-angle-left:before
    color: white

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
      background-image: url("../assets/curso/tema2/img01.png")
      // background-size: contain
      background-repeat: no-repeat
</style>
