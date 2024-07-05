import { ConfigService } from '@nestjs/config';
import { POKE_API_ENV } from '../constants';

const configs = {
  [POKE_API_ENV]: 'POKE_API_UTL_TEST',
};

export const configServiceMock: Partial<ConfigService> = {
  get: jest.fn().mockImplementation((name: string) => {
    return configs[name] || '';
  }),
};
