import "react-vertical-timeline-component/style.min.css";

import { Heading, Section } from "react-bulma-components";
import React, { ReactElement } from "react";

import TimelineElement from "../timeline/timeline-element";
import { VerticalTimeline } from "react-vertical-timeline-component";

export default function HistoryTimeline(): ReactElement {
    return (
        <Section>
            <Heading style={{ textAlign: "center" }}>Some History</Heading>
            <Heading subtitle size={5} style={{ textAlign: "center" }}>A brief timeline of my relevant experience.</Heading>
            <VerticalTimeline className="vertical-timeline-custom-line">
                <TimelineElement
                    header="Software Engineer III @ FoxGuard Solutions"
                    subtitle="Christiansburg, VA"
                    date="2015-Present"
                    icon={["fas", "code"]}
                >
                    <ul>
                        <li>Spearheaded the design, architecture, and implementation of a web-based tool to elegantly track, organize, and manage customer&apos;s critical assets. Initiated monthly review sessions with customers and stakeholders to ensure product development was meeting expectations. (Python, Django, TypeScript, React, MySQL, Docker)</li>
                        <li>Led development of a desktop application to help visualize patch data trends. This tool provided deep insight into a customer&apos;s patches to understand frequently vulnerable systems and applications. (Python, Qt, TypeScript, MSSQL)</li>
                        <li>Developed desktop applications to track, manage and report patches for critical IT and OT devices essential to national and international power grids. (Python, C#, TypeScript, SQL Server)</li>
                        <li>Used DevOps tools: Docker, Chef, Ansible, Azure DevOps, and Jenkins/JobDSL to migrate infrastructure to a “configuration-as-code” model.</li>
                        <li>Championed industry best practices with regard to standups, sprints, software design, testing, interview processes, and employee onboarding.</li>
                    </ul>
                </TimelineElement>
                <TimelineElement
                    header="Software Engineer @ Paymentus Corporation"
                    subtitle="Blacksburg, VA"
                    date="2015"
                    icon={["fas", "code"]}
                >
                    <ul>
                        <li>Worked with a multinational team to develop new and existing implementations for bill pay customers. (Java, Spring)</li>
                        <li>Assisted with managing a large Oracle database and implementations for hundreds of customers.</li>
                    </ul>
                </TimelineElement>
                <TimelineElement
                    header="Software Engineer @ AVID LLC"
                    subtitle="Blacksburg, VA"
                    date="2010-2015"
                    icon={["fas", "code"]}
                >
                    <ul>
                        <li>Lead developer for multiple phases of work with the Army Corp of Engineers’ EASEE project. (Java)</li>
                        <li>Lead developer on ground station software for AVID’s ducted fan vehicle EDF-8. (C++, Qt)</li>
                        <li>Implemented agile software and continuous integration practices to greatly increase efficiency.</li>
                        <li>Software lead for APEX, a medium-fidelity analysis application that predicts aircraft performance. (C++, Qt)</li>
                        <li>Represented AVID as an exhibitor at AUVSI in Orlando, FL.</li>
                        <li>Worked on multiple SBIR proposals and continuations of work.</li>
                    </ul>
                </TimelineElement>
                <TimelineElement
                    header="Researcher, Dept. of Computer Science"
                    subtitle="Blacksburg, VA"
                    date="2009"
                    icon={["fas", "flask"]}
                >
                    <ul>
                        <li>Focused on the effect of porting pedagogy based software from DirectX to OpenGL. (C++)</li>
                        <li>Implemented new features to enhance functionality enabling video export to be platform independent. (C++)</li>
                    </ul>
                </TimelineElement>
                <TimelineElement
                    header="Teaching Assistant, Dept. of Computer Science"
                    subtitle="Blacksburg, VA"
                    date="2009"
                    icon={["fas", "chalkboard-teacher"]}
                >
                    <ul>
                        <li>Was a TA for two semesters of CS 1114 and CS 1705 with class sizes around 30 students each.</li>
                        <li>Main duty was to help students with their course and lab assignments.</li>
                        <li>Graded homework assignments, projects, and lab work.</li>
                        <li>Held frequent office hours to provide one-on-one or small group support for students.</li>
                    </ul>
                </TimelineElement>
                <TimelineElement
                    header="Computer Science Undergrad Student"
                    subtitle="Blacksburg, VA"
                    date="2007-2011"
                    icon={["fas", "graduation-cap"]}
                >
                    Graduated with a bachelor&apos;s degree in Computer Science from Virginia Tech&apos;s College of Engineering with a minor in math.  Some of my relevant coursework includes two semesters of algorithms, operating system design, two semesters of computer organization, internet software development, GUI programming, comparative programming languages, discrete mathematics, and four semesters calculus.
                </TimelineElement>
            </VerticalTimeline>
        </Section>
    );
}