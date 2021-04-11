import Head from "next/head";
import Image from "next/image";
import {
  MainContent,
  MainGreetings,
  AboutSection,
  SectionTitle,
  SkillsContainer,
  ProjectContainer,
  ProjectButton,
} from "../styles/Index";
import Typed from "react-typed";
import { Button, Container, Grid } from "@material-ui/core";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Container>
        <MainContent>
          <MainGreetings>
            <p>Olá, bom dia!</p>
            <h2>Me chamo Antonio Sampaio.</h2>
            <p>
              <Typed
                strings={[
                  "Desenvolvedor Full Stack",
                  "Designer UI/UX",
                  "Descobridor de Bugs",
                  "Desbravador de Códigos",
                ]}
                typeSpeed={40}
                backSpeed={40}
                loop
                smartBackspace
              />
            </p>
          </MainGreetings>

          <Image
            src="/main-presentation.png"
            alt="Desenvolvedor programando"
            width={500}
            height={500}
          />
        </MainContent>
      </Container>

      <AboutSection>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Image
                src="/samp.jpeg"
                alt="Programador lindo"
                width={460}
                height={460}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <SectionTitle>Sobre mim</SectionTitle>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum pretium efficitur arcu, ac efficitur dui tincidunt
                sit amet. Nam felis quam, semper eu neque vel, ornare bibendum
                nibh. Aenean ut dictum ante, consectetur maximus enim. Etiam
                ullamcorper urna massa, vel ornare metus maximus eu. Curabitur
                aliquam in ipsum eget lobortis. Nulla nec aliquam ante, sed
                posuere sem. Sed faucibus venenatis tristique. Cras non nunc
                ornare, sagittis quam sed, molestie erat. Nulla risus ex,
                maximus a ligula non, consectetur feugiat ex. Donec faucibus
                egestas ante ut sagittis. Praesent molestie accumsan enim, eu
                eleifend ante gravida sit amet. Morbi dignissim sagittis nisi.
              </p>
              <SkillsContainer>
                <img src="/icons/ts.png" alt="Typescript Logo" />
                <img src="/icons/js.png" alt="Javascript Logo" />
                <img src="/icons/node.png" alt="Javascript Logo" />
                <img src="/icons/react.png" alt="Javascript Logo" />
                <img src="/icons/html.png" alt="Javascript Logo" />
                <img src="/icons/css.png" alt="Javascript Logo" />
              </SkillsContainer>
            </Grid>
          </Grid>
        </Container>
      </AboutSection>

      <Container style={{ marginTop: 50 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <SectionTitle>Projetos</SectionTitle>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProjectContainer>
              <b>Aquabit Web</b>
              <p>
                Plataforma de inteligência para a produção de peixes e camarão.
              </p>
              <ProjectButton>Ir para o site</ProjectButton>
            </ProjectContainer>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProjectContainer>
              <b>material-ui-numeric-input</b>
              <p>
                Input numérico para utilizar com o framework Material-UI para
                ReactJS
              </p>
              <ProjectButton>Ir para o repo</ProjectButton>
            </ProjectContainer>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProjectContainer>
              <b>TODO List</b>
              <p>
                Projeto educativo com o intuito de ensinar React a conceitos de
                gerenciamento de estado.
              </p>
              <ProjectButton>Experimentar</ProjectButton>
            </ProjectContainer>
          </Grid>
        </Grid>

        <Grid container spacing={3}></Grid>
      </Container>
    </>
  );
}
