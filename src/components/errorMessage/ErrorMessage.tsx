import {FC} from 'react';

import img from './error.gif';

const ErrorMessage: FC = () => {
  return (
    <img src={img} style={{display: 'block', width: '700px', height: '700px', objectFit: 'contain', margin: '0 auto'}} alt={'Error'}/>
  );
}

export default ErrorMessage;
