import React from "react";
import {
  Card,
  Typography,
  Button,
  Grid,
  Avatar,
  Box
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import TaskIcon from "@mui/icons-material/Task";
import MessageIcon from "@mui/icons-material/Message";
import WorkIcon from "@mui/icons-material/Work";
import { PieChart } from "@mui/x-charts/PieChart";
import { useNavigate } from "react-router-dom";

function Dashboard({ darkMode }) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("userData"));

  const cardStyle = {
    padding: "20px",
    textAlign: "center",
    borderRadius: "14px",
    cursor: "pointer",
    transition: "0.3s",
  };

  const hoverEffect = {
    "&:hover": {
      transform: "scale(1.04)",
      boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
    },
  };

  const cardClass = darkMode ? "card-dark" : "card-light";

  return (
    <Box sx={{ padding: "25px" }}>
      
      {/* Dashboard Title */}
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: 700, mb: 4 }}
      >
        Dashboard Overview 📊
      </Typography>

      {/* TOP SECTION: Profile + Stats */}
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        
        {/* Profile Card */}
        <Grid item xs={12} md={4}>
          <Card className={cardClass} sx={{ ...cardStyle, ...hoverEffect }} elevation={6}>
            <Avatar
              sx={{
                bgcolor: "#1976d2",
                width: 80,
                height: 80,
                margin: "auto",
                mb: 1,
              }}
            >
              <PersonIcon fontSize="large" />
            </Avatar>

            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {user?.name}
            </Typography>

            <Typography variant="body2" mt={1}>
              <MailOutlineIcon fontSize="small" /> {user?.email}
            </Typography>
            <Typography variant="body2">
              <LocationCityIcon fontSize="small" /> {user?.city}
            </Typography>

            <Button
              variant="contained"
              sx={{ width: "70%", mt: 2 }}
              onClick={() => navigate("/profile")}
            >
              View Profile
            </Button>
          </Card>
        </Grid>

        {/* Stat Cards */}
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            {/* Performance */}
            <Grid item xs={12} sm={4}>
              <Card className={cardClass} sx={{ ...cardStyle, ...hoverEffect }} elevation={4}>
                <TaskIcon sx={{ fontSize: 32, color: "green" }} />
                <Typography variant="h6">Performance</Typography>
                <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>87%</Typography>
                <Typography variant="body2">Improving 🚀</Typography>
              </Card>
            </Grid>

            {/* Tasks Done */}
            <Grid item xs={12} sm={4}>
              <Card className={cardClass} sx={{ ...cardStyle, ...hoverEffect }} elevation={4}>
                <TaskIcon sx={{ fontSize: 32, color: "#0059ff" }} />
                <Typography variant="h6">Tasks Done</Typography>
                <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>14/20</Typography>
                <Typography variant="body2">Keep it up 🔥</Typography>
              </Card>
            </Grid>

            {/* Attendance */}
            <Grid item xs={12} sm={4}>
              <Card className={cardClass} sx={{ ...cardStyle, ...hoverEffect }} elevation={4}>
                <WorkIcon sx={{ fontSize: 32, color: "#ff9800" }} />
                <Typography variant="h6">Attendance</Typography>
                <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>92%</Typography>
                <Typography variant="body2">Good Consistency ✨</Typography>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* CHART SECTION */}
      <Box
        sx={{
          mt: 6,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card
          className={cardClass}
          sx={{ padding: 3, width: 350, ...hoverEffect }}
          elevation={6}
        >
          <Typography align="center" fontWeight={600}>
            Task Completion Analysis 📈
          </Typography>

          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 70, label: "Completed" },
                  { id: 1, value: 30, label: "Pending" },
                ],
              },
            ]}
            width={320}
            height={250}
          />
        </Card>
      </Box>

      {/* BOTTOM SECTION: Quick Access Cards */}
      <Grid container spacing={3} justifyContent="center" mt={5}>
        <Grid item xs={12} sm={4} md={3}>
          <Card className={cardClass} sx={{ ...cardStyle, ...hoverEffect }} elevation={4}>
            <TaskIcon sx={{ fontSize: 32 }} />
            <Typography variant="h6">Tasks</Typography>
            <Typography variant="body2">5 pending tasks</Typography>
            <Button size="small" sx={{ mt: 1 }} variant="outlined">
              View
            </Button>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4} md={3}>
          <Card className={cardClass} sx={{ ...cardStyle, ...hoverEffect }} elevation={4}>
            <WorkIcon sx={{ fontSize: 32 }} />
            <Typography variant="h6">Projects</Typography>
            <Typography variant="body2">2 ongoing projects</Typography>
            <Button size="small" sx={{ mt: 1 }} variant="outlined" color="success">
              Manage
            </Button>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4} md={3}>
          <Card className={cardClass} sx={{ ...cardStyle, ...hoverEffect }} elevation={4}>
            <MessageIcon sx={{ fontSize: 32 }} />
            <Typography variant="h6">Messages</Typography>
            <Typography variant="body2">3 unread</Typography>
            <Button size="small" sx={{ mt: 1 }} variant="outlined" color="warning">
              Check
            </Button>
          </Card>
        </Grid>
      </Grid>

      {/* LOGOUT BUTTON */}
      <Box textAlign="center" mt={6}>
        <Button
          variant="contained"
          color="error"
          sx={{
            width: "40%",
            fontSize: "16px",
            padding: "12px",
            borderRadius: "8px",
          }}
          onClick={() => navigate("/login")}
        >
          LOGOUT
        </Button>
      </Box>
    </Box>
  );
}

export default Dashboard;
