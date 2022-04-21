import React from "react";
import { render } from "react-dom";
import { Button } from "react-bootstrap";
import DocumentPreview from "./DocumentPreview";
import FillerContent from "./FillerContent";

import pdf from "./statut_s.06e5bed4.pdf";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  state = {
    show: true,
    file: pdf
  };
  preview = (file) => {
    return this.setState({ show: true, file: file });
  };
  render = () => (
    <div style={styles}>
      <Button bsStyle="primary" onClick={this.preview.bind(this, pdf)}>
        Show Multi Page Pdf
      </Button>

      <FillerContent />
      {this.state.show && (
        <DocumentPreview
          show={this.state.show}
          file={this.state.file}
          onClose={() => this.setState({ show: false })}
          toolbar={
            <div>
              <button className="btn btn-primary">Download</button>
            </div>
          }
          footer={<div>my footer</div>}
        />
      )}
    </div>
  );
}

render(<App />, document.getElementById("root"));
