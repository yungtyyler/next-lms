import { prisma } from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const admin = await prisma.administrator.findUnique({
    where: {
      id: context.params.id,
    },
  })

  if (!admin) {
    return NextResponse.json({
      status: 404,
      message: 'User not found',
    })
  }

  return NextResponse.json({
    admin,
  })
}
