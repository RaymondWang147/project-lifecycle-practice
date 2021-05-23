import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest',
  },
};
export default config;
