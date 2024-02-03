import profile from "../assets/images/profile-2.png";

const ProfileSidebar = () => {
  return (
    <div className="profileSidebar col-12 col-md-3 m-0 p-0 d-flex flex-column justify-content-center align-items-center position-relative mt-5">
      <div className="profile col-8 rounded-4 position-absolute z-2 mt-5">
        <img src={profile} alt="profile" className="rounded-4" />
      </div>
      <div className="card m-0 p-4 pt-0 col-12 d-flex flex-column justify-content-center align-items-center border-0 rounded-4">
        <h4 className="m-0 p-0 text-center mb-3">Hibbanur Rahman</h4>
        <p className="profile-designation m-0 p-2 ps-4 pe-4 rounded-2 mb-3">
          Ui/Ux Designer
        </p>
        <div className="row m-0 p-0">
          <a href="#" className="text-decoration-none m-0 p-0 w-auto ">
            <i className="fa-brands fa-facebook-f w-auto p-3 rounded-2 m-2 "></i>
          </a>
          <a href="#" className="text-decoration-none m-0 p-0 w-auto ">
            <i className="fa-brands fa-twitter w-auto p-3 rounded-2 m-2"></i>
          </a>
          <a href="#" className="text-decoration-none m-0 p-0 w-auto ">
            <i className="fa-brands fa-instagram w-auto p-3 rounded-2 m-2"></i>
          </a>
          <a href="#" className="text-decoration-none m-0 p-0 w-auto ">
            <i className="fa-brands fa-linkedin-in w-auto p-3 rounded-2 m-2"></i>
          </a>
        </div>
        <div className="contact-details row m-0 p-4 mt-4 rounded-4 ">
          <div className="row m-0 p-0 pt-2 pb-2 border border-1 border-start-0 border-end-0 border-top-0    d-flex align-items-center  ">
            <div className="icon p-3 bg-white rounded-2 col-2 d-flex align-items-center justify-content-center">
              <i className="fa-solid fa-mobile-screen fa-1x bg-transparent w-auto "></i>
            </div>
            <div className="list-items col-9 d-flex justify-content-center flex-column">
              <p className="m-0 p-0 fs-6 text-secondary ">Phone</p>
              <p className="m-0 p-0 fs-6">+91 99731 52523</p>
            </div>
          </div>
          <div className="row m-0 p-0 pt-2 pb-2 border border-1 border-start-0 border-end-0 border-top-0    d-flex align-items-center ">
            <div className="icon p-3 bg-white rounded-2 col-2 d-flex align-items-center justify-content-center">
              <i className="fa-solid fa-envelope-open-text fa-1x bg-transparent w-auto  "></i>
            </div>
            <div className="list-items col-9 d-flex justify-content-center flex-column">
              <p className="m-0 p-0 text-secondary ">Email</p>
              <p className="m-0 p-0 ">hibbanrahmanhyt@gmail.com</p>
            </div>
          </div>
          <div className="row m-0 p-0 pt-2 pb-2 border border-1 border-start-0 border-end-0 border-top-0    d-flex align-items-center ">
            <div className="icon p-3 bg-white rounded-2 col-2 d-flex align-items-center justify-content-center">
              <i className="fa-solid fa-location-dot fa-1x bg-transparent w-auto  "></i>
            </div>
            <div className="list-items col-9 d-flex justify-content-center flex-column">
              <p className="m-0 p-0 text-secondary ">Location</p>
              <p className="m-0 p-0 ">Hyderabad,India</p>
            </div>
          </div>
          <div className="row m-0 p-0 pt-2 pb-2  d-flex align-items-center ">
            <div className="icon p-3 bg-white rounded-2 col-2 d-flex align-items-center justify-content-center">
              <i className="fa-regular fa-calendar-days fa-1x bg-transparent w-auto "></i>
            </div>
            <div className="list-items col-9 d-flex justify-content-center flex-column">
              <p className="m-0 p-0 text-secondary ">Birthday</p>
              <p className="m-0 p-0 ">Feb 05,2004</p>
            </div>
          </div>
        </div>

        <button className="btn btn-primary btn-lg fs-6 mt-4 mb-3">
          <i className="fa-solid fa-download pe-2"></i>
          Download Cv
        </button>
      </div>
    </div>
  );
};

export default ProfileSidebar;
