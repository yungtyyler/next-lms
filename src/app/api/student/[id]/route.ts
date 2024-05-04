import { prisma } from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const student = await prisma.student.findUnique({
    where: {
      id: context.params.id,
    },
  })

  if (!student) {
    return NextResponse.json({
      status: 404,
      message: 'User not found',
    })
  }

  return NextResponse.json({
    student,
  })
}
