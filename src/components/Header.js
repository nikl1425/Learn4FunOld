import React from "react";
import styles from "../style/header.module.scss";


export const Header = (props) => {
  return (
    <div className="center-block">
      <div className={styles.banner}>
        <div className={styles.text_container}>
          <p className="text-center text-wrap">
            <div className="fs-1">
                  <span className={styles.header_text}>{props.text}</span>
            </div>
          </p>
          
        </div>
      </div>


    </div>
  )
}