import React from 'react'
import { Link, Stack } from '@mui/material'

function MuiLink() {
  return (
    <Stack spacing={2} direction='row' m={4}>
        <Link href='#'>Link</Link>
        <Link href='#' color='secondary' underline='hover'>Secondary</Link>
        <Link href='#' underline='none'>None</Link>
    </Stack>
  )
}

export default MuiLink