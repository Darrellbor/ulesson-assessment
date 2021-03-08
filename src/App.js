import { Switch, Route, Redirect } from "react-router-dom";

//context
import SubjectsProvider from "./store/providers/subjects";

//pages
import Dashboard from "./containers/Dashboard";
import Chapters from "./containers/Chapters";
import VideoPlayer from "./containers/VideoPlayer";

function App() {
  return (
    <div className="App">
      <SubjectsProvider>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/chapters/:subjectId" exact component={Chapters} />
          <Route
            path="/video/:subjectId/:chapterId/:lessonId"
            exact
            component={VideoPlayer}
          />
          <Redirect to="/" />
        </Switch>
      </SubjectsProvider>
    </div>
  );
}

export default App;
