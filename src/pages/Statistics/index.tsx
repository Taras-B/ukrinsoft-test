import React from 'react'
import { useSelector } from 'react-redux'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import { Box } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import { getInfoPizza } from '../../store/orders/selector'

export const Statistics = () => {
  const { popular } = useSelector(getInfoPizza)

  if (popular.length < 1)
    return (
      <Grid item xs={12}>
        <Box textAlign='center'>
          <Typography variant='h6'>Statistics is empty</Typography>
        </Box>
      </Grid>
    )
  return (
    <Grid container justify='center' spacing={3}>
      <Grid container item xs={12}>
        <Grid item xs={12}>
          <Box mt={4} mb={2} textAlign='center'>
            <Typography variant='h4'>Popular pizza</Typography>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <List component='nav' aria-label='secondary mailbox folders'>
            {popular.map((item, index) => (
              <ListItem key={item}>
                <ListItemText
                  disableTypography={true}
                  primary={
                    <Typography variant='h6'>{`${index + 1}) ${item}`}</Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Grid>
  )
}
