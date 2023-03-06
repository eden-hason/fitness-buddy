import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
} from '@mui/material';
import React from 'react';

export default function MealsPlan() {
  const rows = [
    { name: 'חזה עוף', serving: '100 גרם', calories: 160, protein: 30 },
  ];

  return (
    <>
      <Accordion sx={{ marginBottom: '1em' }}>
        <AccordionSummary>ארוחת בוקר</AccordionSummary>
        <AccordionDetails>
          <Table size='small'>
            <TableHead>
              <TableRow>
                <TableCell>פריט מזון</TableCell>
                <TableCell>מנת הגשה</TableCell>
                <TableCell>קלוריות</TableCell>
                <TableCell>חלבון</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    {row.name}
                  </TableCell>
                  <TableCell>{row.serving}</TableCell>
                  <TableCell>{row.calories}</TableCell>
                  <TableCell>{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell sx={{ borderBottom: 'none' }} />
                <TableCell sx={{ borderBottom: 'none' }} />
                <TableCell sx={{ borderBottom: 'none' }}>
                  {rows.reduce((prev, cur) => prev + cur.calories, 0)}
                </TableCell>
                <TableCell sx={{ borderBottom: 'none' }}>
                  {rows.reduce((prev, cur) => prev + cur.protein, 0)}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ marginBottom: '1em' }}>
        <AccordionSummary>ארוחת צהריים</AccordionSummary>
        <AccordionDetails>
          <Table size='small'>
            <TableHead>
              <TableRow>
                <TableCell>פריט מזון</TableCell>
                <TableCell>מנת הגשה</TableCell>
                <TableCell>קלוריות</TableCell>
                <TableCell>חלבון</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    {row.name}
                  </TableCell>
                  <TableCell>{row.serving}</TableCell>
                  <TableCell>{row.calories}</TableCell>
                  <TableCell>{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell sx={{ borderBottom: 'none' }} />
                <TableCell sx={{ borderBottom: 'none' }} />
                <TableCell sx={{ borderBottom: 'none' }}>
                  {rows.reduce((prev, cur) => prev + cur.calories, 0)}
                </TableCell>
                <TableCell sx={{ borderBottom: 'none' }}>
                  {rows.reduce((prev, cur) => prev + cur.protein, 0)}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary>ארוחת ערב</AccordionSummary>
        <AccordionDetails>
          <Table size='small'>
            <TableHead>
              <TableRow>
                <TableCell>פריט מזון</TableCell>
                <TableCell>מנת הגשה</TableCell>
                <TableCell>קלוריות</TableCell>
                <TableCell>חלבון</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    {row.name}
                  </TableCell>
                  <TableCell>{row.serving}</TableCell>
                  <TableCell>{row.calories}</TableCell>
                  <TableCell>{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell sx={{ borderBottom: 'none' }} />
                <TableCell sx={{ borderBottom: 'none' }} />
                <TableCell sx={{ borderBottom: 'none' }}>
                  {rows.reduce((prev, cur) => prev + cur.calories, 0)}
                </TableCell>
                <TableCell sx={{ borderBottom: 'none' }}>
                  {rows.reduce((prev, cur) => prev + cur.protein, 0)}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
