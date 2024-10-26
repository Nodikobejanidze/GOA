import Box from "./components/Box"

function App() {
  const boxColors = [
    //   0   1   2  3    4   5   6   7
    "1", "2", "3", "4", "5", "6", "7", "8",
  ]

  const handleColorSwitcher = (index) => {
    if ([1, 5, 7].includes(index)) {
      return `bg-red-500`
    } else {
      return `bg-red-900`
    }  }
  return (
    <div>
      <div className="h-screen bg-slate-50 w-full">
        <div className="container flex justify-between gap-2">
          {boxColors.map((color, index) => (
            <Box key={`_box--${index}`} className={handleColorSwitcher(index)} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App