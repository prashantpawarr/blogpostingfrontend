export async function UserSignup(formData) {
  const response = await fetch("http://localhost:3001/user/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  return response;
}

export async function UserLogin(formData) {
  const response = await fetch("http://localhost:3001/user/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  return response;
}

export async function AdminLogin(formData) {
  const response = await fetch("http://localhost:3001/admin/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  return response;
}
