import Button from "../button/Button.tsx";

import styles from "../emptyFavorites/emptyFavorites.module.scss";
import EmptyMessage from "../emptyMessage/EmptyMessage.tsx";

function EmptyFavorites() {
  return (
    <div className={styles.empty}>
      <h2 className={styles.empty__title}>The list of favorite clubs is <span>empty</span></h2>
      <EmptyMessage/>
      <p>
        Most likely, you haven't added any clubs to favorites yet.<br/>
        To add a club, go to the Main Page.
      </p>
      <Button isBackButton={true}>Back to Main Page</Button>
    </div>
  );
}

export default EmptyFavorites;
