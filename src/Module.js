import React, { Component } from "react";
export default class Module extends Component {
  render() {
    const { modules } = this.props;
    const { match } = this.props;
    let module = modules.find(
      element => element.id === parseInt(match.params.moduleId)
    );
    console.log("==============", modules, module, match);

    return (
      <>
        {module ? (
          <>
            <h1>Module Component </h1>

            <p>{`Module Name: ${module.name}`}</p>
            <p>{`Main Topic: ${module.description}`}</p>
            <button
              onClick={() => {
                this.props.history.push(`/modules`);
              }}
            >
              Back
            </button>
          </>
        ) : (
          ""
        )}
      </>
    );
  }
}
