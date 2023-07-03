import React, { Component } from "react";
import { connect } from "react-redux";
import {
  handleGetAllUser,
  handleDeleteUser,
  handleAddNewUser,
  handleEditUser,
} from "../../services/userService";
import PopupUser from "../../components/Popup/PopupUser";
import { Button } from "reactstrap";
class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listUser: [],
      isOpenPopup: false,
      title: "",
      mode: "",
      dataUser: {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
      },
    };
  }

  getAllUser = async () => {
    const data = await handleGetAllUser("ALL");
    if (data && data.errCode === 0) {
      this.setState({ listUser: data?.userData || [] });
    }
  };

  async componentDidMount() {
    await this.getAllUser();
  }

  componentWillUnmount() {
    this.setState({ listUser: [] });
  }

  async deleteUser(id) {
    const data = await handleDeleteUser(id);
    if (data && data.errorCode === 0) {
      await this.getAllUser();
    }
  }
  onOpen = () => {
    this.setState({ isOpenPopup: true });
  };

  onClose = () => {
    this.setState({ isOpenPopup: false, dataUser: {} });
  };

  getUserById = async (id) => {
    const data = await handleGetAllUser(id);
    if (data && data.errCode === 0) {
      this.setState({
        dataUser: data?.userData || [],
        mode: "edit",
        title: "Edit user",
      });
    }
  };

  onHanleChange = (evt, key) => {
    const value = evt.target.value;
    this.setState({
      dataUser: {
        ...this.state.dataUser,
        [key]: value,
      },
    });
  };

  onSaveUser = async () => {
    const { mode, dataUser } = this.state;
    const param = {
      ...dataUser,
    };
    let data = {};
    if (mode === "add") {
      data = await handleAddNewUser(param);
    }
    if (mode === "edit") {
      data = await handleEditUser({
        id: dataUser.id,
        firstName: dataUser.firstName,
        lastName: dataUser.lastName,
      });
    }
    if (data.errCode === 0) {
      this.onClose();
      this.getAllUser();
    }
  };

  render() {
    const { listUser, isOpenPopup, dataUser, title } = this.state;
    return (
      <div className="container">
        {isOpenPopup && (
          <PopupUser
            title={title}
            isOpen={isOpenPopup}
            onClose={this.onClose}
            onHanleChange={this.onHanleChange}
            data={dataUser}
            onSave={this.onSaveUser}
          />
        )}

        <div className="mt-2 mb-2">
          <Button
            color="danger"
            onClick={() => {
              this.onOpen();
              this.setState({ mode: "add", title: "Add user" });
            }}
          >
            Add new user
          </Button>
        </div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>STT</th>
              <th>Email</th>
              <th>firstName</th>
              <th>lastName</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {listUser.length > 0 &&
              listUser.map((item, idx) => {
                return (
                  <tr key={idx}>
                    <td>{idx}</td>
                    <td>{item.email}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.address}</td>
                    <td>
                      <button
                        onClick={() => {
                          this.onOpen();
                          this.getUserById(item.id);
                        }}
                        className="btn btn-warning btn-sm p-2 mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => this.deleteUser(item.id)}
                        className="btn btn-danger btn-sm p-2"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
