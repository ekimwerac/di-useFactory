import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Available globally
})
export class Logger {
  log(message: string): void {
    console.log(`[Logger]: ${message}`);
  }
}

@Injectable({
  providedIn: 'root' // Available globally
})
export class DebugLogger extends Logger {
  override log(message: string): void {
    console.debug(`[DebugLogger]: ${message}`);
  }
}

