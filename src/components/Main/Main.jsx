import React, { useContext } from 'react'
import {assets} from '../../assets/assets'
import './Main.css';
import { Context } from '../../context/Context';
import { marked } from 'marked';

function Main() {
    const {input,setInput,recentPrompt,setRecentPrompt,prevPrompts,setPrevPrompts,showResult,setShowResult,loading,setLoading,resultData,setResultData,onSent} = useContext(Context)
  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt=''/>
      </div>
      <div className="main-container">
        {
          !showResult
          ?<><div className="greet">
            <p><span>Hello Dev.</span></p>
            <p>How can I help you?</p>
        </div>
        <div className="cards">
            <div className="card">
                <p>Suggest places to see for an upcoming road trips</p>
                <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
                <p>Briefly summarize the concept of : urban planning</p>
                <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
                <p>Brainstorm team bonding activities for our work retreat </p>
                <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
                <p>Improve the readibility of the following code</p>
                <img src={assets.code_icon} alt="" />
            </div>
        </div></>:<div className='result'>
          <div className="result-title">
            <img src={assets.user_icon} alt="" />
            <p>{recentPrompt}</p>
          </div>
          <div className="result-data">
            <img src={assets.gemini_icon} alt="" />
            {loading
            ?<div className='loader'>
              <hr />
              <hr />
              <hr />
            </div>:
            
            <p dangerouslySetInnerHTML={{__html:marked(resultData)}}></p> 
            }
          </div>

        </div>
        }
        
      <div className="main-bottom">
        <div className="search-box">
            <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here!'/>
        <div>
            <img src={assets.gallery_icon} alt="" />
            <img src={assets.mic_icon} alt="" />
           {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}
        </div>
        </div>
      <p className="bottom-info">
        Double click to check any errors
      </p>
      </div>
      </div>
    </div>
  )
}

export default Main
