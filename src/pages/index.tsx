import Interface from "@/components/Interface";
import PopUp from "@/components/PopUp";

const Home = () => {
  return (
    <main
      className={`relative flex min-h-screen bg-mainBackground font-ibmPlexMono`}
    >
      <PopUp></PopUp>
      <Interface />
    </main>
  );
};

export default Home;
