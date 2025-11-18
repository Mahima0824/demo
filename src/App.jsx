import LocomotiveScroll from 'locomotive-scroll';
import RoutesPath from './router/RoutesPath'

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <RoutesPath />
  )
}

export default App