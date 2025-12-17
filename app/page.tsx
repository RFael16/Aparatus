import Image from "next/image";
import Header from "./_components/header";
import SearchInput from "./_components/search-input";
import banner from "../public/banner.png";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="space-y-4 px-5">
        <SearchInput />
        <Image
          src="/baner.png"
          alt="Agende agora/"
          sizes="100vw"
          className="h-auto w-auto"
        />
      </div>
    </div>
  );
};

export default Home;
