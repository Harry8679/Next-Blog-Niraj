import React, { FC } from 'react';
import { Input } from '@nextui-org/react';
import AppSubmitBtn from '@/components/form/AppSubmitBtn';
import Link from 'next/link';

interface Props {

}

const SignIn: FC<Props> = (props) => {
  return (
    <div className='h-screen flex items-center justify-center'>
      <form className='w-96 shadow-lg p-6 space-y-6'>
        <h1 className="text-lg font-semibold">Sign in</h1>

        <Input name='email' label='Email' type='email' variant='bordered' />
        <Input name='password' label='Password' type='password' variant='bordered' />

        <AppSubmitBtn 
          type='submit'
          title='Sign In'
          color='primary'
          className='w-full'
        />

      <div>
        <div className='flex items-center space-x-2'>
          <span>You don't have an account</span>
          <Link className='hover:underline text-blue-500' href='/sign-up'>Sign Up</Link>
        </div>
      </div>
      </form>
    </div>
  )
}

export default SignIn;