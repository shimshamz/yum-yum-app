import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Favorites extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: "Favorites",
            headerTitleStyle: { fontSize: 18 },
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.item}>
                    <View style={styles.thumbNailContainer}>
                        <Image
                            style={styles.image}
                            source={{uri: "https://i.pinimg.com/originals/a1/17/bc/a117bc5fb40e42a8d18491123f22ae73.jpg"}}
                        />
                    </View>
                    <View style={styles.itemInfo}>
                        <Text style={styles.title}>McDonald's</Text>
                        <Text style={styles.type}>Fast Food</Text>
                    </View>
                    <View  style={styles.deleteContainer}>
                        <TouchableOpacity style={styles.deleteButton}>
                            <Icon
                                name="times-circle"
                                size={25}
                                color="#c60000"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.item}>
                    <View style={styles.thumbNailContainer}>
                        <Image
                            style={styles.image}
                            source={{uri: "https://media-cdn.tripadvisor.com/media/photo-s/0b/c1/72/68/front-view-of-restaurant.jpg"}}
                        />
                    </View>
                    <View style={styles.itemInfo}>
                        <Text style={styles.title}>Thai BBQ</Text>
                        <Text style={styles.type}>Thai</Text>
                    </View>
                    <View  style={styles.deleteContainer}>
                        <TouchableOpacity style={styles.deleteButton}>
                            <Icon
                                name="times-circle"
                                size={25}
                                color="#c60000"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 100 + "%",
        width: 100 + "%",
        backgroundColor: '#fff',
        alignItems: 'center',
        borderTopWidth: 2,
        borderTopColor: "#fc2d6b",
    },
    item: {
        flex: 0.2,
        flexDirection: "row",
        height: 20 + "%",
        width: 100 + "%",
        borderBottomWidth: 1,
        borderBottomColor: "#fc2d6b",
    },
    thumbNailContainer: {
        height: 100 + "%",
        aspectRatio: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: "#fc2d6b",
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    itemInfo: {
        flex: 0.7,
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
    },
    title: {
        fontFamily: "HelveticaNeue-Medium",
        fontSize: 22,
        marginTop: 32,
        marginLeft: 15,
    },
    type: {
        fontFamily: "HelveticaNeue-Medium",
        fontSize: 18,
        marginBottom: 32,
        marginLeft: 15,
    },
    deleteContainer: {
        flex: 0.3,
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "flex-start",
    },
    deleteButton: {
        margin: 12,
    },
});

export default Favorites;