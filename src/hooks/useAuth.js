import { useCallback, useState } from "react";
import * as authStore from "../lib/authStore";

export function useAuth() {
  const [session, setSessionState] = useState(authStore.getSession());

  const refresh = useCallback(() => setSessionState(authStore.getSession()), []);

  const signUp = useCallback((name, email, password) => authStore.signUp(name, email, password), []);
  const resendOtp = useCallback((email) => authStore.resendOtp(email), []);

  const verifyOtp = useCallback(async (email, code) => {
    const res = await authStore.verifyOtp(email, code);
    if (res.ok) refresh();
    return res;
  }, [refresh]);

  const logIn = useCallback(async (email, password) => {
    const res = await authStore.logIn(email, password);
    if (res.ok) refresh();
    return res;
  }, [refresh]);

  const logOut = useCallback(() => {
    authStore.logOut();
    refresh();
  }, [refresh]);

  return { session, user: session?.email || null, name: session?.name || null, signUp, resendOtp, verifyOtp, logIn, logOut };
}
