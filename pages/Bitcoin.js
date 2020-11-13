import Layout from "./Layout";
import Rate from "./Rate";

const Bitcoin = (props) => (
    <Layout>
        <div>
            <h1>BitCoin Rate</h1>
            <p>Checking</p>
            <Rate bpi={props.bpi}/>
        </div>

    </Layout>
);

Bitcoin.getInitialProps = async function(){
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();
    console.log(data);
    return{
        bpi: data.bpi
    }
       
}

export default Bitcoin;