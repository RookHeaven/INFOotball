import './button.scss';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Heart from '../../assets/icons/heart.svg?react';


const Button = ({isLinkButton = false, isTabButton = false, isCardButton = false, onClickTabButton = undefined, isActiveTab = false, children}) => {
  const linkButton = <a
    className='button button--favorites' href="#">
      <Heart className='button__icon button__icon--favorites' style={{color: 'white'}}/>
      <span>3</span>
      <div className='button__delimiter'></div>
      {children}
    </a>

  const cardButton = <button
    className='button button--card'>
    <Heart className='button__icon button__icon--card' style={{color: 'black'}}/>
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
      {isCardButton && cardButton}
    </>
  )
}

export default Button;
