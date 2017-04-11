import { Injectable } from '@angular/core';

@Injectable()

export class LoggingService {
    logMessage(message: string): void {
        console.log(message);
    }
}