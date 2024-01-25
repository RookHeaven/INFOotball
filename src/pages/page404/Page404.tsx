import ErrorMessage from "../../components/errorMessage/ErrorMessage.tsx";
import {Link} from "react-router-dom";

import styles from './page404.module.scss'

const Page404 = () => {
  return (
    <div className={styles.error}>
      <ErrorMessage/>
      <p className={styles.error__text}>Page doesn't exist</p>
      <Link className={styles.error__link} to="/">Back to main page</Link>
    </div>
  )
}

export default Page404;
