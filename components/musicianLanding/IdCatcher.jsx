// pages/user/[id].js
import { useRouter } from "next/router";

const IdCatcher = () => {
  const router = useRouter();
  const { id } = router.query; // Aquí obtenemos el id del query param

  return id;
};

export default IdCatcher;
