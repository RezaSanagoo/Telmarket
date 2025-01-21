import { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

interface EditProfileModalProps {
  open: boolean;
  onClose: () => void;
}

export default function EditProfileModal({
  open,
  onClose,
}: EditProfileModalProps) {
  const [formData, setFormData] = useState({
    name: "رضا ثناگو",
    email: "Rezasa***@gmail.com",
    phone: "",
  });

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

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <div className="animate-fadeIn">
        <div className="animate-slideUp">
          <DialogTitle className="text-right border-b pb-4">
            ویرایش پروفایل
          </DialogTitle>
          <DialogContent>
            <form className="flex flex-col gap-6 py-6">
              <TextField
                label="نام و نام خانوادگی"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                fullWidth
                sx={inputStyles}
              />
              <TextField
                label="ایمیل"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                fullWidth
                sx={inputStyles}
              />
              <TextField
                label="شماره تماس"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                fullWidth
                sx={inputStyles}
              />
              <div className="flex gap-3 justify-end mt-2">
                <Button onClick={onClose} variant="outlined" className="px-6">
                  انصراف
                </Button>
                <Button
                  variant="contained"
                  className="bg-[#1A8BC4] hover:bg-[#1577A8] px-8"
                >
                  ذخیره تغییرات
                </Button>
              </div>
            </form>
          </DialogContent>
        </div>
      </div>
    </Dialog>
  );
}
