import "./Macro.scss";

type macroProps = {
  image:string;
  title:string;
  value:string;
}

function Macro(props: macroProps) {
  const {image, title, value} = props

  return(
    <div className="macro-container">
      <div className="macro-icon-wrapper">
        <img src={image} alt="image" className="macro-icon" />
      </div>
      <div className="macro-content">
        <p className="macro-value">{value}</p>
        <p className="macro-title">{title}</p>
      </div>
    </div>
  );
}

export default Macro;

// différence interface et type : pour du typage uniquement, interface plus pour une implémentation
