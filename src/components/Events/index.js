import React, { useState } from "react";
import styles from "./index.module.css";
import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  IconButton,
  InputAdornment,
  InputLabel,
  Modal,
  Paper,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import {
  ArrowBackIos,
  ArrowRight,
  CalendarMonthOutlined,
  Discount,
  DiscountOutlined,
  Favorite,
  FavoriteOutlined,
  GavelOutlined,
  Group,
  HelpCenterOutlined,
  Home,
  HomeOutlined,
  LocalPoliceOutlined,
  LocationOffOutlined,
  LogoutOutlined,
  Person,
  Person2Outlined,
  PublicOffOutlined,
  RemoveRedEyeOutlined,
  RoomOutlined,
  Search,
  WaterfallChart,
  WaterfallChartOutlined,
} from "@mui/icons-material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
const data = [
  {
    content: "Stuck in the Sound",
    min_content: "Synolo",
    isGoing: "Ongoing",
    isHackathon: "Hackathon",
    place: "Courtyard",
    data: "04-12-2022",
  },
];
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "446px",
  height: "529px",
  bgcolor: "background.paper",
  borderRadius: "10px",
  background: "#FFF",
  boxShadow: 24,
};
const eventOptions = [
  {
    label: "Event-1",
  },
  {
    label: "Event-2",
  },
  {
    label: "Event-3",
  },
  {
    label: "Event-4",
  },
];
function Event() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.main_heading}>
          <div>
            <Typography
              color={"#000"}
              fontSize={"28px"}
              fontFamily={"Poppins"}
              fontStyle={500}
            >
              SKIA
            </Typography>
          </div>
          <Box
            sx={{
              border: "1px solid rgba(187, 187, 187, 1)",
              marginLeft: "153px",
              height: "50px",
              zIndex: 10,
            }}
          />
        </div>

        <div className={styles.main_container}>
          <div className={styles.sidebar_container}>
            <div className={styles.sidebar_main_items_container}>
              <div className={styles.sidebar_item_container}>
                <div>
                  <HomeOutlined
                    sx={{
                      height: "28px",
                      width: "28px",
                      color: "rgba(0, 0, 0, 0.5)",
                    }}
                  />
                </div>
                <div>
                  <Typography
                    fontFamily={"Inter"}
                    fontSize={"20px"}
                    fontWeight={500}
                    color={"rgba(0, 0, 0, 0.5)"}
                  >
                    Home
                  </Typography>
                </div>
              </div>
              <div className={styles.sidebar_item_container}>
                <div>
                  <LocalPoliceOutlined
                    sx={{
                      height: "28px",
                      width: "28px",
                      color: "rgba(0, 0, 0, 0.5)",
                    }}
                  />
                </div>
                <div>
                  <Typography
                    fontFamily={"Inter"}
                    fontSize={"20px"}
                    fontWeight={500}
                    color={"rgba(0, 0, 0, 0.5)"}
                  >
                    Club
                  </Typography>
                </div>
              </div>
              <div className={styles.sidebar_item_container}>
                <div>
                  <CalendarMonthOutlined
                    sx={{
                      height: "28px",
                      width: "28px",
                      color: "#000",
                    }}
                  />
                </div>
                <div>
                  <Typography
                    fontFamily={"Inter"}
                    fontSize={"20px"}
                    fontWeight={600}
                    color={"#000"}
                  >
                    Events
                  </Typography>
                </div>
              </div>
              <div className={styles.sidebar_item_container}>
                <div>
                  <WaterfallChartOutlined
                    sx={{
                      height: "28px",
                      width: "28px",
                      color: "rgba(0, 0, 0, 0.5)",
                    }}
                  />
                </div>
                <div>
                  <Typography
                    fontFamily={"Inter"}
                    fontSize={"20px"}
                    fontWeight={500}
                    color={"rgba(0, 0, 0, 0.5)"}
                  >
                    Analytics
                  </Typography>
                </div>
              </div>
            </div>
            <div className={styles.bottom_sidebar_container}>
              <div className={styles.sidebar_item_container}>
                <div>
                  <HelpCenterOutlined
                    sx={{
                      width: "18px",
                      height: "18px",
                      color: "rgba(0, 0, 0, 0.6)",
                    }}
                  />
                </div>
                <div>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "13px",
                      fontFamily: "Inter",
                    }}
                  />
                  Help & Information
                </div>
              </div>
              <div className={styles.sidebar_item_container}>
                <div>
                  <LogoutOutlined
                    sx={{
                      width: "18px",
                      height: "18px",
                      color: "rgba(0, 0, 0, 0.6)",
                    }}
                  />
                </div>
                <div>
                  <Typography
                    fontSize={"13px"}
                    fontWeight={500}
                    fontFamily={"Inter"}
                    color={"rgba(0, 0, 0, 0.6)"}
                  />
                  Logout
                </div>
              </div>
            </div>
          </div>
          <Box
            sx={{
              border: "1px solid rgba(187, 187, 187, 1)",

              height: "90vh",
            }}
          />
          <div className={styles.events_container}>
            <Paper elevation={3} className={styles.events_container_main}>
              <div className={styles.events_main_main_container}>
                <div className={styles.events_main_main_container_heading}>
                  <div>
                    <Typography
                      fontFamily={"Inter"}
                      fontSize={"28px"}
                      fontWeight={500}
                    >
                      Events
                    </Typography>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <div>
                      <TextField
                        placeholder='Search'
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position='start'>
                              <IconButton>
                                <Search />
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                        sx={{ width: "383px", height: "45px" }}
                      />
                    </div>
                    <div>
                      <Button
                        sx={{
                          color: "#fff",
                          backgroundColor: "#2B81F8",
                          width: "123px",
                          height: "45px",
                          borderRadius: "50px",
                          textTransform: "none",
                          fontSize: "16px",
                          fontFamily: "Poppins",
                          fontWeight: "600",
                        }}
                        onClick={handleOpen}
                      >
                        {" "}
                        Add new
                      </Button>
                    </div>
                    <Modal open={open} onClose={handleClose}>
                      <Box sx={style}>
                        <Modal1 />
                      </Box>
                    </Modal>
                  </div>
                </div>
                <div>
                  <Card className={styles.events_card_container}>
                    <div>
                      <img
                        className={styles.events_img_container}
                        src='events_image.svg'
                      />
                    </div>
                    <div>
                      {data.map((item, i) => (
                        <div
                          index={i}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                          }}
                        >
                          <div>
                            <Typography
                              fontFamily={"Poppins"}
                              fontSize={"24px"}
                              fontWeight={400}
                            >
                              {item.content}
                            </Typography>
                          </div>
                          <div>
                            <Typography
                              fontFamily={"Poppins"}
                              fontSize={"20px"}
                              fontWeight={400}
                            >
                              {item.min_content}
                            </Typography>
                          </div>
                          <div>
                            <div
                              style={{
                                backgroundColor: "rgba(116, 191, 255, 0.3)",
                                padding: "10px",
                                width: "106px",
                                height: "31px",
                                borderRadius: "4px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <Typography
                                fontFamily={"Poppins"}
                                fontSize={"16px"}
                                fontWeight={400}
                                color={"#0089FF"}
                              >
                                {item.isGoing}
                              </Typography>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        // alignItems: "center",
                        // justifyContent: "center",
                        gap: "25px",
                        marginLeft: " 50px",
                        marginRight: " 50px",
                        marginTop: " 45px",
                      }}
                    >
                      <div>
                        <Typography
                          fontSize={"16px"}
                          fontWeight={400}
                          fontFamily={"Poppins"}
                        >
                          ₹30,000 in prizes
                        </Typography>
                      </div>
                      <div>
                        <Typography
                          fontSize={"16px"}
                          fontWeight={400}
                          fontFamily={"Poppins"}
                        >
                          👥 256 registered
                        </Typography>
                      </div>
                    </div>
                    <Box
                      sx={{
                        border: "1px solid rgba(187, 187, 187, 1)",

                        height: "143.224px",
                      }}
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "15px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginLeft: "10px",
                          gap: "15px",
                        }}
                      >
                        <div>
                          <IconButton>
                            <DiscountOutlined />
                          </IconButton>
                        </div>
                        <div>
                          <Typography
                            fontFamily={"Poppins"}
                            fontSize={"16px"}
                            fontWeight={400}
                          >
                            Hackathon
                          </Typography>
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginLeft: "10px",
                          gap: "15px",
                        }}
                      >
                        <div>
                          <IconButton>
                            <RoomOutlined />
                          </IconButton>
                        </div>
                        <div>
                          <Typography
                            fontFamily={"Poppins"}
                            fontSize={"16px"}
                            fontWeight={400}
                          >
                            Courtyard
                          </Typography>
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginLeft: "10px",
                          gap: "15px",
                        }}
                      >
                        <div>
                          <IconButton>
                            <CalendarMonthOutlined />
                          </IconButton>
                        </div>
                        <div>
                          <Typography
                            fontFamily={"Poppins"}
                            fontSize={"16px"}
                            fontWeight={400}
                          >
                            04-12-2022
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </Paper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;

const Modal1 = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [buttonColor, setButtonColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const [buttonColor1, setButtonColor1] = useState("");
  const [textColor1, setTextColor1] = useState("");
  const [iconcolor, setIconColor] = useState("");
  const [iconbackgroundColor, setIconBackgroundColor] = useState("");
  const [iconcolor1, setIconColor1] = useState("");
  const [iconbackgroundColor1, setIconBackgroundColor1] = useState("");
  const handleClick = () => {
    console.log("hi");
    const newColor =
      buttonColor === "rgba(43, 129, 248, 1)" ? "" : "rgba(43, 129, 248, 1)";
    const newTextcolor = textColor === "#fff" ? "#A2A2A2" : "#fff";
    const newIconColor =
      iconcolor === "#fff" ? "#fff" : "rgba(43, 129, 248, 1)";
    const newIconColorBackground =
      iconbackgroundColor === "#fff" ? "rgba(43, 129, 248, 1)" : "#fff";
    setButtonColor(newColor);
    setTextColor(newTextcolor);
    setIconColor(newIconColor);
    setIconBackgroundColor(newIconColorBackground);
  };
  const handleClick1 = () => {
    const newColor1 =
      buttonColor1 === "rgba(43, 129, 248, 1)" ? "" : "rgba(43, 129, 248, 1)";
    const newTextcolor1 = textColor1 === "#fff" ? "#A2A2A2" : "#fff";
    const newIconColor =
      iconcolor1 === "#fff" ? "#fff" : "rgba(43, 129, 248, 1)";
    const newIconColorBackground =
      iconbackgroundColor1 === "#fff" ? "rgba(43, 129, 248, 1)" : "#fff";
    setButtonColor1(newColor1);
    setTextColor1(newTextcolor1);
    setIconColor1(newIconColor);
    setIconBackgroundColor1(newIconColorBackground);
  };
  return (
    <div className={styles.main_modal_container}>
      <div>
        <InputLabel
          sx={{
            fontSize: "14px",
            fontFamily: "Poppins",
            fontWeight: 400,
            color: "#282727",
          }}
        >
          Event Title
        </InputLabel>
        <TextField
          name='eventTitle'
          value={eventTitle}
          onChange={(e) => setEventTitle(e.target.value)}
          sx={{
            width: "400px",
            height: "42px",
            marginBottom: "10px",
          }}
        />
      </div>
      <div style={{ margin: "10px 0" }}>
        <InputLabel
          sx={{
            fontSize: "14px",
            fontFamily: "Poppins",
            fontWeight: 400,
            color: "#282727",
          }}
        >
          Event Description
        </InputLabel>
        <TextField
          name='event'
          value={eventDescription}
          multiline
          rows={4}
          onChange={(e) => setEventDescription(e.target.value)}
          sx={{
            width: "400px",
            height: "115px",
          }}
        />
      </div>
      <div className={styles.upload_image_container}>
        <div>
          <Typography
            sx={{
              fontSize: "14px",
              fontFamily: "Poppins",
              fontWeight: 400,
              color: "#282727",
            }}
          >
            {" "}
            Upload Image
          </Typography>
        </div>
        <div>
          <Button
            sx={{
              color: "#A2A2A2",
              borderRadius: "4px",
              border: "0.3px solid #000",
              background: "#FCFCFC",
              width: "180px",
              height: "32px",
              textTransform: "none",
            }}
          >
            Upload Files{" "}
            <IconButton>
              <RemoveRedEyeOutlined sx={{ height: "15px" }} />
            </IconButton>
          </Button>
        </div>
      </div>
      <div className={styles.upload_image_container}>
        <div>
          <Typography
            sx={{
              fontSize: "14px",
              fontFamily: "Poppins",
              fontWeight: 400,
              color: "#282727",
            }}
          >
            {" "}
            Upload Banner
          </Typography>
        </div>
        <div>
          <Button
            sx={{
              color: "#A2A2A2",
              borderRadius: "4px",
              border: "0.3px solid #000",
              background: "#FCFCFC",
              width: "180px",
              height: "32px",
              textTransform: "none",
            }}
          >
            Upload Files{" "}
            <IconButton>
              <RemoveRedEyeOutlined sx={{ height: "15px" }} />
            </IconButton>
          </Button>
        </div>
      </div>
      <div className={styles.upload_image_container}>
        <div>
          <Typography
            sx={{
              fontSize: "14px",
              fontFamily: "Poppins",
              fontWeight: 400,
              color: "#282727",
            }}
          >
            {" "}
            Upload Banner
          </Typography>
        </div>
        <div>
          <Button
            sx={{
              borderRadius: "4px",
              border: " 0.2px solid rgba(162, 162, 162, 1)",
              backgroundColor: buttonColor,
              color: textColor,
              width: "120px",
              height: "32px",
              textTransform: "none",
            }}
            onClick={handleClick}
            startIcon={
              <LocationOffOutlined
                sx={{
                  padding: "1px",
                  background: iconbackgroundColor,
                  color: iconcolor,
                }}
              />
            }
          >
            Offline{" "}
          </Button>
        </div>
        <div>
          <Button
            sx={{
              borderRadius: "4px",
              border: "0.2px solid rgba(162, 162, 162, 1)",
              backgroundColor: buttonColor1,
              color: textColor1,
              width: "120px",
              height: "32px",
              textTransform: "none",
            }}
            onClick={handleClick1}
            startIcon={
              <PublicOffOutlined
                sx={{
                  padding: "1px",
                  background: iconbackgroundColor1,
                  color: iconcolor1,
                }}
              />
            }
          >
            Online{" "}
          </Button>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div>
          <InputLabel
            sx={{
              fontSize: "14px",
              fontFamily: "Poppins",
              fontWeight: 400,
              color: "#282727",
            }}
          >
            Event Type
          </InputLabel>
        </div>
        <div>
          <select
            style={{
              padding: "20px",
              width: "150px",
              height: "32px",
              borderRadius: "4px",
              borderColor: "rgba(147, 147, 147, 1)",
            }}
          >
            <option value='Event 1' label='Event 1'>
              Event 1
            </option>
            <option value='Event 2'>Event 2</option>
            <option value='Event 3'>Event 3</option>
            <option value='Event 4'>Event 4</option>
          </select>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          marginTop: "10px",
        }}
      >
        <div>
          <Button
            sx={{
              width: "106px",
              height: "40px",
              borderRadius: "8px",
              border: "1px solid #85C2F6",
              background: "#fff",
              color: "#000",
              textTransform: "none",
              fontFamily: "Poppins",
            }}
          >
            Cancel
          </Button>
        </div>
        <div>
          <Button
            onClick={handleOpen1}
            endIcon={<ArrowRight />}
            sx={{
              width: "106px",
              height: "40px",
              borderRadius: "8px",
              border: "1px solid #85C2F6",
              background: "#2B81F8",
              color: "#FFFFFF",
              textTransform: "none",
              fontFamily: "Poppins",
            }}
          >
            Next
          </Button>
          <Modal open={open1} onClose={handleClose1}>
            <Box sx={style}>
              <Modal2 />
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};

const Modal2 = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const [location, setLocation] = useState("");
  const [minimumPerson, setMinimumPerson] = useState("");
  const [maxmumPerson, setMaxmumPerson] = useState("");
  const [buttonColor, setButtonColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const [buttonColor1, setButtonColor1] = useState("");
  const [textColor1, setTextColor1] = useState("");
  const [iconcolor, setIconColor] = useState("");
  const [iconbackgroundColor, setIconBackgroundColor] = useState("");
  const [iconcolor1, setIconColor1] = useState("");
  const [iconbackgroundColor1, setIconBackgroundColor1] = useState("");
  const [memberstate, setMemberstate] = useState(false);
  const handleMemberClick = () => {
    setMemberstate(true);
  };
  const handleClick = () => {
    console.log("hi");
    const newColor =
      buttonColor === "rgba(43, 129, 248, 1)" ? "" : "rgba(43, 129, 248, 1)";
    const newTextcolor = textColor === "#fff" ? "#A2A2A2" : "#fff";
    const newIconColor =
      iconcolor === "#fff" ? "#fff" : "rgba(43, 129, 248, 1)";
    const newIconColorBackground =
      iconbackgroundColor === "#fff" ? "rgba(43, 129, 248, 1)" : "#fff";
    setButtonColor(newColor);
    setTextColor(newTextcolor);
    setIconColor(newIconColor);
    setIconBackgroundColor(newIconColorBackground);
  };
  const handleClick1 = () => {
    setMemberstate(true);
    console.log("hi");
    const newColor1 =
      buttonColor1 === "rgba(43, 129, 248, 1)" ? "" : "rgba(43, 129, 248, 1)";
    const newTextcolor1 = textColor1 === "#fff" ? "#A2A2A2" : "#fff";
    const newIconColor =
      iconcolor1 === "#fff" ? "#fff" : "rgba(43, 129, 248, 1)";
    const newIconColorBackground =
      iconbackgroundColor1 === "#fff" ? "rgba(43, 129, 248, 1)" : "#fff";
    setButtonColor1(newColor1);
    setTextColor1(newTextcolor1);
    setIconColor1(newIconColor);
    setIconBackgroundColor1(newIconColorBackground);
  };
  return (
    <div className={styles.main_modal_container}>
      <div className={styles.upload_image_container}>
        <div>
          <Typography
            sx={{
              fontSize: "14px",
              fontFamily: "Poppins",
              fontWeight: 500,
              color: "#282727",
            }}
          >
            {" "}
            Participation Type
          </Typography>
        </div>
        <div>
          <Button
            sx={{
              borderRadius: "4px",
              border: "0.3px solid #000",
              backgroundColor: buttonColor,
              color: textColor,
              width: "120px",
              height: "32px",
              textTransform: "none",
            }}
            onClick={handleClick}
            startIcon={
              <Person
                sx={{
                  padding: "1px",
                  background: iconbackgroundColor,
                  color: iconcolor,
                }}
              />
            }
          >
            Individual{" "}
          </Button>
        </div>
        <div>
          <Button
            sx={{
              borderRadius: "4px",
              border: "0.3px solid #000",
              backgroundColor: buttonColor1,
              color: textColor1,
              width: "120px",
              height: "32px",
              textTransform: "none",
            }}
            startIcon={
              <Group
                sx={{
                  padding: "1px",
                  background: iconbackgroundColor1,
                  color: iconcolor1,
                }}
              />
            }
            onClick={handleClick1}
          >
            Group{" "}
          </Button>
        </div>
      </div>
      {memberstate ? (
        <div className={styles.upload_image_container}>
          <div style={{ margin: "0 10px" }}>
            <Typography
              sx={{
                fontSize: "14px",
                fontFamily: "Poppins",
                fontWeight: 400,
                color: "#282727",
              }}
            >
              {" "}
              Members
            </Typography>
          </div>
          <div>
            <TextField
              value={minimumPerson}
              onChange={(e) => setMinimumPerson(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>min</InputAdornment>
                ),
              }}
            />
          </div>
          <div>
            <TextField
              value={maxmumPerson}
              onChange={(e) => setMaxmumPerson(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>max</InputAdornment>
                ),
              }}
            />
          </div>
        </div>
      ) : null}

      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          <Typography
            sx={{
              fontSize: "14px",
              fontFamily: "Poppins",
              fontWeight: 500,
              color: "#282727",
            }}
          >
            {" "}
            Start Date and Time
          </Typography>
        </div>
        <div>
          {" "}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateTimePicker"]}>
              <DateTimePicker label='Start Date and Time' />
            </DemoContainer>
          </LocalizationProvider>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          <Typography
            sx={{
              fontSize: "14px",
              fontFamily: "Poppins",
              fontWeight: 500,
              color: "#282727",
            }}
          >
            {" "}
            End Date and Time
          </Typography>
        </div>
        <div>
          {" "}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateTimePicker"]}>
              <DateTimePicker label='End Date and Time' />
            </DemoContainer>
          </LocalizationProvider>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "10px",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <div>
          <Typography
            sx={{
              fontSize: "14px",
              fontFamily: "Poppins",
              fontWeight: 500,
              color: "#282727",
            }}
          >
            {" "}
            Judging Mode
          </Typography>
        </div>
        <div>
          <Button
            startIcon={
              <FavoriteOutlined sx={{ fill: "rgba(43, 129, 248, 1)" }} />
            }
            sx={{
              textTransform: "none",
              color: "#282727",
              border: "0.2px solid #282727",
              marginLeft: "5px",
            }}
          >
            Likes
          </Button>
          <Button
            sx={{
              textTransform: "none",
              color: "#fff",
              backgroundColor: "rgba(43, 129, 248, 1)",
              border: "0.2px solid rgba(43, 129, 248, 1)",
              marginLeft: "5px",
            }}
            startIcon={<GavelOutlined sx={{ fill: "#fff" }} />}
          >
            Judging
          </Button>
          <Button
            sx={{
              textTransform: "none",
              color: "#282727",
              border: "0.2px solid #282727",
              marginLeft: "5px",
            }}
            startIcon={
              <Person2Outlined sx={{ fill: "rgba(43, 129, 248, 1)" }} />
            }
          >
            Hybrid
          </Button>
        </div>
      </div>
      <div
        style={{
          margin: "10px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <InputLabel
          sx={{
            fontSize: "14px",
            fontFamily: "Poppins",
            fontWeight: 500,
            color: "#282727",
          }}
        >
          Location
        </InputLabel>
        <TextField
          name='location'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "35px",
        }}
      >
        <InputLabel
          sx={{
            fontSize: "14px",
            fontFamily: "Poppins",
            fontWeight: 500,
            color: "#282727",
          }}
        >
          Private
        </InputLabel>
        <Switch {...label} />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          marginTop: "10px",
        }}
      >
        <div>
          <Button
            sx={{
              width: "106px",
              height: "40px",
              borderRadius: "8px",
              border: "1px solid #85C2F6",
              background: "#fff",
              color: "#000",
              textTransform: "none",
              fontFamily: "Poppins",
            }}
            onClick={handleOpen1}
            startIcon={<ArrowBackIos sx={{ width: "10px", height: "20px" }} />}
          >
            Back
          </Button>
          <Modal open={open1} onClose={handleClose1}>
            <Box sx={style}>
              <Modal1 />
            </Box>
          </Modal>
        </div>
        <div>
          <Button
            sx={{
              width: "106px",
              height: "40px",
              borderRadius: "8px",
              border: "1px solid #85C2F6",
              background: "#2B81F8",
              color: "#FFFFFF",
              textTransform: "none",
              fontFamily: "Poppins",
            }}
            onClick={handleClose}
            disabled={!memberstate}
          >
            Proceed
          </Button>
        </div>
      </div>
    </div>
  );
};
