import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

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
  const dispatch = useDispatch()
  const cart = useSelector((state: RootState) => state.orders.cart)

  const onSendToConfirm = () => {
    if (cart.length >= 1) {
      dispatch(actionsOrders.confirmOrder())
    }
  }

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
      </Grid>
    </Grid>
  )
}
