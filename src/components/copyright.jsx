import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://heitorgoncalves.github.io/" target="_blank">
        Heitor Gonçalves
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
