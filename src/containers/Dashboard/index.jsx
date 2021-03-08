import React, { Component } from "react";
import { Link } from "react-router-dom";

//context
import Context from "../../store/context";

//components
import Header from "../../components/Header";
import Button from "../../components/Button";

//icons
import MathIcon from "../../components/Icons/MathIcon";
import PhyIcon from "../../components/Icons/PhyIcon";
import ChemIcon from "../../components/Icons/ChemIcon";
import BioIcon from "../../components/Icons/BioIcon";
import EngIcon from "../../components/Icons/EngIcon";

class Dashboard extends Component {
  state = {
    lessons: [],
  };

  async componentDidMount() {
    await this.setSubjects();
    this.getLessons();
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

  getLessons = () => {
    if (
      this.context &&
      this.context.subjects &&
      this.context.subjects.data &&
      this.context.subjects.data.subjects
    ) {
      let lessons = [],
        temp = [],
        selected = [];
      const subjects = this.context.subjects.data.subjects;

      for (let subject of subjects) {
        for (let chapter of subject.chapters) {
          temp = [...temp, ...chapter.lessons];
        }
      }

      //mock recently watched topics
      for (let i = 0; i < 5; i++) {
        const randId = Math.floor(Math.random() * temp.length);

        if (selected.indexOf(randId) < 0) {
          lessons.push(temp[randId]);
        }

        selected.push(randId);
      }

      this.setState({ lessons });
    }
  };

  getSubject = (id) => {
    if (
      this.context &&
      this.context.subjects &&
      this.context.subjects.data &&
      this.context.subjects.data.subjects
    ) {
      const subjects = this.context.subjects.data.subjects;

      return subjects.filter((subject) => subject.id === parseInt(id, 10))[0];
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
    const lessons = this.state.lessons;

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
          </div>{" "}
          <br />
          <div className="Dashboard__recent">
            <div className="Dashboard__recent__header">
              <h3>Recently watched topics</h3>
              <Button type="button">See All</Button>
            </div>

            <div className="Dashboard__recent__items">
              {lessons &&
                lessons.map((lesson) => (
                  <Link
                    key={lesson.id}
                    to={`/video/${lesson.subject_id}/${lesson.chapter_id}/${lesson.id}`}
                  >
                    <div className="Dashboard__recent__item">
                      <div className="Dashboard__recent__item__img">
                        <img src={lesson.icon} alt="Comparison" />
                      </div>
                      <br />
                      <div
                        className={`Dashboard__recent__item__subject Dashboard__recent__item__subject--${this.setClassName(
                          this.getSubject(lesson.subject_id).name
                        )}`}
                      >
                        {this.getSubject(lesson.subject_id).name}
                      </div>
                      <div className="Dashboard__recent__item__title">
                        {lesson.name}
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.contextType = Context;

export default Dashboard;
