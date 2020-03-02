module.exports = {
  collectCoverageFrom: ["src/**/*.{js,jsx}"],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80
    }
  }
};
