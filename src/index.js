import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import CommentHeader from "./Components/CommentHeader";
import CommentDetail from "./Components/CommentDetail";
import { time, usersName, avatarImages, fakeComment } from "./util/fakeData";
import RefreshButton from "./util/RefreshButton";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentHeader />
      <CommentDetail
        image={avatarImages.image1}
        author={usersName.fakeNameOne}
        comment={fakeComment.fakeComment1}
        time={time.joseTime}
      />
      <CommentDetail
        image={avatarImages.image2}
        author={usersName.fakeNameTwo}
        comment={fakeComment.fakeComment2}
        time={time.alejandroTime}
      />
      <CommentDetail
        image={avatarImages.image3}
        author={usersName.fakeNameThree}
        comment={fakeComment.fakeComment3}
        time={time.omarTime}
      />
      <CommentDetail
        image={avatarImages.image4}
        author={usersName.fakeNameFive}
        comment={fakeComment.fakeComment4}
        time={time.randomTime}
      />
      <CommentDetail
        image={avatarImages.image5}
        author={usersName.fakeNameFive}
        comment={fakeComment.alejandroComment}
        time={time.randomTime1}
      />
      <CommentDetail
        image={avatarImages.image6}
        author={usersName.fakeNameSix}
        comment={fakeComment.joseComment}
        time={time.randomTime2}
      />
      <CommentDetail
        image={avatarImages.image7}
        author={usersName.fakeNameSeven}
        comment={fakeComment.fakeComment4}
        time={time.randomTime3}
      />
      <RefreshButton />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
