import { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import axiosInstance from "@/utils/axiosInstance";

interface EditProfileModalProps {
  open: boolean;
  onClose: () => void;
}

export default function EditProfileModal({ open, onClose }: EditProfileModalProps) {
  const [formData, setFormData] = useState({
    age: "",
    city: "",
    sex: "",
  });

  const iranProvinces = [
    // Most populous provinces first
    "تهران",
    "خراسان رضوی",
    "اصفهان",
    "فارس",
    // Rest in alphabetical order
    "آذربایجان شرقی",
    "آذربایجان غربی",
    "اردبیل",
    "البرز",
    "ایلام",
    "بوشهر",
    "چهارمحال و بختیاری",
    "خراسان جنوبی",
    "خراسان شمالی",
    "خوزستان",
    "زنجان",
    "سمنان",
    "سیستان و بلوچستان",
    "قزوین",
    "قم",
    "کردستان",
    "کرمان",
    "کرمانشاه",
    "کهگیلویه و بویراحمد",
    "گلستان",
    "گیلان",
    "لرستان",
    "مازندران",
    "مرکزی",
    "هرمزگان",
    "همدان",
    "یزد",
  ];

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

  const selectStyles = {
    ...inputStyles,
    "& .MuiSelect-icon": {
      left: 7,
      right: "auto",
    },
    "& .MuiSelect-select": {
      paddingLeft: "32px !important",
      paddingRight: "14px !important",
    },
  };

  const handleSubmit = async () => {
    try {
      await axiosInstance.post("/api/account/student-profile/", {
        age: Number(formData.age),
        city: formData.city,
        sex: formData.sex,
      });

      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <div className="animate-fadeIn">
        <DialogTitle className="text-right border-b pb-4">
          ویرایش پروفایل
        </DialogTitle>
        <DialogContent>
          <form className="flex flex-col gap-6 pt-6 pb-1">
            <TextField
              label="سن"
              type="number"
              value={formData.age}
              onChange={(e) =>
                setFormData({ ...formData, age: e.target.value })
              }
              fullWidth
              sx={inputStyles}
            />
            <FormControl fullWidth sx={selectStyles}>
              <InputLabel>استان</InputLabel>
              <Select
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
                label="استان"
              >
                {iranProvinces.map((province) => (
                  <MenuItem key={province} value={province}>
                    {province}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth sx={selectStyles}>
              <InputLabel>جنسیت</InputLabel>
              <Select
                value={formData.sex}
                onChange={(e) =>
                  setFormData({ ...formData, sex: e.target.value })
                }
                label="جنسیت"
              >
                <MenuItem value="Male">مرد</MenuItem>
                <MenuItem value="Female">زن</MenuItem>
              </Select>
            </FormControl>
            <div className="flex gap-3 justify-end mt-2 flex-row-reverse">
              <Button onClick={onClose} variant="outlined" className="px-6">
                انصراف
              </Button>
              <Button
                onClick={handleSubmit}
                variant="contained"
                className="bg-[#1A8BC4] hover:bg-[#1577A8] px-8"
              >
                ذخیره تغییرات
              </Button>
            </div>
          </form>
        </DialogContent>
      </div>
    </Dialog>
  );
}
