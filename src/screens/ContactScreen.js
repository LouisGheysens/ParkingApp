import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import * as Contacts from "expo-contacts";

const ContactScreen = () => {
  const [hasPermissions, setHasPermissions] = useState(false);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await Contacts.requestPermissionsAsync();
      // Local state -> boolean
      setHasPermissions(response.status === "granted");
    })();
  }, []);

  useEffect(() => {
    Contacts.getContactsAsync({
      fields: [Contacts.Fields.Birthday],
    }).then((contacts) => setContacts(contacts.data));
  }, []);

  return (
    <View>
      {hasPermissions ? (
        <Text>{JSON.stringify(contacts)}</Text>
      ) : (
        <Text>Geen permissies</Text>
      )}
    </View>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({});
