import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";


class Galley extends Component {
  state = {  };
  render() {
    const {displayGalley, onDisplayGalley, gallery} = this.props;
    return (
      <React.Fragment>
        <Modal show={displayGalley} onHide={()=>onDisplayGalley(null)} centered className="modal-lg">
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
           <div className="row">
            <div className="card">
                <div className="card-header text-center bg-white">
                    Gallery
                </div>
                <div className="card-body">
                  <div className="lightbox">
                    <div className="row d-flex align-items-center justify-content-center">
                    {gallery.map((img_data,idx) => (
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 d-flex align-items-center justify-content-center"  key={`div-${idx}`}>
                          <figure className="figure">
                            <img key={`img-${idx}`}
                                  src={process.env.PUBLIC_URL + img_data.url}
                                  alt={img_data.title + img_data.year}
                                  className="figure-img img-fluid rounded"></img>
                            <figcaption className="font-weight-bold d-flex align-items-center justify-content-center">
                                <div>
                                  <span id="title" className="text-center text-dark">{img_data.title} ({img_data.year})</span>
                                </div>
                            </figcaption>
                          </figure>
                        </div>
                      ))}

                    </div>
                  </div>
                </div>
            </div>
           </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={()=>onDisplayGalley(null)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Galley;







