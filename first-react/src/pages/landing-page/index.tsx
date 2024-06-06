import "../../App.css";
import {useLocation} from "react-router-dom";
import ReusableText from "../../components/ReusableText";
import ReusableContainer from "../../components/ReusableContainer";
import Card from "../../components/Card";
const LandingPage = () => {
  const handleCardClick = () => {
    alert("Card clicked");
  };
  const location = useLocation();
  return (
    <main className="container">
      <div>React App</div>
      <h4>Props from auth page : {location?.state?.text}</h4>
      <ReusableText description="this is a reusable text property" />
      <ReusableText description="can changed twice"/>
      <ReusableContainer>
        <button>This is a children</button>
      </ReusableContainer>
      <div className="card-layout">
      <Card title="Beautiful Sunset"
      description="A beautiful sunset over mountains"
      imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmGoUVMMs_ND0PWz39QXp3q4v8VcufIKqKYQ&s"
      onClick={handleCardClick}/>
      <Card title="Beautiful Sunset"
      description="A beautiful sunset over mountains"
      imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmGoUVMMs_ND0PWz39QXp3q4v8VcufIKqKYQ&s"
      onClick={handleCardClick}/>
      <Card title="Beautiful Sunset"
      description="A beautiful sunset over mountains"
      imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmGoUVMMs_ND0PWz39QXp3q4v8VcufIKqKYQ&s"
      onClick={handleCardClick}/>
      </div>
    </main>
  )
}

export default LandingPage