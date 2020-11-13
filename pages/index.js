import Layout from './Layout';
import Contact from './Contact';

const Index = (props) => (
    <Layout>
    <div>
      <h1>Hello NAP</h1>
      <br></br>
      <Contact data={props.data}/>
    </div>
    </Layout>
);

Index.getInitialProps = async function(){
  const response = await fetch('https://reqres.in/api/users?page=2');
  const output = await response.json();
  console.log(output);
  return{
    data: output.data
  }
}

export default Index;

