import './clubCard.scss';
import Button from "../button/Button.tsx";

const ClubCard = () => {
  return (
    <div className='club'>
      <img className='club__image' src="https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/1200px-Arsenal_FC.svg.png" alt="Football club team badge"/>
      <h3>Clubs name</h3>
      <Button isFavoriteButton={true}>Add to favorites</Button>
    </div>
  )
}

export default ClubCard;
