import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Box from "@mui/material/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/joy/Typography";

import Modal from "@mui/material/Modal";

import CloudDownloadRoundedIcon from "@mui/icons-material/CloudDownloadRounded";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import FullscreenOutlinedIcon from "@mui/icons-material/FullscreenOutlined";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width:1000,
  height:800,
  display: "flex",
  justifyContent:"center",
  boxShadow: 50,
  p: 4,
};

export const ImgItems = ({largeImageURL, webformatURL, views, likes, comments, downloads }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card
        sx={{
          minHeight: "280px",
          width: "100%",
          maxWidth: "320px",
          marginTop: "20px",
        }}
      >
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <img src={largeImageURL} loading="lazy" style={{ width: "70vw", height: "70%" }} />
          </Box>
        </Modal>

        <CardCover
          style={{
            cursor: "pointer",
          }}
          x
        >
          <img
            src={webformatURL}
            loading="lazy"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </CardCover>

        <CardCover
          sx={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 300px)",
          }}
        />
        <CardContent sx={{ justifyContent: "flex-end" }}>
          <Typography sx={{ fontSize: 15 }} textColor="#fff">

        <div className="display:flex; align-items: center; margin-top: 2rem;">

          <div>
            <li className="list-group-item">
              <CloudDownloadRoundedIcon /> {downloads}
            </li>
            <li className="list-group-item">
              <ThumbUpOffAltOutlinedIcon /> {likes}
            </li>
            <li className="list-group-item">
              <MessageOutlinedIcon /> {comments}
            </li>
            <li className="list-group-item">
              <VisibilityOutlinedIcon /> {views}
            </li>
           </div>
        </div>
        {/* <div>
            <Button onClick={handleOpen} sx={{ alignItems:'center'}}>
                <FullscreenOutlinedIcon sx={{ fontSize: 35, color:'white', display:"flex", }} />
            </Button>
          </div> */}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};