import axios from "axios";
import React from "react";
import { SafeAreaView } from "react-native";
import { web } from "../../libs/api";
// components
import TermsForm from "./form";
import styles from "./styles";
import TermsContent from "./terms_content";
import TermsHeader from "./terms_header";

class GetStarted extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      terms: ""
    };
  }

  componentDidMount() {
    axios.get(`${web.terms}?lite`).then(({ data }) => {
      this.setState({ terms: data });
    });
  }

  render() {
    const { terms } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <TermsHeader {...this.props} />
        <TermsContent {...this.props} terms={terms} />
        <TermsForm {...this.props} />
      </SafeAreaView>
    );
  }
}

export default GetStarted;
