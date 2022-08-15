import * as React from 'react';
import Dialog from '@mui/material/Dialog';

export default function EmptyPopUp({ onClose, open, children }) {
  return (
    <Dialog
      onClose={() => onClose()}
      open={open}
      fullWidth
      maxWidth="lg"
      scroll="body"
    >
      {children}
    </Dialog>
  );
}
