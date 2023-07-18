import React, { Component } from "react";
import { connect } from "react-redux";
import HomeHeader from "./HomeHeader";
import Popularspecialties from "./Sections/Popularspecialties";
import RemoteVideo from "./Sections/RemoteVideo";
import DoctorHighlight from "./Sections/DoctorHighlight";
import Footer from "./Sections/Footer";
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <HomeHeader />
        <Popularspecialties />
        <RemoteVideo />
        <DoctorHighlight />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {};

const mapDispatchToProps = (dispatch) => {};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
