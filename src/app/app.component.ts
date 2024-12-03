import { Component } from '@angular/core';
import { Logger, DebugLogger } from './logger.service';
import { ProfileService } from './profile.service';

// Factory to provide Logger or DebugLogger based on random logic
const loggerFactory = (): Logger => {
  return Math.random() > 0.5 ? new Logger() : new DebugLogger();
};

// Factory to create ProfileService
const profileServiceFactory = (logger: Logger): ProfileService => {
  return new ProfileService(logger);
};

@Component({
  selector: 'app-root',
  standalone: true, // Mark as standalone
  template: `
    <h1>Angular useFactory Standalone Demo</h1>
    <p>Check the console for logs!</p>
  `,
  providers: [
    {
      provide: Logger,
      useFactory: loggerFactory // Use factory to decide the Logger
    },
    {
      provide: ProfileService,
      useFactory: profileServiceFactory,
      deps: [Logger], // Specify dependencies
    }
  ]
})
export class AppComponent {
  constructor(private profileService: ProfileService) {
    console.log(this.profileService.getProfile());
  }
}
