import React from 'react'
import { useSelector } from 'react-redux'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { Box } from '@material-ui/core'
import List from '@material-ui/core/List'

import { getInfoPizza } from '../../store/orders/selector'
import { ListItemCustom } from './components/ListItemCustom'

export const Statistics = () => {
  const { popular, ingredients } = useSelector(getInfoPizza)

  if (popular.length < 1)
    return (
      <Grid item xs={12}>
        <Box textAlign='center'>
          <Typography variant='h6'>Statistics is empty</Typography>
        </Box>
      </Grid>
    )
  return (
    <Grid container alignItems='flex-start' spacing={3}>
      <Grid container item xs={12} md={5}>
        <Grid item xs={12}>
          <Box mt={4} mb={2} textAlign='center'>
            <Typography variant='h4'>Popular pizza</Typography>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <List component='ul' aria-label='popular'>
            {popular.map((item, index) => (
              <ListItemCustom key={item} indx={index} item={item} />
            ))}
          </List>
        </Grid>
      </Grid>
      <Grid item xs={12} md={2}>
        <Box
          borderColor='primary.main'
          style={{ width: '2rem', height: '100vh' }}
          borderRight={1}
          display={{ xs: 'none', md: 'block' }}
        />
      </Grid>
      <Grid container item xs={12} md={5}>
        <Grid item xs={12}>
          <Box mt={4} mb={2} textAlign='center'>
            <Typography variant='h4'>Ingredients</Typography>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <List component='ul' aria-label='ingredients'>
            {ingredients.map((item, index) => (
              <ListItemCustom key={item} indx={index} item={item} />
            ))}
          </List>
        </Grid>
      </Grid>
    </Grid>
  )
}
