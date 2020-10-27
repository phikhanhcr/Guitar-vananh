import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Emoji from '../../Emoji/Emoji';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: 'none !important',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 5, 3),
  },
}));

export default function TransitionsModal({handleClose, handleRemove, show }) {
  const classes = useStyles();
  
  return (
    <div className="popup-table">
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="d-flex justify-content-center align-items-center"
        open={show}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={show}>
          <div className={classes.paper}>
            <h3 id="transition-modal-title">
              Do you wanna remove this item? 
              <Emoji />
            </h3>
            <p id="transition-modal-description">
              <button className="btn btn-danger mr-3" onClick={handleRemove}>Yes</button>
              <button className="btn btn-light" onClick={handleClose}>No</button>
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}