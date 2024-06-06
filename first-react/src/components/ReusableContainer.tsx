import {FC} from "react";

interface ContainerProps {
    children: React.ReactNode;
}

const ReusableContainer: FC<ContainerProps> = ({children}) => {
  return (
    <div>ReusableContainer
        <div>{children}</div>
    </div>
  )
}

export default ReusableContainer