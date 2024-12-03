import { Injectable } from '@angular/core';
import { Logger } from './logger.service';

@Injectable()
export class ProfileService {
  constructor(private logger: Logger) {}

  getProfile() {
    this.logger.log('Fetching profile data');
    return {
      name: 'Jack',
      email: 'jack@example.com'
    };
  }
}

