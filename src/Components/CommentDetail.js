import React from "react";
import { Card, Comment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const CommentDetail = (props) => {
  return (
    <Card>
      <Comment>
        <Comment.Avatar src={props.image} />
        <Comment.Content>
          <Comment.Author as="a">{props.author}</Comment.Author>
          <Comment.Metadata>
            <div>{props.time}</div>
          </Comment.Metadata>
          <Comment.Text>{props.comment}</Comment.Text>
          <Comment.Actions>
            {/* <Comment.Action>Reply</Comment.Action> */}
          </Comment.Actions>
        </Comment.Content>
      </Comment>
    </Card>
  );
};

export default CommentDetail;
