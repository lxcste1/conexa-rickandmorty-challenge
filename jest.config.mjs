import nextJest from "next/jest.js";

const createJestConfig = nextJest({ dir: "./" });

const customJestConfig = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^next/image$": "<rootDir>/src/mocks/nextImage.mock.tsx",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

export default await createJestConfig(customJestConfig)();
