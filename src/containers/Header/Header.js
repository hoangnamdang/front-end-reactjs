import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions";
import Navigator from "../../components/Navigator";
import { adminMenu } from "./menuApp";
import "./Header.scss";
import { languages } from "../../utils/constant";
import { changeLanguage } from "../../store/actions/appActions";

class Header extends Component {
  handleChangeLanguage = (language) => {
    console.log("handleChangeLanguage", this.props);
    this.props.handlechangeLanguage(language);
  };

  render() {
    const { userLogout, lang, userInfo } = this.props;
    console.log({ adminMenu });

    return (
      <div className="header-container">
        {/* thanh navigator */}
        <div className="header-tabs-container">
          <Navigator menus={adminMenu} />
        </div>
        <div className="header-right">
          <span>Xin chào {userInfo?.userData?.firstName || ""}</span>
          <div className="header-language ml-2">
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

          {/* nút logout */}
          <div className="btn btn-logout" onClick={userLogout}>
            <i className="fas fa-sign-out-alt"></i>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    // isLoggedIn: state.admin.isLoggedIn
    isLoggedIn: state.user.isLoggedIn,
    lang: state.app.language,
    userInfo: state.user.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLogout: () => dispatch(actions.userLogout()),
    handlechangeLanguage: (language) => dispatch(changeLanguage(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
