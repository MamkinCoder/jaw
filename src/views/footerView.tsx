import { faPhp, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cs from 'classnames'
import styles from 'styles/footer.module.scss'

interface FooterViewProps {}

export function FooterView({}: FooterViewProps) {
  return (
    <div className={styles.baseboard}>
      <div className={styles['icons-container']}>
        <p style={{ fontSize: '0.5em' }}>Powered by:</p>
        {/* <div className={styles.icons}> */}
        <FontAwesomeIcon icon={faReact} />
        <FontAwesomeIcon icon={faPhp} />
        {/* </div> */}
      </div>
      <p>
        © 2023г. Разработано{' '}
        <a
          href="https://github.com/MamkinCoder"
          className={cs(styles['rainbow-text'], styles.animated)}
        >
          <code className={styles.link}>@MamkinCoder</code>
        </a>
      </p>
    </div>
  )
}
