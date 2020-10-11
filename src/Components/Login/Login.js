import React, { useState, useContext } from "react";
import { UserContext } from "./../../Context/UserContext";
import { useHistory } from "react-router-dom";
import "./Login.css";
//textField
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
//button
import Button from "@material-ui/core/Button";
//theme
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
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

function Login() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const classes = useStyles();

  const contexto = useContext(UserContext);

  const history = useHistory();

  function enviar(event) {
    event.preventDefault();
    const user = { nome, sobrenome, email, senha };
    contexto.setUser(user);
    history.push("/perfil");
  }

  return (
    <div className="form-container">
      <ThemeProvider theme={theme}>
        <form className={classes.root} autoComplete="off" onSubmit={enviar}>
          <TextField
            color="primary"
            required
            className="text-field"
            label="Nome"
            variant="filled"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
          <TextField
            color="primary"
            required
            className="text-field"
            label="Sobrenome"
            variant="filled"
            value={sobrenome}
            onChange={(event) => setSobrenome(event.target.value)}
          />
          <TextField
            color="primary"
            required
            className="text-field"
            label="Email"
            variant="filled"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            color="primary"
            required
            id="text-field"
            label="Senha"
            variant="filled"
            type="password"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
          />
          <div className="btn-form">
            <Button type="submit" variant="outlined" color="primary">
              Logar
            </Button>
          </div>
        </form>
      </ThemeProvider>
    </div>
  );
}

export default Login;
