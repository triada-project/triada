// pages/user/[id].js
import { useRouter } from "next/router";

const IdCatcher = () => {
  const router = useRouter();
  const { id } = router.query; // Aquí obtenemos el id del query param

  return (
    <div>
      <h1>User ID: {id}</h1>
    </div>
  );
};

export default IdCatcher;
