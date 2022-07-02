import React, { forwardRef } from 'react';
import { TransitionProps } from '@mui/material/transitions';
import CloseIcon from '@mui/icons-material/Close';
import {
  AppBar,
  Button,
  Dialog,
  IconButton,
  Slide,
  Toolbar,
  Typography,
} from '@mui/material';

const TransitionFunc = (
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) => <Slide direction="up" ref={ref} {...props} />;

function valuetext(value: number) {
  return `${value}°C`;
}

const FilterDialog: React.FC<{ open: boolean; setOpen: any }> = ({
  children,
  open,
  setOpen,
}) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      fullWidth
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={forwardRef(TransitionFunc)}
      sx={{ '.dqtWpK': { width: '100%' } }}
    >
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography
            sx={{ ml: 2, flex: 1 }}
            color="wheat"
            variant="h6"
            component="div"
          >
            Filter
          </Typography>
          <Button autoFocus color="inherit" onClick={handleClose}>
            Saqlash
          </Button>
        </Toolbar>
      </AppBar>
      {children}
    </Dialog>
  );
};
export default FilterDialog;
