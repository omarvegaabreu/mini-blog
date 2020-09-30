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
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
} from "./util/fakeData";
import RefreshButton from "./util/RefreshButton";
import faker, { image } from "faker";

const App = () => {
  console.log(randomTime);
  return (
    <div className="ui container comments">
      <CommentHeader />
      <CommentDetail
        image={image1}
        author={fakeNameOne}
        comment={joseComment}
        time={joseTime}
      />
      <CommentDetail
        image={image2}
        author={fakeNameTwo}
        comment={alejandroComment}
        time={alejandroTime}
      />
      <CommentDetail
        image={image3}
        author={fakeNameThree}
        comment={omarComment}
        time={omarTime}
      />
      <CommentDetail
        image={image4}
        author={fakeNameThree}
        comment={fakeComment1}
        time={randomTime}
      />
      <CommentDetail
        image={image5}
        author={fakeNameFive}
        comment={fakeComment2}
        time={randomTime1}
      />
      <CommentDetail
        image={image6}
        author={fakeNameSix}
        comment={fakeComment3}
        time={randomTime2}
      />
      <CommentDetail
        image={image7}
        author={fakeNameSeven}
        comment={fakeComment4}
        time={randomTime3}
      />
      <RefreshButton />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
