import React from "react";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";

import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <Divider sx={{ mb: 2 }} />
      <FootBox>
        <div>
            <FooterText>The chief ingredient in yummy food is love.</FooterText>
            {/* <FooterText >Seach from millions of recipes.</FooterText> */}

            <FooterText small>2022 &copy; by <Link
                href="https://www.linkedin.com/in/parminder0907/"
                target="_blank"
              >
                Parminder Singh
              </Link></FooterText>
        </div>
      </FootBox>
    </>
  );
};

export default Footer;

const FootBox = styled.div`
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterText = styled.p`
  font-size: ${(props) => props.small ? ".8rem" : "1.4" };
  color: #888;
  margin: 10px 0;
  text-align: center;
`;

