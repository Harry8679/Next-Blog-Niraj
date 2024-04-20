'user client';
import { NextUIProvider } from '@nextui-org/react';
import React, { FC, ReactNode } from 'react';
import Navbar from './components/Navbar';

interface Props {
    children: ReactNode
}

const Provider: FC<Props> = ({ children }) => {
  return (
    <NextUIProvider>
      <Navbar />
      {children}
    </NextUIProvider>
  )
}

export default Provider;
