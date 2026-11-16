import { useState } from 'react'
import heroImage from '../../../shared/assets/hero.png'
import reactLogo from '../../../shared/assets/react.svg'
import viteLogo from '../../../shared/assets/vite.svg'
import styles from './HomePage.module.css'

const baseUrl = import.meta.env.BASE_URL

export function HomePage() {
  const [count, setCount] = useState(0)

  return (
    <main className={styles.page}>
      <section className={styles.center}>
        <div className={styles.hero}>
          <img src={heroImage} className={styles.base} width="170" height="179" alt="" />
          <img src={reactLogo} className={styles.framework} alt="React logo" />
          <img src={viteLogo} className={styles.vite} alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/pages/home/ui/HomePage.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className={styles.counter}
          onClick={() => setCount((currentCount) => currentCount + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className={styles.ticks} aria-hidden="true" />

      <section className={styles.nextSteps}>
        <div className={styles.docs}>
          <svg className={styles.icon} role="presentation" aria-hidden="true">
            <use href={`${baseUrl}icons.svg#documentation-icon`} />
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank" rel="noreferrer">
                <img className={styles.logo} src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank" rel="noreferrer">
                <img className={styles.buttonIcon} src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.social}>
          <svg className={styles.icon} role="presentation" aria-hidden="true">
            <use href={`${baseUrl}icons.svg#social-icon`} />
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank" rel="noreferrer">
                <svg className={styles.buttonIcon} role="presentation" aria-hidden="true">
                  <use href={`${baseUrl}icons.svg#github-icon`} />
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank" rel="noreferrer">
                <svg className={styles.buttonIcon} role="presentation" aria-hidden="true">
                  <use href={`${baseUrl}icons.svg#discord-icon`} />
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank" rel="noreferrer">
                <svg className={styles.buttonIcon} role="presentation" aria-hidden="true">
                  <use href={`${baseUrl}icons.svg#x-icon`} />
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank" rel="noreferrer">
                <svg className={styles.buttonIcon} role="presentation" aria-hidden="true">
                  <use href={`${baseUrl}icons.svg#bluesky-icon`} />
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className={styles.ticks} aria-hidden="true" />
      <div className={styles.spacer} aria-hidden="true" />
    </main>
  )
}
