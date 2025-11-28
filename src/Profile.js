import React from "react";
import { Card, CardContent, Typography, Avatar, Button, Grid, Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";
import HomeIcon from "@mui/icons-material/Home";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import { useNavigate } from "react-router-dom";

function Profile({ darkMode }) {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("userData"));

    const cardClass = darkMode ? "card-dark" : "card-light";

    return (
        <Box sx={{ padding: "50px 0" }}>
            <Typography
                variant="h4"
                align="center"
                sx={{ marginBottom: "35px", fontWeight: 600 }}
            >
                My Profile 👤
            </Typography>

            <Grid container justifyContent="center">
                <Grid item xs={12} md={5}>
                    <Card
                        elevation={6}
                        className={cardClass}
                        sx={{
                            textAlign: "center",
                            padding: "35px",
                            borderRadius: "18px",
                            transition: "0.3s",
                        }}
                    >
                        {/* PROFILE LOGO */}
                        <Avatar
                            sx={{
                                bgcolor: "#1976d2",
                                width: 100,
                                height: 100,
                                margin: "auto",
                                marginBottom: "15px",
                                border: "4px solid white",
                                boxShadow: "0 0 15px rgba(0,0,0,0.25)",
                            }}
                        >
                            <PersonIcon sx={{ fontSize: 55 }} />
                        </Avatar>

                        <CardContent>
                            <Typography variant="h5" sx={{ fontWeight: 700 }}>
                                {user?.name}
                            </Typography>

                            <Box sx={{ textAlign: "left", marginTop: 2, lineHeight: "35px" }}>
                                <Typography>
                                    <MailOutlineIcon /> <b>Email:</b> {user?.email}
                                </Typography>
                                <Typography>
                                    <CallIcon /> <b>Phone:</b> {user?.phone || "Not provided"}
                                </Typography>
                                <Typography>
                                    <HomeIcon /> <b>Address:</b> {user?.address || "Not provided"}
                                </Typography>
                                <Typography>
                                    <LocationCityIcon /> <b>City:</b> {user?.city}
                                </Typography>
                            </Box>
                        </CardContent>

                        <Grid container spacing={2} justifyContent="center" mt={3}>
                            <Grid item xs={6}>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    color="primary"
                                    onClick={() => navigate("/dashboard")}
                                >
                                    Back to Dashboard
                                </Button>
                            </Grid>

                            <Grid item xs={6}>
                                <Button
                                    variant="outlined"
                                    fullWidth
                                    color="success"
                                    onClick={() => navigate("/edit-profile")}
                                >
                                    Edit Profile
                                </Button>

                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Profile;
