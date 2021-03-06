import React from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import { Box } from '@material-ui/core'

import { IOrder } from '../../../store/orders/types'

type IProps = Omit<IOrder, 'id'>

export const OrderItem = ({ created, order }: IProps) => {
  return (
    <Grid item xs={12} sm={6}>
      <Paper elevation={14}>
        <Box ml={2} py={1}>
          <Grid container>
            <Grid item xs={6} sm={3}>
              <Typography variant='h5'>Order:</Typography>
            </Grid>
            <Grid item xs={6} sm={9}>
              <Typography variant='h6'>{order.join(', ')}</Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6} sm={4}>
              <Typography variant='h5'>Created:</Typography>
            </Grid>
            <Grid item xs={6} sm={8}>
              <Typography variant='h6'>
                {new Intl.DateTimeFormat('ua-UA').format(new Date(created))}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Grid>
  )
}
