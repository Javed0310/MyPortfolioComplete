import "bootstrap/dist/css/bootstrap.min.css";
import style from "../../Style/MainComp/Skill/SkillCard.module.css";
const SkillCard = ({ logo, skillIntro, intro }) => {
  return (
    <>
      <div className={style.skillCardContainer}>
        <div className={style.card}>
          <h1 className={style.heading}>{skillIntro}</h1>
          <img src={logo} alt="" className={style.img} />

          <div className={style.textBox}>
            <p className={`${style.text} ${style.head}`}>{skillIntro}</p>
            <span>{intro}</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default SkillCard;
