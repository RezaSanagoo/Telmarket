"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { setCookie } from "cookies-next";
import axios from "axios";

import {
  Container,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";

const inputStyles = {
  "& .MuiOutlinedInput-root": {
    direction: "rtl",
    textAlign: "right",
  },
  "& .MuiInputLabel-root": {
    direction: "rtl",
    right: 25,
    left: "auto",
    transformOrigin: "top right",
    "&.Mui-focused": {
      right: 14,
      transform: "translate(0, -1.5px) scale(0.75)",
      top: -8
    },
  },
  "& .MuiInputLabel-shrink": {
    transform: "translate(0, -1.5px) scale(0.75)",
    right: 14,
    top: -8
  },
  "& .MuiOutlinedInput-notchedOutline": {
    textAlign: "right",
    direction: "rtl",
  },
  "& legend": {
    textAlign: "right",
    direction: "rtl",
  }
};

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      // Add interface for the API response
      interface LoginResponse {
        access: string;
        refresh: string;
      }

      // Update the axios call with proper typing
      const res = await axios.post<LoginResponse>(
        "https://alisadeqi.pythonanywhere.com/api/account/login/",
        { email, password },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      // Now we can access res.data.access
      setCookie("token", res.data.access, {
        maxAge: 60 * 60 * 24,
        path: "/",
      });
      router.push("/");

      // For the error handling, properly type the catch block
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          minHeight: "100dvh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlined />
          </Avatar>

          <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
            تل مارکت
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="ایمیل"
              name="email"
              autoComplete="email"
              autoFocus
              type="email"
              sx={inputStyles}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="رمز عبور"
              type="password"
              id="password"
              autoComplete="current-password"
              sx={inputStyles}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={loading}
            >
              {loading ? "در حال ورود..." : "ورود"}
            </Button>

            <Box sx={{ textAlign: "center", mt: 2 }}>
              <Typography variant="body2" display="inline" sx={{ ml: 1 }}>
                حساب کاربری ندارید؟
              </Typography>
              <Link href="/register" style={{ textDecoration: "none" }}>
                <Typography color="primary" variant="body2" display="inline">
                  ثبت نام
                </Typography>
              </Link>
            </Box>
          </Box>
        </Paper>
      </Box>

      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={() => setError("")}
      >
        <Alert severity="error" sx={{ width: "100%" }}>
          {error}
        </Alert>
      </Snackbar>
    </Container>
  );
}
