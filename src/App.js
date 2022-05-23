import './App.css';
import Navbar from './Navbar.js'
import Main from './Main.js'

function App() {
  return (
    <div className="App">
        <h1>Meditation React App</h1>
        {/* <Navbar /> */}
        <Main data={data}/>
    </div>
  );
}

const data =[
  {
    title: 'Bell Meditation',
    embedId: 'XHvtIcaD194',
  },
  {
    title: 'Body, Space, Awareness',
    embedId: '5GSeWdjyr1c',
    start: '7',
  },
  {
    title: '5 Minute Meditation',
    embedId: 'inpok4MKVLM',
    start: '30',
  },
  {
    title: 'Sound for Action',
    embedId: '7VaHh9EUcfE',
    start: '30'
  },

  {
    title: 'Alternate Nostril Breathing',
    embedId: '1W7oUZ8EVbI',
    start: '190',
  },
  {
    title: 'Sleep Prep',
    embedId: 'b2RhXCugEW4',
    start: '10',
  },
  {
    title: 'Control Ego',
    embedId: '-lOTZRpOvxY',
    start: '60',
  },
  
]


export default App;
