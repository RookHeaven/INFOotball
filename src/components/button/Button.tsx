import './button.scss';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Heart from '../../assets/icons/heart.svg?react';

const Button = ({isLinkButton = false, isTabButton = false, isFavoriteButton = false, onClickTabButton = undefined, isActiveTab = false, children}) => {
  const linkButton = <a
    className='button button--favorites' href="#">
      <Heart style={{color: 'white', marginRight: '8px'}}/>
      <span>3</span>
      <div className='button__delimiter'></div>
      {children}
    </a>

  const favoriteButton = <button
    className='button button--favorite'>
    <Heart style={{color: 'jade', marginRight: '8px'}}/>
    {children}
  </button>

  const tabButton = <button
      onClick={onClickTabButton}
      className={isActiveTab ? `button active button--tab` : 'button button--tab'}>{children}
    </button>

  return (
    <>
      {isLinkButton && linkButton}
      {isTabButton && tabButton}
      {isFavoriteButton && favoriteButton}
    </>
  )
}

export default Button;
