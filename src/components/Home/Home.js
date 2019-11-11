import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@material-ui/core/styles'
import { Layout } from '../templates'

let theme = createMuiTheme()
theme = responsiveFontSizes(theme)

const useStyles = makeStyles(theme => ({
  mainFeaturedPost: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage:
      'url(https://miro.medium.com/max/4032/1*R7HneaJobQlvdwaOFMqatw.jpeg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  mainFeaturedPostContent: {
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  overlay: {
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  text: { padding: theme.spacing(4, 8, 8, 8) },
}))

export default () => {
  const classes = useStyles()

  const home = (
    <>
      <Paper className={classes.mainFeaturedPost}>
        <Grid container>
          <Grid item sm={12} className={classes.mainFeaturedPostContent}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              Room
            </Typography>
            <Typography variant="h5" color="inherit">
              Bringing remote workers together
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Grid item sm={8} className={classes.text}>
        <ThemeProvider theme={theme}>
          <Typography variant="h5" color="textSecondary" paragraph>
            Room é uma plataforma web para pessoas e empresas que trabalham de
            forma remota e carecem de uma comunicação mais aproximada. A
            aplicação visa promover maior eficiência nas comunicações e
            interações nos encontros remotos.
            <br />
            <br />
            Apesar das vantagens em se trabalhar a distância há dificuldades
            como problemas de comunicação, colaboração, solidão, motivação, etc.
            Essas dificuldades podem ter consequências negativas na empresa e/ou
            seus participantes, tais como: baixa autoestima, diminuição de
            desempenho, falta de sensação de pertencimento, não se sentir
            ouvido, menor contribuição nos projetos e com as pessoas do
            trabalho, ruídos de comunicação, atrasos em projetos, dificuldades
            em se manter motivado, não explorar potencialidades dos funcionários
            por dificuldades de comunicação/expressão, entre outros.
            <br />
            <br />
            Propõe-se, como solução para minimizar os problemas e evitar suas
            consequências, uma ferramenta de comunicação na qual é possível
            visualizar os avatares dos colegas em salas virtuais (inspirado na
            Matrix) através das quais os usuários podem interagir via chat e
            video-chamadas. Além disso, o sistema conta com um bot (cãozinho
            Dogo) que busca mediar a comunicação e promover maior integração
            entre as pessoas.
            <br />
            <br />
            Como consequência, espera-se que os usuários possam comunicar-se
            melhor, sintam-se mais a vontade de interagir, experimentem um
            ambiente virtual mais produtível e agradável e conversem de forma
            mais conveniente (as salas temáticas contribuem pra isso).
          </Typography>
        </ThemeProvider>
      </Grid>
    </>
  )
  return <Layout content={home} />
}
