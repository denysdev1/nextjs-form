'use server';

import { registrationSchema } from './registrationSchema';
import { RegistrationFormValues } from './RegistrationForm';

export const onDataAction = async (data: RegistrationFormValues) => {
  const parsed = registrationSchema.safeParse(data);

  if (!parsed.success) {
    return {
      message: 'Registration failed',
      error: parsed.error.flatten().fieldErrors,
    };
  }

  return {
    message: 'Registration successful',
    status: 'success',
    user: parsed.data,
  };
};

type FormActionResult = {
  message: string;
  issues?: string[];
  user?: RegistrationFormValues;
};

export const onFormAction = async (
  prevState: FormActionResult,
  formData: FormData
): Promise<FormActionResult> => {
  const data = Object.fromEntries(formData);
  const parsed = await registrationSchema.safeParseAsync(data);

  console.log('prevState: ', prevState);

  if (!parsed.success) {
    return {
      message: 'Invalid data',
      issues: parsed.error.issues.map((issue) => issue.message),
    };
  }

  return {
    message: 'Registration successful',
    user: parsed.data,
  };
};
