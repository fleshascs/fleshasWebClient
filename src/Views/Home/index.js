import React, { Component } from "react";
import { NewsBanner, ServerList, LatestPosts, Box } from "../../components";

class Home extends Component {
  render() {
    console.log(this.props.match.params.name);
    return (
      <div className="container " style={{ paddingTop: "10px" }}>
        <NewsBanner
          imgPath="http://fc04.deviantart.net/fs71/f/2014/169/7/e/counter_strike__global_offensive_facebook_cover_by_rfkira-d7mvjji.png"
          title=" Priziuretoju atranka baigta, isrinkti priziuretojai: Salucha, Smurfas, Sirmuzas, fame, tifans, URAGAN"
          url="http://www.fleshas.lt/forum/viewforum.php?forum_id=17"
        />

        <div className="row mt-2">
          <div className="col-sm-4 mb-3" style={{ paddingRight: "0px" }}>
            <ServerList />
          </div>
          <div className="col">
            <LatestPosts />
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-sm-4 mb-3" style={{ paddingRight: "0px" }}>
            asd
          </div>
          <div className="col">
            <Box className="mb-5">
              <div
                className="pt-3 px-3 d-flex"
                style={{ background: "rgb(166, 192, 243)", color: "#fff" }}
              >
                <div>
                  <img
                    style={{ width: "150px" }}
                    className="position-relative"
                    src="https://vignette.wikia.nocookie.net/cso/images/c/c4/Sas_deaglebluelightning.png/revision/latest?cb=20141230080757"
                  />
                </div>
                <div className="pl-5" style={{ flex: 1 }}>
                  <h4>TOP 1 MIX žaidėjas</h4>
                </div>
              </div>
            </Box>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
