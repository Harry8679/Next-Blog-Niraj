import Link from 'next/link';
import React, { FC } from 'react';

interface Props {

}

const SignIn: FC<Props> = (props) => {
  return (
    <div>
      <Link href='/sign-up'>Sign up</Link>
      <h1 className="text-3xl font-semibold">Sign in</h1>
    </div>
  );
}

export default SignIn;