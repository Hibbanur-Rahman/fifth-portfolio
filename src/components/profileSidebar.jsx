import profile from "../assets/images/profile-2.png";

const ProfileSidebar = () => {
  return (
    <div className="profileSidebar col-3 m-0 p-0 d-flex flex-column justify-content-center align-items-center position-relative mt-5">
      <div className="profile col-8 rounded-4 position-absolute z-2 mt-5">
        <img src={profile} alt="profile Image" className="rounded-4" />
      </div>
      <div className="card m-0 p-5 col-12 d-flex flex-column justify-content-center align-items-center border-0 rounded-4">
        <h4 className="m-0 p-0 text-center ">Hibbanur Rahman</h4>
        <p className="profile-designation m-0 p-2 ps-4 pe-4 rounded-2 ">
          Ui/Ux Designer
        </p>
        <div className="row m-0 p-0">
          <i class="fa-brands fa-facebook-f w-auto p-3 rounded-2 m-2 "></i>
          <i class="fa-brands fa-twitter w-auto p-3 rounded-2 m-2"></i>
          <i class="fa-brands fa-instagram w-auto p-3 rounded-2 m-2"></i>
          <i class="fa-brands fa-linkedin-in w-auto p-3 rounded-2 m-2"></i>
        </div>
        <div className="contact-details row m-0 p-3 mt-4 rounded-4 ">
          <div className="d-flex align-items-center ">
            
            <i class="fa-solid fa-mobile-screen"></i>
            <div className="">
                <p className="m-0 p-0">Phone</p>
                <p className="">+91 99731 52523</p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <i class="fa-solid fa-envelope-open-text"></i>{" "}
            <div className="">
                <p className="m-0 p-0">Email</p>
                <p className="">hibbanrahmanhyt@gmail.com</p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <i class="fa-solid fa-location-dot"></i>
            <div className="">
                <p className="m-0 p-0">Location</p>
                <p className="">Hyderabad,India</p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <i class="fa-regular fa-calendar-days"></i>
            <div className="">
                <p className="m-0 p-0">Birthday</p>
                <p className="">Feb 05,2004</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
