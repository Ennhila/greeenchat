import bcrypt from "bcrypt";

import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";




export async function POST(
  request: Request
) {
  const body = await request.json();
  const {
    email,
    name,
    password
  } = body;

  if ( !email || !name || !password){
    return new NextResponse('Missing info', { status: 400});
  }

    // Validate email domain on the server side
    const allowedDomains = ["gmail.com", "hotmail.com", "yahoo.com", "icloud.com", "outlook.com", "yandex.com", "protonmail.com"];
    const enteredDomain = email.split("@")[1];
  
    if (!allowedDomains.includes(enteredDomain)) {
      return new NextResponse("Invalid email domain", { status: 400 });
    }
    if (password.length < 8) {
      throw new Error('Password must be at least 8 characters long');
    }
    
  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword
    }
  });

  return NextResponse.json(user);
}