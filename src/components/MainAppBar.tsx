'use client'

import { usePathname } from 'next/navigation'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/MenuRounded';

export default function MainAppBar() {
  const pathname = usePathname()
  
  const getPageTitle = (path: string) => {
    switch (path) {
      case '/explore':
        return 'ویترین'
      case '/search':
        return 'جستجو'
      case '/prices':
        return 'قیمت‌ها'
      case '/courses':
        return 'دوره‌ها'
      case '/profile':
        return 'پروفایل'
      default:
        return 'تل‌مارکت'
    }
  }

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        top: 0,
        backgroundColor: 'white',
        color: '#000',
        boxShadow: 'none',
        borderBottom: '1px solid #D9DCE0',
      }}
    >
      <Toolbar>
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ 
            flexGrow: 1,
            fontWeight: '900',
            textAlign: 'right',
            fontSize: '20px',
          }}
        >
          {getPageTitle(pathname)}
        </Typography>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          sx={{ ml: 1, padding: 0 }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
