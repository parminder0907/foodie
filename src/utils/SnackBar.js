import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import Slide from '@mui/material/Slide';

function SlideTransition(props) {
  return <Slide {...props} direction="down" />;
}

// const Alert = React.forwardRef(function Alert(props, ref) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });

export default function SnackBar({
  openSnackbar,
  setOpenSnackbar,
  message,
  key,
}) {
  return (
    <div>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        TransitionComponent={SlideTransition}
        key={key}
      >
        <MuiAlert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          {message}
        </MuiAlert>
      </Snackbar>
    </div>
  );
}
