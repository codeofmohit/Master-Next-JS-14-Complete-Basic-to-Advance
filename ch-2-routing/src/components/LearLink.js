import Link from "next/link";

const LearLink = () => {
  const id = 53;

  return (
    <>
      <Link href="/admin/adminuser">Go to admin user dashboard</Link>
      <br />
      <Link href={`/users/profile/${id}`}>Go to user with id : {id}</Link>
    </>
  );
};
export default LearLink;
