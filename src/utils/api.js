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
  try {
    const response = await fetch("http://localhost:3001/user/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log(data.avatar);

    if (response.ok && data.token) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", formData.username);
      localStorage.setItem("avatar", data.avatar);
      return { success: true, token: data.token };
    } else {
      return { success: false, message: data.message || "Login Failed" };
    }
  } catch (err) {
    console.error("Error during login:", err);
    return { success: false, message: "Something went wrong" };
  }
}

export async function AdminLogin(formData) {
  try {
    const response = await fetch("http://localhost:3001/admin/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok && data.token) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("admin", formData.username);
      return { success: true, token: data.token };
    } else {
      return { success: false, message: data.message || "Login Failed" };
    }
  } catch (err) {
    console.error("Error during login:", err);
    return { success: false, message: "Something went wrong" };
  }
}

export async function SubmitBlog(formData) {
  const token = localStorage.getItem("token");

  const response = await fetch("http://localhost:3001/user/blogs", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  return response;
}

export async function GetAllBlogs() {
  const response = await fetch("http://localhost:3001/allblogs");
  const blogsData = await response.json();
  return blogsData.approvedBlogs;
}
