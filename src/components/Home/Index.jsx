// import Header from "./Header";
import { useEffect, useState } from "react";
import Loading from "../../Loading";
import Hero from "./Hero";


const Index = () => {
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (

    <div>
      {/* <Header/> */}
      <Hero/>
    </div>
  );
}

export default Index
