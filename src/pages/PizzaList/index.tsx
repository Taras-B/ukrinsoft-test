import React from 'react'

import { useSelector } from 'react-redux'

import { RootState } from '../../store/rootReducer'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import { Box } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    maxWidth: 460,
  },
  wrapper: {
    marginTop: 20,
  },
  cardHeader: { textAlign: 'center' },
})

export const PizzaList = () => {
  const classes = useStyles()
  const pizzas: { [index: string]: any } = useSelector(
    (state: RootState) => state.pizza.data
  )
  const keysPizzas = Object.keys(pizzas)
  console.log(keysPizzas.map((el) => pizzas[el]))

  return (
    <Grid container justify='center' spacing={3} className={classes.wrapper}>
      {keysPizzas.map((el) => (
        <Grid key={el} item xs={12} md={6} sm={6} className={classes.root}>
          <Card variant='outlined'>
            <CardHeader title={el} className={classes.cardHeader} />

            <Divider />
            <CardContent>
              <Typography variant='h6' color='textSecondary'>
                Ingredients:
              </Typography>
              <Divider />
              <Grid container>
                {Object.entries(pizzas[el]).map((item) => (
                  <Grid item key={item[0]} xs={12} sm={6}>
                    <Box ml={2} my={1} boxShadow={1}>
                      <Typography variant='subtitle2'>
                        {item[0]}: {item[1]}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
              <Divider />
            </CardContent>
            <CardActions>
              <Button color='primary' size='small'>
                Order
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}
