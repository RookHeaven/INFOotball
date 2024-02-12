import Button from '../../components/button/Button.tsx';

import styles from './page404.module.scss'

import img from './404.gif';

const Page404 = () => {
  return (
    <div className={styles.error}>
      <img className={styles.error__image} src={img} alt='Error 404'/>
      <p className={styles.error__text}>Page doesn't exist</p>
      <Button isBackButton={true}>Back to Main Page</Button>
    </div>
  )
}

export default Page404;
