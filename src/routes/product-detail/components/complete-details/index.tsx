import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { COLORS } from 'config/styles-config';
import React from 'react';

const CompleteDetails = () => (
  <TableContainer
    sx={{ borderRadius: '0.5rem', border: `0.5px solid ${COLORS.lightBg}` }}
  >
    <Table
      sx={{
        border: `0.5px solid ${COLORS.lightBg}`,

        td: {
          borderBottom: `0.5px solid ${COLORS.lightBg}`,
        },
      }}
    >
      <TableHead />
      <TableBody>
        <TableRow>
          <TableCell>
            <Typography variant="subtitle1" fontWeight={700}>
              Китоб номи
            </Typography>
          </TableCell>
          <TableCell align="left">
            <Typography variant="subtitle1">Элжернга аталган гуллар</Typography>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
);

export default CompleteDetails;
