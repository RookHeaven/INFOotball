import Button from '../button/Button.tsx';

import styles from './emptyMessage.module.scss';

import img from './empty.gif';

function EmptyMessage() {
  return (
    <div className={styles.empty}>
      <h2 className={styles.empty__title}>The list of favorite clubs is <span>empty</span></h2>
      <img className={styles.empty__image} src={img} alt='Empty favorite'/>
      <p>
        Most likely, you haven't added any clubs to favorites yet.<br/>
        To add a club, go to the Main Page.
      </p>
      <Button isBackButton={true}>Back to Main Page</Button>
    </div>
  );
}

export default EmptyMessage;
