import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class RestriccionDiaGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const now = new Date();
    const startHour = 9;  
    const endHour = 19;   

    const currentHour = now.getHours();

    if (currentHour >= startHour && currentHour < endHour) {
      return true;
    } else {
      throw new ForbiddenException('Solo es posible acceder entre 9:00 AM and 5:00 PM');
    }
  }
}