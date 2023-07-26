import { useState } from "react";
import './calcy.css'

const Calculator = () => {
    const [result, setResult] = useState("");
    const clickHandler = (e) => {
        setResult(result.concat(e.target.value))
    }
    const clearDisplay = () => {
        setResult("")
    }
    const equalEvent = () => {
        setResult(eval(result).toString());
    }
    const backspaceBtn = () => {
        if (result.length === 1) {
            setResult('');
        }
        else {
            setResult(result.slice(0, -1));   // remove form last character
        }
        
    }
    return (
        <div className="calcy">
            <input type="text" placeholder="0" id="answer" value={result} /><br />

            <input type="button" value="7" className="btn" onClick={clickHandler} />
            <input type="button" value="8" className="btn" onClick={clickHandler} />
            <input type="button" value="9" className="btn" onClick={clickHandler} />
            <input type="button" value="*" className="btn" onClick={clickHandler} /><br />

            <input type="button" value="4" className="btn" onClick={clickHandler} />
            <input type="button" value="5" className="btn" onClick={clickHandler} />
            <input type="button" value="6" className="btn" onClick={clickHandler} />
            <input type="button" value="-" className="btn" onClick={clickHandler} /><br />

            <input type="button" value="1" className="btn" onClick={clickHandler} />
            <input type="button" value="2" className="btn" onClick={clickHandler} />
            <input type="button" value="3" className="btn" onClick={clickHandler} />
            <input type="button" value="+" className="btn" onClick={clickHandler} /><br />

            <input type="button" value="0" className="btn" onClick={clickHandler} />
            <input type="button" value="00" className="btn" onClick={clickHandler} />
            <input type="button" value="." className="btn" onClick={clickHandler} />
            <input type="button" value="/" className="btn" onClick={clickHandler} /><br />


            <input type="button" value="AC" className="btn " onClick={clearDisplay} />
            <input type="button" value="◀" className="btn" onClick={backspaceBtn} />
            <input type="button" value="%" className="btn" onClick={clickHandler} />
            <input type="button" value="=" className="btn" onClick={equalEvent} />



        </div>
    )
}
export default Calculator;