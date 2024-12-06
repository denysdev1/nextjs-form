'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { registrationSchema } from './registrationSchema';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '../components/ui/form';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { onFormAction } from './actions';
import { useActionState, useRef } from 'react';

export type RegistrationFormValues = z.infer<typeof registrationSchema>;

const formFields = [
  {
    name: 'firstName',
    label: 'First Name',
    description: 'Your first name.',
  },
  {
    name: 'lastName',
    label: 'Last Name',
    description: 'Your last name.',
  },
  { name: 'email', label: 'Email', description: 'Your email address.' },
  {
    name: 'password',
    label: 'Password',
    description: 'Your password (minimum 8 characters).',
    type: 'password',
  },
  {
    name: 'zipCode',
    label: 'Zip Code',
    description: 'Your zip code.',
  },
];

export const RegistrationForm = () => {
  const [state, formAction] = useActionState(onFormAction, {
    message: '',
  });

  const form = useForm<RegistrationFormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      zipCode: '',
    },
    resolver: zodResolver(registrationSchema),
  });

  // const onSubmit = async (data: RegistrationFormValues) => {
  //   // fetch('/api/register', {
  //   //   method: 'POST',
  //   //   body: JSON.stringify(data),
  //   //   headers: {
  //   //     'Content-Type': 'application/json',
  //   //   },
  //   // })
  //   //   .then((res) => res.json())
  //   //   .then((data) => {
  //   //     console.log(data);
  //   //   });
  //   // const formData = new FormData();
  //   // Object.entries(data).forEach(([key, value]) => {
  //   //   formData.append(key, value as string);
  //   // });
  //   // fetch('/api/registerForm', {
  //   //   method: 'POST',
  //   //   body: formData,
  //   // })
  //   //   .then((res) => res.json())
  //   //   .then((data) => {
  //   //     console.log(data);
  //   //   });
  //   // console.log(await onDataAction(data));
  // };

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <Form {...form}>
      <div>{state.message}</div>
      <form
        ref={formRef}
        action={formAction}
        onSubmit={form.handleSubmit(() => formRef.current?.submit())}
        className='space-y-8'
      >
        <div className='flex gap-4'>
          {formFields.slice(0, 2).map((field) => (
            <FormField
              key={field.name}
              control={form.control}
              name={field.name as keyof RegistrationFormValues}
              render={({ field: formField }) => (
                <FormItem className='flex-1'>
                  <FormLabel>{field.label}</FormLabel>
                  <FormControl>
                    <Input placeholder={field.label} {...formField} />
                  </FormControl>
                  <FormDescription>{field.description}</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        </div>

        {formFields.slice(2).map((field) => (
          <FormField
            key={field.name}
            control={form.control}
            name={field.name as keyof RegistrationFormValues}
            render={({ field: formField }) => (
              <FormItem>
                <FormLabel>{field.label}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={field.label}
                    type={field.type || 'text'}
                    {...formField}
                  />
                </FormControl>
                <FormDescription>{field.description}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
};
