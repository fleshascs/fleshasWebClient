import React, { Component } from "react";
import styled from "styled-components";

const Trololo = styled.div`
  margin-top: 100px;
  background: rgb(53, 59, 70);
  color: #909ebb;
  /* 
  padding-top: 50px !important;
  padding-bottom: 50px;
  background: url(https://strapi.io/assets/images/bg_pattern.png),
    linear-gradient(315deg, #10192a 0, #161d29 100%);
  background-size: contain;
  color: #fff;
  */
  & a {
    color: #909ebb;
  }
`;
//SELECT * FROM `gunxp_powers` gp1 WHERE (select count(*) from  `gunxp_powers` gp2 where gp1.player_id = gp2.player_id) > 1
class Footer extends Component {
  render() {
    return (
      <Trololo className="pt-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <h5>Nurodos</h5>
              <ul>
                <li>
                  <a
                    title="CS 1.6 download"
                    href="https://www.cybersports.lt/ "
                    target="_blank"
                  >
                    CS 1.6 download cybersports.lt
                  </a>
                </li>
                <li>
                  <a
                    href="http://counter-strike-download.procs.lt"
                    target="_blank"
                    title="cs 1.6 download "
                    alt="counter-strike 1.6 download , cs 1.6 download , cs 1.6 siustis , download cs 1.6"
                  >
                    cs 1.6 download
                  </a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h5>Kontaktai</h5>
              <ul>
                <li>Skype: fleshas.lt</li>
                <li>Facebook: fleshas.lt</li>
                <li>Mail: cs.fleshas.lt@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </Trololo>
    );
  }
}

export default Footer;
