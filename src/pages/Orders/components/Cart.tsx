import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

import { RootState } from '../../../store/rootReducer'
import { actionsOrders } from '../../../store/orders/actions'

export const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state: RootState) => state.orders.cart)

  const onSendToConfirm = () => {
    if (cart.length >= 1) {
      dispatch(actionsOrders.confirmOrder())
    }
  }

  if (cart.length < 1) {
    return (
      <Grid item xs={12}>
        <Box textAlign='center'>
          <Typography variant='h6'>Cart is empty</Typography>
        </Box>
      </Grid>
    )
  }
  return (
    <>
      <Grid container item spacing={3}>
        {cart.map((item, index) => (
          <Grid item xs={12} sm={6} key={`${item}${index}`}>
            <Paper elevation={14}>
              <Box textAlign='center' py={1}>
                <Typography variant='body1'>{item}</Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Grid container item xs={12} justify='center'>
        <Box mt={2}>
          <Button color='primary' onClick={onSendToConfirm}>
            Confirm
          </Button>
        </Box>
      </Grid>
    </>
  )
}
