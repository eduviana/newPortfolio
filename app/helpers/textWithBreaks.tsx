import React from "react";

export function textWithBreaks(text: string): React.ReactNode {
  return text.split("/n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
}