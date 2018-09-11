import React, { Component } from "react";
import { Box, Spinner } from "../../../components";
import Category from "./Category";
import axios from "axios";
import config from "../../../config";

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      categoriesLoading: true,
      loadingError: false
    };
  }

  componentWillMount() {
    this.requestForForums();
  }

  requestForForums() {
    axios
      .get(config.API_URL)
      .then(response => {
        if (response.data.categories) {
          //console.log(response.data);
          this.setState({
            categories: response.data.categories,
            categoriesLoading: false
          });
          return;
        }
        throw "netinkama struktura";
      })
      .catch(error => {
        this.setState({
          categoriesLoading: false,
          loadingError: true
        });
      });
  }

  render() {
    if (this.state.loadingError) {
      return <div>ivyko klaida!</div>;
    }

    if (this.state.categoriesLoading) {
      return <Spinner />;
    }

    return (
      <Box>
        {this.state.categories.map(category => (
          <Category category={category} key={category.cid} />
        ))}
      </Box>
    );
  }
}

export default Categories;
