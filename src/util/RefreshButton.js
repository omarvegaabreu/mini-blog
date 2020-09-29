import React from "react";

const refreshButton = () => {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <button onClick={refreshPage}>Click to reload!</button>
    </div>
  );
};

export default refreshButton;
