import React from 'react'
import moment from 'moment'
// import SignatureCanvas from "react-signature-canvas";
import { Form, Input } from 'antd'
import { MailOutlined, UserOutlined } from '@ant-design/icons'

export default user => ({
  image: '/resources/images/forms/consent.svg',
  section: 'Consentimiento Informado',
  description:
    'Lea detenidamente y firme el siguiente documento. No se procesarán muestras si no se adjunta el consentimiento firmado correspondiente',
  sidebar: () => <></>,
  title: 'Consentimiento Informado',
  content: (
    <div style={{ height: '80vh', paddingRight: '20px', overflow: 'auto' }}>
      <p>
        <h5 align="left">
          <b>CONSENTIMIENTO INFORMADO</b>
        </h5>
      </p>
      <p className="text-justify2">
        Bienvenido al apasionante mundo de la Medicina de Precisión, este es el consentimiento
        informado para realizar el procedimiento de toma y procesamiento de muestra para la prueba
        denominada como OmiGenomics – Kit Tricogenética.
      </p>
      <p className="text-justify2">
        Yo, <b>{user.name}</b>, de <b>{moment().diff(user.birthday, 'years')}</b> años, bajo
        protesta de decir la verdad y bajo mi propia voluntad, entiendo que esta es una prueba
        integral que ofrece la relación entre algunas variantes de los <i>genes</i>{' '}
        <i>AR, SULT1A1, CYP3A5, NRF2, VDR, SLC30A3, SELENOP e IL-18</i>, además, del estado de mi
        salud hormonal actual (en el caso de que lo solicite), y los posibles tratamientos derivados
        de los resultados obtenidos. Esta prueba genética se basa en los resultados de una toma de
        muestra de saliva en la cual se va a extraer material genético (ADN) para conocer las
        alteraciones en mis genes asociados a la predisposición de Alopecia Androgénica (AAG) y
        genes asociados al metabolismo de los principales fármacos utilizados como tratamiento de la
        condición. Asimismo, por medio del Kit Hormonal General se analizarán muestras de saliva
        para realizar la detección y análisis de mis niveles hormonales actuales que influyen en la
        aparición de la misma.
      </p>
      <p>
        <h5 align="left">
          <b>OBJETIVO DE LA PRUEBA GENÉTICA Y HORMONAL</b>
        </h5>
      </p>
      <p className="text-justify2">
        Los activos y dosis óptimas para el tratamiento personalizado se determinarán de acuerdo con
        las alteraciones de algunos <i>genes</i> como:{' '}
        <i>AR, SULT1A1, CYP3A5, NRF2, VDR, SLC30A3, SELENOP e IL-18</i>, y de los niveles hormonales
        (en el caso de que aplique) de: Estradiol, Estriol, Progesterona, Testosterona,
        Dihidrotestosterona, Deshidroepiandrosterona, Cortisol y Pregnenolona que estén afectando mi
        condición.
      </p>
      <p>
        <h5 align="left">
          <b>DESARROLLO DE LA PRUEBA GENÉTICA Y HORMONAL</b>
        </h5>
      </p>
      <p className="text-justify2">
        Se me explicó y estoy de acuerdo que la prueba genética ofrece información únicamente acerca
        de la predisposición por vía genética de las condiciones asociadas a los <i>genes</i>{' '}
        anteriores, así como los tratamientos y dosis óptimas de acuerdo con mi perfil genético.
      </p>
      <p>
        Entiendo que esta prueba genética debe ser utilizada en compañía de mi médico general o
        especialista.
      </p>
      <p className="text-justify2">
        Por lo anterior, acepto el AVISO DE PRIVACIDAD que está en la página de internet{' '}
        <a href="https://www.o-lab.mx">www.o-lab.mx</a>, asimismo estoy de acuerdo en que toda la
        información obtenida en esta prueba genética es de carácter confidencial. El médico me hará
        algunas evaluaciones de mi condición médica por la que se me está sugiriendo dicha prueba.
        Posteriormente el médico, una vez que ha evaluado clínicamente mi condición médica se me
        solicitará tomar una muestra de saliva con el Kit Oragene OG-500 Saliva, y algunas muestras
        de saliva con el Kit de recolección Hormonal General (en el caso de que aplique) para los
        análisis hormonales. La toma de muestra de saliva no representa un riesgo para la salud
        personal por lo que no se esperan efectos secundarios ni lesiones derivadas de la toma de
        muestra.
      </p>
      <p className="text-justify2">
        Después de 21 días, me volverán a contactar, y me explicarán los resultados genéticos y
        hormonales obtenidos en el laboratorio. Una vez que haya recibido los resultados, el médico
        me consultará para definir los tratamientos necesarios de acuerdo con los resultados de la
        prueba, para solicitar las recetas necesarias para su formulación.
      </p>
      <p className="text-justify2">
        Se me explicó que en todo momento se me proporcionará información actualizada obtenida
        durante el estudio, aún y cuando ésta pueda afectar mi voluntad para continuar con el
        estudio. De igual forma, podré recibir respuesta a cualquier pregunta y aclaración acerca de
        los procedimientos, riesgos (si existieran), beneficios y otros asuntos relacionados con el
        estudio que ahora consiento.
      </p>
      <p className="text-justify2">
        Mi nombre y mis datos personales serán confidenciales en forma total y serán mantenidos en
        secreto profesional. Los resultados, identificación y datos de mi expediente estarán
        protegidos de acuerdo con lo estipulado en la Norma Oficial Mexicana NOM-004-SSA3-2012, del
        expediente clínico, Fracción 10.1 y, si es necesario publicar la información científica
        generada en este estudio, se hará guardando la confidencialidad de mi persona.
        <ul>
          <li>
            Acepto que, los datos como variantes genéticas, edad, sexo, fase actual y evolución de
            la condición clínica, y la eficacia terapéutica sean utilizados para documentar, validar
            y sustentar la prueba genética científicamente, y entiendo que mi nombre no será
            utilizado en ningún momento con fines comerciales.
          </li>
          <li>
            Acepto que los datos que deriven de dicha prueba son de gran utilidad para la ciencia y
            pueden contribuir a mejorar la sensibilidad de siguientes pruebas para mi persona y
            otros, por lo que, autorizo el uso de esta información para fines estadísticos y de
            entendimiento científico.
          </li>
          <li>
            Acepto que puedo retirar mi consentimiento en cualquier momento y dejar de participar en
            el estudio, sin embargo, puedo continuar con mi cuidado y tratamiento (en el caso que
            aplique).
          </li>
        </ul>
      </p>
      <p>
        <h5 align="left">
          <b>CONSENTIMIENTO</b>
        </h5>
      </p>
      <p className="text-justify2">
        Al terminar de leer este consentimiento afirmo que:
        <ol>
          <li>
            Leí el documento de Consentimiento Informado, hice todas las preguntas necesarias las
            cuales se me aclararon para entender su contenido y propósito.
          </li>
          <li>
            Doy mi consentimiento voluntariamente de realizar los análisis genéticos y hormonales en
            forma libre y sin presiones de ningún tipo.
          </li>
          <li>
            En caso de ser necesario los resultados obtenidos se utilizarán con fines estadísticos y
            de entendimiento científico siempre y cuando los datos contenidos en mi expediente,
            identidad y resultados de laboratorio sean resguardados confidencialmente.
          </li>
          <li>
            Puedo desistir de mi consentimiento en cualquier momento con previo aviso por escrito
            sin que esto signifique un daño a mi persona.
          </li>
        </ol>
      </p>
      <p className="text-center mt-4">
        <h5 align="center">
          <b>Aceptar</b>
        </h5>
        <Form.Item hasFeedback name="names">
          <Input
            size="large"
            addonBefore={<UserOutlined className="site-form-item-icon" />}
            defaultValue={user.name}
            readOnly
          />
        </Form.Item>
        <Form.Item hasFeedback name="names">
          <Input
            size="large"
            addonBefore={<MailOutlined className="site-form-item-icon" />}
            defaultValue={user.email}
            readOnly
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: 'El correo es obligatorio' },
            { type: 'email', message: 'Debe introducir un correo válido' },
          ]}
        >
          <Input
            size="large"
            type="email"
            addonBefore={<MailOutlined className="site-form-item-icon" />}
            placeholder="Confirmar correo electrónico"
          />
        </Form.Item>
        Fecha: {moment().format('DD/MM/YYYY')}
      </p>
    </div>
  ),
})
