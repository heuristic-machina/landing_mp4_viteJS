import './App.css'
import Section1 from './components/section1'
import Section2 from './components/section2'
import Header from './components/header'
import Card from './components/card'


const App = () => {
  return (
    <div className='container p-12 md:p-14 lg:p-16 xl:p-20 m-7 flex flex-col'>
      <Card />
      <Header />
      <h1 className='mt-8 text-2xl text-center mb-8'>Digitize Your Business</h1>
      <img className='rounded-md' src="https://www.shutterstock.com/shutterstock/videos/3705393675/thumb/10.jpg?ip=x480" alt='' />
      <Section1 />
      <Section2 />
 </div>
  )
};

export default App;
