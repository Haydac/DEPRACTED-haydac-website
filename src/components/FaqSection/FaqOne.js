import React, { Component } from "react";
import axios from "axios";
import Data from "../../json-server/db.json";

const dataObj = Data.themeOneFaqSection;

class FaqSection extends Component {
  state = {
    data: {},
    faqData: [],
    faqDataTwo: [],
  };
  componentDidMount() {
    // axios
    //   .get(`${BASE_URL}`)
    //   .then((res) => {
    //     this.setState({
    //       data: res.data,
    //       faqData: res.data.faqData,
    //       faqDataTwo: res.data.faqDataTwo,
    //     });
    //     // console.log(this.state.data)
    //   })
    //   .catch((err) => console.log(err));
    this.setState({
      data: dataObj,
      faqData: dataObj.faqData,
      faqDataTwo: dataObj.faqDataTwo,
    });
  }
  render() {
    return (
      <section id="faq" className="section faq-area style-two ptb_100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-7">
              {/* Section Heading */}
              <div className="section-heading text-center">
                <h2 className="text-capitalize" style={{ color: "white" }}>
                  {this.state.data.heading}
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12">
              {/* FAQ Content */}
              <div className="faq-content">
                {/* sApp Accordion */}
                <div className="accordion" id="sApp-accordion">
                  <div className="row justify-content-center">
                    <div className="col-12 col-md-6">
                      {/* Single Card */}
                      {this.state.faqData.map((item, idx) => {
                        return (
                          <div
                            key={`fo_${idx}`}
                            className="card border-0"
                            style={{
                              backgroundColor: "inherit",
                              color: "white",
                              fontSize: "17px",
                              fontWeight: 100,
                            }}
                          >
                            {/* Card Header */}
                            <div className="card-header bg-inherit border-0 p-0">
                              <h2 className="mb-0">
                                <button
                                  className="btn px-0 py-2"
                                  type="button"
                                  style={{ fontSize: "20px" }}
                                >
                                  {item.title}
                                </button>
                              </h2>
                            </div>
                            {/* Card Body */}
                            <div className="card-body px-0 py-3">
                              {item.content}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="col-12 col-md-6">
                      {/* Single Card */}
                      {this.state.faqDataTwo.map((item, idx) => {
                        return (
                          <div
                            key={`ft_${idx}`}
                            className="card border-0"
                            style={{
                              backgroundColor: "inherit",
                              color: "white",
                              fontSize: "17px",
                              fontWeight: 100,
                            }}
                          >
                            {/* Card Header */}
                            <div className="card-header bg-inherit border-0 p-0">
                              <h2 className="mb-0">
                                <button
                                  className="btn px-0 py-2"
                                  type="button"
                                  style={{ fontSize: "20px" }}
                                >
                                  {item.title}
                                </button>
                              </h2>
                            </div>
                            {/* Card Body */}
                            <div className="card-body px-0 py-3">
                              {item.content}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FaqSection;
