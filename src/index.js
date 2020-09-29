import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import CommentHeader from "./Components/CommentHeader";
import CommentDetail from "./Components/CommentDetail";
import {
  joseTime,
  alejandroTime,
  omarTime,
  joseComment,
  alejandroComment,
  omarComment,
  fakeNameOne,
  fakeNameTwo,
  fakeNameThree,
  fakeNameFive,
  fakeNameSix,
  fakeNameSeven,
  fakeComment1,
  fakeComment2,
  fakeComment3,
  fakeComment4,
  randomTime,
  randomTime1,
  randomTime2,
  randomTime3,
} from "./util/fakeData";
import RefreshButton from "./util/RefreshButton";

const App = () => {
  console.log(randomTime);
  return (
    <div className="ui container comments">
      <CommentHeader />
      <CommentDetail
        author={fakeNameOne}
        comment={joseComment}
        time={joseTime}
      />
      <CommentDetail
        author={fakeNameTwo}
        comment={alejandroComment}
        time={alejandroTime}
      />
      <CommentDetail
        author={fakeNameThree}
        comment={omarComment}
        time={omarTime}
      />
      <CommentDetail
        author={fakeNameThree}
        comment={fakeComment1}
        time={randomTime}
      />
      <CommentDetail
        author={fakeNameFive}
        comment={fakeComment2}
        time={randomTime1}
      />
      <CommentDetail
        author={fakeNameSix}
        comment={fakeComment3}
        time={randomTime2}
      />
      <CommentDetail
        author={fakeNameSeven}
        comment={fakeComment4}
        time={randomTime3}
      />
      <RefreshButton />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
