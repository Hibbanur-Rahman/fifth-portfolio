import "../assets/styles/style.css";
const Resume = () => {
  return (
    <div className="resume  m-0 p-0 col-12 col-md-8  d-flex justify-content-center">
      <div className="card rounded-4 m-0 p-0 pt-5  bg-light col-12 col-md-11 border-0">
        <div className="heading row m-0 p-0 d-flex align-items-center p-md-5 pt-md-0 pb-md-0">
          <h1 className="m-0 p-0 w-auto">Resume</h1>
          <div className="line bg-primary rounded-5 col-6 m-0 p-0 ms-3"></div>
        </div>

        <div className="row m-0 p-0 p-md-5 pt-md-0 pb-md-0">
          <div className="col-md-6 p-5 ps-0">
            <div className="row m-0 p-0 align-items-center mb-3">
              <i className="bi bi-bank fs-3 w-auto"></i>
              <h4 className="m-0 p-0 w-auto">Education</h4>
            </div>
            <div className="card border-0 p-4 rounded-4 mb-3 mt-3">
              <p className="m-0 p-0 text-secondary mb-2">2021-2025</p>
              <p className="m-0 p-0">
                Computer Science{" "}
                <span className="text-secondary">
                  - Maulana Azad National Urdu University,Hyderabad
                </span>
              </p>
            </div>
            <div className="card border-0 p-4 rounded-4 mb-3 mt-3 ">
              <p className="m-0 p-0 text-secondary mb-2">2019-2021</p>
              <p className="m-0 p-0">
                Intermediate{" "}
                <span className="text-secondary">
                  - Al-Irfan Residential School , Aurangabad , Maharashtra
                </span>
              </p>
            </div>
            <div className="card border-0 p-4 rounded-4 mb-3 mt-3 ">
              <p className="m-0 p-0 text-secondary mb-2">2018-2019</p>
              <p className="m-0 p-0">
                Matriculation{" "}
                <span className="text-secondary">
                  - +2 M.K.J High School, Darbhanga, Bihar
                </span>
              </p>
            </div>
          </div>
          <div className="col-md-6 p-5 ps-0">
            <div className="row m-0 p-0 align-items-center mb-3">
              <i className="bi bi-bank fs-3 w-auto"></i>
              <h4 className="m-0 p-0 w-auto">Experience</h4>
            </div>
            <div className="card border-0 p-4 rounded-4 mb-3 mt-3">
              <p className="m-0 p-0 text-secondary mb-2">2021-2025</p>
              <p className="m-0 p-0">
                Computer Science{" "}
                <span className="text-secondary">
                  - Maulana Azad National Urdu University,Hyderabad
                </span>
              </p>
            </div>
            <div className="card border-0 p-4 rounded-4 mb-3 mt-3 ">
              <p className="m-0 p-0 text-secondary mb-2">2019-2021</p>
              <p className="m-0 p-0">
                Intermediate{" "}
                <span className="text-secondary">
                  - Al-Irfan Residential School , Aurangabad , Maharashtra
                </span>
              </p>
            </div>
            <div className="card border-0 p-4 rounded-4 mb-3 mt-3 ">
              <p className="m-0 p-0 text-secondary mb-2">2018-2019</p>
              <p className="m-0 p-0">
                Matriculation{" "}
                <span className="text-secondary">
                  - +2 M.K.J High School, Darbhanga, Bihar
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="skillSection row m-0 p-5 ">
          <div className="skills col-6">
            <p className="m-0 p-0 fs-4 fw-600">Working Skills</p>
            <div className="skills-list row m-0 p-0 mt-4 mb-4">
              <div className="row m-0 p-0 justify-content-between align-items-center">
                <p className="m-0 p-0 w-auto text-secondary ">Web Design</p>
                <p className="m-0 p-0 w-auto text-secondary ">85%</p>
              </div>
              <div
                class="progress p-0 m-0 mt-2"
                role="progressbar"
                aria-label="Example 1px high"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ height: "6px" }}
              >
                <div
                  class="progress-bar rounded-2 "
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
            <div className="skills-list row m-0 p-0 mt-4 mb-4">
              <div className="row m-0 p-0 justify-content-between align-items-center">
                <p className="m-0 p-0 w-auto text-secondary ">Mobile App</p>
                <p className="m-0 p-0 w-auto text-secondary ">55%</p>
              </div>
              <div
                class="progress p-0 m-0 mt-2"
                role="progressbar"
                aria-label="Example 1px high"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ height: "6px" }}
              >
                <div
                  class="progress-bar rounded-2 "
                  style={{ width: "55%" }}
                ></div>
              </div>
            </div>
            <div className="skills-list row m-0 p-0 mt-4 mb-4">
              <div className="row m-0 p-0 justify-content-between align-items-center">
                <p className="m-0 p-0 w-auto text-secondary ">Illustrator</p>
                <p className="m-0 p-0 w-auto text-secondary ">65%</p>
              </div>
              <div
                class="progress p-0 m-0 mt-2"
                role="progressbar"
                aria-label="Example 1px high"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ height: "6px" }}
              >
                <div
                  class="progress-bar rounded-2 "
                  style={{ width: "65%" }}
                ></div>
              </div>
            </div>
            <div className="skills-list row m-0 p-0 mt-4 mb-4">
              <div className="row m-0 p-0 justify-content-between align-items-center">
                <p className="m-0 p-0 w-auto text-secondary ">PhotoShope</p>
                <p className="m-0 p-0 w-auto text-secondary ">72%</p>
              </div>
              <div
                class="progress p-0 m-0 mt-2"
                role="progressbar"
                aria-label="Example 1px high"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ height: "6px" }}
              >
                <div
                  class="progress-bar rounded-2 "
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <p className="m-0 p-0 fs-4 fw-600">Knowledges</p>
            <div className="row m-0 p-0 pt-4">
              <div className="badge bg-dark w-auto p-3 m-4 mt-0 mb-3 ms-0 ">
                <p className="text-secondary m-0 p-0 fs-6">Digital Design</p>
              </div>
              <div className="badge bg-dark w-auto p-3 m-4 mt-0 mb-3 ms-0">
                <p className="text-secondary m-0 p-0 fs-6">Marketing</p>
              </div>
              <div className="badge bg-dark w-auto p-3 m-4 mt-0 mb-3 ms-0">
                <p className="text-secondary m-0 p-0 fs-6">Communication</p>
              </div>
              <div className="badge bg-dark w-auto p-3 m-4 mt-0 mb-3 ms-0">
                <p className="text-secondary m-0 p-0 fs-6">Social Media</p>
              </div>
              <div className="badge bg-dark w-auto p-3 m-4 mt-0 mb-3 ms-0">
                <p className="text-secondary m-0 p-0 fs-6">JavaScript</p>
              </div>
              
              <div className="badge bg-dark w-auto p-3 m-4 mt-0 mb-3 ms-0">
                <p className="text-secondary m-0 p-0 fs-6">Nodejs</p>
              </div>
              <div className="badge bg-dark w-auto p-3 m-4 mt-0 mb-3 ms-0">
                <p className="text-secondary m-0 p-0 fs-6">HTML</p>
              </div>
              <div className="badge bg-dark w-auto p-3 m-4 mt-0 mb-3 ms-0">
                <p className="text-secondary m-0 p-0 fs-6">CSS</p>
              </div>
              <div className="badge bg-dark w-auto p-3 m-4 mt-0 mb-3 ms-0">
                <p className="text-secondary m-0 p-0 fs-6">Reactjs</p>
              </div>
              <div className="badge bg-dark w-auto p-3 m-4 mt-0 mb-3 ms-0">
                <p className="text-secondary m-0 p-0 fs-6">MongoDB</p>
              </div>
              <div className="badge bg-dark w-auto p-3 m-4 mt-0 mb-3 ms-0">
                <p className="text-secondary m-0 p-0 fs-6">Bootstrap</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
