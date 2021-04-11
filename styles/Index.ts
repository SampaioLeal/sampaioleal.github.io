import { Button, Card } from "@material-ui/core";
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
    font-size: 18px;
  }

  img {
    border-radius: 10px;
  }
`;

export const ContactSection = styled.section`
  color: white;

  p {
    line-height: 1.4em;
    margin: 10px 0;
    font-size: 18px;
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
    border-radius: 0 !important;
    margin: 0 3px;
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

  b {
    font-size: 18px;
  }

  p {
    text-align: center;
    margin: 10px 0;
    font-size: 16px;
  }
`;

export const ProjectCard = styled(Card).attrs({})`
  max-width: 345px;
  background-color: #445968;
  color: white;
`;

export const ProjectButton = styled(Button).attrs({
  variant: "contained",
})`
  background: #00a7dc;
  color: white;

  font-weight: bold;
  text-transform: none;
  margin: 0 10px;

  &:hover {
    background: #0392bf;
  }
`;
