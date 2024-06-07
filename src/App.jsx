/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { text } from './components/Data'

function App() {
  const [numberofParagraph, setnumberofParagraph] = useState(5)
  const [totalParagraph, setTotalParagraph] = useState([])

  //this function will randomly generate indexes of the text data
  function randomIndexes() {
    const array = []
    for (let i = 1; i <= numberofParagraph; i++) {
      let random = Math.floor(Math.random() * 9)
      array.push(text[random])
    }
    return array
  }

  function generateParagraph() {
    if (numberofParagraph === '') {
      alert("Please insert the number of paragraphs")
    }
    else{
      setTotalParagraph(randomIndexes().map((x, index) => <p key={index}>{x}</p>))
    }
  }

  function handleInputChange(e) {
    const value = e.target.value

    if (value === '') {
      setnumberofParagraph("")
    }

    else if (value >= 1 && value <= 9) {

      setnumberofParagraph(Number(value))
    }
  }

  return (
    <div className='bg-[rgb(241,_245,_248)] min-h-screen'>

      <div className='w-[80vw] mx-auto py-[20px]'>

        <div className='flex w-full justify-center items-center gap-x-5 text-[20px] h-[80px]'>

          <p>Paragraphs:</p>

          <input type="number" className='w-[100px] shadow-[0_0_3px_rgba(0,0,0,0.3)] outline-none focus:border-black focus:border-2 px-[5px] py-[3px] rounded-md' onChange={handleInputChange} value={numberofParagraph} max={9} min={1}/>

          <button onClick={generateParagraph} className='bg-[#3498db] text-white px-[8px] py-[4px] rounded-md'>Generate</button>

        </div>

        {/* all the paragraphs will be generated inside this div */}
        <div className='flex flex-col gap-y-5'>

          {totalParagraph}

        </div>

      </div>

    </div>
  )
}

export default App
