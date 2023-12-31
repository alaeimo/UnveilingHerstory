import React, { Component } from "react";
import { Modal } from "react-bootstrap";


class AppInfoModal extends Component {
    state = {description:{}}
    getData = async () => {
        const data = await fetch(process.env.PUBLIC_URL + "/services/description.json")
                    .then((response) => {
                        return response.json();
                    }).then((data)=>{
                        return data;
                    });
        return data;
    }

    async componentDidMount(){
        const description = await this.getData();
        this.setState({description: description});
    }

  render() {
    const {displayDescriptionModal, onToggleDescriptionModal} = this.props;
    const {description} = this.state;
    const {period1, period2} = description;
    const {characteristic:characteristic1} = (period1 !== undefined? period1:{"characteristic":Array([])});
    const {characteristic:characteristic2} = (period2 !== undefined? period2:{"characteristic":Array([])});
    const {reference:reference1} = (period1 !== undefined? period1:{"reference":""});
    const {reference:reference2} = (period2 !== undefined? period2:{"reference":""});
    return (
      <React.Fragment>
        <Modal show={displayDescriptionModal} onHide={onToggleDescriptionModal} centered className="modal-xl modal-description">
          <Modal.Header closeButton>
          {description.course} ({description.date})
          </Modal.Header>
          <Modal.Body>
           <div className="row ">
            <div className="card">
                <div className="card-header text-center bg-white">
                <h2 className="text-center">{description.app_name}</h2>
                </div>
                <div className="card-body">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-3 d-flex align-items-center justify-content-center">
                            <img 
                            className="figure-img img-fluid rounded"
                            alt={period1? period1.title:null}
                            src={period1? period1.image_url:null} 
                            width="230"/>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-3">
                            <h3 className="d-flex justify-content-center">
                                <span><a href={reference1}>{description.period1? description.period1.title:null} </a></span>
                            </h3>
                            <h5 className="d-flex justify-content-center">
                                <span>({description.period1? description.period1.start_year:null} - </span>
                                <span>{description.period1? description.period1.end_year:null})</span>
                            </h5>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 d-flex align-items-center justify-content-center">
                            <h5 className="text-right">
                                <ul>
                                    {characteristic1.map((item)=>{
                                        return <li className="mt-4">{item}</li>
                                    })
                                    }
                                </ul>
                            </h5>
                        </div>
                    </div>
                    <div className="row d-flex align-items-center">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-3 d-flex align-items-center justify-content-center">
                        <img 
                            className="figure-img img-fluid rounded"
                            alt={period2? period2.title:null}
                            src={period2? period2.image_url:null} 
                            width="230" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-3">
                            <h3 className="d-flex justify-content-center">
                                <span><a href={reference2}>{description.period2? description.period2.title:null}</a> </span>
                            </h3>
                            <h5 className="d-flex justify-content-center">
                                <span>({description.period2? description.period2.start_year:null} - </span>
                                <span>{description.period2? description.period2.end_year:null})</span>
                            </h5>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 d-flex align-items-center justify-content-center">
                            <h5 className="text-right">
                                <ul>
                                    {characteristic2.map((item)=>{
                                        return <li className="mt-4">{item}</li>
                                    })
                                    }
                                </ul>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
           </div>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    );
  }
}

export default AppInfoModal;
