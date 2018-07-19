import React, { Component } from "react";
import "./UserBlock.css";

class UserBlock extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="p-2 flex-display">
        <a href="#">
          <div class="avatar user-block-avatar relative">
            <div
              style={{
                backgroundImage:
                  "url('http://fleshas.lt/images/avatars/img_0846_20160710_191617_1_1.jpg')"
              }}
              class="w-100 h-100"
            />
            <span class="avatar-footer w-100">Keisti</span>
          </div>
        </a>

        <div class="w-100 relative">
          <div class="username">fleshas.lt </div>
          <div class="usermenu flex-display">
            <span class="relative">
              <i class="material-icons active mr-3">chat_bubble</i>
              <span class="absolute label">1</span>
            </span>
            <i class="material-icons text-muted mr-3">supervised_user_circle</i>
            <i class="material-icons text-muted">&#xE8AC;</i>
          </div>
        </div>
      </div>
    );
  }
}

export default UserBlock;
