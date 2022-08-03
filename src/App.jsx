import 'normalize.css';
import Card from './components/Card';
import Dropdown from './components/Dropdown';
import Layout from './components/Layout/Layout';
import './global.css'



function App() {

  return (
   <Layout>
      <Dropdown />
      <Card />
   </Layout>
  )
}

export default App
