/* eslint-disable no-underscore-dangle */
export const kinds = {
  tricogenetica: 'Tricogenética',
  'hormona-general': 'Hormonal General',
  'vitamina-d': 'Vitamina D3',
}

export const orderStatus = {
  registered: {
    label: 'Pendiente de completar formulario(s)',
    color: 'yellow',
    image: '/resources/images/status/status_1.svg',
  },
  'forms-completed': {
    label: 'Formularios completos.',
    color: 'yellow',
    image: '/resources/images/status/status_2.svg',
  },
  'in-process': {
    label: 'En proceso de envío a instalaciones de OmiGenomics',
    color: 'orange',
    image: '/resources/images/status/status_3.svg',
  },
  'at-facility': {
    label: 'Llegada a las instalaciones de OmiGenomics',
    color: 'blue',
    image: '/resources/images/status/status_4.svg',
  },
  processing: {
    label: 'Muestras en proceso de análisis genético y hormonal',
    color: 'magenta',
    image: '/resources/images/status/status_5.svg',
  },
  results: {
    label: 'Resultados obtenidos',
    color: 'pink',
    image: '/resources/images/status/status_6.svg',
  },
  interpreted: {
    label: 'Interpretación de resultados',
    color: 'purple',
    image: '/resources/images/status/status_7.svg',
  },
  reporting: {
    label: 'Desarrollo de reporte de resultados',
    color: 'cyan',
    image: '/resources/images/status/status_7.svg',
  },
  finished: {
    label: 'Reporte de resultados enviado',
    color: 'green',
    image: '/resources/images/status/status_8.svg',
  },
}
