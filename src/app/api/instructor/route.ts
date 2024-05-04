import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  const instructors = await prisma.instructor.findMany()

  return NextResponse.json({ instructors })
}

export async function POST(request: NextRequest) {
  const data = await request.json()

  try {
    const instructor = await prisma.instructor.create({
      data: {
        ...data,
      },
    })

    return NextResponse.json({ instructor }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 })
  }
}
