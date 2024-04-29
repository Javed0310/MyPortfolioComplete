import "bootstrap/dist/css/bootstrap.min.css";
import { GrCloudComputer } from "react-icons/gr";
import { MdMarkEmailRead, MdOutlineWeb } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import style from "../../Style/AboutUs/AboutUs.module.css";
const AboutUs = () => {
  return (
    <>
      <div
        className="bg-dark pt-2 ps-3 pb-4"
        style={{ width: "100%", position: "relative" }}
      >
        <h1 className="text-warning">AboutUs</h1>
        <div
          className={`d-flex align-items-center justify-content-around mt-4 ${style.aboutMainDiv}`}
        >
          <div className={`${style.aboutusImg} text-white`}>
            <img
              src="images\myAIPic.png"
              className={`p-0 me-4 ${style.aboutImg}`}
            />
          </div>
          <div className={`text-center ${style.aboutInfoMain}`}>
            <span className={style.degree}>
              <GrCloudComputer size={20} />
              <span> Bachelor In Computer Science</span>
            </span>
            <br></br>
            <span className={style.email}>
              <MdMarkEmailRead size={20} />
              <span> javed031037@gmail.com</span>
            </span>
            <br></br>
            <span className={style.number}>
              <MdAddCall size={20} />
              <span> 03103760117</span>
            </span>
            <br></br>
            <span className={style.web}>
              <MdOutlineWeb size={20} />
              <span> Java Full Stack Developer</span>
            </span>
            <div className={`${style.aboutInfo}`}></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutUs;
