import Account from "../components/Account";
import Head from "next/head";

function Home(){
    return(
        <div>
        <Head>
          <title>Zoho Accounts</title>
        </Head>
        <Account />
       
      </div>
  
    )
}
export default Home;