import jwtDecode from "jwt-decode";
import useTokenStore from "@/stores/tokenStore";
const tokenObject = useTokenStore((state) => state.tokenObject);
useEffect(() => {
  const tokenFromLocalStorage = localStorage.getItem("token");
  if (tokenFromLocalStorage) {
    const [encodedHeader, encodedPayload, encodedSignature] =
      tokenFromLocalStorage.split(".");
    const decodedPayload = atob(encodedPayload);
    const payloadObject = JSON.parse(decodedPayload);
    useTokenStore.setState({ tokenObject: payloadObject });
  }
}, []);

export default IdToken;
