import './src/styles/global.css'

// Wrap the root element to provide any necessary context providers
export const wrapRootElement = ({ element }) => {
  return element
}

// Add any browser-specific lifecycle methods
export const onClientEntry = () => {
  // Client-side initialization code
}

export const onRouteUpdate = ({ location }) => {
  // Track page views or handle route changes
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