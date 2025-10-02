import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Project'
import Education from './components/Education'
import Footer from './components/Footer'
import Layout from './components/Layout'


function App() {
  return (
    <Layout>
        <Home/>
      <Skills/>
      <Projects/>
      <Education/>
      <Footer/>
    </Layout>
  )
}
export default App
