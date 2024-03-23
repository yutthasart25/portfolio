import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ImageProfile } from './components/ImageProfile'
import { Title } from './components/Title'
import moment from 'moment'
import imgprofile from './assets/profile.png'
import axios from 'axios';


const endpoint = 'https://sheetdb.io/api/v1/rk81b6yuz48vu'

const App = () => {
  const [hide, setHide] = useState(false)

  const [data, setData] = useState([])

  const callApi = async () => {
    const d = await axios.get(endpoint).then((response) => {
      console.log('response', response)
      const data = response.data
      setData(data)
      return data
    })
  }

     
  useEffect( () => {
    callApi()
  },[])

  return (
    <>
     <main id="main">
      <div className="leftport">
        <ImageProfile image={picture}/>
        <Title title="Yutthasart Yimchudech">
          <p>ตำแหน่ง : นักศึกษา</p>
        </Title>

        <Title title="Contact">
          <p>วันเกิด : {moment("2002/07/21").format("DD MMM YYYY")}</p>
          <p style={{display: hide ? 'none': 'block'}}>
            Tel : +66824948847
          </p>
          <button onClick={() => setHide(!hide)}>
            {hide ? 'Show': 'Hide'}
          </button>
          <p>Email : Yutthasart212545@gmail.com</p>
          <p>Github : https://github.com/yutthasart25</p>
        </Title>

        <Title title="Education">
          <p>ปริญญาตรี สาขาโทคโนโลยีสารสนเทศ</p>
          <p>มหาวิทยาลัยราชภัทรสวนสุนันทา</p>
        </Title>
      </div>
      <div className="rightport">
        <Title title="About Me">
          <p>Currently a sophomore in the Faculty of Information Technology at Suan Sunandha Rajabhat University, I have experience in graphic design using Adobe Illustrator and am interested in further studying Machine Learning and AI.My goal is to acquire a diverse skill set and apply my knowledge to AI effectively.
         </p>
        </Title>
        
        <Title title="Work Experience">
          <p class="text-yellow bold">Senior Project</p>
          <p>Improving AI Performance There are many ways to improve AI performance.</p>
          <p class="text-yellow bold">Intern Shift</p>
          <p>Smart Shift Solution - AI</p>
         
        </Title>

        <Title title="Skills">
          <p>English : Advance</p>
          <p>Adobe illustrator : basic</p>
          <p>Figma : basic</p>
          <p>Canva : intermediate</p>
          <p>HTML : basic</p>
          <p>CSS : basic</p>
        </Title>
        


      </div>
     </main>
    </>
  )
  }

export default App
