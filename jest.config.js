module.exports = {
  collectCoverageFrom: [
    "src/modules/**/*.{js,jsx}",
    "src/components/**/*.{js,jsx}",
    "!src/components/**/{style,styled}.js",
    "!src/components/modules/{style,styled}.js",
    "!src/**/index.js",
    "!src/**/utils.js",
    "!src/**/{mockData,MockData}.js",
  ],
  verbose: true,
  snapshotSerializers: [
    "enzyme-to-json/serializer",
  ],
  moduleDirectories: [
    "node_modules",
    "src",
  ],
  coveragePathIgnorePatterns: [
    ".*\\.d\\.{js|jsx}",
  ],
  testResultsProcessor: "jest-sonar-reporter",
  resolver: "jest-pnp-resolver",
  setupFiles: [
    "react-app-polyfill/jsdom",
  ],
  setupFilesAfterEnv: ["<rootDir>/testConf.js"],
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx}",
    "<rootDir>/src/**/?(*.)(spec|test).{js,jsx}",
  ],
  testEnvironment: "jsdom",
  testURL: "http://localhost",
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  moduleNameMapper: {
    "^react-native$": "react-native-web",
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less|scss)$": "<rootDir>/src/cssStub.js",
  },
  moduleFileExtensions: [
    "web.js",
    "js",
    "json",
    "web.jsx",
    "jsx",
    "node",
  ],
};
