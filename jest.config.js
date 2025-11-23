module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // handle TypeScript
    "^.+\\.jsx?$": "babel-jest", // handle JS modules (for ESM)
  },
  transformIgnorePatterns: [
    "node_modules/(?!(react-router-dom)/)", // allow react-router-dom v7 ESM
  ],
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy", // mock CSS imports
  },
};
