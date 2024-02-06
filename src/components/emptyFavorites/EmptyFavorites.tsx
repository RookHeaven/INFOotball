import Button from "../button/Button.tsx";

import styles from "../emptyFavorites/emptyFavorites.module.scss";

function EmptyFavorites() {
  return (
    <div>
      <h2>The list of favorite clubs is empty</h2>
      <p>
        Most likely, you haven't added any clubs to favorites yet.<br/>
        To add a club, go to the main page.
      </p>
      <Button isBackButton={true}>Back to Main Page</Button>
    </div>
  );
}

export default EmptyFavorites;
