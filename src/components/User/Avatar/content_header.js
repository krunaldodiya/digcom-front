import axios from "axios";
import { Body, Header, Icon, Left, Right, Text } from "native-base";
import React from "react";
import ImagePicker from "react-native-image-crop-picker";
import RNFetchBlob from "rn-fetch-blob";
import { api } from "../../libs/api";
import { getAuthToken } from "../../services/auth";
import styles from "./styles";

const uploadAvatar = (authUser, uploading, changeAvatar) => {
  ImagePicker.openPicker({ cropping: true, height: 480, width: 480 })
    .then(image => {
      const { mime, path, cropRect } = image;
      const { height, width, x, y } = cropRect;

      uploading({ loading: true });

      RNFetchBlob.fetch(
        "POST",
        "https://api.cloudinary.com/v1_1/marusamaj/image/upload?upload_preset=default",
        {
          "Content-Type": "multipart/form-data"
        },
        [
          {
            name: "file",
            filename: "filename",
            type: mime,
            data: RNFetchBlob.wrap(path)
          }
        ]
      )
        .then(response => response.json())
        .then(response => {
          getAuthToken().then(token => {
            const cropData = `upload/c_crop,h_${height},w_${width},x_${x},y_${y}`;
            const avatar = response.secure_url.replace("upload", cropData);
            const headers = { Authorization: `Bearer ${token}` };

            axios
              .post(api.changeAvatar, { avatar }, { headers })
              .then(() => {
                changeAvatar({ authUser: { ...authUser, avatar } });
                uploading({ guestUser: { ...authUser, avatar }, loading: false });
              })
              .catch(() => {
                uploading({ loading: false });
              });
          });
        });
    })
    .catch(() => {
      uploading({ loading: false });
    });
};

class ContentHeader extends React.Component {
  render() {
    const { auth, guestUser, navigation, uploading, changeAvatar } = this.props;
    const { authUser } = auth;

    return (
      <Header style={styles.termsWrapper} androidStatusBarColor="#d80402">
        <Left>
          <Icon
            type="MaterialIcons"
            name="arrow-back"
            style={styles.termsIcon}
            onPress={() => navigation.goBack()}
          />
        </Left>

        <Body>
          <Text numberOfLines={1} style={styles.termsHeader}>
            {guestUser.name}
          </Text>
        </Body>

        <Right>
          {authUser.id === guestUser.id && (
            <Icon
              type="MaterialIcons"
              name="photo-camera"
              style={styles.termsIcon}
              onPress={() => uploadAvatar(authUser, uploading, changeAvatar)}
            />
          )}
        </Right>
      </Header>
    );
  }
}

export default ContentHeader;
