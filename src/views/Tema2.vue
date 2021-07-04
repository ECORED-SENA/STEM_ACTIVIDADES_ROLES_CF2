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
                  a.anexo.mb-4.mb-lg-0(href="https://books.google.com.co/books?hl=en&lr=&id=gfn4AAAAQBAJ&oi=fnd&pg=PR7&dq=Bybee,+R.+W.+(2013).+The+Case+for+Education+Challenges+and+Opportunities.+National+Science+Teachers+Association.&ots=xaZgeza7_p&sig=WLCl6WbpL6AGJYujUqTQtF8pvKk#v=onepage&q=Bybee%2C%20R.%20W.%20(2013).%20The%20Case%20for%20Education%20Challenges%20and%20Opportunities.%20National%20Science%20Teachers%20Association.&f=false" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p <b>Enlace web.</b> The Case for Education Challenges and Opportunities. National Science Teachers Association.

    

    Separador

    #t_2_1.titulo-segundo
      h2 2.1  Elementos del pensamiento científico
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
              p El segundo pilar es <b>la refutabilidad,</b> es decir, que toda proposición científica tiene que ser susceptible de ser falsada o refutada; esto significa que se podrían obtener resultados diferentes a los hechos a través de hipótesis.
    p.mb-5  El método científico usa métodos definitorios, métodos clasificatorios, métodos estadísticos, métodos hipotético-deductivos, procedimientos de medición, etc. Según esto, referirse al método científico es referirse a este conjunto de tácticas empleadas para constituir el conocimiento, sujetas al devenir histórico, y que eventualmente podrían ser otras en el futuro. A continuación, se presenta una clasificación o tipología de algunos métodos avalados en la comunidad científica según Labajo (s.f.):
    
    //--TABS
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Método empírico-analítico" :icono="require('@/assets/curso/t2-ic4.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0.py-5
            p.mb-5 El conocimiento se presenta de manera lógica, autocorrectiva y progresiva. Es característico de las ciencias naturales y sociales o humanas y, a su vez caracteriza a las ciencias descriptivas. Es el método general más utilizado. Se basa en la lógica empírica. Dentro de este se pueden observar varios métodos específicos con técnicas particulares.        
          .col-md-4
            figure
              img.h210(src='@/assets/curso/t2-ic10.svg', alt='imagen decorativa')
              
      .py-4.py-md-5(titulo="Método hermenéutico" :icono="require('@/assets/curso/t2-ic5.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0.py-5
            p.mb-5 Es el estudio de la coherencia interna de los textos, la filología, la exégesis de libros sagrados y el estudio de la coherencia de las normas y principios.     
          .col-md-4
            figure
              img.h210(src='@/assets/curso/t2-ixx1.svg', alt='imagen decorativa')
        
      .py-4.py-md-5(titulo="Método dialéctico" :icono="require('@/assets/curso/t2-ic6.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0.py-5
            p.mb-5 Considera los fenómenos históricos y sociales en continuo movimiento. Dio origen al materialismo histórico.     
          .col-md-4
            figure
              img.h210(src='@/assets/curso/t2-ixx3.svg', alt='imagen decorativa')

      .py-4.py-md-5(titulo="Método histórico" :icono="require('@/assets/curso/t2-ic7.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0.py-5
            p.mb-5 Está vinculado al conocimiento de las distintas etapas de los objetos en su sucesión cronológica. Mediante el método histórico se analiza la trayectoria concreta de una teoría, y su condicionamiento a los diferentes períodos de la historia.     
          .col-md-4
            figure
              img.h210(src='@/assets/curso/t2-ixx4.svg', alt='imagen decorativa')
        
      
      .py-4.py-md-5(titulo="Método sistémico" :icono="require('@/assets/curso/t2-ic8.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0.py-5
            p.mb-5 Está dirigido a modelar el objeto mediante la determinación de sus componentes, así como las relaciones entre ellos. Esas relaciones determinan por un lado la estructura del objeto y, por otro, su dinámica.  
          .col-md-4
            figure
              img.h210(src='@/assets/curso/t2-ixx5.svg', alt='imagen decorativa')

      
      .py-4.py-md-5(titulo="Método lógico" :icono="require('@/assets/curso/t2-ic9.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0.py-5
            p.mb-5 Es otra gran rama del método científico, aunque es más clásica y de menor fiabilidad. Su unión con el método empírico dio lugar al método hipotético-deductivo, uno de los más fiables hoy en día.
          .col-md-4
            figure
              img.h210(src='@/assets/curso/t2-ixx6.svg', alt='imagen decorativa')

    Separador
    br
    #t_2_2.titulo-segundo
      h2 2.2  Influencia de la tecnología en la educación STEM
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
                  a.anexo.mb-4.mb-lg-0(href="https://www.mineducacion.gov.co/1621/article-160915.html" target="_blank")
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





    Separador
    #t_2_3.titulo-segundo
      h2 2.3 Influencia de la ingeniería en el contexto STEM
    .row.mb-5
      .col-lg-8
        p.mb-3  En los Estados Unidos a principios del siglo XXI se comenzaron a desarrollar las actividades de instrucción en ingeniería, y para ello se recurrió al proceso de diseño. La forma de lanzar una actividad de instrucción en ingeniería siguió los pasos de un proceso minucioso y metódico, con esto se apoyó de manera seria y profunda la instrucción en esta disciplina. La aplicación del proceso de diseño ingeniería es la entrada disimulada a la introducción ingeniería en el ámbito escolar.
        p.mb-3  Los estándares de ciencias NGSS (Next Generation Science Standards) presentan las prácticas de ciencias e ingeniería como parte fundamental, recordemos que la estructura de los NGSS se basa en las tres dimensiones: a) las prácticas de ciencias en ingeniería, b) las ideas fundamentales disciplinares y c) los conceptos transversales. La ingeniería se encuentra en la dimensión de las prácticas de ciencias y también como cuarto grupo de las ideas fundamentales disciplinares.
      .col-lg-4
        figure.mb-4
          img(src='@/assets/curso/t2-i10.png', alt='Profesor explicando a sus estudiantes frente al computador')
    .row.justify-content-center
      .col-lg-10
        .cajon.color-secundario.p-4.mb-5
          p.mb-3  La educación STEM busca que los aprendices indaguen sobre los problemas importantes y urgentes del mundo, y para ello se requiere que no solo se aborden desde la perspectiva de las ciencias, sino de la ingeniería. La ciencia busca responder preguntas para entender el mundo natural, pero la ingeniería busca resolver los problemas y encontrar soluciones efectivas para desarrollar, inventar e innovar en el mundo construido por el hombre (Purzer, Strobel y Cardella, 2014).
    p.mb-5  Por lo mencionado hasta aquí, hablar de ingeniería remite al diseño, el cual es necesario pensarlo desde unos criterios o restricciones que intervienen en el mismo. A continuación, se destacan algunos para poder ser identificados:
    //-- imagen infografica
    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/t2-ix1.svg', alt='Texto que describa la imagen')

      .tarjeta.color-acento-contenido.p-3(x="58%" y="15%")
        p Se debe establecer claramente qué se espera que los aprendices logren con el proyecto.

      .tarjeta.color-acento-contenido.p-3(x="72%" y="33%")
        p Se deben prever los riesgos físicos que pueden tener los aprendices en el desarrollo del proyecto.

      .tarjeta.color-acento-contenido.p-3(x="73%" y="56%")
        p Se debe conocer el presupuesto asignado y las limitaciones para desarrollar el proyecto.

      .tarjeta.color-acento-contenido.p-3(x="66%" y="80%")
        p Se debe definir desde el comienzo del proyecto el tiempo que se dispone para realizarlo.

      .tarjeta.color-acento-contenido.p-3(x="34%" y="80%")
        p Se debe aclarar el tipo de calidad que se espera del proyecto.

      .tarjeta.color-acento-contenido.p-3(x="26%" y="56%")
        p Se deben definir los recursos tecnológicos que serán utilizados para desarrollar el proyecto.

      .tarjeta.color-acento-contenido.p-3(x="27%" y="33%")
        p Se debe tener claro qué beneficio tendrá el grupo al desarrollar el proyecto.

    .row.mb-5
      .col-lg-8
        .cajon.color-secundario.p-4
          p.mb-3  Luego de percibir los criterios que intervienen en el diseño, es necesario presentar las fases del pensamiento de diseño en ingeniería en el contexto de la enseñanza de <b>la educación STEM</b> para los futuros ciudadanos del siglo XXI. Se puede afirmar que todo lo que rodea al entorno social y natural enfrenta diariamente cambios y esto conlleva al surgimiento de nuevos problemas en diferentes temáticas, para el caso de la ingeniería uno de los aspectos que manejan los profesionales es poder conocer la influencia de los diferentes parámetros o variables de manera previa, que les permita solucionar un problema con restricciones como límite de costos, tiempo de ejecución e implementación, eficiencia, capacidad, entre otras. A continuación, se presentan las fases con una caracterización que se ha compilado para que usted reconozca el paso a paso del pensamiento de diseño desde el Design Thinking. <b>Adelante con la exploración.</b>
      .col-lg-4
        figure.mb-4
          img(src='@/assets/curso/t2-i11.png', alt='niños sentados en una mesa explorando prototipos de robots')
    .row.mb-5.justify-content-center
      .col-lg-10
        figure.mb-4
          img(src='@/assets/curso/t2-i12.svg', alt='Fases del design thinking')

    //--TABS
    TabsA.color-acento-botones.mb-5
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.tarjeta--gris.p-4(titulo="Fase 1: Empatizar")
        .row
          .col-lg-3
            figure
              img.h150(src='@/assets/curso/t2-ic-x5.svg', alt='icono decorativo')
          .col-lg-9
            p.mb-3  El proceso de pensamiento de diseño comienza con una profunda comprensión de las necesidades de los aprendices implicados en la solución que estemos desarrollando, y también de su entorno. <b>Hay que ser capaces de ponerse en la piel del equipo para generar soluciones consecuentes con sus realidades. </b>
      
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.tarjeta--gris.p-4(titulo="Fase 2: Definir")
        .row
          .col-lg-3
            figure
              img.h150(src='@/assets/curso/t2-ic-x4.svg', alt='icono decorativo')
          .col-lg-9
            p.mb-3  Durante la fase de definición, el equipo de aprendices debe filtrar la información recopilada durante la fase de empatía. A partir de la pregunta esencial, los aprendices deben descomponerla en partes manejables, para que entiendan qué problema es el que se quiere resolver, esto se hace haciendo preguntas al instructor y a sus compañeros y quedar con lo que realmente aporta conocimiento y <b>que lleve al equipo a alcanzar su resolución de manera creativa e innovadora. </b>
            p.mb-3.text-bold  Es importante resaltar que, a través de este proceso de preguntas y comentarios entre los aprendices, ellos entienden lo que deben hacer. 
      
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.tarjeta--gris.p-4(titulo="Fase 3: Idear")
        .row
          .col-lg-3
            figure
              img.h150(src='@/assets/curso/t2-ic-x3.svg', alt='icono decorativo')
          .col-lg-9
            p.mb-3  La fase de ideación tiene como objetivo la generación de un sinfín de opciones, se espera que cada grupo de aprendices divulguen sus conocimientos para luego, <b>entre todos, consolidar una solución colectiva. </b>
            p.mb-3  En esta etapa también se evalúa qué tanto saben y qué tanto les hace falta para tener los conceptos claros los aprendices. Cabe mencionar que <b>el instructor orienta a los aprendices a diseñar prototipos que se ajusten a la necesidad o problema presentado.</b> 
      
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.tarjeta--gris.p-4(titulo="Fase 4: Prototipar")
        .row
          .col-lg-3
            figure
              img.h150(src='@/assets/curso/t2-ic-x2.svg', alt='icono decorativo')
          .col-lg-9
            p.mb-3  En la fase de prototipado los aprendices vuelven sobre <b>las ideas, los materiales y proceden a construir la solución diseñada en el prototipo.</b> El instructor les recuerda las restricciones que se tiene y la evaluación constante de sus ideas. Es esencial que los aprendices se dividan internamente por roles. <b>El rol le permite evaluar la forma en que van aprendiendo cada uno de los aprendices.</b>
      
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.tarjeta--gris.p-4(titulo="Fase 5: Testear")
        .row
          .col-lg-3
            figure
              img.h150(src='@/assets/curso/t2-ic-x1.svg', alt='icono decorativo')
          .col-lg-9
            p.mb-3  Durante la fase de testeo, se espera probar los prototipos. En este proceso es crucial identificar mejoras significativas, fallos a resolver, posibles carencias de las soluciones presentadas por los aprendices. 
            p.mb-3  En el proceso de revisión encontrarán que hay cosas que no funcionan bien, y es el mejor momento para revisar los conceptos.   
            p.mb-3  Como se ha mencionado, esta etapa es quizás una de las más importantes y a la que más tiempo se le debe asignar, porque es cuando los conceptos deben quedar correctamente entendidos. Al hacer las correcciones, los aprendices profundizan en su nivel de aprendizaje y, por lo tanto, su conocimiento será más duradero.




    Separador
    #t_2_4.titulo-segundo
      h2 2.4 Elementos del pensamiento matemático
    .row.mb-5
      .col-lg-8
        p.mb-3  <b>Las matemáticas ocupan un lugar muy importante en el desarrollo del pensamiento del ser humano,</b> desde los primeros años los niños se le impulsa a estudiarla, comprendiendo que todo a su alrededor la contiene: las compras de mercado, cocinar, conducir o utilizar cualquier dispositivo tecnológico; y para resolver problemas de la vida cotidiana, como planificar, gestionar, evaluar, entre otros aspectos.
        p.mb-3  <b>El pensamiento lógico matemático se desarrolla de manera secuencial,</b> esto significa que se comienza por la compresión básica y se finaliza con la abstracción que ayuda al desarrollo de competencias matemáticas necesarias para que los seres humanos se relacionan en sociedad, afrontar problemas y dificultades y a superar todo tipo de conflictos, <b>estas habilidades son potencializadas con la educación STEM y sus metodologías constructivas a partir de áreas de conocimiento científico, tecnológico y de ingeniería.</b>
      .col-lg-4
        figure.mb-4
          img(src='@/assets/curso/t2-i12.png', alt='Niño frente al tablero escribiendo una formula matemática')




    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4
          .row
            .col-lg-2
              figure.mb-4
                img(src='@/assets/curso/t1-ic5.svg', alt='icono decorativo relacionado a contenido web')

            .col-lg-10
              p.mb-4 Ahora, con el propósito de identificar el desarrollo de competencias STEM y sus implicaciones en la enseñanza y el aprendizaje, se sugiere identificar elementos del pensamiento matemático en la experiencia de los autores José Luis Lupiáñez y Juan Francisco Ruiz Hidalgo.
              .row
                .col-lg-8
                  a.anexo.mb-4.mb-lg-0(href="http://www.educacontic.es/blog/diseno-de-tareas-para-el-desarrollo-de-la-competencia-stem-los-problemas-de-modelizacion" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p <b>Enlace web.</b>  Diseño de tareas para el desarrollo de la competencia STEM: los problemas de modelización matemática.
   


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
.h150{height: 150px}
.h210{height: 210px}
.tabs-b__tab{background-color: #EDFFF6}
</style>
