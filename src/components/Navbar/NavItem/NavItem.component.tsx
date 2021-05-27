import React from 'react'
import { NavLink as RouterLink } from 'react-router-dom'
import { Button, ListItem, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
  },
  button: {
    // color: theme.palette.text.secondary,
    color: 'white',
    fontWeight: theme.typography.fontWeightMedium,
    justifyContent: 'flex-start',
    letterSpacing: 0,
    padding: '10px 8px',
    textTransform: 'none',
    width: '100%',
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  title: {
    marginRight: 'auto',
  },
  active: {
    color: theme.palette.primary.main,
    '& $title': {
      fontWeight: theme.typography.fontWeightMedium,
    },
    '& $icon': {
      color: theme.palette.primary.main,
    },
  },
}))

const NavItem = ({ className, href, title, ...rest }: any) => {
  const classes = useStyles()

  return (
    <ListItem className={classes.item} disableGutters {...rest}>
      <Button
        activeClassName={classes.active}
        className={classes.button}
        component={RouterLink}
        to={href}
      >
        <span className={classes.title}>{title}</span>
      </Button>
    </ListItem>
  )
}

export default NavItem
