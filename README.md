# Next.js Registration Form

A modern, type-safe registration form built with Next.js, React Hook Form, Zod validation, and Tailwind CSS.

## Features

- Server-side form validation using Zod
- Client-side form handling with React Hook Form
- Responsive design with Tailwind CSS
- Dark mode support
- Custom form components using shadcn/ui
- Type-safe form fields and validation
- Server actions for form submission

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- React Hook Form
- Zod
- shadcn/ui components

## Getting Started

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   ├── actions.ts           # Server actions
│   ├── RegistrationForm.tsx # Main form component
│   ├── registrationSchema.ts # Zod validation schema
│   └── api/                 # API routes
├── components/
│   └── ui/                  # Reusable UI components
└── lib/
    └── utils.ts            # Utility functions
```

## Form Fields

The registration form includes the following fields:

- First Name
- Last Name
- Email
- Password
- Zip Code

Each field includes:

- Label
- Input field
- Description
- Validation messages

## Validation

Form validation is handled using Zod schema validation both on the client and server side. The validation schema can be found in `src/app/registrationSchema.ts`.

## Styling

The project uses Tailwind CSS for styling with a custom theme configuration. Dark mode is supported by default.

