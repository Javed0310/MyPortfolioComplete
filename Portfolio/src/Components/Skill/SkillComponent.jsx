import "bootstrap/dist/css/bootstrap.min.css";
import style from "../../Style/MainComp/Skill/SkillComponent.module.css";
import { FaPlusCircle } from "react-icons/fa";
import SkillCard from "./SkillCard";
const SkillComponent = () => {
  return (
    <>
      
      <div
        className={`bg-dark pt-5 pb-2 text-center  `}
        style={{ width: "100%", height: "auto" }}
      >
        <div className="d-flex align-items-center justify-content-between p-3">
          <h1 className="text-warning ps-3 fw-bold">Skill's</h1>
          <button className="btn btn-warning">
            <FaPlusCircle size={25} />
          </button>
        </div>
        <div className={`d-flex  ${style.skillContainer}`}>
          <SkillCard
            logo={"images/htmllogo.png"}
            skillIntro={"HTML5"}
            // intro={
            //   "HTML is the standard markup language for Web pages. With HTML you can create your own Website."
            // }
          />

          <SkillCard logo={"images/csslogo.png"} skillIntro={"CSS3"} />
          <SkillCard
            logo={"images/javascriptlogo.png"}
            skillIntro={"Javascript"}
          />
          <SkillCard logo={"images/reactlogo.png"} skillIntro={"Reactjs"} />
          <SkillCard logo={"images/Java-logo.png"} skillIntro={"Java"} />
          <SkillCard
            logo={"images/hibernatepng.png"}
            skillIntro={"Hibernate"}
          />
        </div>
      </div>
    </>
  );
};
export default SkillComponent;
