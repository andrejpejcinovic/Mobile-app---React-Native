import "react-native-gesture-handler/jestSetup";

jest.mock("react-native-reanimated", () =>
  require("react-native-reanimated/mock")
);

jest.mock('@expo/vector-icons', () => {
    const Icon = ({ name }) => <div>{name}</div>;
    return { FontAwesome: Icon };
  });
  

jest.mock("expo-font", () => ({
  loadAsync: jest.fn(),
}));
