import React from 'react'
import Header from './component/partials/header'
import 'bootstrap/dist/css/bootstrap.min.css';

<Header />
function welcome() {
  return (
    <div className='container'>
      <section>
        <div className='row'>
          <h4 className='col-md-6'>On Sale</h4>
          <div className="dropdown col-md-6 p-bottom d-flex justify-content-end">
            <button className="btn main-color text-white dropdown-toggle" type="button" id="dropdownMenuButton1"
              data-bs-toggle="dropdown" aria-expanded="false">
              View All
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
        </div>
        <div id="carouselExampleControls" className="carousel slide border border-1" data-bs-ride="carousel">
          <div className="carousel-inner mg-auto w-80 p-3">
            <div className="carousel-item active">
              <div className='row'>
                <div className="col-md-3" key={i}>
                  <div className='card border border-1 h-100'>
                    <img src="#" className="card-img-top img-book-card" alt="Image Error" />
                    <div className="card-body">
                      <h5 className="card-title">abc</h5>
                      <p className="card-text">abc</p>
                    </div>
                    <div className='card-footer text-white'>
                      <div>
                        <div className='d-inline text-decoration-line-through fw-light'>
                          abc
                        </div>
                        <div className='d-inline fw-bold'>
                          abc
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className='row'>
                <div className="col-md-3">
                  <div className='card border border-1 h-100'>
                    <img src="#" className="card-img-top img-book-card" alt="Image Error" />
                    <div className="card-body">
                      <h5 className="card-title">abc</h5>
                      <p className="card-text">abc</p>
                    </div>
                    <div className='card-footer text-white'>

                      <div>
                        <div className='fw-bold'>
                          abc
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className='row'>
                <div className="col-md-3" key={i}>
                  <div className='card border border-1 h-100'>
                    <img src="abc" className="card-img-top img-book-card" alt="Image Error" />
                    <div className="card-body">
                      <h5 className="card-title">abc</h5>
                      <p className="card-text">abc</p>
                    </div>
                    <div className='card-footer text-white'>
                      <div>
                        <div className='d-inline text-decoration-line-through fw-light'>
                          abc
                        </div>
                        <div className='d-inline fw-bold'>
                          abc
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon bg-dark text-dark h-25" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="next">
            <span className="carousel-control-next-icon bg-dark text-dark h-25" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <section className='mt-5'>
        <div className="text-center">
          <div className="mx-auto col-md-8">
            <h3 className="mb-3">Featured Books</h3>
          </div>
        </div>
        <div>
          <ul className="nav nav-pills mb-3 d-flex justify-content-center" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                aria-selected="true">
                Recommended
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                aria-selected="false">
                Popular
              </button>
            </li>
          </ul>
          <div className="tab-content border border-1" id="pills-tImage Errorontent">
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel"
              aria-labelledby="pills-home-tab">
              <div className="row gy-4 mg-auto w-80 p-3">
                <div className="col-md-3">
                  <div className='card border border-1 h-100'>
                    <img src="#" className="card-img-top img-book-card" alt="Image Error" />
                    <div className="card-body">
                      <h5 className="card-title">abc</h5>
                      <p className="card-text">abc</p>
                    </div>
                    <div className='card-footer text-white'>
                      <div>
                        <div className='d-inline text-decoration-line-through fw-light'>
                          abc
                        </div>
                        <div className='d-inline fw-bold'>
                          abc
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
              <div className="row gy-4 mg-auto w-80 p-3">
                <div className="col-md-3">
                  <div className='card border border-1 h-100'>
                    <img src="#" className="card-img-top img-book-card" alt="Image Error" />
                    <div className="card-body">
                      <h5 className="card-title">abc</h5>
                      <p className="card-text">abc</p>
                    </div>
                    <div className='card-footer text-white'>
                      <div>
                        <div className='d-inline text-decoration-line-through fw-light'>
                          abc
                        </div>
                        <div className='d-inline fw-bold'>
                          abc
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

export default welcome
