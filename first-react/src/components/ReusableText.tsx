import {FC} from "react";
interface ReusableProps{
  description: string;
}

const ReusableText: FC<ReusableProps> = ({description}) => {
  return (
    <main>
      <div>ReusableText</div>
    <div>{description}</div>
    </main>
    
  )
}

export default ReusableText