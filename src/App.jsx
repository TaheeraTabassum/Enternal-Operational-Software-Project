import { useContext } from "react"

import { ThemeContext } from "./ThemeContext"


const App = () => {
   const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <div className={theme === "dark" ? "bg-black text-white" : "bg-white text-black"}>
      <h2>FAI Dashboard</h2>
     
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  )
}

export default App
