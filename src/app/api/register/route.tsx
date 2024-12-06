import { registrationSchema } from '@/app/registrationSchema';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const parsed = registrationSchema.safeParse(body);

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
