import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
// eslint-disable-next-line
import FeelingProud from "./FeelingProud";
import Typewriter from "typewriter-effect";
import GreetImg from "./GreetImg";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">{greeting.greet}</h1>
              <h1 className="greeting-name" style={{ color: theme.text }}>
                I'm{" "}
                <mark data-entity="person" style={{ color: theme.text }}>
                  {greeting.title}
                </mark>
              </h1>
              <h2 className="greeting-typewriter" style={{ color: "#1179f7" }}>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Data Scientist")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("Web Developer")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("IT Engineer")
                      .pauseFor(200)
                      .start();
                  }}
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h2>
              <span
                className="greeting-text-p subTitle"
                style={{ color: theme.text }}
              >
                <div className="entities" style={{ color: theme.text }}>
                  A <mark data-entity="noun">Data Science practitioner</mark>{" "}
                  who thrives to{" "}
                  <mark data-entity="verb">leverage Startups</mark> using
                  AI-based solutions along with{" "}
                  <mark data-entity="skill">Web Development</mark> and an
                  exquisite blend of{" "}
                  <mark data-entity="freelance">Communication Skills</mark>
                </div>
              </span>
              <SocialMedia theme={theme} />
              <div className="portfolio-repo-btn-div">
                <Button text="Contact me" href="/#/contact" theme={theme} />
                <Button
                  text="Check out my resume"
                  newTab={true}
                  href={greeting.resumeLink}
                  theme={theme}
                />
              </div>
              {/* <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
            </div> */}
            </div>
          </div>
          <div className="greeting-image-div">
            {/* <img
							alt="saad sitting on table"
							src={require("../../assets/images/feelingProud.svg")}
						></img> */}
            {/* <FeelingProud theme={theme} /> use for static image rendering*/}
            <GreetImg />
          </div>
        </div>
      </div>
    </Fade>
  );
}
