// Authentication API client.
// Signup and login are handled by the Node/Express backend.
// The client only stores the JWT session.

const SESSION_KEY = "codesprint:session";

// In development, Vite proxies /api to the backend.
// In production, VITE_API_URL should point to the deployed backend.
const API_BASE = import.meta.env.VITE_API_URL || "/api";

async function request(path, body) {
  let res;

  try {
    res = await fetch(`${API_BASE}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  } catch {
    return {
      ok: false,
      error:
        "Couldn't reach the server. Please try again.",
    };
  }

  let data;

  try {
    data = await res.json();
  } catch {
    data = {};
  }

  if (!res.ok) {
    return {
      ok: false,
      error: data.error || "Something went wrong.",
      ...data,
    };
  }

  return {
    ok: true,
    ...data,
  };
}

// --------------------------------------------------
// Session
// --------------------------------------------------

export function getSession() {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY));
  } catch {
    return null;
  }
}

function setSession({ token, email, name }) {
  try {
    localStorage.setItem(
      SESSION_KEY,
      JSON.stringify({
        token,
        email,
        name,
      })
    );
  } catch {
    // Ignore localStorage errors
  }
}

export function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}

// --------------------------------------------------
// Signup
// --------------------------------------------------

export async function signUp(name, email, password) {
  const res = await request("/signup", {
    name,
    email,
    password,
  });

  if (!res.ok) {
    return {
      ok: false,
      error: res.error,
    };
  }

  return {
    ok: true,
  };
}

// --------------------------------------------------
// Login
// --------------------------------------------------

export async function logIn(email, password) {
  const res = await request("/login", {
    email,
    password,
  });

  if (!res.ok) {
    return {
      ok: false,
      error: res.error,
    };
  }

  setSession({
    token: res.token,
    email: res.email,
    name: res.name,
  });

  return {
    ok: true,
  };
}

// --------------------------------------------------
// Logout
// --------------------------------------------------

export function logOut() {
  clearSession();
}