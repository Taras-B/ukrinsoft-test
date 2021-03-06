import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'

export const ListItemCustom = ({ indx, item }: { indx: number; item: string }) => (
  <ListItem>
    <ListItemText
      disableTypography={true}
      primary={<Typography variant='h6'>{`${indx + 1}) ${item}`}</Typography>}
    />
  </ListItem>
)
