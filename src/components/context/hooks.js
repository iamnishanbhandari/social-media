import { useState } from "react";
import { useEffect } from "react";

export default function useAuthState(auth) {
  const [user, setUser] = useState(() => auth.Currentuser);
  const [initializing, setInitiliazing] = useState(true);

  useEffect(() => {
    const subscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
      if (initializing) {
        setInitiliazing(false);
      }
    });
    return subscribe;
  }, [auth, initializing]);
  return { user, initializing };
}
