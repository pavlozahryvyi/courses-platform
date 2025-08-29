import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import { type FC } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { clearActiveVideo } from "../../store/active-video";
import { useDispatch } from "react-redux";

type DialogModalType = {
  videoUrl: string;
};

export const DialogModal: FC<DialogModalType> = ({ videoUrl }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(clearActiveVideo());
  };

  return (
    <Dialog open onClose={handleClose}>
      <DialogTitle sx={{ p: "30px" }}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <video controls width="250">
          <source src={videoUrl} type="video/mp4" />
        </video>
      </DialogContent>
    </Dialog>
  );
};
