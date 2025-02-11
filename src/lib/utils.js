import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getFormData(form) {
  const formData = new FormData(form);
  const result = {};
  for (const [key, value] of formData.entries()) {
    result[key] = value;
  }
  return result;
}

export function validate(obj) {
  if (obj.username.trim() === "") {
    return {
      message: "Username kirit",
      target: "username",
    };
  }

  if (obj.email.trim() === "") {
    return {
      message: "Email kirit",
      target: "email",
    };
  }

  if (!obj.email.includes("@gmail.com")) {
    return {
      message: "@gmail.com bo'lish kerak tupoy",
      target: "email",
    };
  }

  if (obj.phone.trim() === "") {
    return {
      message: "Phone kirit",
      target: "phone",
    };
  }

  return null;
}
