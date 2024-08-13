import React from "react";
import GitHubButton from "react-github-btn";

export default function About() {
  const age = new Date().getFullYear() - 1999;

  return (
    <div className="about fluid">
      <div className="about-photo">
        <img src="https://github.com/tarptaeya.png" />
        <div className="about-photo-buttons">
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
      <div className="about-info">
        <div>
          <h1>Hi, I am Anmol.</h1>
        </div>
        <div>
          <p>
            I am a {age} year old programmer currently living in Mountain View,
            California. I have lived in several cities so far. I was born in
            Kota, a beautiful city in Rajasthan (India) and spent most of my
            life there. For graduation I moved to Gandhinagar, near the banks of
            Sabarmati in Gujarat. After graduation I lived in Hyderabad, the
            city of Nizams in Telangana, before coming to the US.
          </p>
          <p>
            I work as a software engineer at Meta (formerly Facebook) and did my
            graduation from IIT Gandhinagar. After graduation I worked at HSBC
            for about an year before joining Meta. In 2018, I was selected in
            Google Summer of Code under KDE to implement JavaScript/QML
            extension support in Falkon.
          </p>
          <p>
            I am currently learning game development as a hobby and sometimes
            also participate in some game jams on{" "}
            <a href="https://tarptaeya.itch.io/">itch</a>. Most of my work is
            not open-source, but you can find me on github and most of the
            social media platforms as @tarpteaya.
          </p>
        </div>
      </div>
    </div>
  );
}
