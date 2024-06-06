import {FC} from "react";
interface TailwindButtonProps {
    id: string;
    title?: string;
    type?: "submit" | "button" | "reset";
    onClick?:() => void;
}

const TailwindButton: FC<TailwindButtonProps> = ({id, title, type, onClick}) => {
  return (
    <button
    type={type}
    onClick={onClick}
    className="w-full h-20 bg-blue-600 hover:bg-blue-700 text-white" 
    id={id}>
        {title}
    </button>
  )
}

export default TailwindButton