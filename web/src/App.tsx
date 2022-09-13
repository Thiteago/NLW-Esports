import './styles/main.css'
import background from './assets/img/logo-nlw.svg'

function App() {
  
  return (
    <div className='max-w-[1344px] mx-auto flex items-center flex-col my-20'>
        <img src={background}></img>
        <h1 className='text-6xl text-white font-black mt-20'>Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> esta aqui</h1>
        
        <div className='grid grid-cols-6 gap-6 mt-16'>
            <a href="./">
                <img src="/apex.png"></img>
            </a>
            <a href="./">
                <img src="/csgo.png"></img>
            </a>            
            <a href="./">
                <img src="/dota2.png"></img>
            </a>            
            <a href="./">
                <img src="/fortnite.png"></img>
            </a>            
            <a href="./">
                <img src="/leagueoflegends.png"></img>
            </a>            
            <a href="./">
                <img src="/wow.png"></img>
            </a>
        </div>
    </div>
  )
}

export default App
