import { useState } from 'react';
import './App.css';
import { FileDropPad } from './FileDropPad';
import ModelService from './services/ModelService';

function App() {
  const modelId = process.env.REACT_APP_MODEL_ID;

  const [imageData, setImageData] = useState(null)
  const [infResult, setInfResult] = useState("")
  const [inferred, setInferred] = useState(false)
  const [isLoadingInf, setIsLoadingInf] = useState(false)

  const startFileAdd = async (files) => {

    setIsLoadingInf(true)

    const reader = new FileReader();
    reader.onload = async (e) => {
      const data = e.target.result;
      console.debug(data)
      setImageData(data)

    }
    reader.readAsDataURL(files[0]);

    const inferences = await ModelService.inferImage(modelId, files[0])

    setInfResult(inferences)
    setInferred(true)
    setIsLoadingInf(false)
  }

  return (
    <div className="App">
      <header className="App-header">

        <FileDropPad label="Drop an image here to classify" startFileAdd={(files) => { startFileAdd(files) }} />

        <p>
          Set the target model Id in the .env file. Then drag and drop an image to classify.
        </p>
        {
          imageData && <img
            alt="preview"
            style={{ "border": "5px solid #ebebeb", "borderRadius": "20px" }}
            height={350}
            src={`${imageData}`}
          />
        }
        {
          (isLoadingInf ? <>
            <div className='mt-2 lead font-italic'> Loading Inference... </div>
          </> : inferred && <div className='mt-2 lead font-italic'>
            <div className='mt-2 lead font-italic'> {JSON.stringify(infResult)}</div>
          </div>)
        }
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
