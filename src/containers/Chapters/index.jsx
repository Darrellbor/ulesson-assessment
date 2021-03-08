import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

//context
import Context from "../../store/context";

//components
import Header from "../../components/Header";

//icons
import ArrowBack from "../../components/Icons/ArrowBack";

class Chapters extends Component {
  state = {
    subject: {},
  };

  async componentDidMount() {
    await this.setSubjects();
    this.getSubject(this.props.match.params.subjectId);
  }

  setSubjects = async () => {
    if (!this.context.subjects || this.context.subjects.length === 0) {
      await this.context.setSubjects();
    }
  };

  getSubject = (subjectId) => {
    if (
      this.context &&
      this.context.subjects &&
      this.context.subjects.data &&
      this.context.subjects.data.subjects
    ) {
      const subjects = this.context.subjects.data.subjects;
      const subject = subjects.filter(
        (subject) => subject.id === parseInt(subjectId, 10)
      );
      this.setState({ subject: subject[0] });
      if (subject.length === 0) {
        window.alert(`Subject with id ${subjectId} not found!`);
        this.props.history.push("/");
      }
    }
  };

  render() {
    const subject = this.state.subject;

    return (
      <div className="Chapters">
        <Header />
        <br />
        <div className="Chapters__inner">
          <div className="Chapters__back">
            <Link to="/">
              <ArrowBack />
            </Link>
          </div>

          <div className="Chapters__content">
            {subject && (
              <Fragment key={subject.id}>
                <h1>{subject.name}</h1>
                <br />
                {subject.chapters &&
                  subject.chapters.map((chapter, chapIdx) => (
                    <Fragment key={chapter.id}>
                      <h3>
                        {chapIdx + 1}. {chapter.name}
                      </h3>
                      <br />
                      <div className="Chapters__content__row">
                        {chapter.lessons &&
                          chapter.lessons.map((lesson) => (
                            <Fragment key={lesson.id}>
                              <div className="Chapters__content__item">
                                <Link
                                  to={`/video/${subject.id}/${chapter.id}/${lesson.id}`}
                                >
                                  <div className="Chapters__content__item__img">
                                    <img src={lesson.icon} alt="Lesson" />
                                  </div>
                                  <br />
                                  <div className="Chapters__content__item__text">
                                    {lesson.name}
                                  </div>
                                </Link>
                              </div>
                            </Fragment>
                          ))}
                      </div>
                    </Fragment>
                  ))}
              </Fragment>
            )}
          </div>
        </div>
      </div>
    );
  }
}

Chapters.contextType = Context;

export default Chapters;
