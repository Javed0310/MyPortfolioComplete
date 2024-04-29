import "bootstrap/dist/css/bootstrap.min.css";
import style from "../../Style/ContactUs/ContactUs.module.css";
const ContactUs = () => {
  return (
    <>
      <div className={`bg-dark ps-3 ${style.contactUsMain}`}>
        <h1 className={`text-warning p-0 m-0 ${style.contactHeading}`}>
          ContactUs
        </h1>
        <div
          className={`ms-5 d-flex align-items-center justify-content-around p-2 mt-5  ${style.contactFields}`}
        >
          <form className={`form ${style.Contactform}`}>
            <div class="input-group flex-nowrap mb-2">
              <span
                class="input-group-text bg-dark text-light"
                id="addon-wrapping"
              >
                Name
              </span>
              <input type="text" class="form-control bg-dark text-light" />
            </div>
            <div class="input-group flex-nowrap">
              <span
                class="input-group-text bg-dark text-light"
                id="addon-wrapping"
              >
                Email{" "}
              </span>
              <input type="text" class="form-control bg-dark text-light" />
            </div>
            <div class="input-group flex-nowrap mt-2">
              <textarea
                className={`p-2 border-rounded-3 bg-dark text-light outline-warning ${style.textArea}`}
                placeholder="Message"
                rows={7}
                cols={100}
              ></textarea>
            </div>
            <br />
            <button type="submit" className="btn btn-outline-warning mt-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default ContactUs;
