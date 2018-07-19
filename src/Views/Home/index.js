import React, { Component } from "react";
import { NewsBanner, ServerList } from "../../components";
class Home extends Component {
  render() {
    return (
      <div class="container" style={{ paddingTop: "10px" }}>
        <NewsBanner
          imgPath="http://fc04.deviantart.net/fs71/f/2014/169/7/e/counter_strike__global_offensive_facebook_cover_by_rfkira-d7mvjji.png"
          title=" Priziuretoju atranka baigta, isrinkti priziuretojai: Salucha, Smurfas, Sirmuzas, fame, tifans, URAGAN"
          url="http://www.fleshas.lt/forum/viewforum.php?forum_id=17"
        />

        <div class="row mt-3">
          <div class="col-sm-4">
            <ServerList />
          </div>
          <div class="col">forumo temos</div>
        </div>
      </div>
    );
  }
}

export default Home;
