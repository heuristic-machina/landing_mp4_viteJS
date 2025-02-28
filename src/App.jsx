import './App.css'
import Home from './components/home'
import Section1 from './components/section1'
import Section2 from './components/section2'
import Header from './components/header'
import Card from './components/card'


const App = () => {
  return ( 
  <>
      <div className='container p-8 md:p-14 lg:p-16 xl:p-20 m-7 flex flex-col'>
        <Header />
        <Home />
        <Card />
        <h1 className='mt-28 text-2xl text-center mb-8 underline decoration-4 underline-offset-8'>Digitize Your Business</h1>
        <img className='rounded-md' src='/landing-bg.png' alt='' />
        <Section1 />
        <Section2 />
      </div>
  </>
  )
};

export default App;
