<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span  3
      h1 Experiencias de educación STEM
    .row.mb-5
      .col-lg-8
        p.mb-4  Una de acciones importantes que se deben adoptar en los sistemas educativos es el reconocimiento de experiencias significativas de otras organizaciones con la intención de reconocer cómo lo hicieron y las lecciones aprendidas de sus intervenciones en el contexto escolar. En este sentido, se han recopilado algunas experiencias de la enseñanza en educación STEM desarrolladas por docentes en diferentes instituciones educativas internacionales, nacionales y locales donde se realiza la secuencia didáctica desarrolla y el abordaje integrador de las áreas. Ahora bien, <b>¿qué se espera encontrar?, ¿se tiene alguna experiencia para compartir?,</b> mientras se le da respuesta a estas inquietudes  <b>se sugiere revisar el siguiente recurso de aprendizaje:</b>
      .col-lg-4
        figure
          img.h210(src='@/assets/curso/t3-i1.svg', alt='imagen decorativa')

    #t_3_1.titulo-segundo
      .h4 Experiencias del STEM desde el área de las matemáticas, ciencias, ingeniería
    p.mb5 A continuación, se presenta una de las lecciones diseñadas para entender de forma sencilla cómo se integran las asignaturas STEM donde la asignatura vinculante es la ciencias naturales - física y de manera integrada participan la tecnología, ingeniería y la matemáticas.
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-a.color-secundario.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0.bgCustom
              
            .col-lg-8.p-3
              .bloque-texto-a__texto.p-4
                p.mb-3 <b>Donna Migdol es una profesora de Educación STEM y desarrolladora profesional de Oceanside</b> (Nueva York), fue la maestra principal de matemáticas y ciencias del distrito escolar donde compartió <b>sus lecciones de diseño de ingeniería y matemáticas</b> en el aula al Panel de Revisión por Pares en Albany.
                p.mb-3 A continuación se presenta <b>la experiencia STEM de la profesora Donna Migdol “La Montaña Rusa”. </b>
    TabsA.color-acento-botones.mb-5
      .tarjeta.tarjeta--gris.p-4(titulo="Planteamiento")
        .row
          .col-lg-3
            figure
              img.h140(src='@/assets/curso/t3-i3.svg', alt='icono decorativo')
          .col-lg-9
            p.mb-3  El proceso de pensamiento de diseño comienza con una profunda comprensión de las necesidades de los aprendices implicados en la solución que estemos desarrollando, y también de su entorno. <b>Hay que ser capaces de ponerse en la piel del equipo para generar soluciones consecuentes con sus realidades. </b>
      
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.tarjeta--gris.p-4(titulo="Desarrollo")
        .row
          .col-lg-3
            figure
              img.h140(src='@/assets/curso/t3-i4.svg', alt='icono decorativo')
          .col-lg-9
            p.mb-3  Durante la fase de definición, el equipo de aprendices debe filtrar la información recopilada durante la fase de empatía. A partir de la pregunta esencial, los aprendices deben descomponerla en partes manejables, para que entiendan qué problema es el que se quiere resolver, esto se hace haciendo preguntas al instructor y a sus compañeros y quedar con lo que realmente aporta conocimiento y <b>que lleve al equipo a alcanzar su resolución de manera creativa e innovadora. </b>
            p.mb-3.text-bold  Es importante resaltar que, a través de este proceso de preguntas y comentarios entre los aprendices, ellos entienden lo que deben hacer. 
      
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.tarjeta--gris.p-4(titulo="Resultado")
        .row
          .col-lg-3
            figure
              img.h140(src='@/assets/curso/t3-i5.svg', alt='icono decorativo')
          .col-lg-9
            p.mb-3  La fase de ideación tiene como objetivo la generación de un sinfín de opciones, se espera que cada grupo de aprendices divulguen sus conocimientos para luego, <b>entre todos, consolidar una solución colectiva. </b>
            p.mb-3  En esta etapa también se evalúa qué tanto saben y qué tanto les hace falta para tener los conceptos claros los aprendices. Cabe mencionar que <b>el instructor orienta a los aprendices a diseñar prototipos que se ajusten a la necesidad o problema presentado.</b> 
      

      .tarjeta.tarjeta--gris.p-4(titulo="Conclusión")
        .row
          .col-lg-3
            figure
              img.h140(src='@/assets/curso/t3-i6.svg', alt='icono decorativo')
          .col-lg-9
            .h4 Conclusiones de la actividad
            p.mb-3 Se puede observar cómo el pensamiento de diseño en ingeniería hace que los aprendices se vuelvan más receptivos a los problemas y quieran resolverlos, de tal manera que soliciten al profesor cada vez más retos en su clase. 
            p.mb-3  Este ejemplo muestra claramente cómo la educación STEM está desarrollando solucionadores de problemas para toda la vida. Los aprendices aprenden no solo conceptos de ciencias matemáticas y tecnología, sino que adquieren hábitos de pensamiento que les invitan a entender que la vida real está relacionada con la solución de problemas a través de la aplicación de conocimientos que antes parecían aislados y desconectados.
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde




    #t_3_2.titulo-segundo
      .h4 Experiencia de la educación STEM desde el área de las ciencias, lenguaje y tecnología

    #t_3_3.titulo-segundo
      .h4 Experiencia de la Educación STEM desde el área de la tecnología, ingeniería y matemáticas

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.h140{height: 140px}
.h210{height: 210px}
.bgCustom{ background: url('/assets/curso/t3-i2.png')}
</style>
