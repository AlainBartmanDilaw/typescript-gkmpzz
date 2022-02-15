import { NextFunction, Request, Response } from 'express';

export function validateRequest(req: Request, next: NextFunction, schema: any) {
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    };
    console.log('req.body', req.body);
    console.log('options', options);
    console.log('schema', schema);
    const {error, value} = schema.validate(req.body, options);
    if (error) {
        next(`Validation error: ${error.details.map((x: any) => x.message).join(', ')}`);
    } else {
        req.body = value;
        next();
    }
}
