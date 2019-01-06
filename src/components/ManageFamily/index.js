import { View } from "native-base";
import React from "react";
import FamilyForm from "./form_family";
import TermsHeader from "./header";
import styles from "./styles";

class ManageFamily extends React.Component {
  render() {
    const { loading } = this.props;

    return (
      <View style={styles.container}>
        <TermsHeader {...this.props} />
        <FamilyForm {...this.props} />
      </View>
    );
  }
}

export default ManageFamily;
