import Head from "next/head";
import Image from "next/image";
import {
  MainContent,
  MainGreetings,
  AboutSection,
  SectionTitle,
  SkillsContainer,
  ProjectButton,
  ContactSection,
  ProjectCard,
  Footer,
} from "../styles/Index";
import Typed from "react-typed";
import {
  AppBar,
  Button,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";

export default function Home() {
  const now = new Date();
  const hour = now.getHours();
  let helloMessage = "bom dia!";

  if (hour > 12 && hour < 18) {
    helloMessage = "boa tarde!";
  }
  if (hour > 18) {
    helloMessage = "boa noite!";
  }

  return (
    <>
      <Container>
        <MainContent>
          <MainGreetings>
            <p>Olá, {helloMessage}</p>
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
                width={380}
                height={380}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <SectionTitle>Sobre mim</SectionTitle>
              <li>19 anos</li>
              <li>Morando em Teresina-PI</li>
              <p>
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
                <img src="/icons/node.png" alt="NodeJS Logo" />
                <img src="/icons/react.png" alt="ReactJS Logo" width="25px" />
                <img src="/icons/mobx.png" alt="MobX Logo" width="25px" />
                <img src="/icons/html.png" alt="HTML Logo" />
                <img src="/icons/css.png" alt="CSS Logo" />
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
            <ProjectCard style={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  style={{ height: 140 }}
                  image="/aquabit-web.png"
                  title="Aquabit Web"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Aquabit Web
                  </Typography>
                  <Typography variant="body2" component="p" color="inherit">
                    Plataforma de inteligência para a produção de peixes e
                    camarão.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <ProjectButton href="https://aquabit.com.br">
                  Ir para o site
                </ProjectButton>
              </CardActions>
            </ProjectCard>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <ProjectCard style={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  style={{ height: 140 }}
                  image="/todo.png"
                  title="TODO List"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    TODO List
                  </Typography>
                  <Typography variant="body2" component="p" color="inherit">
                    Projeto educativo com o intuito de ensinar React a conceitos
                    de gerenciamento de estado
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <ProjectButton href="https://todolist-lyart.vercel.app">
                  Experimentar
                </ProjectButton>
              </CardActions>
            </ProjectCard>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <ProjectCard style={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  style={{ height: 140 }}
                  image="/numeric-input.png"
                  title="Material-UI Numeric Input"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    material-ui-numeric-input
                  </Typography>
                  <Typography variant="body2" component="p" color="inherit">
                    Input numérico para utilizar com o framework Material-UI
                    para ReactJS
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <ProjectButton href="https://github.com/SampaioLeal/material-ui-numeric-input">
                  Ir para o repo
                </ProjectButton>
              </CardActions>
            </ProjectCard>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <ProjectCard style={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  style={{ height: 140 }}
                  image="/meucep.png"
                  title="MeuCEP"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    MeuCEP
                  </Typography>
                  <Typography variant="body2" component="p" color="inherit">
                    Aplicação de consulta de CEPs
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <ProjectButton href="https://meucep.vercel.app/">
                  Experimentar
                </ProjectButton>
              </CardActions>
            </ProjectCard>
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
              <ProjectButton
                startIcon={<LinkedInIcon />}
                href="https://www.linkedin.com/in/sampaio-leal"
              >
                LinkedIn
              </ProjectButton>
              <ProjectButton
                startIcon={<GitHubIcon />}
                href="https://github.com/SampaioLeal"
              >
                GitHub
              </ProjectButton>
              <ProjectButton
                startIcon={<InstagramIcon />}
                href="https://github.com/SampaioLeal"
              >
                Instagram
              </ProjectButton>
            </ContactSection>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Image src="/contact.svg" width={311} height={330} />
          </Grid>
        </Grid>
      </Container>

      <Footer>
        <Container maxWidth="md">
          <Toolbar>
            <Typography variant="body1" color="inherit">
              Desenvolvido com 💙 utilizando NextJS e Material-UI por Sampaio
              Leal
            </Typography>
          </Toolbar>
        </Container>
      </Footer>
    </>
  );
}
