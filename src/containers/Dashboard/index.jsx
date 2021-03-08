import React, { Component } from "react";
import { Link } from "react-router-dom";

//context
import Context from "../../store/context";

//components
import Header from "../../components/Header";

//icons
import MathIcon from "../../components/Icons/MathIcon";
import PhyIcon from "../../components/Icons/PhyIcon";
import ChemIcon from "../../components/Icons/ChemIcon";
import BioIcon from "../../components/Icons/BioIcon";
import EngIcon from "../../components/Icons/EngIcon";

class Dashboard extends Component {
  async componentDidMount() {
    await this.setSubjects();
  }

  setSubjects = async () => {
    if (!this.context.subjects || this.context.subjects.length === 0) {
      await this.context.setSubjects();
    }
  };

  setIcon = (name) => {
    switch (name) {
      case "Mathematics":
        return <MathIcon />;
      case "Physics":
        return <PhyIcon />;
      case "Chemistry":
        return <ChemIcon />;
      case "Biology":
        return <BioIcon />;
      case "English":
        return <EngIcon />;
      default:
        break;
    }
  };

  setClassName = (name) => {
    switch (name) {
      case "Mathematics":
        return "math";
      case "Physics":
        return "phy";
      case "Chemistry":
        return "chem";
      case "Biology":
        return "bio";
      case "English":
        return "eng";
      default:
        break;
    }
  };

  render() {
    const subjects =
      this.context &&
      this.context.subjects &&
      this.context.subjects.data &&
      this.context.subjects.data.subjects
        ? this.context.subjects.data.subjects
        : null;

    return (
      <div className="Dashboard">
        <Header />
        <br />

        <div className="Dashboard__content">
          <h1>Hello Darrel,</h1>
          <br />
          <div className="Dashboard__subjects">
            {subjects &&
              subjects.map((subject) => (
                <Link key={subject.id} to={`/chapters/${subject.id}`}>
                  <div
                    className={`Dashboard__subject__${this.setClassName(
                      subject.name
                    )}`}
                  >
                    {this.setIcon(subject.name)}
                    <br />
                    <div
                      className={`Dashboard__subject__text ${
                        subject.name === "Mathematics" &&
                        "Dashboard__subject__text--math"
                      } `}
                    >
                      {subject.name === "English"
                        ? "English Language"
                        : subject.name}
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.contextType = Context;

export default Dashboard;
