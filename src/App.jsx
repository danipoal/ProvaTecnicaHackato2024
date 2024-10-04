import './styles/App.css'
import './styles/canvas.css'
import './styles/buttons.css'
import Header from './components/layout/Header'
import AvatarCanvas from './components/AvatarCanvas'
import ActivityCanvas from './components/ActivityCanvas'

function App() {
  return (
    <div className='app'>
      <Header />
      <main className='main-div'>
        <AvatarCanvas />
        <div className='separator'></div>
        <ActivityCanvas />
      </main>
    </div>   

  )
}

export default App
