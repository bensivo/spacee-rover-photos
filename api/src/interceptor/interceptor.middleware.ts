import { Injectable, Logger, NestMiddleware } from "@nestjs/common";
import { NextFunction, Response } from "express";

@Injectable()
export class InterceptorMiddleware implements NestMiddleware {
    private readonly logger = new Logger('HTTP');

    use(req: any, res: any, next: () => void) {
        this.logger.log(`${req.method} ${req.originalUrl}`)
        next();
    }
}