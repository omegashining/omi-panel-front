import React from 'react'

export default {
  image: '/resources/images/forms/vitamin-d3-sample.svg',
  section: 'Instrucciones para prueba de Vitamina D3',
  description:
    'El presente instructivo contiene las indicaciones a seguir para una correcta toma de muestra para realizar el análisis de Vitamina D3 ofrecido por OmiGenomics.',
  sidebar: () => <></>,
  title: 'Lea detenidamente las siguientes instrucciones',
  content: (
    <>
      <p>
        1. Asegúrese que se encuentren en la caja del Kit Vitamina D3 los{' '}
        <a href="#">elementos correspondientes</a>: bolsa recolectora de muestra para prueba
        hormonal, 1 tubo de plástico para la recolección de muestra de saliva con su tapa
        correspondiente y sticker de seguridad.
      </p>
      <p>2. Lea las instrucciones para la toma de muestra de prueba Vitamina D3 adjuntas.</p>
      <p>
        3. <b>IMPORTANTE:</b> Anote la hora de toma de muestra de cada tubo.
      </p>
      <p>
        Si tiene alguna duda comuníquese con su médico tratante o con nuestro Laboratorio a través
        del teléfono
        <a href="#">(81) 1522 2896.</a> Ext. 2100 o escribiendo al correo:{' '}
        <a href="#">info@omigenomics.mx</a>.
      </p>
      <p>
        <b>Horario de atención:</b> 07:00 a 17:00 horas.
      </p>
    </>
  ),
}
