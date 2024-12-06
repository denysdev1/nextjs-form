'use server';

export const validateZipCode = async (zipCode: string) => {
  return zipCode.length === 5 && /^9\d{4}$/.test(zipCode);
};
