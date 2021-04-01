//React
import React from "react";

//Component
import Button from "../Button";

//Style
import "./style.css";

//Icon
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function Item(props) {
  const {
    title,
    desc,
    descLink,
    backgroundImg,
    leftBtnTxt,
    leftBtnLink,
    rightBtnTxt,
    rightBtnLink,
    twoButtons,
    first,
  } = props;

  return (
    <div className="item" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="itemContainer">
        <div className="itemText">
          <p>{title}</p>
          <div className="itemTextDescription">
            <p>{desc}</p>
          </div>
        </div>

        <div className="itemLowerThird">
          <div className="itemButtons">
            <Button imp="primary" text={leftBtnTxt} link={leftBtnLink} />
            {twoButtons && (
              <Button imp="secondary" text={rightBtnTxt} link={rightBtnLink} />
            )}
          </div>
          {first && (
            <div className="itemExpand">
              <ExpandMoreIcon />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
