<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5  Apreciado aprendiz bienvenido a este momento de aprendizaje orientado al análisis de los modelos de implementación de actividades según la metodología STEM. Se puede afirmar que un aprendiz educado en la 
      span.text-bold  educación STEM 
      | puede alcanzar el desarrollo de conocimiento y las habilidades necesarias para el desarrollo de los territorios. En este sentido y con la intención de ayudarle a identificar aspectos relacionados con este proceso de formación, se sugiere revisar el siguiente recurso educativo:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/iRNa3arsXzk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      //-- figcaption Video: Leyenda del video
    .row.justify-content-center
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4
          p Revisado el recurso de aprendizaje 
            span.text-bold  es importante 
            | seguir insistiendo en que, para conseguir efectos en la integración curricular de áreas, es necesario entender hasta dónde la 
            span.text-bold  educación STEM 
            | replantea el significado y el alcance de la instrucción de cada una de las asignaturas.


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
