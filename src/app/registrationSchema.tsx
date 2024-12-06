import { z } from 'zod';
import { validateZipCode } from './validateZipCode';

export const registrationSchema = z.object({
  firstName: z.string().trim().min(1, { message: 'First name is required.' }),
  lastName: z.string().trim().min(1, { message: 'Last name is required.' }),
  email: z.string().trim().email({ message: 'Invalid email address.' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long.' }),
  zipCode: z.string().trim().refine(validateZipCode, {
    message: 'Invalid zip code.',
  }),
});
