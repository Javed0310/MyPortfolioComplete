import "bootstrap/dist/css/bootstrap.min.css";
import style from "../../Style/MainComp/ImgCard.module.css";
import "animate.css";
const ImgCards = () => {
  return (
    <>
      <div className={style.ImgContainer}>
        <img src="images\myAIPic.png" className={style.img} />
      </div>
    </>
  );
};
export default ImgCards;
