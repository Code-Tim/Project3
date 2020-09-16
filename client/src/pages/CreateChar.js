import React, { useState, useEffect, useContext, useReducer } from "react";
//components
import Carousel from "../components/Carousel/Carousel";
import Counter from "../components/User/Counter";

//context
import GameContext from "../utils/context/GameContext";
//utils
import API from "../utils/API";
import history from "../utils/History";
//css imports
import "./CreateChar.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import UserInput from "../components/User/UserInput";

 const imageArray = ["https://www.wwe.com/f/styles/wwe_1_1_l/public/all/2020/01/Bobby_Lashley_Pro--e616d36efc1e4b1919a8d771bc2e11ad.png",
                     "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2020/06/Alexa_Bliss_Pro--49a77df0d99b502557cadcdd55f46eae.png",
                     "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2019/12/Alexander_Wolfe_Pro--3bdac11d8fef63ed74af2d935ff833dd.png",
                     "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2019/12/Andrade_Pro--e74f5297207b805ca50603ab14288466.png",
                     "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2020/09/Alyse_Zwick_Profile--766fed99301325431073eb6f1c9431f2.png",
                     "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2020/09/Angel_Garza_Pro--12c90ef3a57a9bde157c6182d3a4393e.png",
                     "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2019/12/Arturo_Ruas_Pro--67de7efb50fb23ada701ab5517d5ab1f.png",
                     "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2020/01/Austin_Theory_Pro--8259f95644ddaa244e47b5305f5723f0.png",
                     "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2020/04/Bianca_Belair_Pro--0f656f695b59ac8b5c7c136a285ef9ff.png",
                     "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2019/12/Big_Show_Pro--d9e95033fbd8c3000fe07c132d6240c5.png",
                     "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/rd-talent/Profile/Brock_Lesnar_pro.png",
                     "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2020/01/Carmella_Pro--5ec7c02168ea1ad773b25e8cfef076d0.png",
                     "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2019/12/Corey_Graves_Pro--fab149c2bfbf286ba1577b275b0d9ffa.png",
                     "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2019/12/David_Otunga_Pro--fdaafa279d37106d9ce2733714579da0.png",
                     "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2020/01/Dexter_Lumis_Pro--d09cc0edff80e5623b26d884efb53fc4.png",
                     "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2018/05/Charlotte_pro--b32f35e8b46a884b909cc091908cf52b.png",
                     ""
                     ]

function CreateChar() {
  const [userState,setUserState] = useState({
    "name": '',
    "description": "User Created Character",
    "imgUrl": '',
    "health":'',
    "stamina": '',
     "finishingMove":""
  })

    // Set the initial count state to zero, 0
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
  
    // Create handleIncrement event handler
    const handleIncrement = () => {
      setCount(count + 1);
    };
  
    //Create handleDecrement event handler
    const handleDecrement = () => {
      setCount(count - 1);
    };
  
  
    
  
    // Create handleIncrement event handler
    const handleIncrement2 = () => {
      setCount2(count2 + 1);
    };
  
    //Create handleDecrement event handler
    const handleDecrement2 = () => {
      setCount2( count2 - 1);
    };
  
  const saveCharacter = () => {
   console.log(userState)
  const character = {
      "name": userState.name,
      "description": "User Created Character",
      "imgUrl": userState.imgUrl,
      "health": count,
      "stamina":count2,
      "finishingMove":""
    }
    console.log(character)
    API.createNewCharacter(character).then(res=>{
      console.log(res)
    })

    
  }
 
 const handleInputChange = event => {
   const {name,value}= event.target
   setUserState({
     ...userState,
     [name]:value

   })
   console.log(value)
 }
 const handleInputCarousel = index => {
    
    setUserState({
      ...userState,
      imgUrl: imageArray[index]
    })
    console.log("image:",imageArray[index])
 }
  return (
   
    <div className="wrapper">
      <div id="title">Create a Character</div>
      <div className="create-content"></div>

      <div className="row">
        <div className="col-4">
          <section className="p1-section">
            <h1>your image</h1>
            <Carousel playerNum="1"   handleInputCarousel={handleInputCarousel }   />
          </section>
        </div>

        <div className="col-6 counters">
          
          <UserInput userState= {userState} handleInputChange={handleInputChange}/>
          <Counter count={count} count2={count2} handleIncrement={handleIncrement} handleIncrement2={handleIncrement2} handleDecrement={handleDecrement} handleDecrement2={handleDecrement2}  />
         

          <button
            id="sc-button"
            variant="btn btn-success"
                onClick={() => {saveCharacter()
                  
                  history.push("/matchSetup")}}
>
            Save and Continue
          </button>
        </div>
      </div>
    </div>
    
  );
}

export default CreateChar;