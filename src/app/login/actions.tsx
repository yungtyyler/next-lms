'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import { prisma } from '@/lib/prisma'

export async function login(formData: FormData) {
  const supabase = createClient()
  const email = String(formData.get('email'))
  const password = String(formData.get('password'))

  const data = {
    email: email,
    password: password,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function googleLogIn() {
  const supabase = createClient()
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
  })

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signup(formData: FormData) {
  const supabase = createClient()

  const email = String(formData.get('signUpEmail'))
  const password = String(formData.get('signUpPassword'))
  const username = String(formData.get('username'))

  const data = {
    email: email,
    password: password,
    options: {
      data: { username: username },
    },
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    console.log(error)
    redirect('/error')
  }

  try {
    const createUser = await prisma.user.create({
      data: {
        username: username,
        password: password,
        email: email,
      },
    })
    console.log('user created successfully!', createUser.username)
    revalidatePath('/', 'layout')
    redirect('/')
  } catch (error) {
    console.log(error)
    redirect('/error')
  }
}
