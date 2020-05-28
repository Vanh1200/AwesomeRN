import React from 'react'
import {
    StyleSheet,
    Image,
    Text,
    View,
} from 'react-native'
import SkiteImage from '../assets/ice-skate.png'

export default function CategoryListItem(props) {
    return (
        <View>
            <Text style={styles.categoryTitle}>Mollit consequat culpa non veniam officia dolor labore.</Text>
            <Image style={styles.categoryImage} source={SkiteImage} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    categoryImage: {
        width: 120,
        height: 64
    },
    categoryTitle: {
        color: "#000",
        fontSize: 30,
        fontWeight: "bold"
    }
});