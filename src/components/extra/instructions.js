import React from 'react'
import { Button, Modal } from 'antd'

export default class Instructions extends React.Component {
  render() {
    const { visible, showModal, hideModal } = this.props

    return (
      <div className="cui__utils__heading">
        <Button type="primary" onClick={showModal}>
          Ver instrucciones
        </Button>
        <br />
        <Modal
          visible={visible}
          title="Instrucciones"
          width={1000}
          height={500}
          onClose={() => {
            hideModal()
          }}
          footer={[
            <Button type="primary" onClick={hideModal}>
              Aceptar
            </Button>,
          ]}
        >
          <img src="resources/images/proceso.png" alt="Proceso Omigenomics" />
          <ol>
            <li>
              <strong>Consulta m&eacute;dica y ofrecimiento de OmiGenomics</strong>
              <ol>
                <li>
                  Primer acercamiento entre m&eacute;dico y paciente donde se ofrece los kits
                  OmiGenomics
                </li>
              </ol>
            </li>
            <li>
              <strong>
                Paciente en casa o consultorio se hace la toma de muestra y llena cuestionarios
                digitales y consentimientos
              </strong>
              <ol>
                <li>
                  Los tubos recolectores de muestra deben contar con etiqueta con datos del paciente
                </li>
                <li>Cuestionario de estilo de vida</li>
                <li>Cuestionario Hormonal</li>
                <li>Consentimiento informado (&uacute;nico documento impreso)</li>
              </ol>
            </li>
            <li>
              <strong>Env&iacute;o en paqueter&iacute;a a OmiGenomics</strong>
              <ol>
                <li>
                  Generar una gu&iacute;a para que el m&eacute;dico pueda regresar las muestras al
                  laboratorio OmiGenomics{' '}
                  <em>
                    (por medio de la app se deber&aacute; solicitar la gu&iacute;a a OmicronLab).{' '}
                  </em>
                </li>
              </ol>
            </li>
            <li>
              <strong>An&aacute;lisis y procesamiento en OmiGenomics</strong>
              <ol>
                <li>Los tubos con muestra llegan al laboratorio</li>
                <li>Se realizan los an&aacute;lisis de muestra de cada paciente</li>
                <li>
                  Se emiten resultados por parte de dos equipos (termociclador y Biobase 1000).
                </li>
                <li>
                  Los resultados se env&iacute;an a laptops del laboratorio{' '}
                  <em>
                    (usar protocolos de comunicaci&oacute;n para enviar resultados a la app y
                    generar reporte autom&aacute;tico con sugerencia terap&eacute;utica mediante los
                    algoritmos que se crear&aacute;n)
                  </em>
                </li>
              </ol>
            </li>
            <li>
              <strong>
                Env&iacute;o de resultados v&iacute;a electr&oacute;nica al m&eacute;dico y paciente
              </strong>
              <ol>
                <li>
                  Actualmente se utiliza la plataforma devellab para registros de resultados por
                  parte del laboratorio, y consulta de resultados por parte del m&eacute;dico y del
                  paciente{' '}
                  <em>(implementar en la app una secci&oacute;n de consulta de resultados).</em>
                </li>
              </ol>
            </li>
            <li>
              <strong>
                Consulta m&eacute;dica para explicaci&oacute;n de resultados gen&eacute;ticos y/o
                hormonales
              </strong>
              <ol>
                <li>
                  Segundo acercamiento entre el m&eacute;dico y el paciente donde se
                  explicar&aacute;n todos los resultados y sugerencias generadas por el laboratorio
                  OmiGenomics, adem&aacute;s, se autorizar&aacute; y generar&aacute; la receta
                  m&eacute;dica.
                </li>
              </ol>
            </li>
            <li>
              <strong>Se genera la receta m&eacute;dica y solicitud de medido a OmicronLab</strong>
              <ol>
                <li>
                  El m&eacute;dico a trav&eacute;s de la plataforma digital hace la receta y
                  solicitud de formulaci&oacute;n a OmicronLab
                </li>
              </ol>
            </li>
            <li>
              <strong>Se realiza la f&oacute;rmula y la recibe el paciente</strong>
              <ol>
                <li>
                  OmicronLab formula basado en la receta y se lo env&iacute;a al m&eacute;dico o al
                  paciente.
                </li>
                <li>Las formulaciones cuentan con c&oacute;digo QR por trazabilidad del pedido.</li>
              </ol>
            </li>
            <li>
              <strong>Seguimiento y actualizaciones</strong>
              <ol>
                <li>
                  Se dar&aacute; seguimiento al paciente con respecto a nueva informaci&oacute;n
                  publicada acerca de las mutaciones analizadas en su kit gen&eacute;tico de
                  OmiGenomics.
                </li>
              </ol>
            </li>
          </ol>
          <p>&nbsp;</p>
        </Modal>
      </div>
    )
  }
}
