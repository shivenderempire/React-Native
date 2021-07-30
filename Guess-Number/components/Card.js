import React from 'react'
import { View, StyleSheet } from 'react-native'

const Card = (props) => {
    return (
        <View style={{...styles.card,...props.style}}>
            {props.children}
        </View>
    )
}


const styles  = StyleSheet.create({
    card: {
             //Iphone////
        shadowColor: "black",
        shadowOffset: { height: 2, width: 0 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        //Iphone////        
        //Android////
        elevation: 8,
        //Android////
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
    }
});
export default Card
