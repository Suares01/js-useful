import { resolve } from 'node:path';

const jestConfig: import('@jest/types').Config.InitialOptions = {
  roots: ['<rootDir>/src'],
  rootDir: resolve(__dirname),
  clearMocks: true,
  bail: true,
  collectCoverage: true,
  displayName: 'unit-tests',
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  transform: {
    '^.+\\.ts$': '@swc/jest',
  },
};

export default jestConfig;
