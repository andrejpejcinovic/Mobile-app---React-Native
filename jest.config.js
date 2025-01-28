module.exports = {
  preset: "react-native",
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(react-native|@react-native|expo|@expo|expo-modules-core|@expo/vector-icons|expo-font|firebase|@firebase|@testing-library|react|expo-status-bar)/)",
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "^expo-modules-core$": "<rootDir>/__mocks__/expo-modules-core.js",
    "\\.(png|jpg|jpeg|svg|ttf)$": "<rootDir>/__mocks__/fileMock.js",
  },
  setupFiles: ["./jest.setup.js"],
  testPathIgnorePatterns: [
    "<rootDir>/__tests__/e2e"
  ]
};
