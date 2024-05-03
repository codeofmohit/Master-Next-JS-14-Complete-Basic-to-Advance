import Image from "next/image";
import pic from "../../public/assets/img_1.png";

const LearnUseImages = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "90vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image src={pic} alt="random image" />
    </div>
  );
};
export default LearnUseImages;
