import type { Config } from 'jest';

const jestConfig: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  transform: {
    '^.+\\.(ts|tsx)?$': ['ts-jest', { tsconfig: 'tsconfig.jest.json' }], // Fix regex to correctly match TypeScript files
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // If using absolute imports
  },
  transformIgnorePatterns: [
    'node_modules/(?!(module-to-transform)/)', // Ensures node_modules are handled properly
  ],
};

export default jestConfig;
