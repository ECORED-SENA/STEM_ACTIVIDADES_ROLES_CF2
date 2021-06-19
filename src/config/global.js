export default {
  global: {
    componenteFormativo:
      'Ciencia, tecnología, ingeniería y matemáticas en la educación',
    descripcionCurso:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vestibulum quam bibendum varius.<br/><br/>Quisque pretium at nulla sit amet placerat. Vestibulum consequat suscipit accumsan. Proin pharetra congue enim et tempus. Sed sodales dui volutpat, placerat tellus accumsan, semper est. Phasellus nec lorem elementum, mattis quam eget, vestibulum nibh. Sed.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
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
        titulo: 'La integración curricular: educación STEM',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'El papel de la institución educativa para lograr la integración curricular',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'La educación STEM y el rol de los instructores en el contexto escolar',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Modelos de implementación de actividades STEM',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Elementos del pensamiento científico',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Influencia de la tecnología en la educación',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Influencia de la ingeniería en el contexto STEM',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Elementos del pensamiento matemático',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Experiencias de educación STEM',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Experiencias del STEM desde el área de las matemáticas, ciencias, ingeniería',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Experiencia de la educación STEM desde el área de las ciencias, lenguaje y tecnología',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo:
              'Experiencia de la Educación STEM desde el área de la tecnología, ingeniería y matemáticas',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
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
        'Bybee, R. W. (2013). The Case for Education Challenges and Opportunities. National Science Teachers Association.',
      link:
        'https://books.google.com.co/books?hl=en&lr=&id=gfn4AAAAQBAJ&oi=fnd&pg=PR7&dq=Bybee,+R.+W.+(2013).+The+Case+for+Education+Challenges+and+Opportunities.+National+Science+Teachers+Association.&ots=xaZgeza7_p&sig=WLCl6WbpL6AGJYujUqTQtF8pvKk#v=onepage&q=Bybee%2C%20R.%20W.%20(2013).%20The%20Case%20for%20Education%20Challenges%20and%20Opportunities.%20National%20Science%20Teachers%20Association.&f=false',
    },
    {
      referencia:
        'Caprariello, A. W. (2020). Does STEM-Based Learning Inspire Students to Pursue a STEM-Based Career? Hofstra University.',
      link:
        'https://www.proquest.com/openview/41d268fbd61e1eb866fc4b63ae86864e/1?pq-origsite=gscholar&cbl=18750&diss=y',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (8 de febrero). Ley 115 de 1994, por la cual se expide la ley General de Educación de Colombia.',
    },
    {
      referencia:
        'EducaconTIC. (s.f.). Diseño de tareas para el desarrollo de la competencia STEM: los problemas de modelización matemática.',
      link:
        'http://www.educacontic.es/blog/diseno-de-tareas-para-el-desarrollo-de-la-competencia-stem-los-problemas-de-modelizacion',
    },
    {
      referencia:
        'Herrera, J., A., y Sacasas, J., A. F. (2010). El método clínico y el método científico. Medisur, 8(5), 12-20.',
    },
    {
      referencia: 'Labajo, E. (s.f.). El método científico.',
      link:
        'https://www.ucm.es/data/cont/docs/107-2016-02-17-El%20M%C3%A9todo%20Cient%C3%ADfico.pdf',
    },
    {
      referencia:
        'Ministerio de Educación Nacional de Colombia y la Asociación Colombiana de Facultades de Educación (2008). Serie Guías N°30 “Ser competente en tecnología: ¡una necesidad para el desarrollo!” ',
      link: 'https://www.mineducacion.gov.co/1621/article-160915.html',
    },
    {
      referencia:
        'National Academies of Science, Engineering, Medicine (2012). A Framework for K-12 Science Education: Practices, Crosscutting Concepts, and Core Ideas.',
      link: 'https://www.nap.edu/read/13165/chapter/1',
    },
    {
      referencia:
        'Purzer, Ş., Strobel, J., y Cardella, M. (Eds.). (2014). Ingeniería en entornos preuniversitarios: síntesis de investigación, políticas y prácticas. Prensa de la Universidad de Purdue.',
    },
    {
      referencia:
        'Toma, R., B., e Ilena, M., G. (2016). Modelo interdisciplinar de educación STEM para la etapa de Educación Primaria. I. M.',
      link: 'https://riubu.ubu.es/handle/10259/4681',
    },
    {
      referencia: 'Real Academia Española. (2021). Definición de Ciencia.',
      link: 'https://dle.rae.es/ciencia',
    },
  ],
  glosario: [
    {
      termino: 'Ciencia',
      significado:
        'conjunto de conocimientos obtenidos mediante la observación y el razonamiento.',
    },
    {
      termino: 'Currículo',
      significado:
        'conjunto de criterios, planes de estudio, programas, metodologías, y procesos que contribuyen a la formación integral.',
    },
    {
      termino: 'NGSS',
      significado:
        'Next Generation Science Standards Estándares de Ciencias para la Próxima Generación.',
    },
    {
      termino: 'OCDE',
      significado: 'Organización para la Colaboración y Desarrollo Económico.',
    },
  ],
  complementario: [
    {
      texto:
        'La integración curricular: educación STEM. Toma, R. B., e Ilena, M. G. (2016). Modelo interdisciplinar de educación STEM para la etapa de Educación Primaria. I. M',
      tipo: 'Artículo',
      link: 'https://riubu.ubu.es/handle/10259/4681',
    },
    {
      texto:
        'Modelos de implementación de actividades STEM. Caprariello, A. W. (2020). Does STEM-Based Learning Inspire Students to Pursue a STEM-Based Career? Hofstra University. ',
      tipo: 'Documento',
      link:
        'https://www.proquest.com/openview/41d268fbd61e1eb866fc4b63ae86864e/1?pq-origsite=gscholar&cbl=18750&diss=y ',
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
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
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
