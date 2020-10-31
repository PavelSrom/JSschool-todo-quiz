import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles'
import { Tabs, TabList, Tab } from '@chakra-ui/core'
import { Theme } from '../../utils/mui-theme'

const useStyles = makeStyles<Theme>(theme => ({
  header: {
    padding: theme.spacing(2),
    background: theme.color.primary,
    boxShadow: '0 3px 6px rgba(0,0,0,.2)',
    zIndex: 11,
  },
}))

const navigationLinks: { label: string; link: string }[] = [
  {
    label: 'Todos',
    link: '/todo',
  },
  {
    label: 'Quiz',
    link: '/quiz',
  },
]

export const Header: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0)
  const navigate = useNavigate()
  const location = useLocation()
  const classes = useStyles()

  // set active tab on page refresh
  // seems to not work in Chakra for whatever reason
  useEffect(() => {
    const currTab = navigationLinks.findIndex(({ link }) => link === location.pathname)
    setActiveTab(currTab)
  }, [location.pathname])

  return (
    <header className={classes.header}>
      <Tabs
        variant="soft-rounded"
        variantColor="blue"
        tabIndex={activeTab}
        onChange={(newIndex: number) => setActiveTab(newIndex)}
      >
        <TabList>
          {navigationLinks.map(({ link, label }, index) => (
            <Tab key={index} value={index} onClick={() => navigate(link)}>
              {label}
            </Tab>
          ))}
        </TabList>
      </Tabs>
    </header>
  )
}
