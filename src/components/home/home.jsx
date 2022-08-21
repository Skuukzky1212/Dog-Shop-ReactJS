import { Header } from "./styles"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog } from '@fortawesome/free-solid-svg-icons'
function Home() {
    return ( 
        <Header>
            <FontAwesomeIcon icon={faDog}/>
            Welcome to my pet shop 
            <FontAwesomeIcon icon={faDog}/>
        </Header> 
    );
}

export default Home;