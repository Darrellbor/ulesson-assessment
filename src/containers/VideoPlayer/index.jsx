import React, { Component, Fragment } from "react";

//utilities
import { secondsToHms } from "../../shared/utility";

//context
import Context from "../../store/context";

//components
import Button from "../../components/Button";

//icons
import ArrowBack from "../../components/Icons/ArrowBack";
import VideoPlay from "../../components/Icons/VideoPlay";
import VideoPause from "../../components/Icons/VideoPause";
import Back10s from "../../components/Icons/Back10s";
import Forward10s from "../../components/Icons/Forward10s";

class VideoPlayer extends Component {
  state = {
    chapter: {},
    lesson: {},
    next: "",
    isPaused: true,
    currentTime: 0,
    duration: 0,
  };

  async componentDidMount() {
    await this.setSubjects();
    const { subjectId, chapterId, lessonId } = this.props.match.params;
    this.getLesson(subjectId, chapterId, lessonId);
    this.setTimer();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  setSubjects = async () => {
    if (!this.context.subjects || this.context.subjects.length === 0) {
      await this.context.setSubjects();
    }
  };

  goBack = () => {
    this.props.history.goBack();
  };

  getLesson = (subjectId, chapterId, lessonId) => {
    if (
      this.context &&
      this.context.subjects &&
      this.context.subjects.data &&
      this.context.subjects.data.subjects
    ) {
      const subjects = this.context.subjects.data.subjects;
      let subject = subjects.filter(
        (subject) => subject.id === parseInt(subjectId, 10)
      );
      if (subject.length === 0) {
        window.alert(`Subject with id ${subjectId} not found!`);
        this.props.history.push("/");
      }
      subject = subject[0];

      let chapter = subject.chapters.filter(
        (chapter) => chapter.id === parseInt(chapterId, 10)
      );
      if (chapter.length === 0) {
        window.alert(`Chapter with id ${chapterId} not found!`);
        this.props.history.push("/");
      }
      chapter = chapter[0];

      //check for next video
      let next = "";

      chapter.lessons.forEach((lesson, lessonIdx) => {
        if (
          lesson.id === parseInt(lessonId, 10) &&
          chapter.lessons[lessonIdx + 1]
        ) {
          next = chapter.lessons[lessonIdx + 1];
        } else {
          subject.chapters.forEach((chapter, chapterIdx) => {
            if (
              chapter.id === parseInt(chapterId, 10) &&
              subject.chapters[chapterIdx + 1]
            ) {
              next = subject.chapters[chapterIdx + 1].lessons[0];
            }
          });
        }
      });

      let lesson = chapter.lessons.filter(
        (lesson) => lesson.id === parseInt(lessonId, 10)
      );
      if (lesson.length === 0) {
        window.alert(`Lesson with id ${lessonId} not found!`);
        this.props.history.push("/");
      }
      lesson = lesson[0];

      this.setState({ chapter, lesson, next });
    }
  };

  nextVideo = () => {
    const next = this.state.next;
    this.getLesson(next.subject_id, next.chapter_id, next.id);
    document.getElementById("lesson_vid").load();
    this.props.history.push(
      `/video/${next.subject_id}/${next.chapter_id}/${next.id}`
    );
  };

  handleOnPlay = () => {
    const videoCtrl = document.getElementById("lesson_vid");
    videoCtrl.play();
    this.setState({ isPaused: false });
  };

  handleOnPause = () => {
    const videoCtrl = document.getElementById("lesson_vid");
    videoCtrl.pause();
    this.setState({ isPaused: true });
  };

  handleOnLeap10s = (direction) => {
    const videoCtrl = document.getElementById("lesson_vid");
    if (
      direction === "right" &&
      videoCtrl.currentTime + 10 <= videoCtrl.duration
    )
      videoCtrl.currentTime += 10;

    if (direction === "left" && videoCtrl.currentTime - 10 >= 0)
      videoCtrl.currentTime -= 10;
  };

  setTimer = () => {
    this.timer = setInterval(() => {
      const videoCtrl = document.getElementById("lesson_vid");
      if (videoCtrl) {
        if (videoCtrl.currentTime === videoCtrl.duration) this.handleOnPause();
        this.setState({
          duration: videoCtrl.duration,
          currentTime: videoCtrl.currentTime,
        });
      }
    }, 1000);
  };

  render() {
    const {
      lesson,
      chapter,
      next,
      isPaused,
      duration,
      currentTime,
    } = this.state;

    return (
      <div className="VideoPlayer">
        <div className="VideoPlayer__inner">
          <div className="VideoPlayer__back">
            <ArrowBack onClick={() => this.goBack()} />
          </div>
          {chapter && lesson && (
            <Fragment>
              <div className="VideoPlayer__video">
                <div
                  className={`VideoPlayer__video__main ${
                    isPaused && "VideoPlayer__video__main--paused"
                  }`}
                >
                  <video id="lesson_vid" width="400">
                    <source src={`${lesson.media_url}#t=1`} type="video/mp4" />
                  </video>
                  <div className="VideoPlayer__video__controls">
                    <div className="VideoPlayer__video__controls__items">
                      <Back10s onClick={() => this.handleOnLeap10s("left")} />
                      {isPaused ? (
                        <VideoPlay
                          id="video__play"
                          onClick={() => this.handleOnPlay()}
                        />
                      ) : (
                        <VideoPause onClick={() => this.handleOnPause()} />
                      )}
                      <Forward10s
                        onClick={() => this.handleOnLeap10s("right")}
                      />
                    </div>

                    <div className="VideoPlayer__video__controls__timer">
                      <div className="VideoPlayer__video__controls__timer__current">
                        {secondsToHms(currentTime.toFixed(2))}
                      </div>
                      <div className="VideoPlayer__video__controls__timer__bar">
                        <div
                          className="VideoPlayer__video__controls__timer__bar__seek"
                          style={{
                            width: `${(currentTime / duration) * 100}%`,
                          }}
                        ></div>
                      </div>
                      <div className="VideoPlayer__video__controls__timer__duration">
                        {secondsToHms(duration.toFixed(2))}
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <h1 className="VideoPlayer__title">{chapter.name}</h1>
                <h4 className="VideoPlayer__title__sub">{lesson.name}</h4>
                <br />
                {next && (
                  <div className="VideoPlayer__btn">
                    <Button
                      color="brand--pattern"
                      onClick={() => this.nextVideo()}
                    >
                      Next
                    </Button>
                  </div>
                )}
              </div>
            </Fragment>
          )}
        </div>
      </div>
    );
  }
}

VideoPlayer.contextType = Context;

export default VideoPlayer;
