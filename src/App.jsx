import Header from './components/Header/Header.jsx';
import Examples from './components/Examples.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';

function App() {  
  return (
    <div>
      <Header/>
      <main>
        <CoreConcepts/>
        <Examples/>
      </main>
    </div>
  );
}

export default App;
