export const validateEmail = (value: string): string => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(value)) {
    return "Please enter a valid email address.";
  }
  return "";
};

export const validatePassword = (value: string): string => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!$%@]).{6,}$/;
  if (!regex.test(value)) {
    return "Password must be at least 6 characters, include uppercase, lowercase, and at least one special symbol (!, $, %, @).";
  }
  return "";
};
