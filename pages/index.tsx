import Image from "next/image";
import { MainContent, AboutSection, SectionTitle } from "../styles";
import Typed from "react-typed";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";

const projects = [
  {
    title: "TODO List",
    image: "/todo.png",
    description:
      "Projeto educativo com o intuito de ensinar React a conceitos de gerenciamento de estado",
    link: "https://todolist-lyart.vercel.app",
    buttonLabel: "Experimentar",
  },
  {
    title: "material-ui-numeric-input",
    image: "/numeric-input.png",
    description:
      "Input numérico para utilizar com o framework Material-UI para ReactJS",
    link: "https://github.com/SampaioLeal/material-ui-numeric-input",
    buttonLabel: "Repositório",
  },
  {
    title: "MeuCEP",
    image: "/meucep.png",
    description:
      "Aplicação de consulta de CEPs desenvolvida com NextJS e Chakra UI",
    link: "https://meucep.vercel.app/",
    buttonLabel: "Experimentar",
  },
];

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
        <MainContent container spacing={2}>
          <Grid item sm={8}>
            <Box display="flex" flexDirection="column" justifyContent="center">
              <Typography className="p">Olá, {helloMessage}</Typography>
              <Typography className="h2">Me chamo Antonio Sampaio.</Typography>
              <Typography className="p">
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
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={4}>
            <Image
              src="/samp.jpeg"
              alt="Programador lindo"
              width={250}
              height={250}
            />
          </Grid>
        </MainContent>
      </Container>

      <AboutSection>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Image
                src="/main-presentation.svg"
                alt="Desenvolvedor programando"
                width={500}
                height={500}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                height="100%"
              >
                <SectionTitle variant="h2">Sobre mim</SectionTitle>
                <li>19 anos</li>
                <li>Morando em Teresina-PI</li>
                <Typography className="p">
                  Descobrindo a tecnologia desde os 14, fui introduzido ao
                  desenvolvimento Web e, desde então, meu foco é dominar as
                  tecnologias Node.JS e React/React Native, utilizando
                  TypeScript para um melhor ambiente de desenvolvimento e
                  trabalho em equipe.
                  <br />
                  Minha maior experiência é o desenvolvimento de plataformas e
                  interfaces de aplicações, unindo design e interatividade a uma
                  melhor experiência de usuário.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </AboutSection>

      <Container style={{ marginTop: 50 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <SectionTitle variant="h2">Projetos</SectionTitle>
          </Grid>

          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: "345px" }}>
                <CardActionArea>
                  <CardMedia
                    style={{ height: 140 }}
                    image={project.image}
                    title={project.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" component="p" color="inherit">
                      {project.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button variant="contained" href={project.link}>
                    {project.buttonLabel}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container sx={{ marginTop: 10 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} sm={12} md={6}>
            <SectionTitle variant="h2">Contato</SectionTitle>
            <Typography variant="h6" sx={{ marginY: 2 }}>
              Você pode entrar em contato comigo a partir das redes sociais
              abaixo
            </Typography>
            <Grid container spacing={2}>
              <Grid item>
                <Button
                  variant="contained"
                  startIcon={<LinkedIn />}
                  href="https://www.linkedin.com/in/sampaio-leal"
                >
                  LinkedIn
                </Button>
              </Grid>

              <Grid item>
                <Button
                  variant="contained"
                  startIcon={<GitHub />}
                  href="https://github.com/SampaioLeal"
                >
                  GitHub
                </Button>
              </Grid>

              <Grid item>
                <Button
                  variant="contained"
                  startIcon={<Instagram />}
                  href="https://github.com/SampaioLeal"
                >
                  Instagram
                </Button>
              </Grid>
            </Grid>
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

      <AppBar
        sx={{
          bgcolor: "#22373e",
        }}
        position="relative"
      >
        <Container maxWidth="md">
          <Toolbar sx={{ justifyContent: "center", padding: 2 }}>
            <Typography variant="body1" color="inherit">
              Desenvolvido com 💙 utilizando NextJS e Material-UI por Sampaio
              Leal
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
