import React from 'react'
import { useSelector } from 'react-redux'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Paper from '@material-ui/core/Paper'
import { Box } from '@material-ui/core'
import { RootState } from '../../store/rootReducer'
import { actionsOrders } from '../../store/orders/actions'
import { Cart } from './components/Cart'

export const Orders = () => {
  const orders = useSelector((state: RootState) => state.orders.orders)

  return (
    <Grid container justify='center' spacing={3}>
      <Grid container item xs={12}>
        <Grid item xs={12}>
          <Box mt={4} mb={2} textAlign='center'>
            <Typography variant='h4'>Cart</Typography>
          </Box>
        </Grid>
        <Cart />
      </Grid>
      <Grid item xs>
        <Divider />
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={12}>
          <Box textAlign='center'>
            <Typography variant='h4'>Orders</Typography>
          </Box>
        </Grid>
        <Grid container item xs={12} spacing={4}>
          {orders.map((item) => (
            <Grid item xs={12} sm={6} key={item.id}>
              <Paper elevation={14}>
                <Box ml={2} py={1}>
                  <Grid container>
                    <Grid item xs={6} sm={3}>
                      <Typography variant='h5'>Order:</Typography>
                    </Grid>
                    <Grid item xs={6} sm={9}>
                      <Typography variant='h6'>{item.order.join(', ')}</Typography>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={6} sm={4}>
                      <Typography variant='h5'>Created:</Typography>
                    </Grid>
                    <Grid item xs={6} sm={8}>
                      <Typography variant='h6'>
                        {new Intl.DateTimeFormat('ua-UA').format(new Date(item.created))}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}
