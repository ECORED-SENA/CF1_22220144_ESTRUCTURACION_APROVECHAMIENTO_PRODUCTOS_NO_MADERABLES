export default {
  global: {
    componenteFormativo: 'Potencial de productos no maderables del bosque',
    descripcionCurso:
      'Los productos no maderables representan un papel importante en la vida de todos los seres humanos, ya que son fuentes de alimentación, medicina, gomas, forraje, y materiales de construcción. Se conoce que el manejo completo de estos representa en las comunidades una gran ayuda de desarrollo social y económico, ya que han ido formando empresas familiares en pequeña escala.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Identificación de productos no maderables del bosque',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Definición de productos no maderables del bosque',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipos de productos no maderables del bosque',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Métodos de cosecha o recolección',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Caracterizar taxonómicamente productos no maderables',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Conceptos: botánica y taxonomía ',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Principios de taxonomía ',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Toma de muestras y protocolo para productos no maderables ',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Descripción y clasificación de las partes de la planta ',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Análisis del mercado para productos no maderables del bosque',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Identificación de fuentes de consulta (bases de datos especializadas y medios de búsqueda)',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Contextualización del mercado externo (competidores, oferta y demanda)',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Legislación ambiental para productos no maderables del bosque',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo:
              'Contextualización: Plan de Ordenamiento Territorial y Planes de Ordenamiento Ambiental',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Áreas de manejo ambiental especial',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Régimen de aprovechamiento de recursos naturales',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Convenios internacionales de sostenibilidad',
            hash: 't_4_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Congreso de Colombia. (1963). Ley 99 1993. Por la cual se crea el Ministerio de Medio Ambiente. ',
      link: 'https://funcionpublica.gov.co/eva/gestornormativo/norma.php?i=297',
    },
    {
      referencia:
        'Constitución Política de Colombia. (1991). Constitución Política de Colombia. ',
      link:
        'https://www.corteconstitucional.gov.co/inicio/Constitucion%20politica%20de%20Colombia%20-%202015.pdf',
    },
    {
      referencia:
        'Espacio Virtual de Asesoría de Función Pública. (2021). Decreto 690 de 2021. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=164893',
    },
    {
      referencia: 'FAO. (1999). Introducción.',
      link: 'https://www.fao.org/3/y1457s/Y1457S06.htm',
    },
    {
      referencia:
        'Ideam. (s. f.). Protocolo para Seguimiento y Control a la Movilización de Productos Maderables y Productos no Maderables del Bosque.',
      link:
        'http://capacitacion.siac.ideam.gov.co/SIAC/PROTOCOLO_2_MOVILIZACION_VF.pdf',
    },
    {
      referencia:
        'IIto. (2006). Convenio internacional de maderas tropicales. IIto. ',
      link:
        'https://www.itto.int/direct/topics/topics_pdf_download/topics_id=3363&no=3&disp=inline',
    },
    {
      referencia:
        'Instituto Amazónico de Investigaciones Científicas- Sinchi. (2008). Catálogo de frutales. ',
      link:
        'https://www.sinchi.org.co/files/publicaciones/publicaciones/pdf/catalogo%20de%20frutales%20web.pdf',
    },
    {
      referencia:
        'Lintu, L. (1995). La comercialización de los productos forestales no madereros en los países en desarrollo. ',
      link: 'https://www.fao.org/3/V7850S/v7850s08.htm',
    },
    {
      referencia: 'Ministerio de Medio Ambiente. (2021). ¿Qué es la COP 26? ',
      link: 'https://cop26.minambiente.gov.co/que-es-cop-26/',
    },
    {
      referencia:
        'Naciones Unidas. (1992). Convenio sobre la Biodiversidad, instrumento internacional clave para el desarrollo sostenible. ',
      link: 'https://www.un.org/es/observances/biodiversity-day/convention',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Agricultura y la Alimentación. (2002). Capítulo 10. Productos forestales no madereros. ',
      link: 'https://www.fao.org/3/y1997s/y1997s0g.htm',
    },
    {
      referencia:
        'Organización Mundial del Comercio. (s.f.). Comercio y medio ambiente. ',
      link: 'https://www.wto.org/spanish/tratop_s/envir_s/envir_s.htm',
    },
    {
      referencia:
        'Parques Nacionales Naturales de Colombia. (2021). Convenios internacionales ratificados por Colombia. ',
      link:
        'https://www.parquesnacionales.gov.co/portal/es/normatividad/marco-normativo-del-sistema-de-parques-nacionales-naturales/resoluciones/',
    },
    {
      referencia: 'SINA. (2021). Lineamientos de ordenamiento. ',
      link:
        'https://www.minambiente.gov.co/ordenamiento-ambiental-territorial-y-sistema-nacional-ambiental-sina/lineamientos-de-ordenamiento/',
    },
    {
      referencia:
        'Unesco. (2015). Objetivos de Desarrollo Sostenible.  Agenda 2030.',
      link: 'https://es.unesco.org/sdgs',
    },
    {
      referencia: 'Unesco. (2021). Tu visión de la educación en el 2050. ',
      link:
        'https://es.unesco.org/futuresofeducation/get-involved/tu-vision-de-la-educacion-en-2050',
    },
  ],
  glosario: [
    {
      termino: 'Aprovechamiento sostenible',
      significado:
        'aprovechamiento que puede extraerse del bosque de forma sostenible, determinado generalmente por anticipado utilizando un modelo de rendimiento y prescrito en los planes de ordenación.',
    },
    {
      termino: 'Biometría',
      significado:
        'aplicación de métodos estadísticos a la medición de objetos biológicos.',
    },
    {
      termino: 'Forraje',
      significado:
        'fuentes más económicas y saludables de alimentación que tiene un ganadero por medio de las plantas cultivadas y así dar de comer a los animales.',
    },
    {
      termino: 'Gomas',
      significado:
        'formadas a partir de la cicatrización de la planta y se utiliza como pegamento ',
    },
    {
      termino: 'Producto',
      significado:
        'cualquier parte de un vegetal o animal que se aprovecha para uso o consumo humano.',
    },
  ],
  complementario: [
    {
      texto:
        'Ministerio de Agricultura y Desarrollo Rural. (2017). Agricultura al día. Productos no maderables. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=O5UpRXlW8JM',
    },
    {
      texto:
        'Ideam. (s. f.). Protocolo para seguimiento y control a la movilización de productos maderables y productos no maderables del bosque. ',
      tipo: 'Pdf',
      descarga: '/downloads/anexo1.pdf',
    },
    {
      texto: 'Naturalista. (s. f.) Palma milpesos. ',
      tipo: 'Web',
      link: 'https://colombia.inaturalist.org/taxa/365688-Oenocarpus-bataua',
    },
    {
      texto: 'Naturalista. (s.f.) Guarumo. ',
      tipo: 'Web',
      link: 'https://colombia.inaturalist.org/taxa/160255-Cecropia-obtusifolia',
    },
    {
      texto: 'Ecured. (s. f.) Árbol de caucho. ',
      tipo: 'Web',
      link: 'https://www.ecured.cu/%C3%81rbol_del_caucho',
    },
    {
      texto: 'INaturalisPa. (s. f.). Nuez del Brasil. ',
      tipo: 'Web',
      link: 'https://panama.inaturalist.org/taxa/145603-Bertholletia-excelsa',
    },
    {
      texto: 'Instituto Peruano. (s. f.) Achiote. ',
      tipo: 'Pdf',
      descarga: '/downloads/anexo2.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Oscar Ivan Uribe Ortiz',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Oleg Litvin ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edgar Mauricio Cortés García',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Camila Ovalle Ospina',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
