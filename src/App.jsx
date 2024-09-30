import './styles/App.css'
import './styles/canvas.css'
import Header from './components/layout/Header'
import AvatarCanvas from './components/AvatarCanvas'
import ActivityCanvas from './components/ActivityCanvas'

function App() {
  return (
    <>
      <Header />
      <main className='main-div'>
        <AvatarCanvas />
        <div className='separator'></div>
        <ActivityCanvas />
      </main>
    </>   

  )
}

export default App
