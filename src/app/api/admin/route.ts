import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  const admins = await prisma.administrator.findMany()

  return NextResponse.json({ admins })
}

export async function POST(request: NextRequest) {
  const data = await request.json()

  try {
    const admin = await prisma.administrator.create({
      data: {
        ...data,
      },
    })

    return NextResponse.json({ admin }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 })
  }
}
