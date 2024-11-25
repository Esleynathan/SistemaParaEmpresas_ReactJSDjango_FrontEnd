function App() {
  const handleClick = () => {
    alert('Clicou aqui!')
  }

  return (
    <div>
      <button
        onClick={() => handleClick()}
      >
        Clique aqui
      </button>
    </div >
  )
}

export default App
