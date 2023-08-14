import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, FormGroup, Label, Input, Row, Col } from "reactstrap";
import {
  handleGetDataAllCodeByType,
  saveDataUser,
  handleGetAllUser,
  handleDeleteUser,
  handleEditUser,
} from "../../../services/userService";
import { userGetGenders } from "../../../store/actions/userActions";
class UserRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genders: [],
      listUser: [],
      listRole: [],
      listPosition: [],
      dataForm: {
        id: "",
        email: "",
        password: "",
        firstname: "",
        lastname: "",
        phonenumber: "",
        address: "",
        position: "",
        gender: "",
        role: "",
        file: "",
        bgFile: "",
      },
      mode: "add",
    };
  }

  getDataGender = async () => {
    const result = await handleGetDataAllCodeByType("GENDER");
    if (result.errCode === 0) {
      this.props.getGender(result.data);
    }
  };

  onSave = async () => {
    const { dataForm, file, mode } = this.state;
    const newUser = {
      ...dataForm,
      avatar: file,
    };
    if (mode === "edit") {
      const result = await handleEditUser(newUser);
      if (result.errCode === 0) {
        this.setState({ mode: "add" });
        this.getAllUser();
      }
    } else {
      const result = await saveDataUser(newUser);
      if (result.errCode === 0) {
        this.getAllUser();
      }
    }
  };

  getAllUser = async (type = "ALL") => {
    const response = await handleGetAllUser(type);
    if (response.errCode === 0) {
      this.setState({
        listUser: response.userData,
        dataForm: { ...this.state.dataForm, bgFile: "", file: "" },
      });
    }
  };

  getAllRole = async (type = "ROLE") => {
    const response = await handleGetDataAllCodeByType(type);
    if (response.errCode === 0) {
      this.setState({
        listRole: response.data,
      });
    }
  };

  getAllPosition = async (type = "POSITION") => {
    const response = await handleGetDataAllCodeByType(type);
    if (response.errCode === 0) {
      this.setState({
        listPosition: response.data,
      });
    }
  };

  componentDidMount() {
    this.getDataGender();
    this.getAllUser();
    this.getAllRole();
    this.getAllPosition();
  }

  handleChangeFile = (event) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(event.target.files[0]);
    fileReader.onload = () => {
      this.setState({
        file: fileReader.result,
        bgFile: window.URL.createObjectURL(event.target.files[0]),
      });
    };
    fileReader.onerror = (error) => {
      console.log(error);
    };
  };

  handleChange = (event) => {
    this.setState({
      dataForm: {
        ...this.state.dataForm,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleEdit = async (id) => {
    this.setState({ mode: "edit" });
    const response = await handleGetAllUser(id);
    if (response.errCode === 0) {
      const blob = new Buffer.from(
        response.userData.image.data,
        "base64"
      ).toString("binary");
      this.setState({
        dataForm: {
          ...response.userData,
          bgFile: blob,
        },
      });
    }
  };

  handleDelete = async (id) => {
    const response = await handleDeleteUser(id);
    console.log({ response });
    if (response.errorCode === 0) {
      this.getAllUser();
    }
  };

  render() {
    const { language, genders } = this.props;
    const { dataForm, listUser, mode, listPosition, listRole } = this.state;
    return (
      <div className="container mt-4">
        <Row>
          <Col sm={3}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                disabled={mode === "edit"}
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="with a placeholder"
                value={dataForm.email}
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
          <Col sm={3}>
            <FormGroup>
              <Label for="password">password</Label>
              <Input
                disabled={mode === "edit"}
                type="password"
                name="password"
                id="password"
                placeholder="with a placeholder"
                onChange={this.handleChange}
                value={dataForm.password}
              />
            </FormGroup>
          </Col>
          <Col sm={3}>
            <FormGroup>
              <Label for="firstname">FirstName</Label>
              <Input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="with a placeholder"
                onChange={this.handleChange}
                value={dataForm.firstName}
              />
            </FormGroup>
          </Col>
          <Col sm={3}>
            <FormGroup>
              <Label for="lastname">Last name</Label>
              <Input
                type="text"
                name="lastName"
                id="lastname"
                placeholder="with a placeholder"
                onChange={this.handleChange}
                value={dataForm.lastName}
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
                name="phoneNumber"
                id="phonenumber"
                placeholder="with a placeholder"
                onChange={this.handleChange}
                value={dataForm.phoneNumber}
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
                onChange={this.handleChange}
                value={dataForm.address}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <FormGroup>
              <Label for="gender">Gender</Label>
              <Input
                type="select"
                name="gender"
                id="gender"
                onChange={this.handleChange}
                value={dataForm.gender}
              >
                {genders &&
                  genders.map((d) => {
                    return (
                      <option key={d.id} value={d.key}>
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
              <Input
                type="select"
                name="position"
                id="position"
                onChange={this.handleChange}
                value={dataForm.position}
              >
                {listPosition?.map((d) => {
                  return (
                    <option key={d.id} value={d.key}>
                      {" "}
                      {language === "vi" ? d.valueVi : d.valueEn}
                    </option>
                  );
                })}
              </Input>
            </FormGroup>
          </Col>
          <Col sm={3}>
            <FormGroup>
              <Label for="role">role</Label>
              <Input
                type="select"
                name="role"
                id="role"
                onChange={this.handleChange}
                value={dataForm.role}
              >
                {listRole?.map((d) => {
                  return (
                    <option key={d.id} value={d.key}>
                      {" "}
                      {language === "vi" ? d.valueVi : d.valueEn}
                    </option>
                  );
                })}
              </Input>
            </FormGroup>
          </Col>
          <Col sm={3}>
            <FormGroup>
              <Label for="exampleFile">File</Label>
              <Input
                type="file"
                name="file"
                id="exampleFile"
                onChange={this.handleChangeFile}
              />
              <div
                style={{
                  width: 100,
                  height: 100,
                  border: "1px solid black",
                  background: `url(${dataForm.bgFile})`,
                }}
              ></div>
              <img src={`${dataForm.bgFile}`} width={200} height={200} alt="" />
            </FormGroup>
          </Col>
        </Row>
        <Button color="primary" onClick={this.onSave}>
          Save
        </Button>
        <div className="mt-5">
          <table class="table">
            <thead class="table-dark">
              <tr>
                <th>Email</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Phone Number</th>
                <th>Address</th>
                <th>Gender</th>
                <th>Position</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {listUser.length > 0 &&
                listUser.map((d) => {
                  return (
                    <tr key={d.id}>
                      <td>{d.email}</td>
                      <td>{d.firstName}</td>
                      <td>{d.lastName}</td>
                      <td>{d.phoneNumber}</td>
                      <td>{d.address}</td>
                      <td>{d.gender}</td>
                      <td>{d.positionId}</td>
                      <td>{d.roleId}</td>
                      <td>
                        <div>
                          <Button
                            className="btn btn-warning mr-3"
                            onClick={() => this.handleEdit(d.id)}
                          >
                            Edit
                          </Button>
                          <Button
                            className="btn btn-dander"
                            onClick={() => this.handleDelete(d.id)}
                          >
                            Delete
                          </Button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    genders: state.user.genders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGender: (data) => dispatch(userGetGenders(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
