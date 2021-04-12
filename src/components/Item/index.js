//React
import React from "react";

//Component
import Button from "../Button";

//Style
import "./style.css";

//Icon
import ExpandMoreIcon from "../../assets/chevron-down-outline.svg";

export default function Item(props) {
  const {
    title,
    desc,
    link,
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
            <p>
              {desc} <a>{link}</a>
            </p>
          </div>
        </div>

        <div className="itemLowerThird">
          <div
            className={
              first === true ? "itemButtons" : "itemButtonsWithNotFirst"
            }
          >
            <Button imp="primary" text={leftBtnTxt} link={leftBtnLink} />
            {twoButtons && (
              <Button imp="secondary" text={rightBtnTxt} link={rightBtnLink} />
            )}
          </div>
          {first && (
            <div className="itemExpand">
              <img className="expandIcon" src={ExpandMoreIcon} alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
