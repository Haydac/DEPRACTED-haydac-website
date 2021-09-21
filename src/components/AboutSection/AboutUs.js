import React, { Component } from "react";
import Data from "../../json-server/db.json";
const dataObj = Data.themeOneAboutUs;

class AboutSection extends Component {
  state = {
    data: {},
  };
  componentDidMount() {
    this.setState({
      data: dataObj,
    });
  }

  render() {
    return (
      <section
        id="about"
        className="section price-plan-area bg-gray overflow-hidden ptb_100"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-7">
              {/* Section Heading */}
              <div className="section-heading text-center">
                <h2>{this.state.data.heading}</h2>
                <p className="d-none d-sm-block mt-4">
                  {this.state.data.headingText}
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-12 col-lg-6 order-2 order-lg-1">
                {/* image here */}
                <div className="about-thumb mx-auto">
                  <img src={this.state.data.studentImage} alt="" />
                </div>
              </div>
              <div className="col-12 col-lg-6 order-1 order-lg-2">
                {/* user story */}
                <div className="discover-text pt-4 pt-lg-0">
                  <p className="d-none d-sm-block pt-3 pb-4 about-text">
                    {this.state.data.story}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutSection;
