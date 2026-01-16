module.exports = {
  preset: 'ts-jest', 
  testEnvironment: 'node', 
  transform: {
    '^.+\\.ts$': 'ts-jest', 
  },
  testMatch: [
    '**/__tests__/**/*.test.ts', 
    '**/?(*.)+(spec|test).ts',   
  ],
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
};