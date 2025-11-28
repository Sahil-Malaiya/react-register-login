import React, { useState } from "react";
import { Card, CardContent, Typography, TextField, Button, Grid, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function EditProfile({ darkMode }) {
  const navigate = useNavigate();
  const savedUser = JSON.parse(localStorage.getItem("userData"));

  const [user, setUser] = useState(savedUser);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem("userData", JSON.stringify(user));
    alert("Profile Updated Successfully!");
    navigate("/profile");
  };

  const cardClass = darkMode ? "card-dark" : "card-light";

  return (
    <Box sx={{ padding: "50px 0" }}>
      <Typography variant="h4" align="center" sx={{ fontWeight: 600, mb: 4 }}>
        Edit Profile ✍️
      </Typography>

      <Grid container justifyContent="center">
        <Grid item xs={12} md={5}>
          <Card
            className={cardClass}
            elevation={6}
            sx={{ padding: "30px", borderRadius: "12px" }}
          >
            <CardContent>
              <TextField label="Name" fullWidth name="name" value={user.name} onChange={handleChange} sx={{ mb: 2 }} />
              <TextField label="Email" fullWidth name="email" value={user.email} onChange={handleChange} sx={{ mb: 2 }} />
              <TextField label="Phone" fullWidth name="phone" value={user.phone} onChange={handleChange} sx={{ mb: 2 }} />
              <TextField label="Address" fullWidth name="address" value={user.address} onChange={handleChange} sx={{ mb: 2 }} />
              <TextField label="City" fullWidth name="city" value={user.city} onChange={handleChange} sx={{ mb: 3 }} />

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Button fullWidth variant="contained" color="primary" onClick={handleSave}>
                    Save
                  </Button>
                </Grid>

                <Grid item xs={6}>
                  <Button fullWidth variant="outlined" color="error" onClick={() => navigate("/profile")}>
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default EditProfile;
