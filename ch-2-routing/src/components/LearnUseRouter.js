"use client";
import { useRouter } from "next/navigation";
const LearnUseRouter = () => {
  const router = useRouter();
  return (
    <div
      className="main"
      onClick={() => {
        router.push("/colorBox");
      }}
    >
      <h1>Click here to go to colorBox</h1>
    </div>
  );
};
export default LearnUseRouter;
