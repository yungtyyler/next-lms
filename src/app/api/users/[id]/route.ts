// pages/api/users/[id].ts
import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export const dynamic = 'force-dynamic'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id as string

  switch (req.method) {
    case 'GET':
      return getUser(id, res)
    case 'POST':
      return createUser(req, res)
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

const getUser = async (id: string, res: NextApiResponse) => {
  const user = await prisma.user.findUnique({
    where: { id: id },
  })

  if (user) {
    res.status(200).json(user)
  } else {
    res.status(404).json({ error: 'User not found' })
  }
}

const createUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password, username } = req.body

  try {
    const user = await prisma.user.create({
      data: {
        email,
        password,
        username,
      },
    })
    return res.status(201).json(user)
  } catch (error) {
    return res.status(400).json({ error: 'Failed to create user' })
  }
}
