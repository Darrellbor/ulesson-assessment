import React, { Component } from "react";

//context
import Context from "../context";

class Subjects extends Component {
  state = {
    subjects: [],
  };

  setSubjects = async () => {
    let subjects = await fetch(
      "https://jackiechanbruteforce.ulesson.com/3p/api/content/grade",
      { method: "GET" }
    );

    subjects = await subjects.json();
    this.setState({ subjects });
  };

  render() {
    return (
      <Context.Provider
        value={{
          subjects: this.state.subjects,
          setSubjects: this.setSubjects,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Subjects;
