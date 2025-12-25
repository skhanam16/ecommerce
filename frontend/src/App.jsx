
import {Container} from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import Header from './components/header';


const App = () => {
  return (
    <>
      <Header />
        <main className='py-3'>
          <Container>
              {/* <HomeScreen /> */}
              <Outlet />
          </Container>
        </main>
      <Footer />
    </>
  )
}
export default App