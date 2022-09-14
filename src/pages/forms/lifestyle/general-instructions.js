import React from 'react'

const paragraphs = [
  <div>
    <p>
      Asegúrese que se encuentren en la caja del Kit Tricogenética los elementos correspondientes:
      kit recolector de saliva Oragene DNA OG-500 para la prueba genética,{' '}
      <a href="#">bolsa recolectora de muestra</a> para la prueba genética,{' '}
      <a href="#">Kit Hormonal General</a>, <a href="#">consentimiento informado</a> y{' '}
      <a href="#">sticker de seguridad</a>.
    </p>
  </div>,
  <div>
    <p className="text-center">
      <img src="/resources/images/forms/steps.svg" alt="steps" />
    </p>
  </div>,
]

export default paragraphs.map(paragraph => ({
  image: '/resources/images/forms/instructions.svg',
  section: 'Instrucciones Generales',
  sidebar: () => <></>,
  title: 'Lea detenidamente las siguientes instrucciones',
  content: paragraph,
}))
