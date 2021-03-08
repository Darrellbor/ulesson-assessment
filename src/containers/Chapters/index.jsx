import React, { Component } from "react";

//context
import Context from "../../store/context";

//components
import Header from "../../components/Header";

class Chapters extends Component {
  async componentDidMount() {
    await this.setSubjects();
  }

  setSubjects = async () => {
    if (!this.context.subjects || this.context.subjects.length === 0) {
      await this.context.setSubjects();
    }
  };

  render() {
    return (
      <div className="Chapters">
        <Header />
      </div>
    );
  }
}

Chapters.contextType = Context;

export default Chapters;
