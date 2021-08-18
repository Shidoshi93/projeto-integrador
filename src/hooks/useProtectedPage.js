import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const useProtectedPage = () => {
  const history = useHistory();

  useEffect(() => {
    
    const token = localStorage.getItem("token");

    if (!token) {
      history.goBack()
      alert("Você não pode acessar esta página, verifique se está logado.")
    }
  }, [history]);
};