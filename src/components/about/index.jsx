import React from "react";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const About = () => (
  <Typography style={{ margin: "24px" }}>
    <Title>Welcome to SponsorTracker</Title>
    <Paragraph>
      I made this site to track which companies are willing to sponsor for a{' '}
      <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-skill-shortage-482" target="_blank" rel="noopener noreferrer">TSS visa</a>
      {' '}in Australia.
    </Paragraph>
  </Typography>
);

export default About;