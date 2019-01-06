import React from "react";
import { Image, View } from "react-native";
import styles from "./styles";

class ContentBody extends React.Component {
  render() {
    const { guestUser } = this.props;
    const { avatar } = guestUser;

    const baseUrl = "https://res.cloudinary.com/marusamaj/image/upload";
    const splitAvatar = avatar.split(baseUrl);
    const originalUrl = splitAvatar[1].split("/");

    const data = [baseUrl, originalUrl[2], originalUrl[3]];
    const avatarURI = data.join("/");

    return (
      <View style={styles.termsBody}>
        <Image
          resizeMode="cover"
          style={{ width: "100%", height: "100%" }}
          source={{ uri: avatarURI }}
        />
      </View>
    );
  }
}

export default ContentBody;
