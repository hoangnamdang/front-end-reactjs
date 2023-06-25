import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import * as userService from "../../services/userService";
import * as actions from "../../store/actions";
import "./Login.scss";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      isShowPassWord: false,
      errorMessage: "",
    };
  }

  handleChangeInput = (evt, key) => {
    const value = evt.target.value;
    this.setState({ [key]: value });
  };

  handleLogin = async () => {
    const { userName, password } = this.state;
    console.log(this.state);
    try {
      const data = await userService.handleLoginUser(userName, password);
      console.log(data);
      if (data.errorCode === 1) {
        this.setState({ errorMessage: data.message });
      } else {
        this.props.userLoginSuccess(data);
        this.setState({ errorMessage: "" });
      }
    } catch (error) {
      this.setState({ errorMessage: error.message });
    }
  };
  render() {
    return (
      <div className="login-background">
        <div className="login-container">
          <div className="login-content row pt-4">
            <section className="vh-100 gradient-custom">
              <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card bg-dark text-white">
                      <div className="card-body p-5 text-center">
                        <div className="mb-md-5 mt-md-4 pb-5">
                          <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                          <p className="text-white-50 mb-5">
                            Please enter your login and password!
                          </p>

                          <div className="form-outline form-white mb-4">
                            <input
                              type="email"
                              id="typeEmailX"
                              className="form-control form-control-lg"
                              defaultValue={this.state.userName}
                              onChange={(evt) =>
                                this.handleChangeInput(evt, "userName")
                              }
                            />
                            <label className="form-label">Email</label>
                          </div>

                          <div className="form-outline form-white mb-4">
                            <input
                              type={
                                this.state.isShowPassWord ? "text" : "password"
                              }
                              id="typePasswordX"
                              className="form-control form-control-lg"
                              defaultValue={this.state.password}
                              onChange={(evt) =>
                                this.handleChangeInput(evt, "password")
                              }
                            />
                            <i
                              className={`${
                                this.state.isShowPassWord
                                  ? "fas fa-eye-slash"
                                  : "fas fa-eye"
                              } field-icon toggle-password`}
                              onClick={() =>
                                this.setState({
                                  isShowPassWord: !this.state.isShowPassWord,
                                })
                              }
                            ></i>
                            <label className="form-label">Password</label>
                          </div>

                          <p className="small mb-5 pb-lg-2">
                            <a className="text-white-50" href="#!">
                              Forgot password?
                            </a>
                          </p>
                          <p style={{ color: "red" }}>
                            {this.state.errorMessage}
                          </p>
                          <button
                            className="btn btn-outline-light btn-lg px-5"
                            onClick={() => this.handleLogin()}
                          >
                            Login
                          </button>

                          <div className="d-flex justify-content-center text-center mt-4 pt-1">
                            <a href="#!" className="text-white">
                              <i className="fab fa-facebook-f fa-lg"></i>
                            </a>
                            <a href="#!" className="text-white">
                              <i className="fab fa-twitter fa-lg mx-4 px-2"></i>
                            </a>
                            <a href="#!" className="text-white">
                              <i className="fab fa-google fa-lg"></i>
                            </a>
                          </div>
                        </div>

                        <div>
                          <p className="mb-0">
                            Don't have an account?{" "}
                            <a href="#!" className="text-white-50 fw-bold">
                              Sign Up
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    adminLoginSuccess: (adminInfo) =>
      dispatch(actions.adminLoginSuccess(adminInfo)),
    adminLoginFail: () => dispatch(actions.adminLoginFail()),
    userLoginSuccess: (userInfo) =>
      dispatch(actions.userLoginSuccess(userInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
