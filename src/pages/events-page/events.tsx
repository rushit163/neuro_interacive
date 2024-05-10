import React,{useState} from 'react'
import Navbar from '../../components/Navbar'
import './events.css'
import Footer from '../../components/Footer'
import Preloader from '../../components/preLoader'
import {Fade} from 'react-awesome-reveal'
import cold from '../../utils/cold.gif'
import hot from '../../utils/sweat.gif'
import mid from '../../utils/good.gif'
import fuzzy from '../../utils/fuzzy.png'
import graph from '../../utils/graph1.png'
import graph2 from '../../utils/graph2.png'
import final from '../../utils/final.gif'
type Props = {}

const Events = (props: Props) => {
  const [rangeValue, setRangeValue] = useState(0);
  const [currentGif, setCurrentGif] = useState(cold);
  const [currentRange, setCurrentRange] = useState('');

  const handleRangeChange = (e:any) => {
    const value = e.target.value;
    setRangeValue(value);

    // Set the current GIF and range based on the value
    if (value >= 0 && value <= 25) {
      setCurrentGif(cold);
      setCurrentRange('0 - 25');
    } else if (value >= 25 && value <= 50) {
      setCurrentGif(mid);
      setCurrentRange('25 - 50');
    } else if (value >= 50 && value <= 75){
      setCurrentGif(hot);
      setCurrentRange('50 - 75');
    } else {
      setCurrentGif(final);
      setCurrentRange('75 - 100');
    }
  };

  return (
    <div className=' h-full w-full  text-white '>
      <Preloader/>
      <div>
      <div className='font-extrabold font-Lexend pt-20 text-center text-4xl'>
        Fuzzy 101
      </div>
      <div className='flex flex-col md:flex-row w-full h-full pt-7'>
        <div className=' md:sticky w-full md:w-[50vw] top-10 flex flex-col items-center justify-start text-center text-3xl h-full '>
          <div className='text-3xl text-center w-[90vw] pt-9 font-Lexend'></div>
          <Fade  duration={700}><img src={`${fuzzy}`} alt='event' className='px-9'/></Fade>
          
        </div>
        <div className='text-center text-3xl w-full h-full flex flex-col justify-start'>
    <Fade >
          <div className="timeline">
  <div className="outer text-sm border-slate-500 md:border-l-2 p-2 w-full">
    <div className="card">
      
      <div className="info">
        <h3 className="title text-xl">Fuzzy Sets</h3>
        <p>In fuzzy logic, elements can have varying degrees of membership in a set, unlike classical sets where an element either belongs to a set or not. For example, the degree to which a person is considered "tall" can be represented by a fuzzy set with values ranging from 0 (not tall at all) to 1 (extremely tall).
</p>
      </div>
    </div>
    <div className="card">
      <div className="info">
        <h3 className="title text-xl">⁠Fuzzy Variables</h3>
        <p>Fuzzy logic uses linguistic variables, which are variables whose values are words or sentences from natural language, rather than numbers. For instance, "temperature" can be a fuzzy variable with values like "cold," "cool," "warm," and "hot."</p>
      </div>
    </div>
    <div className="card">
      <div className="info">
        <h3 className="title text-xl">Membership Functions</h3>
        <p>These functions define the degree of membership of an element in a fuzzy set. For example, a membership function for the fuzzy set "tall" might assign a value of 0.2 for a height of 5 feet, 0.6 for 6 feet, and 0.9 for 6.5 feet.</p>
      </div>
    </div>
    <div className="card">
      <div className="info">
        <h3 className="title text-xl">⁠Fuzzy Rules</h3>
        <p>Fuzzy logic uses IF-THEN rules to reason with fuzzy variables and fuzzy sets. These rules are expressed in natural language and can handle partial truths. For example, "IF the temperature is hot AND the humidity is high, THEN the air conditioning should be set to maximum."</p>
      </div>
    </div>
    <div className="card">
      <div className="info">
        <h3 className="title text-xl">Defuzzification</h3>
        <p>This process converts the fuzzy output from the fuzzy rules into a crisp value that can be used for practical applications. Common defuzzification methods include centroid, mean of maximum, and height methods</p>
      </div>
    </div>
    <div className="card" id='lastcard'>
      <div className="info">
        <h3 className="title text-xl">Applications</h3>
        <p>Fuzzy logic has applications in various fields, such as control systems (e.g., anti-lock brakes, air conditioning systems), decision support systems, pattern recognition, and data mining. It is particularly useful in situations where precise mathematical models are difficult to establish or when dealing with imprecise or vague information.</p>
      </div>
    </div>
  </div>
</div>
</Fade>
        </div>
      </div>
      </div>
      <div className='font-extrabold font-Lexend  text-left ml-36 text-4xl pt-36'>Example</div>
      <div className='w-[100%] flex items-center justify-center'>
      <div className= 'pt-2 text-justify text-xl w-[80vw] '>
      Suppose, Shreyansh has a smart Air conditioner and he wants his room to be at the perfect temperature when he reaches home. 
      If it is hot then shreyansh becomes unhappy and our model decreases the points of air conditioner if it's cold then again 
      shreyansh becomes unhappy and the ratings of air conditioner decreases
      as a result AC should be on point regarding the air temperature in the room.
      </div>
      </div>
      <div className='font-extrabold font-Lexend  text-left ml-36 text-4xl pt-5'>Solution</div>
      <div className='font-extrabold font-Lexend  text-left ml-36 text-2xl pt-5'>
        <div>Algorithm</div>
      </div>
      <div className='flex flex-col items-start ml-36'>
      <div>1. Define linguistic Variables and terms (start)</div>
      <div>2. Construct membership functions for them. (start) </div>
      <div>3. Construct knowledge base of rules (start) </div>
      <div>4. Convert crisp data into fuzzy data sets using membership functions
(fuzzification) </div>
      <div>5. Evaluate rules in the rule base (interface engine) </div>
      <div>6. Combine results from each rule (interface engine)</div>
      <div>7. Convert output data into non-fuzzy values. (defuzzification) </div>
      </div>
      <div className='font-extrabold font-Lexend  text-left ml-36 text-2xl pt-5'>
        <div>Step 1: Define linguistic variables and terms </div>
      </div>
      <div className='flex flex-col items-start ml-36'>
        <div className='pt-4'>Linguistic variables are input and output variables in the form of simple words or
sentences. For room temperature, cold, warm, hot, etc., are linguistic terms.
Temperature (t) = (very-cold, cold, warm, hot)</div>
<div className='pt-4'>
Every member of this set is a linguistic term and it can cover some portion of overall
temperature values.</div>
      </div>
      <div className='font-extrabold font-Lexend  text-left ml-36 text-2xl pt-5'>
        <div>Step 2: Construct membership functions for them</div>
      </div>
      <div className='flex flex-col items-start ml-36'>
      <div>The membership functions of temperature variable are as shown:</div>
      <img src={graph}  className="w-96 h-auto" />
      </div>
      <div className='font-extrabold font-Lexend  text-left ml-36 text-2xl pt-5'>
        <div>Step3: Construct knowledge base rules </div>
      </div>
      
      <div className='font-extrabold font-Lexend  text-left ml-36 text-2xl pt-5'>
        <div>Step5</div>
      </div>
      <div className='flex flex-col items-start ml-36'>
      <div>Fuzzy set operations perform evaluation of rules. The operations used for OR and
AND are Max and Min respectively. All results of evaluation are combined to form a
final result. This result is a fuzzy value. </div>
      </div>
      <div className='font-extrabold font-Lexend  text-left ml-36 text-2xl py-5'>
        <div>Step 6
Defuzzification is then performed according to membership function for output
variable. </div>
<img src={graph2}  className="w-96 h-auto" />
      </div>
      <div className='font-extrabold font-Lexend  text-left ml-36 text-4xl pt-36'>Final preview</div>

      <div className='flex w-[100%] items-center justify-center mb-5'>
        <img src={currentGif} alt="Slider GIF" className="w-96 h-auto" />
      </div>
      
      <div className="flex flex-col w-[100%] mb-4">
        <div className='flex items-center justify-center'>The temperature</div>
        <div className='w-[100%] flex items-center justify-center'>
        <input
          type="range"
          min="0"
          max="100"
          value={rangeValue}
          onChange={handleRangeChange}
          className="w-[50%]"
        />
        </div>
        <div className="mb-4">
      </div>
      </div>
    </div>
  )
}

export default Events
