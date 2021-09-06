import { AppBar, Box, Card, Grid, styled, Typography } from "@mui/material";

export const MainContent = styled(Grid)({
  padding: "5rem 0",
  flex: 1,
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  alignItems: "center",
  color: "white",

  ".p": {
    fontFamily: "Raleway, Robot, sans-serif",
    fontSize: 20,
  },
  ".h2": {
    fontFamily: "Raleway, Robot, sans-serif",
    fontSize: 28,
    fontWeight: 900,
  },
});

export const AboutSection = styled(Box)({
  backgroundColor: "#1e3b46",
  color: "white",
  ".p": {
    lineHeight: "1.4em",
    margin: "10px 0",
    fontSize: 18,
  },
  li: {
    fontSize: 18,
  },
  ".img": {
    borderRadius: 10,
  },
});

export const SectionTitle = styled(Typography)(({ theme }) => ({
  color: "white",
  fontFamily: "Raleway, sans-serif",
  fontWeight: 900,
  fontSize: "2.5em",

  "&::first-letter": {
    color: theme.palette.primary.main,
  },
}));
