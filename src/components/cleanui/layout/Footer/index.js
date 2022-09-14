import React from 'react'
import style from './style.module.scss'

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footerInner}>
        <p className="mb-0">
          Copyright © 2022 OmiGenomics |{' '}
          <a href="#" onClick={e => e.preventDefault()} target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  )
}

export default Footer
