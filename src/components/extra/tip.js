import React from "react";
import { Tooltip } from "antd";

export default ({text, tip}) => (
  <>
    {text}
    <Tooltip title={tip}>
      <img src="/resources/images/forms/question.svg" className="question" alt="info" />
    </Tooltip>
  </>
)
