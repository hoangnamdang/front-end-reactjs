import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, FormGroup, Label, Input, Row, Col } from "reactstrap";
import { handleGetDataAllCodeByType } from "../../../services/userService";
class UserRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genders: [],
    };
  }

  getDataGender = async () => {
    const result = await handleGetDataAllCodeByType("GENDER");
    if (result.errCode === 0) {
      this.setState({ genders: result.data });
    }
  };
  componentDidMount() {
    this.getDataGender();
  }

  render() {
    const { language } = this.props;
    const { genders } = this.state;
    console.log({ genders });
    return (
      <div className="container mt-4">
        <Row>
          <Col sm={3}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="with a placeholder"
              />
            </FormGroup>
          </Col>
          <Col sm={3}>
            <FormGroup>
              <Label for="password">password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="with a placeholder"
              />
            </FormGroup>
          </Col>
          <Col sm={3}>
            <FormGroup>
              <Label for="firstname">FirstName</Label>
              <Input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="with a placeholder"
              />
            </FormGroup>
          </Col>
          <Col sm={3}>
            <FormGroup>
              <Label for="lastname">Last name</Label>
              <Input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="with a placeholder"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <FormGroup>
              <Label for="phonenumber">Phone number</Label>
              <Input
                type="text"
                name="phonenumber"
                id="phonenumber"
                placeholder="with a placeholder"
              />
            </FormGroup>
          </Col>
          <Col sm={3}>
            <FormGroup>
              <Label for="address">Address</Label>
              <Input
                type="text"
                name="address"
                id="address"
                placeholder="with a placeholder"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <FormGroup>
              <Label for="gender">Gender</Label>
              <Input type="select" name="select" id="gender">
                {genders &&
                  genders.map((d) => {
                    return (
                      <option key={d.id}>
                        {language === "vi" ? d.valueVi : d.valueEn}
                      </option>
                    );
                  })}
              </Input>
            </FormGroup>
          </Col>
          <Col sm={3}>
            <FormGroup>
              <Label for="position">position</Label>
              <Input type="select" name="select" id="position">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
          </Col>
          <Col sm={3}>
            <FormGroup>
              <Label for="role">role</Label>
              <Input type="select" name="select" id="role">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
          </Col>
          <Col sm={3}>
            <FormGroup>
              <Label for="exampleFile">File</Label>
              <Input type="file" name="file" id="exampleFile" />
            </FormGroup>
          </Col>
        </Row>
        <Button color="primary">Save</Button>
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
