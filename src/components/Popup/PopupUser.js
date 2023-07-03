import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

class PopupUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}
  close = () => {
    const { onClose } = this.props;
    onClose && onClose();
  };

  onSave = () => {
    const { onSave } = this.props;
    onSave && onSave();
  };

  render() {
    const { isOpen, title, data, onHanleChange } = this.props;
    return (
      <div>
        <Modal
          isOpen={isOpen}
          modalTransition={{ timeout: 200 }}
          backdropTransition={{ timeout: 300 }}
          toggle={() => this.close()}
        >
          <ModalHeader toggle={() => this.close()}>{title}</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                id="exampleEmail"
                name="email"
                defaultValue={data.email}
                placeholder="with a placeholder"
                type="email"
                onChange={(evt) => onHanleChange(evt, "email")}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">PassWord</Label>
              <Input
                id="password"
                defaultValue={data.password}
                name="password"
                type="password"
                placeholder="with a placeholder"
                onChange={(evt) => onHanleChange(evt, "password")}
              />
            </FormGroup>
            <FormGroup>
              <Label for="firstName">FirstName</Label>
              <Input
                id="firstName"
                name="firstName"
                defaultValue={data.firstName}
                placeholder="with a placeholder"
                onChange={(evt) => onHanleChange(evt, "firstName")}
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">LastName</Label>
              <Input
                id="lastName"
                name="lastName"
                defaultValue={data.lastName}
                placeholder="with a placeholder"
                onChange={(evt) => onHanleChange(evt, "lastName")}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.onSave()}>
              Save
            </Button>{" "}
            <Button color="secondary" onClick={() => this.close()}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default PopupUser;
