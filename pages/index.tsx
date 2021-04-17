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
      <Head>
        <title>Antonio Sampaio - Portfólio</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta
          name="google-site-verification"
          content="JCGi0d0RZVpYH_VSR39xTsHUA2xaOS2rxo3Lh5excww"
        />
        <meta property="og:site_name" content="Antonio Sampaio - Portfólio" />
        <meta property="og:title" content="Antonio Sampaio - Portfólio" />
        <meta
          property="og:description"
          content="Descobrindo a tecnologia desde os 14, fui introduzido ao
          desenvolvimento Web e, desde então, meu foco é dominar as
          tecnologias Node.JS e React/React Native, utilizando TypeScript
          para um melhor ambiente de desenvolvimento e trabalho em equipe."
        />
        <meta name="author" content="Antonio Sampaio Leal Neto" />
        <meta property="og:locale" content="pt_BR" />
        <meta http-equiv="content-language" content="pt-br" />
        <meta
          name="keywords"
          content="antonio, sampaio, leal, desenvolvedor, fullstack, desenvolvimento, sampaioleal"
        />
      </Head>

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
              <li>18 anos</li>
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
                  title="Aquabit Web"
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
                  title="Aquabit Web"
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
        </Grid>
      </Container>

      <Container style={{ margin: "50px 0" }}>
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
