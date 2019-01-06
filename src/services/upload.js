import ImagePicker from "react-native-image-crop-picker";
import RNFetchBlob from "rn-fetch-blob";

const uploadAvatar = options => {
  return new Promise((resolve, reject) => {
    return ImagePicker.openPicker(options)
      .then(image => {
        const { mime, path } = image;

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
            resolve({
              remote: response,
              local: image
            });
          })
          .catch(error => {
            reject(error);
          });
      })
      .catch(error => {
        reject(error);
      });
  });
};

export { uploadAvatar };
