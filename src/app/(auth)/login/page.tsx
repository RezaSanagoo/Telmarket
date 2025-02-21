"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from 'axios';



import Image from "next/image";
import axiosInstance from '@/utils/axiosInstance';

import logo from "../../../../public/img/LogoT.png";

import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";

const inputStyles = {
  "& .MuiOutlinedInput-root": {
    direction: "rtl",
    textAlign: "right",
    borderradius: "16px",
  },
  "& .MuiInputLabel-root": {
    direction: "rtl",
    right: 25,
    left: "auto",
    transformOrigin: "top right",
    "&.Mui-focused": {
      right: 14,
      transform: "translate(0, -1.5px) scale(0.75)",
      top: -8,
    },
  },
  "& .MuiInputLabel-shrink": {
    transform: "translate(0, -1.5px) scale(0.75)",
    right: 14,
    top: -8,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    textAlign: "right",
    direction: "rtl",
  },
  "& legend": {
    textAlign: "right",
    direction: "rtl",
  },
};

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const loginData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const res = await axiosInstance.post(
        "/api/account/login/",
        loginData
      );

      localStorage.setItem("token", JSON.stringify(res.data));
      localStorage.setItem("userEmail", loginData.email as string);
      router.push("/");
    } catch (err: unknown) {
      if (err && typeof err === 'object' && 'response' in err) {
        const axiosError = err as { response?: { data?: { message?: string } } };
        setError(axiosError.response?.data?.message || "خطا در ورود");
      } else {
        setError("خطای غیرمنتظره");
      }
    } finally {
      setLoading(false);
    }
  };


  return (
    <Container component="main">
      <Box
        sx={{
          minHeight: "40dvh",
          display: "flex",
          alignItems: "center",
          position: "absolute",
          justifyContent: "center",
          backgroundImage: "url('./Tide.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          left: 0,
          top: 0,
          borderBottomLeftRadius: "20vw",
        }}
      >
        <Image
          src={logo.src}
          alt="MojLogo"
          width={206} // Adjust based on your logo's dimensions
          height={206} // Adjust based on your logo's dimensions
          className="p-1"
          priority
          style={{
            filter:
              "brightness(0) invert(1) drop-shadow(2px 2px 2px #00000088)",
            width: "25vh",
            height: "25vh",
          }}
        />
      </Box>

      <Box
        sx={{
          minHeight: "60dvh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "400px",
          margin: "0 auto",
          marginTop: "40vh",
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 1 }}
          className="flex flex-col justify-center items-center w-full"
        >
          <h2 className="text-2xl font-extrabold mb-4 text-[#4190FF]">
            ورود به حساب مــوجــــ
          </h2>
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
            sx={{
              ...inputStyles,
              "& .MuiOutlinedInput-root": {
                ...inputStyles["& .MuiOutlinedInput-root"],
                borderRadius: "12 px",
              },
            }}
            className="font-bold rounded-xl"
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="رمز عبور"
            type={showPassword ? "text" : "password"}
            id="password"
            autoComplete="current-password"
            InputProps={{
              endAdornment: (
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
            }}
            sx={inputStyles}
            className="font-bold rounded-xl"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={loading}
            className="bg-[#4190FF] h-12 text-base font-bold mt-4 rounded-xl"
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
