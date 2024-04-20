import { Button } from '@nextui-org/react';
import React from 'react';
import Link from 'next/link';

const AuthOptions = () => {
  return (
    <>
      <Button as={Link} href='/sign-in' color="primary" variant="solid">
        Login
      </Button>
      <Button as={Link} href='/sign-up' color="primary" variant="bordered">
        Sign up
      </Button>
    </>
  )
}

export default AuthOptions;
