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
      h2 Experiencias del STEM desde el área de las matemáticas, ciencias, ingeniería
    p.mb-5 A continuación, se presenta una de las lecciones diseñadas para entender de forma sencilla cómo se integran las asignaturas STEM donde la asignatura vinculante es la ciencias naturales - física y de manera integrada participan la tecnología, ingeniería y la matemáticas.
    .row.justify-content-center.mb-5.customBlock
      .col-lg-10
        .bloque-texto-a.color-primario.p-md-5.mb-5 
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
            .h5 Pregunta esencial
            p.mb-3  ¿Cómo sería nuestra montaña rusa, para que sea divertida y segura a la vez?.
            .h4 Objetivos de aprendizaje STEM
            ul.lista-ul
              li 
                i.fas.fa-check
                | Comprender los conceptos de energía cinética y energía potencial dentro de un sistema.
              li 
                i.fas.fa-check
                | Entender los conceptos de las tres leyes de Newton sobre el movimiento.
            .h5 Conocimientos previos
            p.mb-4  Los aprendices deben haber recibido los conceptos básicos de las tres leyes del movimiento de Newton y el principio de la conservación de la energía, antes de esta actividad.
            .cajon.color-secundario.p-4
              p.mb-3 <b>Nota:</b> las formas de presentar estos conocimientos pueden variar y el docente puede usar el método que guste: una clase magistral, una lectura, una investigación, una película. No se restringe la forma. 

      
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.tarjeta--gris.p-4(titulo="Desarrollo")
        .row
          .col-lg-3
            figure
              img.h140(src='@/assets/curso/t3-i4.svg', alt='icono decorativo')
          .col-lg-9
            .h5 Acciones previas
            p.mb-3  Los siguientes aspectos deben ser desarrollados antes de comenzar la actividad.
            .h4 Formar grupos
            p.mb-3  Se debe seleccionar los miembros de cada grupo para que se conozcan y compartan sus ideas sobre el tema previamente a la actividad. Los criterios para la formación de los grupos pueden fundamentarse en las habilidades de cada aprendiz.
            .h5 Retos de la actividad
            .p.mb-3  El instructor debe:
            ul.lista-ul
              li 
                i.fas.fa-check
                | Dar a conocer desde el comienzo la forma en que serán evaluados los aprendices.
              li 
                i.fas.fa-check
                | Las restricciones que tiene el diseño es que el modelo creado debe garantizar que la canica o esfera de cristal que hará la función del carro de la montaña rusa, no se saldrá del carril y que se detendrá al final de la ruta.
              li 
                i.fas.fa-check
                | También informará a los aprendices que contarán con un presupuesto limitado para la compra de materiales.


      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.tarjeta--gris.p-4(titulo="Resultado")
        .row
          .col-lg-3
            figure
              img.h140(src='@/assets/curso/t3-i5.svg', alt='icono decorativo')
          .col-lg-9
            .h5 Nuevos conceptos fundamentales
            p.mb-3  Al finalizar la actividad, los aprendices deberán entender correctamente cómo funciona la transferencia de energía en un sistema y que la energía no se crea ni se destruye.
            .h5 Resultado
            p.mb-3  Construirán un modelo de montaña rusa mediante canales de espuma y rodaran una canica que hará las funciones de carro. Durante el trayecto, es posible que se necesite disminuir la velocidad de la canica y, para ello, podrán utilizar papel de lija o bandas o cinta de caucho.
      

      .tarjeta.tarjeta--gris.p-4(titulo="Conclusión")
        .row
          .col-lg-3
            figure
              img.h140(src='@/assets/curso/t3-i6.svg', alt='icono decorativo')
          .col-lg-9
            .h5 Conclusiones de la actividad
            p.mb-3 Se puede observar cómo el pensamiento de diseño en ingeniería hace que los aprendices se vuelvan más receptivos a los problemas y quieran resolverlos, de tal manera que soliciten al profesor cada vez más retos en su clase. 
            p.mb-3  Este ejemplo muestra claramente cómo la educación STEM está desarrollando solucionadores de problemas para toda la vida. Los aprendices aprenden no solo conceptos de ciencias matemáticas y tecnología, sino que adquieren hábitos de pensamiento que les invitan a entender que la vida real está relacionada con la solución de problemas a través de la aplicación de conocimientos que antes parecían aislados y desconectados.



    Separador

    #t_3_2.titulo-segundo
      h2 Experiencia de la educación STEM desde el área de las ciencias, lenguaje y tecnología
    .row.mb-5
      .col-lg-2
        figure
          img.h170(src='@/assets/curso/t3-i7.svg', alt='icono decorativo')
      .col-lg-10
        p.mb-3  En la historia de la humanidad el tema de seres humanos con superpoderes son parte de la vida de las sociedades y vienen de los relatos ancestrales y las mitologías, en la actualidad personajes como el mundo de los cómics de los superhéroes, ya sean de Marvel o de cualquier otra editorial, tiene un gran número de seguidores, con perfiles muy distintos. Da igual si eres “de ciencias o de letras”, mayor o pequeño, hombre o mujer. Cualquiera puede disfrutar leyendo estas historias.
        p.mb-3  A continuación, <b>se presentará una Experiencia STEM desde las ciencias, lenguaje y tecnología. </b>
        //-- TABS
    TabsA.color-acento-botones.mb-5
      .tarjeta.tarjeta--gris.p-4(titulo="Planteamiento")
        .row
          .col-lg-3
            figure
              img.h140(src='@/assets/curso/t3-i8.svg', alt='icono decorativo')
          .col-lg-9
            .h5 Pregunta esencial
            p.mb-3  ¿Cuál es la ciencia detrás de los súper poderes?
            .h5 Objetivos de aprendizaje STEM
            ul.lista-ul
              li 
                i.fas.fa-check
                | <b>Ciencias:</b> Entender el concepto del ADN a través de la familia y los orígenes de los superhéroes.
              li 
                i.fas.fa-check
                | <b>Lenguaje:</b> Analizar desde el área de lenguaje la figura literaria del cómic y sus personajes mitológicos y de ficción.
              li 
                i.fas.fa-check
                | <b>Tecnología:</b> Relacionar como el desarrollo de artefactos tecnológicos hace posible al ser humano la realización de acciones similares a los superhéroes: <b>¿cómo funciona una retroexcavadora?, ¿cómo se manejan grandes pesos y volúmenes en los puertos?</b>
            .h5 Conocimientos previos
            p.mb-4  Los conceptos de ADN, herencia, figuras literarias deben haber sido presentados anteriormente. También se debe tener presente por parte de los estudiantes los conceptos tecnológicos de halar y empujar y las fórmulas para aplicar una fuerza a través de la palanca. 

      .tarjeta.tarjeta--gris.p-4(titulo="Resultado")
        .row
          .col-lg-3
            figure
              img.h140(src='@/assets/curso/t3-i9.svg', alt='icono decorativo')
          .col-lg-9
            .h5 Nuevos conceptos fundamentales
            p.mb-3  El objetivo es que se logre un aprendizaje más profundo en temas como la herencia y el ADN, la aplicación de fuerzas de diferentes formas, entender cómo el ser humano a través de la tecnología hace el papel de superhéroe y cómo funcionan estas tecnologías. La importancia de la fantasía, la ficción y la mitología en el desarrollo de las sociedades son otros conceptos fundamentales para el aprendizaje de las figuras literarias.
            .h5 Resultado
            p.mb-3  Informe con la historia de un superhéroe seleccionado, con todos sus poderes detallados y una explicación de su funcionamiento. Deben incluir el árbol genealógico y la herencia por parte de sus padres y abuelos y qué características se heredan a través del ADN. También se debe indicar en el informe qué tecnologías reemplazarían los poderes del superhéroe y una breve descripción de su funcionamiento.
            .h5 Asignaturas involucradas
            p.mb-3  Ciencias, tecnología, ingeniería, matemáticas, humanidades.

      .tarjeta.tarjeta--gris.p-4(titulo="Conclusión")
        .row
          .col-lg-3
            figure
              img.h140(src='@/assets/curso/t3-i19.svg', alt='icono decorativo')
          .col-lg-9
            .h5 Conclusiones de la actividad
            p.mb-3 Se puede observar cómo esta experiencia ha sido desarrollada en el Aprendizaje Basado por Proyectos, donde se ve cómo el proceso de aprendizaje para los aprendices es autónomo y posibilita el desarrollo de habilidades de autogestión y autodesarrollo, ya que se le permite al aprendiz profundizar en los temas que considera importantes para él y su equipo y tiene la posibilidad de tomar decisiones para el desarrollo de la actividad.




    Separador
    #t_3_3.titulo-segundo
      h2 Experiencia de la Educación STEM desde el área de la tecnología, ingeniería y matemáticas
    p.mb-5  En el avance y desarrollo de la sociedad los procesos de automatización y programación son una actividad importante para el desarrollo del pensamiento lógico matemático, computacional y crítico para la solución de problemas del entorno social.
    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4
          .row
            .col-lg-3
              figure
                img.h140(src='@/assets/curso/t3-i11.svg', alt='icono decorativo')
            .col-lg-9
              p El semáforo es un elemento cotidiano que ayuda a que la vida de una ciudad fluya de la mejor manera posible y contribuye a fomentar la convivencia ciudadana. Los aprendices de los grados de primaria no conocen lo que hay detrás del funcionamiento de un semáforo ni cómo se concibe su programación. Esta actividad contribuye de forma efectiva a la comprensión de estas tecnologías; para la misma es posible utilizar un software libre de programación como, por ejemplo, esfera robot programable que se controla con dispositivos móviles. 
    TabsA.color-acento-botones.mb-5
      .tarjeta.tarjeta--gris.p-4(titulo="Planteamiento")
        .row
          .col-lg-3
            figure
              img.h140(src='@/assets/curso/t3-i12.svg', alt='icono decorativo')
          .col-lg-9
            .h5 Pregunta esencial
            p.mb-3  ¿Qué son esas luces (rojo con amarillo y verde) en la calle de la ciudad? 
            .h5 Objetivos de aprendizaje STEM
            ul.lista-ul
              li 
                i.fas.fa-check
                | <b>Tecnología:</b> Aprender los pasos usando un programa de computador con todos sus aspectos: los ciclos, los comandos, los tiempos, entre otros.
              li 
                i.fas.fa-check
                | <b>Ingeniería:</b> Conformar equipos que se encargaran de una luz del cruce.
              li 
                i.fas.fa-check
                | <b>Matemáticas: </b> Comprender cómo cambian los colores del semáforo y cuánto tiempo tarda cada ciclo.
            .h5 Conocimientos previos
            p.mb-4  Los aprendices deben conocer previamente cómo está establecido el código de colores para los semáforos, y cómo son estos en las ciudades y en los diversos países del mundo.

      .tarjeta.tarjeta--gris.p-4(titulo="Resultado")
        .row
          .col-lg-3
            figure
              img.h140(src='@/assets/curso/t3-i13.svg', alt='icono decorativo')
          .col-lg-9
            .h5 Nuevos conceptos fundamentales
            p.mb-3  Los aprendices aprenderán el concepto de semáforo en la ciudad, cómo está establecido el tiempo de duración de cada cambio de luz y cómo contribuye esto al movimiento del tráfico en la ciudad; junto al robot Sphero se brindan los conceptos de programación y de control de ciclos y comandos que contribuyen a desarrollar el pensamiento computacional.
            .h5 Resultado
            p.mb-3  Se debe construir un cruce de dos vías, por ejemplo, con cinta de enmascarar, y ubicar las luces de los semáforos en cada esquina para que hagan el cambio respectivo. El cruce debe quedar operativo con los ciclos de colores programados por los estudiantes y otros aprendices conducen los robots respetando las señales de tránsito.
            .h5 Asignaturas involucradas
            p.mb-3  Tecnología, ingeniería, matemáticas, ciencias.
    
    .row.justify-content-center
      .col-lg-10
        .cajon.color-secundario.p-4
          p Apreciado aprendiz gracias por haber llegado hasta aquí, desde nuestra institución reconocemos que el aprendizaje es a lo largo de la vida, de ahí que el lema sigue siendo aprender a aprender y más en los contextos contemporáneos que cambian constantemente y el futuro es el presente. Sugerimos estar pendiente de fuentes académicas sobre las novedades que surgen en torno a la educación STEM. 





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
.h170{height: 170px}
.h210{height: 210px}
.bgCustom{ background: url('/assets/curso/t3-i2.png')}
.customBlock .bloque-texto-a.color-primario{ background-image: url('../assets/curso/t3-i2.png'); background-size: contain}
</style>
