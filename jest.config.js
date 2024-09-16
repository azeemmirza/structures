module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    '<rootDir>/tests/**/*.test.ts',
    '<rootDir>/tests/**/*.test.js'
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  resolver: null,
  collectCoverage: true,
  coverageReporters: ['clover', 'json', 'lcov', ['text', { skipFull: true }], "json-summary"],
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/data-structures/**/*.{ts,js}',
    'src/types/**/*.{ts,js}',
    'src/interfaces/**/*.{ts,js}',
  ],
};
