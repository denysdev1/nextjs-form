import { registrationSchema } from '@/app/registrationSchema';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const parsed = registrationSchema.safeParse(data);

  if (!parsed.success) {
    return NextResponse.json(
      {
        message: 'Registration failed',
        error: parsed.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  return NextResponse.json(
    { message: 'Registration successful', status: 'success' },
    { status: 201 }
  );
}
