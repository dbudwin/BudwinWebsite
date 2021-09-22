import "react-vertical-timeline-component/style.min.css";

import { Box, Content, Heading, Tag } from "react-bulma-components";
import React, { ReactElement } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

interface TimelineElementProps {
    header: string;
    subtitle: string;
    date: string;
    icon: IconProp;
    tags?: string[];
    children: string | JSX.Element;
}

export default function TimelineElement({ header, subtitle, date, icon, tags, children }: TimelineElementProps): ReactElement {
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
                    {tags &&
                        <Tag.Group>
                            {tags.map((tag, index) => <Tag color="info" key={index}>{tag}</Tag>)}
                        </Tag.Group>
                    }
                    {children}
                </Content>
            </Box>
        </VerticalTimelineElement>
    );
}