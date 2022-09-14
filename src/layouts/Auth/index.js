import React from 'react'
import { connect } from 'react-redux'
import { Layout } from 'antd'
import { /* Link, */ withRouter } from 'react-router-dom'
import classNames from 'classnames'
// import Sidebar from 'components/cleanui/layout/Sidebar'
import style from './style.module.scss'

const mapStateToProps = ({ settings }) => ({
  logo: settings.logo,
  isGrayTopbar: settings.isGrayTopbar,
  isCardShadow: settings.isCardShadow,
  isSquaredBorders: settings.isSquaredBorders,
  isBorderless: settings.isBorderless,
  authPagesColor: settings.authPagesColor,
})

const AuthLayout = ({
  children,
  // isGrayTopbar,
  isCardShadow,
  isSquaredBorders,
  isBorderless,
  authPagesColor,
}) => {
  return (
    <Layout>
      <Layout.Content>
        {/* <Sidebar /> */}
        <div
          className={classNames(`${style.container}`, {
            cui__layout__squaredBorders: isSquaredBorders,
            cui__layout__cardsShadow: isCardShadow,
            cui__layout__borderless: isBorderless,
            [style.white]: authPagesColor === 'white',
            [style.gray]: authPagesColor === 'gray',
          })}
          style={{
            backgroundImage:
              authPagesColor === 'image' ? 'url(resources/images/content/photos/5.jpeg)' : '',
          }}
        >
          {/* <div
            className={classNames(`${style.topbar}`, {
              [style.topbarGray]: isGrayTopbar,
            })}
          >
            <div className={style.logoContainer}>
              <div className={style.logo}>
                <img
                  src="resources/images/logo.svg"
                  style={{ height: '40px' }}
                  className="mr-2"
                  alt="OmiGenomics"
                />
              </div>
            </div>
            <div className="d-none d-sm-block">
              <span className="mr-2">¿Aún no tiene una cuenta?</span>
              <Link to="/auth/register" className="font-size-16 kit__utils__link">
                Crear cuenta
              </Link>
            </div>
          </div> */}
          <div className={style.containerInner}>{children}</div>
          {/* <div className="mt-auto pb-5 pt-5">
            <div className="text-center">
              Copyright © 2022-2023 OmniGenomics |{' '}
              <a href="https://www.mediatec.org/privacy" target="_blank" rel="noopener noreferrer">
                Aviso de Privacidad
              </a>
            </div>
          </div> */}
        </div>
      </Layout.Content>
    </Layout>
  )
}

export default withRouter(connect(mapStateToProps)(AuthLayout))
