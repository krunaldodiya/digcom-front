import axios from "axios";
import { Container, Spinner } from "native-base";
import React from "react";
import { api } from "../../libs/api";
import { getAuthToken } from "../../services/auth";
import ContentHeader from "./content_header";
import styles from "./styles";
import UserFamily from "./user_family";
import UserProfile from "./user_profile";

class UserDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      segment: "profile",
      guestUser: null,
      loading: true
    };
  }

  componentDidMount() {
    const { navigation, users } = this.props;
    const { guestUser } = navigation.state.params;

    if (guestUser.relatives) {
      this.setState({ guestUser, loading: false });
    } else {
      const fromUser = users.data.filter(user => user.id === guestUser.id)[0];
      if (fromUser) {
        this.setState({ guestUser: fromUser, loading: false });
      } else {
        this.getGuestUser(guestUser);
      }
    }
  }

  getGuestUser = async guestUser => {
    const token = await getAuthToken();
    const headers = { Authorization: `Bearer ${token}` };

    axios
      .post(api.getUserById, { user_id: guestUser.id }, { headers })
      .then(({ data }) => {
        this.setState({ guestUser: data.user, loading: false });
      })
      .catch(e => {
        this.setState({ guestUser: null, loading: false });
      });
  };

  toggleSegment = segment => {
    this.setState({ segment });
  };

  render() {
    const { segment, guestUser, loading } = this.state;

    return (
      <Container style={styles.container}>
        {loading && <Spinner size="small" />}

        {!loading && (
          <React.Fragment>
            <ContentHeader
              {...this.props}
              guestUser={guestUser}
              segment={segment}
              toggleSegment={this.toggleSegment}
            />
            {segment === "profile" && (
              <UserProfile {...this.props} guestUser={guestUser} />
            )}
            {segment === "family" && (
              <UserFamily {...this.props} guestUser={guestUser} />
            )}
          </React.Fragment>
        )}
      </Container>
    );
  }
}

export default UserDetail;
