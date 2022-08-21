import DogCard from "../dog-card/dog-card";
import { Section } from './styles'
function Dogs(props) {
    const { dogs } = props;
    return ( 
        <Section>
            {dogs && dogs.map((dog)=>(
                <div key={dog.id}>
                    <DogCard dog={dog} />
                </div>
                ))}
        </Section> 
    );
}

export default Dogs;