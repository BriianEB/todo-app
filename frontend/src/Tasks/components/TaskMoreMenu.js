import { useState } from 'react';
import { Drawer, IconButton, MenuItem, Popover, Typography } from '@mui/material';

import useResponsive from '@/shared/hooks/useResponsive';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';


function TaskMoreMenu({ task }) {
  const isMobile = useResponsive('down', 'md');

  const [anchorEl, setAnchorEl] = useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);

  function content() {
    return (
      <>
        <MenuItem
          onClick={function () {
            handleClose();
          }}
        >
          <EditIcon fontSize="small" />
          <Typography variant="body2">
            Editar
          </Typography>
        </MenuItem>
        <MenuItem
          onClick={function () {
            handleClose();
          }}
        >
          <DeleteIcon fontSize="small" />
          <Typography variant="body2">
            Eliminar
          </Typography>
        </MenuItem>
      </>
    );
  }

  return (
    <>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>

      {isMobile ? (
        <Drawer
          anchor="bottom"
          open={open}
          onClose={handleClose}
          PaperProps={{
            sx: {
              borderTopLeftRadius: (theme) => theme.shape.borderRadius + 'px',
              borderTopRightRadius: (theme) => theme.shape.borderRadius + 'px',
              p: 1,
              '& .MuiMenuItem-root': {
                p: 1
              },
              '& .MuiSvgIcon-root': {
                mr: 2
              }
            }
          }}
        >
          {content()}
        </Drawer>
        
      ) : (
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          slotProps={{
            paper: {
              sx: {
                minWidth: '160px',
                p: 1,
                '& .MuiMenuItem-root': {
                  p: 1
                },
                '& .MuiSvgIcon-root': {
                  mr: 2
                }
              }
            }
          }}
        >
          {content()}
        </Popover>
      )}
    </>
  );
}

export default TaskMoreMenu;