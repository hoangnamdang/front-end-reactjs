import React, { Component } from "react";
import { connect } from "react-redux";
import "./DoctorHighlight.scss";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import bg from "../../../assets/images/092249-doctor-check.jpg";
import { getDoctorHightligh } from "../../../services/doctorService";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}
class DoctorHighlight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listDoctor: [],
    };
  }

  handleChangeLanguage = (language) => {
    this.props.handlechangeLanguage(language);
  };

  componentDidMount = async () => {
    const response = await getDoctorHightligh();
    if (response.errCode === 0) {
      this.setState({ listDoctor: response.listDoctor });
    }
  };
  render() {
    const { listDoctor } = this.state;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <React.Fragment>
        <div className="doctor-highlight">
          <div className="doctor-highlight-container">
            <div className="doctor-highlight-title">
              <h1>
                <FormattedMessage id={"special.title"} />
              </h1>
              <button>Tim kiem</button>
            </div>
            <Slider {...settings}>
              <div className="special-slide-item">
                <div
                  className="special-slide-image"
                  style={{
                    backgroundImage: `url(${bg})`,
                  }}
                ></div>
                <h5>Tai mũi họng</h5>
              </div>
              <div className="special-slide-item">
                <div
                  className="special-slide-image"
                  style={{
                    backgroundImage: `url(${bg})`,
                  }}
                ></div>
                <h5>Tai mũi họng</h5>
              </div>
              <div className="special-slide-item">
                <div
                  className="special-slide-image"
                  style={{
                    backgroundImage: `url(${bg})`,
                  }}
                ></div>
                <h5>Tai mũi họng</h5>
              </div>
              <div className="special-slide-item">
                <div
                  className="special-slide-image"
                  style={{
                    backgroundImage: `url(${bg})`,
                  }}
                ></div>
                <h5>Tai mũi họng</h5>
              </div>
              <div className="special-slide-item">
                <div
                  className="special-slide-image"
                  style={{
                    backgroundImage: `url(${bg})`,
                  }}
                ></div>
                <h5>Tai mũi họng</h5>
              </div>
              <div className="special-slide-item">
                <div
                  className="special-slide-image"
                  style={{
                    backgroundImage: `url(${bg})`,
                  }}
                ></div>
                <h5>Tai mũi họng</h5>
              </div>
              <div className="special-slide-item">
                <div
                  className="special-slide-image"
                  style={{
                    backgroundImage: `url(${bg})`,
                  }}
                ></div>
                <h5>Tai mũi họng</h5>
              </div>
              <div className="special-slide-item">
                <div
                  className="special-slide-image"
                  style={{
                    backgroundImage: `url(${bg})`,
                  }}
                ></div>
                <h5>Tai mũi họng</h5>
              </div>
            </Slider>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(DoctorHighlight);
