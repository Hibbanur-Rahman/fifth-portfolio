import "../assets/styles/style.css";

const Contact = () => {
  return (
    <div className="contact m-0 p-0 col-12 col-md-8  d-flex justify-content-center">
      <div className="card rounded-4 m-0 p-2 pt-5 p-md-5 bg-light col-12 col-md-11 border-0 ">
        <div className="heading row m-0 p-0 d-flex align-items-center">
          <h1 className="m-0 p-0 w-auto">Contact</h1>
          <div className="line bg-primary rounded-5 col-6 m-0 p-0 ms-3"></div>
        </div>

        <div className="col-12 pt-5">
          <p className="m-0 p-0 fs-4 text-body-secondary ">
            I'm Always Open To Discussing Product
          </p>
          <h4 className="m-0 p-0">design work or partnerships.</h4>
          <form action="" method="post" className="mt-5">
            <div className="form-group mb-3 mt-4">
              <input
                type="email"
                className="form-control bg-transparent p-3 border border-top-0 border-start-0 border-end-0"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Name*"
              />
            </div>
            <div className="form-group mb-3 mt-4">
              <input
                type="email"
                className="form-control bg-transparent p-3 border border-top-0 border-start-0 border-end-0"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email*"
              />
            </div>
            <div className="form-group mb-3 mt-4">
              <textarea
                type="email"
                className="form-control bg-transparent p-3 border border-top-0 border-start-0 border-end-0"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Message*"
              />
            </div>

            <button
              type="submit"
              className="btn btn-lg mt-5 bg-transparent border border-2 "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
