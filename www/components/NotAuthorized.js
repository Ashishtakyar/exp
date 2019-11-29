import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Button, Typography, Divider } from '@material-ui/core';



export default () => (
  <div>
    <div>
      <Button href='/auth/sign-in' color="secondary">log in</Button>
    </div>
  </div>
)