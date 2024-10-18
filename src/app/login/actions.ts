'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/app/utils/supabase/server'


export async function login(formData: FormData) {
    console.log("LOGGIN IN")

  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const enteredData = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error, data } = await supabase.auth.signInWithPassword(enteredData)

  if (error) {
    console.log("Error Logging In", error)
    redirect('/error')
  }

  console.log("data from sign in:", data)


  revalidatePath('/', 'layout')
  redirect('/dashboard')
}

export async function signup(formData: FormData) {
    console.log("SIGNING UP")

  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  console.log("SIGNING UP DATA", data)

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    console.log("SIGNING UP ERROR", error)

    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}