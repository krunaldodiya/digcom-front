import { Container } from "native-base";
import React from "react";
import ContentBody from "./content_body";
import ContentHeader from "./content_header";

class FilterDirectory extends React.Component {
  render() {
    return (
      <Container style={{ flex: 1 }}>
        <ContentHeader {...this.props} />
        <ContentBody {...this.props} />
      </Container>
    );
  }
}

export default FilterDirectory;
