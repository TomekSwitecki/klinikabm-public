import React from "react";
export function Section(props) {
  const embeddedContentClasses = `section__embedded-content ${
    props.full ? "section__embedded-content--full" : ""
  }`;
  return (
    <div id={props.id} className={"section__container"}>
      <div className={"section__heading"}>
        <span className="section__title">{props.sectionTitle}</span>
        <span className="section__subtitle">{props.sectionSubtitle}</span>
      </div>
      <div className={embeddedContentClasses}>{props.children}</div>
    </div>
  );
}
