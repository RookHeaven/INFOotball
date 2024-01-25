import img from './404.gif';

const errorMessage = () => {
  return (
    <img src={img} style={{display: 'block', width: '700px', height: '700px', objectFit: 'contain', margin: '0 auto'}} alt={'Error'}/>
  )
}

export default errorMessage;
