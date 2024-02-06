import img from './empty.gif';

const EmptyMessage = () => {
  return (
    <img src={img} style={{display: 'block', width: '450px', height: '450px', objectFit: 'contain', margin: '0 auto'}} alt='Empty favorite'/>
  )
}

export default EmptyMessage;
