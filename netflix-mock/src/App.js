import React, { Component } from "react";
import { connect } from "react-redux";

import MovieList from "./movieList";
import * as actions from "./actions";

class App extends Component {
  render() {
    return (
      <div>
        <MovieList
          listTitle="MyList"
          movies={this.props.mylist}
          remove={this.props.remove}
        />
        <MovieList
          listTitle="Recommendations"
          movies={this.props.recom}
          add={this.props.add}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    mylist: state.mylist,
    recom: state.recom
  };
};

export default connect(
  mapStateToProps,
  actions
)(App);
