import './button.scss';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Heart from '../../assets/icons/heart.svg?react';

function Button() {
  return (
    <div className='button button--favorites'>
      <a href="#">
        <Heart style={{color: 'white', marginRight: '8px'}}/>
        <span>3</span>
        <div className='button__delimiter'></div>
      </a>
      Clubs
    </div>
  )
}

export default Button;
