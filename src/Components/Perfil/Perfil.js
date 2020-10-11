import React, { useContext } from "react";
import { UserContext } from "./../../Context/UserContext";
import { useHistory } from "react-router-dom";
import "./Perfil.css";
//acordion
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
//button
import Button from "@material-ui/core/Button";
//theme
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1b5e20",
    },
    secondary: {
      main: "#b9f6ca",
    },
  },
});

function Perfil() {
  const history = useHistory();

  const classes = useStyles();

  const contexto = useContext(UserContext);

  if (!contexto.user) {
    return <div className="perfil">{history.push("/")}</div>;
  }

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <h1>Bem vindo! {contexto.user.nome}</h1>
        <div className="accordion">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                Informações Pessoais
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <h2>
                  Nome completo: {contexto.user.nome} {contexto.user.sobrenome}
                </h2>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
                Informações de Conta
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <h2>Email: {contexto.user.email}</h2>
                <h2>Senha: {contexto.user.senha}</h2>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="btn-perfil">
          <Button
            variant="outlined"
            color="primary"
            onClick={() => history.push("/")}
          >
            Voltar
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Perfil;
