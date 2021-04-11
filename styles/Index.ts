import { Button } from "@material-ui/core";
import styled from "styled-components";

export const MainContent = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  color: white;
`;

export const MainGreetings = styled.div`
  p {
    font-size: 20px;
  }

  h2 {
    font-size: 28px;
    font-weight: 900;
  }

  font-family: "Raleway", sans-serif;
`;

export const AboutSection = styled.section`
  background-color: #445968;
  padding: 2rem;
  color: white;

  p {
    line-height: 1.4em;
    margin: 10px 0;
  }

  img {
    border-radius: 10px;
  }
`;

export const SectionTitle = styled.h2`
  color: white;
  font-family: "Raleway", sans-serif;
  font-weight: 900;
  font-size: 2.5em;

  &::first-letter {
    color: #00a7dc;
  }
`;

export const SkillsContainer = styled.div`
  display: flex;

  img {
    border-radius: 0;
    margin-right: 6px;
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #445968;
  color: white;

  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 10px;

  p {
    text-align: center;
    margin: 10px 0;
  }
`;

export const ProjectButton = styled(Button).attrs({
  variant: "contained",
})`
  background: #00a7dc !important;
  color: white !important;

  font-weight: bold !important;
  text-transform: none !important;
`;

export const Footer = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`;
