import 'react-vertical-timeline-component/style.min.css'

import { FaChalkboardTeacher, FaCode, FaFlask, FaGraduationCap } from 'react-icons/fa'
import { Heading, Section } from 'react-bulma-components'
import React, { ReactElement } from 'react'

import TimelineElement from '../timeline/timeline-element'
import { VerticalTimeline } from 'react-vertical-timeline-component'

type HistoryTimelineProps = {
  id: string
}

export default function HistoryTimeline({
  id,
}: HistoryTimelineProps): ReactElement {
  return (
    <Section id={id}>
      <Heading style={{ textAlign: 'center' }}>Some History</Heading>
      <Heading subtitle size={5} style={{ textAlign: 'center' }}>
        A brief timeline of my relevant experience.
      </Heading>
      <VerticalTimeline className='vertical-timeline-custom-line'>
        <TimelineElement
          header='Senior Software Engineer, Team Lead, Manager'
          subtitle='Voice, Remote (Brooklyn, NY Headquarters)'
          date='2021-Present'
          icon={<FaCode />}
          tags={['TypeScript', 'GraphQL', 'React']}
        >
          <ul>
            <li>
              Interfaced directly with engineers, DevOps, C-suite, project
              managers, and designers to deliver features and fixes.
            </li>
            <li>
              Managed multiple engineers and conducted routine one-on-ones,
              S.M.A.R.T. goal setting, and performance reviews to bring out the
              best in each engineer by tailoring specific metrics for each
              engineer to improve upon.
            </li>
            <li>
              Helped an engineer identify and remove obstacles that cut their
              cycle time in half while doubling their throughput and increasing
              their code quality (stats via CodeClimate Velocity).
            </li>
            <li>
              Served as technical lead on a team with 5 other engineers to
              deliver our biggest feature of 2022 which was delivered on time.
            </li>
            <li>
              Recruited and interviewed engineers during our organization&apos;s
              growth phases.
            </li>
            <li>
              Created a question-and-decision tree to make interviews consistent
              across candidates.
            </li>
            <li>Trained team members how to be effective interviewers.</li>
          </ul>
        </TimelineElement>
        <TimelineElement
          header='Certificate of Specialization, Leadership & Management'
          subtitle='Harvard Business School Online'
          date='2022'
          icon={<FaGraduationCap />}
        >
          Completed three courses: Leadership Principles, Management Essentials,
          and Strategy Execution through Harvard Business School&apos;s online
          program.
        </TimelineElement>
        <TimelineElement
          header='Software Engineer III'
          subtitle='FoxGuard Solutions, Christiansburg, VA'
          date='2015-2021'
          icon={<FaCode />}
          tags={['Python', 'React', 'TypeScript', 'Docker', 'C#', 'Qt']}
        >
          <ul>
            <li>
              Technical lead of the design, architecture, and implementation of
              a web-based tool to elegantly track, organize, and manage
              customer&apos;s critical assets. Initiated monthly review sessions with
              customers and stakeholders to ensure product development was
              meeting expectations.
            </li>
            <li>
              Technical lead of a desktop application to help visualize patch
              data trends. This tool provided deep insight into a customer&apos;s
              patches to understand frequently vulnerable systems and
              applications.
            </li>
            <li>
              Championed industry best practices with regard to standups,
              sprints, software design, testing, interview processes, and
              employee onboarding.
            </li>
            <li>
              Mentored multiple junior employees by providing coaching on soft
              and hard skills needed to be a successful engineer.
            </li>
          </ul>
        </TimelineElement>
        <TimelineElement
          header='Software Engineer'
          subtitle='Paymentus Corporation, Blacksburg, VA'
          date='2015'
          icon={<FaCode />}
          tags={['Java', 'Spring', 'Oracle']}
        >
          <ul>
            <li>
              Worked with a multinational team to develop new and existing
              implementations for bill pay customers.
            </li>
            <li>
              Managed a large Oracle database and deployments for hundreds of
              customers.
            </li>
          </ul>
        </TimelineElement>
        <TimelineElement
          header='Software Engineer'
          subtitle='AVID LLC, Blacksburg, VA'
          date='2010-2015'
          icon={<FaCode />}
          tags={['C++', 'Qt', 'Java']}
        >
          <ul>
            <li>
              Technical lead for 3 phases of work with the Army Corp of
              Engineers&apos; EASEE project.
            </li>
            <li>
              Technical lead for ground station software for AVID&apos;s ducted fan
              vehicle, EDF-8.
            </li>
            <li>
              Implemented agile software and continuous integration practices to
              greatly increase efficiency.
            </li>
            <li>
              Technical lead for APEX, a medium-fidelity analysis application
              that predicts aircraft performance.
            </li>
            <li>Represented AVID as an exhibitor at AUVSI in Orlando, FL.</li>
            <li>
              Worked on multiple SBIR proposals and continuations of work to
              increase company revenue by starting and continuing projects.
            </li>
          </ul>
        </TimelineElement>
        <TimelineElement
          header='Researcher'
          subtitle='Virginia Tech Dept. of Computer Science, Blacksburg, VA'
          date='2009'
          icon={<FaFlask />}
          tags={['C++']}
        >
          <ul>
            <li>
              Focused on the effect of porting pedagogy based software from
              DirectX to OpenGL. (C++)
            </li>
            <li>
              Implemented new features to enhance functionality enabling video
              export to be platform independent. (C++)
            </li>
          </ul>
        </TimelineElement>
        <TimelineElement
          header='Teaching Assistant'
          subtitle='Virginia Tech Dept. of Computer Science, Blacksburg, VA'
          date='2009'
          icon={<FaChalkboardTeacher />}
          tags={['Java']}
        >
          <ul>
            <li>
              Was a TA for two semesters of CS 1114 and CS 1705 with class sizes
              around 30 students each.
            </li>
            <li>
              Main duty was to help students with their course and lab
              assignments.
            </li>
            <li>Graded homework assignments, projects, and lab work.</li>
            <li>
              Held frequent office hours to provide one-on-one or small group
              support for students.
            </li>
          </ul>
        </TimelineElement>
        <TimelineElement
          header='Computer Science Undergrad Student'
          subtitle='Virginia Tech, Blacksburg, VA'
          date='2007-2011'
          icon={<FaGraduationCap />}
        >
          Graduated with a bachelor&apos;s degree in Computer Science from
          Virginia Tech&apos;s College of Engineering with a minor in math. Some
          of my relevant coursework includes two semesters of algorithms,
          operating system design, two semesters of computer organization,
          internet software development, GUI programming, comparative
          programming languages, discrete mathematics, and four semesters
          calculus.
        </TimelineElement>
      </VerticalTimeline>
    </Section>
  )
}
