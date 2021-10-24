import BaseStorage from './BaseStorage';
class LocalStore extends BaseStorage {
  constructor(options) {
    super(
      options || {
        expiry: 60 * 60 * 24 * 365,
        name: 'app',
        prefix: 'app_',
      }
    );
  }
}

export default new LocalStore();
