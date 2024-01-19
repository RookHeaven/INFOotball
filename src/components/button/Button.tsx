import './button.scss';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Heart from '../../assets/icons/heart.svg?react';

const Button = ({isLinkButton = false, isTabButton = false, onClickTabButton, isActiveTab, children}) => {
  const linkButton = <a
    className='button button--favorites' href="#">
      <Heart style={{color: 'white', marginRight: '8px'}}/>
      <span>3</span>
      <div className='button__delimiter'></div>
      {children}
    </a>

  const tabButton = <button
      onClick={onClickTabButton}
      className={isActiveTab ? `button active button--tab` : 'button button--tab'}>{children}
    </button>

  return (
    <>
      {isLinkButton && linkButton}
      {isTabButton && tabButton}
    </>
  )
}

export default Button;
