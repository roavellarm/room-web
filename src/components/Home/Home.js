import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import FavoriteIcon from '@material-ui/icons/Favorite'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@material-ui/core/styles'
import { Layout } from '../templates'
import background from '../../assets/images/background.jpg'

let theme = createMuiTheme()
theme = responsiveFontSizes(theme)

const useStyles = makeStyles(theme => ({
  mainFeaturedPost: {
    color: theme.palette.common.white,
    marginBottom: theme.spacing(1),
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  mainFeaturedPostContent: {
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(14),
    },
  },
  overlay: {
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  text: {
    padding: theme.spacing(4, 8, 8, 8),
    textAlign: 'left',
  },
}))

export default () => {
  const classes = useStyles()

  function ExternalLink({ url, content }) {
    return (
      <a
        style={{ color: '#3f51b5', textDecoration: 'none' }}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    )
  }

  const home = (
    <>
      <Paper className={classes.mainFeaturedPost}>
        <Grid container>
          <Grid
            item
            sm={12}
            xs={12}
            lg={12}
            className={classes.mainFeaturedPostContent}
          >
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
          <Typography variant="h6" color="textSecondary" paragraph>
            <h3>Prezados participantes, sejam bem-vindos a Room!</h3>
            Este site é um{' '}
            <ExternalLink
              url="https://en.wikipedia.org/wiki/Minimum_viable_product"
              content="MVP"
            />{' '}
            (Produto Mínimo Viável) desenvolvido com{' '}
            <FavoriteIcon color="error" /> como parte do trabalho de conclusão
            do curso de Análise e Desenvolvimento de Sistemas da Faculdade SENAC
            - Porto Alegre.
            <br />
            <br />
            Room é uma plataforma web para pessoas e empresas que trabalham de
            forma remota e carecem de uma comunicação mais aproximada. A
            aplicação visa promover um ambiente virtual propício para melhorar
            as interações e comunicações nos encontros a distância.
            <br />
            <br />
            Apesar das vantagens em se trabalhar a distância, pesquisas apontam
            que existem dificuldades como: problemas de comunicação,
            colaboração, solidão, motivação, entre outras. Essas dificuldades
            podem ter consequências negativas para a empresa e/ou seus
            participantes, tais como: baixa autoestima, diminuição de
            desempenho, falta de sensação de pertencimento, não se sentir
            ouvido, menor contribuição nos projetos e com as pessoas do
            trabalho, ruídos de comunicação, atrasos em projetos, dificuldades
            em se manter motivado, desconhecimento de potencialidades dos
            funcionários por carências na comunicação/expressão, entre outros.
            <br />
            <br />
            Foi proposto como hipótese de solução para minimizar tais problemas
            e evitar suas consequências, uma ferramenta de comunicação na qual
            seja possível visualizar a presença dos avatares dos colegas em
            salas virtuais (inspirado na{' '}
            <ExternalLink
              url="https://github.com/ResultadosDigitais/matrix"
              content="Matrix"
            />
            ) através das quais os usuários podem interagir via chat e
            vídeo-chamadas. Além disso, futuramente o sistema contará com um bot
            (cãozinho Dogo) que buscará mediar a comunicação e promover maior
            integração entre as pessoas.
            <br />
            <br />
            Como consequência espera-se que os usuários sintam-se mais à vontade
            para interagir, melhorar sua comunicação, experimentar um ambiente
            virtual agradável para interagir e possam conversar forma mais
            conveniente.
            <br />
            <br />
            Muito obrigado a cada um pela sua participação!
            <br />
            <br />
            Agradeço se puderem dar seu{' '}
            <Link
              to={'/feedback'}
              style={{ color: '#3f51b5', textDecoration: 'none' }}
            >
              feedback
            </Link>
            . Toda sugestão ou crítica construtiva será bem acolhida!
            <br />
            <br />
            Abraço,
            <br />
            <br />
            Rodrigo Avellar de Muniagurria
          </Typography>
        </ThemeProvider>
      </Grid>
    </>
  )
  return <Layout content={home} />
}
