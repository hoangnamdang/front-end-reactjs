import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import { FormattedMessage } from "react-intl";
import { changeLanguage } from "../../store/actions/appActions";
import { languages } from "../../utils/constant";
class HomeHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChangeLanguage = (language) => {
    this.props.handlechangeLanguage(language);
  };
  render() {
    const { lang } = this.props;
    console.log(this.props);
    return (
      <React.Fragment>
        <div className="home-header-container">
          <div className="home-header-content">
            <div className="left-content">
              <i class="fa-solid fa-bars home-icon-memu"></i>
              <div className="header-logo"></div>
            </div>
            <div className="center-content">
              <ul className="home-list-menu">
                <li className="home-item-menu">
                  <a className="home-item-link" href="#">
                    <h6 className="title-menu">
                      <FormattedMessage id={"header.specialist"} />
                    </h6>
                    <p className="title-description">
                      <FormattedMessage
                        id={"header.find-a-doctor-by-specialty"}
                      />
                    </p>
                  </a>
                </li>
                <li className="home-item-menu">
                  <a className="home-item-link" href="#">
                    <h6 className="title-menu">Chuyên khoa</h6>
                    <p className="title-description">
                      Tìm bác sĩ theo chuyên khoa
                    </p>
                  </a>
                </li>
                <li className="home-item-menu">
                  <a className="home-item-link" href="#">
                    <h6 className="title-menu">Chuyên khoa</h6>
                    <p className="title-description">
                      Tìm bác sĩ theo chuyên khoa
                    </p>
                  </a>
                </li>
                <li className="home-item-menu">
                  <a className="home-item-link" href="#">
                    <h6 className="title-menu">Chuyên khoa</h6>
                    <p className="title-description">
                      Tìm bác sĩ theo chuyên khoa
                    </p>
                  </a>
                </li>
              </ul>
            </div>
            <div className="right-content">
              <div className="title-support">
                <p>
                  <i class="icon-question fa-regular fa-circle-question"></i>Hỗ
                  trợ
                </p>
              </div>
              <div className="home-change-language">
                <span
                  onClick={() => this.handleChangeLanguage(languages.VI)}
                  className={`flag-vi ${lang === "vi" ? "active" : ""} `}
                >
                  VI <i class="fa-solid fa-flag"></i>
                </span>
                <span
                  onClick={() => this.handleChangeLanguage(languages.EN)}
                  className={`flag-en ${lang === "en" ? "active" : ""} `}
                >
                  EN <i class="fa-regular fa-flag"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-header-banner">
          <div className="home-background-banner">
            <div>
              <div className="title-home-banner">
                <h1 className="title-banner-small">Nền tảng y tế</h1>
                <h1 className="title-banner-big">
                  Chăm sóc sức khoẻ toàn diện
                </h1>
              </div>
              <div className="input-filter-banner">
                <div className="block-input">
                  <i class="fa-solid fa-magnifying-glass"></i>
                  <input
                    type="text"
                    placeholder="Tim kiem"
                    className="input-filter"
                  />
                </div>
              </div>
              <ul className="home-list-selection">
                <li className="home-item-selection">
                  <a href="#" className="home-link-selection">
                    <div className="block-selection">
                      <i class="fa-solid fa-hospital"></i>
                      <p className="title-selection">Khám nha khoa</p>
                    </div>
                  </a>
                </li>
                <li className="home-item-selection">
                  <a href="#" className="home-link-selection">
                    <div className="block-selection">
                      <i class="fa-solid fa-hospital"></i>
                      <p className="title-selection">Khám nha khoa</p>
                    </div>
                  </a>
                </li>
                <li className="home-item-selection">
                  <a href="#" className="home-link-selection">
                    <div className="block-selection">
                      <i class="fa-solid fa-hospital"></i>
                      <p className="title-selection">Khám nha khoa</p>
                    </div>
                  </a>
                </li>
                <li className="home-item-selection">
                  <a href="#" className="home-link-selection">
                    <div className="block-selection">
                      <i class="fa-solid fa-hospital"></i>
                      <p className="title-selection">Khám nha khoa</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
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
  return {
    handlechangeLanguage: (language) => dispatch(changeLanguage(language)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
