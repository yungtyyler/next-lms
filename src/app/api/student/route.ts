import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  const students = await prisma.student.findMany()

  return NextResponse.json({ students })
}

export async function POST(request: NextRequest) {
  const data = await request.json()

  try {
    const student = await prisma.student.create({
      data: {
        ...data,
      },
    })

    return NextResponse.json({ student }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 })
  }
}
