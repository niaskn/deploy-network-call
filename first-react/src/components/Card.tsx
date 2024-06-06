import {FC} from "react";
interface CardProps{
    title: string;
    description: string;
    imageUrl: string;
    onClick:() => void;
}
const Card: FC <CardProps> = ({title, description, imageUrl, onClick}) => {
  return (
    <div className="card" onClick={onClick}>
        <img src={imageUrl} className="card-image"/>
        <div className="card-content">
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
        </div>
    </div>
  )
}

export default Card