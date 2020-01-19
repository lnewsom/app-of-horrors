module.exports = {
    coveragePathIgnorePatterns: [
        "/node_modules/",
        "/src/jestGlobalMocks.ts/",
        "/src/setup-jest.ts"
    ],
      coverageThreshold: {
        global: {
          branches: 100,
          functions: 100,
          lines: 100,
          statements: 100
         }
    },
    preset: "jest-preset-angular",
    roots:['src'],
    setupFilesAfterEnv: ["<rootDir>/src/setup-jest.ts"],
    testPathIgnorePatterns: ["<rootDir>/src/environments/"]
}