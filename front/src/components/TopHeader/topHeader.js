import "./topHeader.css";
import animatedTopHeader from "../TopHeader/media/FinalCut/TopHeaderBLANK.gif";

// Function purely to display the animated header at the top of the page.
// Visual purposes
export default function TopHeader() {
  return (
    <div id="topHeader">
      <img id="imgTopHeader" src={animatedTopHeader} alt={"top header"} />
    </div>
  );
}
