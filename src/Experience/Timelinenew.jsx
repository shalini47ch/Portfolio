/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import logo from "./image.png";
import "./style.css";

export default function CustomizedTimeline() {
  return (
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <div className="heading">
            <span>
              <img src={logo} className="company-logo" />- Associate XT L1 (Aug
              2021-Nov 2021)
            </span>
          </div>
          <div>
            Implemented HTML, CSS, JavaScript, and React JS to create responsive
            and accessible web pages for a client. Employed the micro frontend
            architecture and adopted the atomic design pattern. As a result of
            new variations, microapp acknowledgment rates improved from 54% to
            85% amid A/B Tests. Worked with the team to create reusable
            components and unit tests for them improving the test coverages by
            30%. Administered ES6, React Js and used accessibility tools like
            NVDA to ensure accessibility.Designed scripts to manage Tealium’s
            Tag Management System.
          </div>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <div className="heading">
            <span>
              <img src={logo} className="company-logo" />- Junior Associate
              Technology(Jan 2021-Aug 2021)
            </span>
          </div>
          <div>
            Developed leading-edge e-commerce websites. Reusable CSS files were
            created by implementing TDD. Applied Context Api and used linters
            such as eslint and prettier to improve code quality by 40%.
          </div>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary"></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent></TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
