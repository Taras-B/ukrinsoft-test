import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Paper from '@material-ui/core/Paper'
import { Box } from '@material-ui/core'
import { RootState } from '../../store/rootReducer'
import { actionsOrders } from '../../store/orders/actions'

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
        {cart.length >= 1 ? (
          <>
            <Grid container item spacing={3}>
              {cart.map((item) => (
                <Grid item xs={12} sm={6}>
                  <Paper elevation={14} key={item}>
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
        ) : (
          <Grid item xs={12}>
            <Box textAlign='center'>
              <Typography variant='h6'>Cart is empty</Typography>
            </Box>
          </Grid>
        )}
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h4'>Orders</Typography>
      </Grid>
    </Grid>
  )
}
