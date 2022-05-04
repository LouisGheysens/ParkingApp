import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import AuthStackNavigator from "./src/navigation/AuthStackNavigator";
import ParkingTabNavigator from "./src/navigation/ParkingTabNavigator";
import { persistor, store } from "./store/index";
import { onAuthStateChanged } from 'firebase//auth'
import { auth } from "./src/config/firebase";

export default function App() {


  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const subscription = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      }else{
        setIsAuthenticated(false);
      }
    });
    return () => subscription();
  }, [])

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
        {isAuthenticated ? <ParkingTabNavigator /> : <AuthStackNavigator />}
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
