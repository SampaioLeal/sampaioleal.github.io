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
  ContactSection,
} from "../styles/Index";
import Typed from "react-typed";
import { Container, Grid } from "@material-ui/core";

export default function Home() {
  return (
    <>
      <Head>
        <title>Antonio Sampaio - Portfólio</title>
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
            src="/main-presentation.svg"
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
                <li>18 anos</li>
                <li>Morando em Teresina-PI</li>
                Descobrindo a tecnologia desde os 14, fui introduzido ao
                desenvolvimento Web e, desde então, meu foco é dominar as
                tecnologias Node.JS e React/React Native, utilizando TypeScript
                para um melhor ambiente de desenvolvimento e trabalho em equipe.
                <br />
                Minha maior experiência é o desenvolvimento de plataformas e
                interfaces de aplicações, unindo design e interatividade a uma
                melhor experiência de usuário.
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
              <ProjectButton href="https://aquabit.com.br">
                Ir para o site
              </ProjectButton>
            </ProjectContainer>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProjectContainer>
              <b>material-ui-numeric-input</b>
              <p>
                Input numérico para utilizar com o framework Material-UI para
                ReactJS
              </p>
              <ProjectButton href="https://github.com/SampaioLeal/material-ui-numeric-input">
                Ir para o repo
              </ProjectButton>
            </ProjectContainer>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProjectContainer>
              <b>TODO List</b>
              <p>
                Projeto educativo com o intuito de ensinar React a conceitos de
                gerenciamento de estado.
              </p>
              <ProjectButton href="https://todolist-lyart.vercel.app">
                Experimentar
              </ProjectButton>
            </ProjectContainer>
          </Grid>
        </Grid>
      </Container>

      <Container style={{ marginTop: 50 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} sm={12} md={6}>
            <ContactSection>
              <SectionTitle>Contato</SectionTitle>
              <p>
                Você pode entrar em contato comigo a partir das redes sociais
                abaixo
              </p>
              <ProjectButton href="https://www.linkedin.com/in/sampaio-leal">
                LinkedIn
              </ProjectButton>
              <ProjectButton href="https://github.com/SampaioLeal">
                GitHub
              </ProjectButton>
              <ProjectButton href="https://github.com/SampaioLeal">
                Instagram
              </ProjectButton>
            </ContactSection>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            style={{ display: "flex" }}
            justify="center"
          >
            <Image src="/contact.svg" width={311} height={330} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
