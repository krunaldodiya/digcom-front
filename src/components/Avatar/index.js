import { Container } from "native-base";
import React from "react";
import Loader from "../shared/Loader";
import ContentBody from "./content_body";
import ContentHeader from "./content_header";

class Avatar extends React.Component {
  constructor(props) {
    super(props);

    const { navigation } = props;
    const { guestUser } = navigation.state.params;

    this.state = {
      loading: false,
      guestUser
    };
  }

  uploading = data => {
    this.setState(data);
  };

  render() {
    const { loading, guestUser } = this.state;

    return (
      <Container style={{ flex: 1 }}>
        <Loader loading={loading} />
        <ContentHeader
          {...this.props}
          guestUser={guestUser}
          uploading={this.uploading}
        />
        <ContentBody {...this.props} guestUser={guestUser} />
      </Container>
    );
  }
}

export default Avatar;
