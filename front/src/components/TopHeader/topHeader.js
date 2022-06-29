import "./topHeader.css";
import animatedTopHeader from "../TopHeader/media/FinalCut/TopHeaderBLANK.gif";

/* FUNCTION PURELY TO DISPLAY THE ANIMATED HEADER AT THE TOP OF THE PAGE.
   VISUAL PURPOSES ONLY.  */
   
export default function TopHeader() {
  return (
    <div id="topHeader">
      <img id="imgTopHeader" src={animatedTopHeader} alt={"top header"} />
    </div>
  );
}
