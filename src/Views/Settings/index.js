import React, { Component } from "react";
import { Avatar, AvatarUpload, Box } from "../../components";
import styled from "styled-components";
import { connect } from "react-redux";
import { Redirect } from "react-router";

const Button = styled.button`
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  //background-color: ${props => props.theme.PRIMARY_COLOR};
  //border-color: ${props => props.theme.PRIMARY_COLOR};
`;

const AvatarUpload2 = styled(Avatar)`
  cursor: pointer;

  &:hover {
    box-shadow: none;
  }
`;

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      avatar: "",
      formEdited: false,
      skype: "live:qweqwewqewqe",
      steamId: "STEAM_0:1:9204252",
      steamVerified: false
    };

    this.fileUpload = React.createRef();
    this.openFileUpload = this.openFileUpload.bind(this);
    this.onAvatarChange = this.onAvatarChange.bind(this);
  }
  render() {
    const { user, loggedIn } = this.props;

    if (!loggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <div
        style={{
          margin: "0 auto",
          maxWidth: "700px"
        }}
      >
        <Box className="mt-5 p-3">
          {/* <AvatarUpload2
          onClick={this.openFileUpload}
          imgUrl="http://fleshas.lt/images/avatars/giphy.gif"
          size="meddium"
        /> */}
          <div className="d-flex">
            <div>
              <AvatarUpload
                src={this.state.avatar || user.avatar}
                size="meddium"
                onClick={this.openFileUpload}
              />

              <FileUpload
                ref={this.fileUpload}
                onAvatarChange={this.onAvatarChange}
              />
            </div>
            <div className="col">
              {this.state.formEdited ? (
                <Button
                  className="btn btn-success float-right"
                  onClick={() => {
                    this.setState({ editMode: !this.state.editMode });
                  }}
                >
                  <i className="material-icons">done</i> Išsaugoti
                </Button>
              ) : (
                <Button
                  className="btn btn-primary float-right"
                  onClick={() => {
                    this.setState({ editMode: !this.state.editMode });
                  }}
                >
                  <i className="material-icons">edit</i> Redaguoti
                </Button>
              )}
            </div>
          </div>

          <table className="table mt-5">
            <tbody>
              <tr>
                <td className="text-muted">Vardas</td>
                <td>{user.name}</td>
              </tr>
              <tr>
                <td className="text-muted">El. paštas</td>
                <td>{user.email}</td>
              </tr>
              <tr>
                <td className="text-muted">Skype</td>
                <td>
                  <EditMode
                    editMode={this.state.editMode}
                    value={this.state.skype}
                  />
                </td>
              </tr>
              <tr>
                <td className="text-muted">Steam ID</td>
                <td>
                  <EditMode
                    editMode={this.state.editMode}
                    value={this.state.steamId}
                  />
                  {!this.state.editMode ? (
                    <Button className="btn btn-primary float-right">
                      <i className="material-icons">done</i> Patvirtinti su
                      Steam
                    </Button>
                  ) : null}
                </td>
              </tr>
            </tbody>
          </table>

          {this.state.editMode ? (
            <Button className="btn btn-primary float-right">
              <i className="material-icons">done</i> Išsaugoti pakeitimus
            </Button>
          ) : null}

          <h4 className="mt-5">Keisti slaptažodį</h4>

          <form>
            <table className="table mt-5">
              <tbody>
                <tr>
                  <td>Prisijungimo slaptažodis</td>
                  <td>
                    <input type="password" className="form-control" />
                  </td>
                </tr>
                <tr>
                  <td>Naujas slaptažodis</td>
                  <td>
                    <input type="password" className="form-control" />
                  </td>
                </tr>
                <tr>
                  <td>Naujas slaptažodis</td>
                  <td>
                    <input type="password" className="form-control" />
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </Box>
      </div>
    );
  }

  onAvatarChange(event) {
    const input = event.target;
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = e => {
        this.setState({ avatar: e.target.result, formEdited: true });
      };

      reader.readAsDataURL(input.files[0]);
    }
  }

  openFileUpload() {
    this.fileUpload.current.openFileUpload();
  }
}

function mapStateToProps(state) {
  const { loggedIn, user } = state.authentication;
  return {
    loggedIn,
    user
  };
}
export default connect(mapStateToProps)(Settings);

class EditMode extends Component {
  render() {
    if (this.props.editMode) {
      return (
        <input type="text" className="form-control" value={this.props.value} />
      );
    }

    return <span>{this.props.value}</span>;
  }
}

const Form = styled.form`
  display: none;
`;

class FileUpload extends Component {
  constructor(props) {
    super(props);

    this.input = React.createRef();
  }

  openFileUpload() {
    this.input.current.click();
  }

  getFIles() {
    return this.input.current.files[0];
  }

  render() {
    return (
      <Form enctype="multipart/form-data">
        <input
          onChange={this.props.onAvatarChange}
          type="file"
          name="file"
          ref={this.input}
        />
      </Form>
    );
  }
}

/*     var formData = new FormData();
var imagefile = document.querySelector('#file');
formData.append("image", imagefile.files[0]);
axios.post('upload_file', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
}) */
