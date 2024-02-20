import './App.css'

function App() {
  return (
    <div className='App'>
      <nav id="navbar">
        <h2>
          <Link to='/'>reactapp</Link>
        </h2>
        <Link to='/movie/1'>Movie</Link>
        <Link to='/search'>Search</Link>
      </nav>
      <h2>Movie Lib</h2>
    </div>
  )
}

export default App
