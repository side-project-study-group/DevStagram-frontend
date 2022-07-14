import React from "react";
import MeetUpPostBox from "../../components/meet-up-post-box";
import SubHeader from "../../components/sub-header";

function MeetUpListTemp() {
  return (
    <>
      <SubHeader />
      <div>
        <MeetUpPostBox />
        <MeetUpPostBox />
        <MeetUpPostBox />
      </div>
    </>
  );
}

export default MeetUpListTemp;
