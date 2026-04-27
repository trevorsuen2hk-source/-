import { Routes, Route } from 'react-router-dom'
import { MainMenu } from './pages/MainMenu'
import { CreateRoom } from './pages/CreateRoom'
import { JoinRoom } from './pages/JoinRoom'
import { WaitingRoom } from './pages/WaitingRoom'
import { Rules } from './pages/Rules'
import { Game } from './pages/Game'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainMenu />} />
      <Route path="/create-room" element={<CreateRoom />} />
      <Route path="/join-room" element={<JoinRoom />} />
      <Route path="/waiting" element={<WaitingRoom />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  )
}
