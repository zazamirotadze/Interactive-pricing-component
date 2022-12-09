
import { useState, useEffect } from "react";


function App() {

  const [price, setPrice] = useState(16)
  const [views , setViews ] = useState("100K")
  const [trackerWidth, setTrackerWidth] = useState("50%")
  const [yearlyBilling, setYearlyBilling] = useState(false)


  function getPrice(event){
    setTrackerWidth(`${event.target.value}%` )
    if(event.target.value <= 20 & !yearlyBilling){
      setPrice(8)
      setViews("10K")
    }
    if(event.target.value <= 20 & yearlyBilling){
      setPrice(6)
      setViews("10K")
    }

    if(event.target.value > 20 &  event.target.value <= 40 ){
      if(yearlyBilling){setPrice(9)}else{setPrice(12)}
      setViews("50K")
    }
    if(event.target.value > 40 &  event.target.value <= 60 ){
      if(yearlyBilling){setPrice(12)}else{setPrice(16)}
      setViews("100K")
    }
    if(event.target.value > 60 &  event.target.value <= 80 ){
      if(yearlyBilling){setPrice(18)}else{setPrice(24)}
      setViews("500K")
    }
    if(event.target.value > 80 &  event.target.value <= 100 ){
      if(yearlyBilling){setPrice(27)}else{setPrice(36)}
      setViews("1m")
    }
  }



    useEffect(() => {
      //10 k 
      if(price === 8 & !yearlyBilling){setPrice(8)}
      if(price === 8 & yearlyBilling){setPrice(6)}
      if(price === 6 & !yearlyBilling){ setPrice(8)}
      //
      //50k
      if(price === 12 & !yearlyBilling){setPrice(12)}
      if(price === 12 & yearlyBilling){setPrice(9)}
      if(price === 9 & !yearlyBilling){setPrice(12)}
      //
      //100k
      if(price === 16 & !yearlyBilling){setPrice(16) }
      if(price === 16 & yearlyBilling){setPrice(12)}
      if(price === 12 & !yearlyBilling){setPrice(16)}
      //
      //500k
      if(price === 24 & !yearlyBilling){setPrice(24) }
      if(price === 24 & yearlyBilling){setPrice(18)}
      if(price === 18 & !yearlyBilling){setPrice(24)}
      //
      //1m
      if(price === 36 & !yearlyBilling){setPrice(36) }
      if(price === 36 & yearlyBilling){setPrice(27)}
      if(price === 27 & !yearlyBilling){setPrice(36)}
      //
    }, [yearlyBilling]); 
  

  return (
    <>
    <div className="background-img"></div>
    <div className="page">
        <div className="circles-image"></div>
        <h1>Simple, traffic-based pricing</h1>
        <h2>Sign-up for our 30-day trial. No credit card required. </h2>
        <div className="grey-line"  ></div>
        <div className="page__component-container">
          <div className="page__component-container-part1">
            <h2>{views} PAGEVIEWS </h2>
            <div className="page__component-container-part1-02">
              <span>${price}.00</span>
              <span>/</span>
              <span>month</span>
            </div>
          </div>
          <div className="page__component-container-part2" >
            <input type="range" min="1" max="100"  onChange={(event)=>  getPrice(event) }/>
            <div className="page__component-container-part2-tracker" style={{width:  `${trackerWidth}`  }} ></div>
          </div>
          
          <div className="page__component-container-part3">
            <div className="billing-words">
              <span>Monthly Billing</span>
              <input type="checkbox" onChange={(event)=>  setYearlyBilling(event.target.checked) }></input>
              <span>Yearly Billing </span>
            </div>
            <div className="discount-word">
              <span>25%</span>
              <span>discount</span>
            </div>
          </div>
          <div className="page__component-container-part4">
            <div className="page__component-container-part4-01">
              <div><img src="./images/icon-check.svg"/><span>Unlimited websites</span></div>
              <div><img src="./images/icon-check.svg"/><span>100% data ownership</span></div>
              <div><img src="./images/icon-check.svg"/><span>Email reports</span></div>
            </div>
            
            <div className="page__component-container-part4-02">
              <button> Start my trial</button>
            </div>
          </div>          
        </div>    
        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="#">Zaza Mirotadze</a>.
        </div>
    </div>
    </>
  );
}

export default App;
