import { NextFunction, Request, Response } from 'express';
import { AnyZodObject, ZodEffects } from 'zod';

<<<<<<< HEAD
const requestValidator =
  (schema: AnyZodObject | ZodEffects<AnyZodObject>) =>
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      try {
        await schema.parseAsync({
          body: req.body,
          query: req.query,
          params: req.params,
          cookies: req.cookies,
        });
        return next();
      } catch (error) {
        next(error);
      }
    };
=======
const requestValidator = (schema: AnyZodObject | ZodEffects<AnyZodObject>) =>
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            await schema.parseAsync({
                body: req.body,
                query: req.query,
                params: req.params,
                cookies: req.cookies
            })
            return next() // to the next middleware
        } catch (err) {
            next(err) // to global error handle middleware
        }
    }

export default requestValidator
>>>>>>> 225da841bb623845ea5b346ffb8599a1efedf922

export default requestValidator;
