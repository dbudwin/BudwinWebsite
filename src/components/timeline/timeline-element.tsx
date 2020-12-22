import "react-vertical-timeline-component/style.min.css";

import { Box, Content, Heading } from "react-bulma-components";
import React, { ReactElement } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

interface TimelineElementProps {
    header: string;
    subtitle: string;
    date: string;
    icon: IconProp;
    children: string | JSX.Element;
}

export default function TimelineElement({ header, subtitle, date, icon, children }: TimelineElementProps): ReactElement {
    return (
        <VerticalTimelineElement
            iconClassName="vertical-timeline-custom-icon"
            date={date}
            dateClassName={"is-size-5"}
            icon={<FontAwesomeIcon icon={icon} size="lg" fixedWidth />}
        >
            <Box>
                <Heading size={4}>{header}</Heading>
                <Heading subtitle size={6}>{subtitle}</Heading>
                <Content>
                    {children}
                </Content>
            </Box>
        </VerticalTimelineElement>
    );
}