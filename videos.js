import MonkeyVideo from "./Videos/Paypal Account Creation.mp4";
import "./vid.css";

const Monkey=()=>{
    return(
        <>
        <div className='cont'>
            <video src={MonkeyVideo} width="800" height="420" controls="controls" autoplay="true"/>
            <p className="nano">CLICK TO WATCH VIDEO</p>    
        </div>
        </>
    );
};
export default Monkey;