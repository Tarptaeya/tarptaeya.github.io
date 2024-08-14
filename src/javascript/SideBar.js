import React from "react";
import GitHubButton from "react-github-btn";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-photo">
        <img src="https://github.com/tarptaeya.png" className="mr-12" />
        <div className="sidebar-info">
          <div>Anmol Gautam</div>
          <div>@tarptaeya</div>
        </div>
      </div>
      <div className="sidebar-aboutme">
        <p>
          Hi there, I am programmer living in Mountain View, CA. I work as a
          software engineer at Meta. I am currently learning game development as
          a hobby.
        </p>
        <GitHubButton
          href="https://github.com/tarptaeya"
          data-color-scheme="no-preference: light; light: light; dark: dark;"
          data-size="large"
          data-show-count="true"
          aria-label="Follow @tarptaeya on GitHub"
        >
          Follow @tarptaeya
        </GitHubButton>
      </div>
    </div>
  );
}
