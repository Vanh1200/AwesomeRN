import React from 'react'
import {
    StyleSheet,
    Image,
    Text,
    View,
} from 'react-native'
import SkiteImage from '../assets/ice-skate.png'

export default function CategoryListItem(props) {
    const {category} = props;
    return (
        <View style={styles.container}>
            <Text style={styles.categoryTitle}>{category.name}</Text>
            <Image style={styles.categoryImage} source={SkiteImage} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        shadowColor: '#000',
        backgroundColor: '#fff',
        padding: 16,
        elevation: 3,
        borderRadius: 8,
        shadowRadius: 20,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.3,
        marginBottom: 16
    },
    categoryImage: {
        width: 64,
        height: 64
    },
    categoryTitle: {
        textTransform: 'uppercase',
        textAlign: 'center',
        marginBottom: 8,
        color: "#000",
        fontWeight: '700'
    }
});