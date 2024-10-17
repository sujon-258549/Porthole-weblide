
import AnimatedCursor from "react-animated-cursor";

export default function Allskills() {
  return (
    <div className="App">
      <AnimatedCursor
        innerSize={8}
        outerSize={35} // This should now work
        innerScale={1}
        outerScale={2}
        outerAlpha={0} // Set a bit of transparency
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: '#01ecff' // Test with an actual color
        }}
        outerStyle={{
          border: '2px solid #01ecff' // Test with an actual color
        }}
      />
    </div>
  );
}
