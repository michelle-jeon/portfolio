import { useState } from 'react';
import './App.css'
import Header from './components/Header/Header';


export default function App() {
  const [selectedNav,setSelectedNav] = useState('Home');
  return (
    <div>
      <Header 
        selectedNav={selectedNav}
        onNavChange={setSelectedNav}
      />
      <section className=''>
        
      </section>
    </div>
  );
}
