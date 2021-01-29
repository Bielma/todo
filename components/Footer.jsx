import React from 'react'
import styles from '../styles/Home.module.css'

const Footer = () => {
    return (
        <div>
            <footer className={styles.footer}>
            <a
            href="https://github.com/Bielma/todo"
            target="_blank"
            rel="noopener noreferrer"
            >
                <strong> by Antonio Bielma </strong>
           
            </a>
      </footer>
        </div>
    )
}

export default Footer
