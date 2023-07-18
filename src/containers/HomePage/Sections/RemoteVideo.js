import React, { Component } from "react";
import { connect } from "react-redux";
import "./RemoteVideo.scss";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import bg from "../../../assets/images/cot-song.jpg";

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
class RemoteVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChangeLanguage = (language) => {
    this.props.handlechangeLanguage(language);
  };

  render() {
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
        <div className="remote-video">
          <div className="remote-video-container">
            <div className="remote-video-title">
              <h1>
                <FormattedMessage id={"special.title"} />
              </h1>
              <button>Xem them</button>
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
export default connect(mapStateToProps, mapDispatchToProps)(RemoteVideo);
