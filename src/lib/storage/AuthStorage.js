import BaseStorage from './BaseStorage';
import appconfig from '@/config';

const auth = appconfig.auth;

const { name, cacheKey, expiry } = auth;

class AuthStorage extends BaseStorage {
  constructor(options) {
    super(
      options || {
        expiry,
        name,
        prefix: `${cacheKey}_`,
      }
    );
  }
}

export default new AuthStorage();
