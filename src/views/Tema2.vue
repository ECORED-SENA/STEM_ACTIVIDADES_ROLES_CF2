<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span  2
      h1 Modelos de implementación de actividades STEM

    .row.mb-5
      .col-lg-8
        p.mb-3  Una de las principales características de la educación STEM es <b>el desarrollo de actividades escolares basadas en la práctica,</b> esto configura una experiencia para los aprendices de relacionar el aprendizaje conceptual de diferentes disciplinas a un contexto donde se solucionan problemas a través de su propia experiencia.
        p.mb-3  Los futuros ciudadanos del siglo XXI deben desarrollar competencias y habilidades necesarias para tener la capacidad de innovar, crear y transformar los conceptos abstractos de las disciplinas a una experiencia de aprendizaje utilizando diversos recursos y herramientas escolares. Es importante resaltar que, para este modelo de educación STEM, es <b>muy importante que los aprendices realicen prácticas de ingeniería</b> que brindan la oportunidad de aprender conceptos de las ciencias y descubrir sus grandes logros y aportes a la sociedad, apoyados los siguientes aspectos. <b>Se invita a observarlos.</b>
      .col-lg-4
        figure
          img.h160(src='@/assets/curso/t2-i1.png', alt='Dos niñas jugando con un robot')        
    //-- SLIDER 1
    SlyderB.mb-5(:datos="datosSlyder")
    .row.justify-content-center
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4
          .row
            .col-lg-2
              figure.mb-4
                img(src='@/assets/curso/t1-ic5.svg', alt='icono decorativo relacionado a contenido web')

            .col-lg-10
              p.mb-4 La integración de las asignaturas es quizás uno de los aspectos de la innovación en la educación que más llaman la atención. Bybee (2013) muestra que es posible encontrar diversas combinaciones de asignaturas y escenarios que pueden ser parte de la realidad de una institución educativa, la cual implica un desafío en la actualidad. 
              p.mb-5 Con la intención de identificar algunos desafíos de la educación STEM, se sugiere leer el capítulo 1 “What are Challenges for STEM Education” de Bybee (2013). Para ser direccionado al texto, debe hacer clic en el icono.
              .row
                .col-lg-8
                  a.anexo.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p <b>Enlace web.</b> The Case for Education Challenges and Opportunities. National Science Teachers Association.

    

    Separador

    #t_2_1.titulo-segundo
      .h4 2.1  Elementos del pensamiento científico
    .row.mb-4
      .col-lg-8
        p.mb-4  De acuerdo con Herrera (2010), la ciencia es un <b>“cuerpo de doctrina, de validez universal y certeza objetiva, metódico y sistemático, que versa sobre un sector delimitado de la realidad y constituye un ramo particular del saber humano”.</b> A su vez, la Real Academia Española-RAE (2021) define la ciencia como <b>“conjunto de conocimientos obtenidos mediante la observación y el razonamiento, sistemáticamente estructurados y de los que se deducen principios y leyes generales con capacidad predictiva y comprobables experimentalmente”.</b>
        .cajon.color-secundario.p-4.mb-4
          p <b>Por lo anterior,</b> se puede afirmar que la ciencia en el contexto escolar se presenta como un camino, un modo de hacer las cosas en orden, un procedimiento de hallar la verdad y enseñarla, un método que podrá ser analítico si procede descomponer o pasando del todo a las partes o sintético si actúa componiendo, pasando de las partes al todo. Precisamente, este último instrumento es el método que asegura los alcances de la ciencia, su proyección y que los conocimientos no nazcan y mueran con sus descubridores o quienes estuvieron próximos a ellos, pues metodizar es asegurar la posibilidad de transmitir. El método científico es un procedimiento de investigación usado principalmente en la producción de conocimiento en las ciencias. Para ser llamado científico, un método de investigación debe basarse en lo empírico y en la medición y estar sujeto a los principios específicos de las pruebas de razonamiento. 
            span.text-bold El método científico ha caracterizado a la ciencia natural desde el siglo XVII, y consiste en la observación sistemática, la medición, la experimentación, la formulación, el análisis y la modificación de las hipótesis.
      .col-lg-4
        figure.mb-4
          img(src='@/assets/curso/t2-ic2.svg', alt='icono decorativo relacionado pensamiento cientifico')
   
    p.mb-5  El método científico está sustentado por dos pilares fundamentales:  
    .row.justify-content-center
      .col-lg-8
        .tarjeta-avatar-b.mb-4.align-items-center
          img.h80(src='@/assets/curso/t3-ic3.svg' alt='icono decorativo')
          .tarjeta.tarjeta--gris
            .p-4
              p El primero de ellos es <b>la reproducibilidad,</b> entendida como la capacidad de repetir un experimento en cualquier momento y lugar; para esto es importante la publicación de los hallazgos. 
        .tarjeta-avatar-b.mb-5.align-items-center
          img.h80(src='@/assets/curso/t3-ic3.svg' alt='icono decorativo')
          .tarjeta.tarjeta--gris
            .p-4
              p El segundo pilar es <b>la reproducibilidad,</b> es decir, que toda proposición científica tiene que ser susceptible de ser falsada o refutada; esto significa que se podrían obtener resultados diferentes a los hechos a través de hipótesis.
    p.mb-5  El método científico usa métodos definitorios, métodos clasificatorios, métodos estadísticos, métodos hipotético-deductivos, procedimientos de medición, etc. Según esto, referirse al método científico es referirse a este conjunto de tácticas empleadas para constituir el conocimiento, sujetas al devenir histórico, y que eventualmente podrían ser otras en el futuro. A continuación, se presenta una clasificación o tipología de algunos métodos avalados en la comunidad científica según Labajo (s.f.):
    //-- Aqui vienen los tabs



    Separador
    #t_2_2.titulo-segundo
      .h4 2.2  Influencia de la tecnología en la educación
    .row
      .col-lg-10
        p.mb-5  Recién termina la segunda década del siglo XXI y todavía existen instituciones educativas que tienen conceptos un poco anacrónicos de lo que la tecnología significa para la vida de las personas. Se ve cómo el avance tecnológico a nivel mundial va por una autopista de alta velocidad y la instrucción en tecnología de los colegios apenas da sus primeros pasos. Quizá no en todas las instituciones de educación latinoamericanas se ve el retraso; pero más que el uso de tecnologías de última generación, se percibe que la concepción de lo que implica instruir en tecnología no se compadece con las realidades del mundo actual.
      .col-lg-2
        figure.mb-4
          img(src='@/assets/curso/t2-ic11.svg', alt='icono decorativo relacionado la tecnología')

    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4
          .row
            .col-lg-2
              figure.mb-4
                img(src='@/assets/curso/t1-ic5.svg', alt='icono decorativo relacionado a contenido web')

            .col-lg-10
              p.mb-4 En vista de los desafíos que implica la adopción y uso de la tecnología en el contexto del país, el Ministerio de Educación Nacional de Colombia y la Asociación Colombiana de Facultades de Educación publicaron la Serie Guías N°30 “Ser competente en tecnología: ¡una necesidad para el desarrollo!” (2008). Se invita a explorar este texto, especialmente de la página 5 a la 11. Adelante. 
              p.mb-5 Cabe mencionar que este documento cuenta con un buen fundamento teórico para enseñar con la educación STEM.
              .row
                .col-lg-8
                  a.anexo.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p <b>Enlace web.</b> Guía No. 30 Ser competente en tecnología: ¡una necesidad para el desarrollo!
    .row.mb-5
      .col-lg-8
        p.mb-3  Son muchas las razones por las cuales las instituciones educativas no han considerado necesaria una instrucción en tecnología. Una de las más notorias es la importancia que han tenido las asignaturas clásicas como las ciencias naturales, la física, la química, las matemáticas, el español, el inglés y las ciencias sociales, <b>Por esto, la tecnología no ha ocupado el puesto que le corresponde en la realidad del presente siglo. </b>
        p.mb-3  <b>Otra razón fundamental es la carencia de recursos que demanda un plan académico en tecnología,</b> el cual implica tener material curricular, laboratorios, entre otros, así como la formación por parte de los instructores y el conocimiento de las directivas. Las pruebas nacionales e internacionales están enfocadas hacia las asignaturas tradicionales, y esto hace que muchos colegios se concentren en preparar a sus aprendices en esos contenidos, existe una confusión importante en la comunidad educativa en general entre tecnología para la educación e instrucción en tecnología. <b>La diferencia se puede ver así: </b>
      .col-lg-4
        figure.mb-4
          img(src='@/assets/curso/t2-i9.png', alt='Profesor explicando a sus estudiantes frente al computador')

    .row.justify-content-center
      .col-lg-8
        .tarjeta-avatar-b.mb-4.align-items-center
          img.h80(src='@/assets/curso/t3-ic3.svg' alt='icono decorativo')
          .tarjeta.tarjeta--gris
            .p-4
              p <b>La tecnología para la educación</b> es el conjunto de equipos con los cuales se hace más fácil la manera de dictar los contenidos de un plan académico. En este grupo se pueden encontrar las tabletas, los libros digitales, los tableros inteligentes y los programas de computadora en línea para acceso de instructores, padres y aprendices, entre otros. 
        .tarjeta-avatar-b.mb-5.align-items-center
          img.h80(src='@/assets/curso/t3-ic3.svg' alt='icono decorativo')
          .tarjeta.tarjeta--gris
            .p-4
              p <b>La instrucción y tecnología</b> hacen referencia a los conocimientos que debe tener un aprendiz desde educación preescolar hasta el grado once, que le permitan obtener y desarrollar habilidades para una sociedad eminentemente tecnológica.
    .row.mb-5
      .col-lg-8
        p.mb-3  En los Estados Unidos a principios del siglo XXI se comenzaron a desarrollar las actividades de instrucción en ingeniería, y para ello se recurrió al proceso de diseño. La forma de lanzar una actividad de instrucción en ingeniería siguió los pasos de un proceso minucioso y metódico, con esto se apoyó de manera seria y profunda la instrucción en esta disciplina. La aplicación del proceso de diseño ingeniería es la entrada disimulada a la introducción ingeniería en el ámbito escolar.
        p.mb-3  Los estándares de ciencias NGSS (Next Generation Science Standards) presentan las prácticas de ciencias e ingeniería como parte fundamental, recordemos que la estructura de los NGSS se basa en las tres dimensiones: a) las prácticas de ciencias en ingeniería, b) las ideas fundamentales disciplinares y c) los conceptos transversales. La ingeniería se encuentra en la dimensión de las prácticas de ciencias y también como cuarto grupo de las ideas fundamentales disciplinares.
      .col-lg-4
        figure.mb-4
          img(src='@/assets/curso/t2-i10.png', alt='Profesor explicando a sus estudiantes frente al computador')





    Separador
    #t_2_3.titulo-segundo
      .h4 2.3 Influencia de la ingeniería en el contexto STEM

    Separador
    #t_2_4.titulo-segundo
      .h4 2.4 Elementos del pensamiento matemático




</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Intencionalidad',
        texto:
          'Siempre se deben desarrollar nuestras actividades pensando en fusionar las asignaturas, es claro que no todas las asignaturas son posibles de integrar en todos los casos, sin embargo, los objetivos de cada actividad indican la importancia de la integralidad. ',
        imagen: require('@/assets/curso/t2-i2.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'La educación STEM',
        texto:
          'No es una metodología, no es un currículo ni un plan de estudios; no se trata de un ingrediente más para desarrollar la clase, se trata de la forma en la que son presentados los temas, y la decisión de esta nueva forma implica el grado de profundización que se le a cada  aspecto a enseñar y la profundidad del mismo. ',
        imagen: require('@/assets/curso/t2-i3.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Relevancia',
        texto:
          '<p>Es sabido que los estándares curriculares, el plan de estudios y las actividades de instrucción indican cuáles contenidos presentar  a los estudiantes y al final se evalúa su desempeño dentro de los temas relacionados con estos contenidos. Sin embargo, se debe dar relevancia a los contenidos con problemas del mundo real de su vida cotidiana, de nuestro país. </p><p>Siempre hay que enfatizar en cómo estos conceptos contribuyen a desempeñarse en situaciones reales.  Por lo anterior, para seleccionar los temas se debe considerar que para profundizar en el aprendizaje las actividades demandan más tiempo en su desarrollo. Por lo tanto, será necesario descartar algunos temas y concentrarse en otros.</p>',
        imagen: require('@/assets/curso/t2-i4.png'),
        //-- leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Desarrollo de habilidades para el siglo XXI',
        texto:
          'Se debe desarrollar la capacidad de los ciudadanos para desenvolverse adecuadamente en diferentes ámbitos personales y profesionales, pues el conocimiento con una enseñanza en profundidad, ayuda a potencializar una fuerza social y económica acorde a las necesidades actuales.',
        imagen: require('@/assets/curso/t2-i5.png'),
        leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Desafiar a los estudiantes',
        texto:
          'Se debe mantener el interés de los estudiantes a través de los desafíos, esto permite que su curiosidad esté activa, pero hay que mantener un equilibrio y evitar que se aburran o se den por vencidos por exigencias extremas.',
        imagen: require('@/assets/curso/t2-i6.png'),
        //- leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Mezclarlo todo',
        texto:
          'Es muy importante que los estudiantes puedan desenvolverse  en actividades que les permitan encontrar soluciones, construir modelos y demostrar el conocimiento adquirido.  Al exponerlos a estos principios se potencializa su aprendizaje. Cuando un aprendiz logra aprender conceptos nuevos, manifiesta su deseo de demostrar los logros alcanzados para que les sean reconocidos.',
        imagen: require('@/assets/curso/t2-i7.png'),
        //- leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Fallar es parte del camino de aprender',
        texto:
          'Es una oportunidad de descubrimiento que se hace mediante un proceso de análisis de resultados y es la clave para descubrir nuevas formas de realizar la tarea y lograr soluciones que no se habían ni siquiera considerado; el docente debe permitir a lo estudiantes reflexionar sobre lo acontecido y la actividad queda incompleta, esto permite el desarrollo de habilidades como el pensamiento crítico, la solución de problemas, la creatividad y la colaboración.',
        imagen: require('@/assets/curso/t2-i8.png'),
        //- leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
}
</script>

<style lang="sass" scoped>
.h80{height: 80px}
.tarjeta--gris{background-color: #D5D6E2}
</style>
