import React from 'react'
import { useSelector } from 'react-redux'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import { Box } from '@material-ui/core'

import { Cart } from './components/Cart'
import { OrderItem } from './components/OrderItem'
import { ordersList } from '../../store/orders/selector'

export const Orders = () => {
  const orders = useSelector(ordersList)

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
      <Grid container item xs={12} spacing={4}>
        <Grid item xs={12}>
          <Box textAlign='center'>
            <Typography variant='h4'>Orders</Typography>
          </Box>
        </Grid>
        <Grid container item xs={12} spacing={4}>
          {orders.map((item) => (
            <OrderItem order={item.order} created={item.created} key={item.id} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}
