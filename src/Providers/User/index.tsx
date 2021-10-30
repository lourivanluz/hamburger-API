import { createContext, ReactNode, useContext, useState } from "react";
import { useHistory } from "react-router";
import { api } from "../../Server/api";

interface UserProviderProps {
  children: ReactNode;
}

interface user {
  email: string;
  password: string;
  name?: string;
}

interface UserContextData {
  auth: string;
  userName: string;
  registry: (data: user) => void;
  login: ({ email, password }: user) => void;
  logout: () => void;
}

export const UserContext = createContext<UserContextData>(
  {} as UserContextData
);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [auth, setAuth] = useState(localStorage.getItem("@tokenKH") || "");
  const [userName, setUserName] = useState("");

  const history = useHistory();

  const registry = (data: user) => {
    api
      .post("/register", data)
      .then((response) => login(data))
      .catch((err) => console.log("nao registrado"));
  };

  const login = ({ email, password }: user) => {
    const newUser = {
      email,
      password,
    };
    api
      .post("/login", newUser)
      .then((response) => {
        setAuth(response.data.accessToken);
        localStorage.setItem("@tokenKH", response.data.accessToken);
        setUserName(response.data.user.name);
        history.push("/");
      })
      .catch((err) => console.log("nao logado"));
  };

  const logout = () => {
    setAuth("");
    localStorage.removeItem("@tokenKH");
  };

  return (
    <UserContext.Provider value={{ auth, userName, login, logout, registry }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
