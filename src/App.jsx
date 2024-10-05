import './styles/App.css'
import './styles/canvas.css'
import './styles/buttons.css'
import Header from './components/layout/Header'
import AvatarCanvas from './components/AvatarCanvas'
import ActivityCanvas from './components/ActivityCanvas'
import { UrlProvider } from './utils/UrlContext'

function App() {
  return (
    <div className='app'>
      <Header />
      <main className='main-div'>
        <UrlProvider>
          <AvatarCanvas />
          <div className='separator'></div>
          <ActivityCanvas />
        </UrlProvider>

      </main>
    </div>   

  )
}

export default App
