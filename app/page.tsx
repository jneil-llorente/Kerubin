import Hero from "./hero";
import Navbar from "./navbar";
import { Portfolio } from "./portfolio";
import Trusted from "./trusted";

const Home = () => {
  return ( 
    <div>
      <Navbar/>
      <Hero/>
      <Trusted/>
      <Portfolio/>
    </div>
   );
}
 
export default Home;