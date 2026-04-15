import CoverPage from './Components/CoverPage'
import ChangePage from './Components/ChangePage'
import SummaryPage from './Components/SummaryPage'

export default function App() {
  return (
    <div className="app">
      <CoverPage />
      <ChangePage number={1} />
      <ChangePage number={2} />
      <SummaryPage />
    </div>
  )
}