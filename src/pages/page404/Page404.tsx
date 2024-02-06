import ErrorMessage from "../../components/errorMessage/ErrorMessage.tsx";

import styles from './page404.module.scss'
import Button from "../../components/button/Button.tsx";

const Page404 = () => {
  return (
    <div className={styles.error}>
      <ErrorMessage/>
      <p className={styles.error__text}>Page doesn't exist</p>
      <Button isBackButton={true}>Back to Main Page</Button>
    </div>
  )
}

export default Page404;
