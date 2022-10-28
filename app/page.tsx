import { NextPage } from "next";
import Heading from "../components/partials/Heading/Heading";

const RootPage: NextPage = () => {
  return (
    <>
      <Heading title="Top Page" />
      <p>トップページです</p>
    </>
  );
};

export default RootPage;
