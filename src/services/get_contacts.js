import Contacts from "react-native-contacts";

const getContacts = () => {
  return new Promise((resolve, reject) => {
    Contacts.checkPermission((error, permission) => {
      if (error) {
        reject(error);
      }

      if (permission === "undefined") {
        Contacts.requestPermission((error, permission) => {
          if (error) {
            reject(error);
          }

          if (permission === "authorized") {
            Contacts.getAllWithoutPhotos((error, contacts) => {
              if (error) {
                reject(error);
              }

              resolve(contacts);
            });
          }
        });
      }

      if (permission === "authorized") {
        Contacts.getAllWithoutPhotos((error, contacts) => {
          if (error) {
            reject(error);
          }

          resolve(contacts);
        });
      }
    });
  });
};

export { getContacts };
