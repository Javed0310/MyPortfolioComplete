import "bootstrap/dist/css/bootstrap.min.css";
import style from "../../Style/MainComp/MainComp.module.css";
import "animate.css";
import ImgCards from "./ImgCards";
import NavBar from "../NavBar/NavBar";
import SkillComponent from "../Skill/SkillComponent";
import AboutUs from "../AboutUs/AboutUs";
import ContactUs from "../ContactUs/ContactUs";
import { BrowserRouter } from "react-router-dom/dist";

const MainComponent = () => {
  return (
    <>
      <BrowserRouter>
        <section id="Home">
          <NavBar />
          <div className={`bg-dark text-light ${style.mainComp}`}>
            <div
              className={` animate__animated animate__fadeInTopLeft ${style.leftContent}`}
            >
              <h1 className="text-white ">
                I'm <span className="text-warning">Javed</span> Hussain
              </h1>
              <h1 className="text-warning">
                I'm a{" "}
                <span className={style.typing_animation}>
                  Java Full Stack Developer
                </span>
              </h1>
              <p className="text-white fs-6 text-align-justify mb-4">
                I'm a skilled web developer with a passion for crafting seamless
                online experiences. With a keen eye for design and a knack for
                coding, I specialize in creating dynamic websites that not only
                captivate users but also deliver exceptional functionality. With
                expertise in a range of programming languages and a dedication
                to staying abreast of the latest web development trends, I'm
                committed to bringing clients' visions to life and exceeding
                their expectations in the digital realm. Whether it's building
                responsive layouts, optimizing user interfaces, or implementing
                cutting-edge technologies, I thrive on turning ideas into
                reality in the ever-evolving landscape of the web.
              </p>
              <button className={`btn ${style.hireMeBtn} fs-6 fw-bold`}>
                Hire Me
              </button>
            </div>
            <div className="">
              <ImgCards />
            </div>
          </div>
          <SkillComponent />
          <AboutUs />
          <ContactUs />
        </section>
      </BrowserRouter>
    </>
  );
};
export default MainComponent;
