import { View, Text, StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/native";
const FocusStatusBar = (props) => {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar {...props} animated={true} /> : null;
};

export default FocusStatusBar;
