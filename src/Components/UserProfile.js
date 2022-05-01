import React from "react";
import ProfileCard from "./ProfileCard";
// import VideoCard from "./VideoCard";


export default function UserProfile() {
  return (
    <>
      <ProfileCard />

      <br />
      <br />

      <div className=" text-center">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs ">
            <li className="nav-item">
              <a className="nav-link active" aria-current="true" href="/">
                Your Uploads
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Bookmark
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/">
                History
              </a>
            </li>

            <li className="nav-item">
              {/* search bar here */}
              <div className="input-group">
                <div className="form-outline"></div>
              </div>
            </li>
          </ul>
        </div>

        <div id="UserContentData">{/* <VideoFeed /> */}</div>
      </div>
    </>
  );
}
