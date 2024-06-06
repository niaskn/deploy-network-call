import {FC} from "react";

interface ButtonProps {
    title: string;
    style: string;
    onClick: () => void;
}
const Button: FC<ButtonProps> = ({title,style, onClick}) => {
    return(
        <button onClick={onClick} className={style}>
            {title}
        </button>
    );
};
export default Button;