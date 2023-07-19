import Ract from 'react';
import { Text, View } from 'react-native';
import Greeting from "./Greetings";

const LotsOfGreetings = () => {
    return (
            <View >
               <Greeting name='Rosa' />
               <Greeting name='Jaime' />
               <Greeting name='Valeria' />
            </View>
    )
};

export default LotsOfGreetings;
   