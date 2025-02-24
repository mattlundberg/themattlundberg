import './src/styles/global.css' 
import { navigate } from "gatsby"

// Wrap the root element to provide any necessary context providers
export const wrapRootElement = ({ element }) => {
  return element
}

// Add any browser-specific lifecycle methods
export const onClientEntry = () => {
  // Client-side initialization code
}

export const onRouteUpdate = ({ location }) => {
  // Get all valid routes from our routes config
  const validPaths = [
    '/',
    '/tools/',
    '/audit/',
    '/contact/',
    '/portfolio/',
    '/schedule/',
    // Add any other valid paths here

  ]

  // Check if current path is valid
  const isValidPath = validPaths.includes(location.pathname)

  // If path is not valid and not the 404 page, redirect to home
  if (!isValidPath && location.pathname !== '/404') {
    navigate('/')
  }
}

// Handle service worker lifecycle if using PWA
export const onServiceWorkerUpdateReady = () => {
  window.location.reload()
}

export const shouldUpdateScroll = ({
  routerProps: { location },
  prevRouterProps
}) => {
  // Custom scroll behavior
  return true
}
