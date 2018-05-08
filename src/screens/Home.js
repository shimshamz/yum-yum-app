import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Home extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: "YumYum",
            headerTitleStyle: { fontSize: 25 },
            headerLeft: (<TouchableOpacity style={styles.icons} onPress={() => navigation.navigate("camera")}>
                            <Icon
                                name="camera"
                                size={25}
                                color="#333333"
                            /></TouchableOpacity>),
            headerRight: (<TouchableOpacity style={styles.icons} onPress={() => navigation.navigate("favorites")}>
                            <Icon
                                name="heart"
                                size={27}
                                color="#fb3958"
                            /></TouchableOpacity>),
            headerBackTitle: "Home"
        };
    };

    render() {
        return (
            <View style={{flex:1}}>
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.image}
                            source={{uri: "https://i.pinimg.com/originals/a1/17/bc/a117bc5fb40e42a8d18491123f22ae73.jpg"}}
                        />
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.title}>McDonald's</Text>
                        <Text style={styles.type}>Fast Food</Text>
                    </View>
                    <View style={styles.descContainer}>
                        <Text style={styles.desc}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam arcu eu justo tristique,
                            at mattis libero lacinia. Maecenas turpis justo, tincidunt nec sollicitudin a, porta nec est.
                            Pellentesque ac consequat mauris.
                        </Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttons}>
                            <Icon
                                name="times-circle"
                                size={85}
                                color="#ff3535"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttons}>
                            <Icon
                                name="check-circle"
                                size={85}
                                color="#5da515"
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
        flexDirection: "column",
        height: 100 + "%",
        width: 100 + "%",
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    icons: {
        marginHorizontal: 12,
    },
    imageContainer: {
        height: 46 + "%",
        width: 100 + "%",
        borderWidth: 2,
        borderColor: "#fc2d6b",
    },
    infoContainer: {
        flex: 0.7,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 10 + "%",
        width: 100 + "%",
        backgroundColor: '#828282',
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderBottomWidth: 2,
        borderColor: "#fc2d6b",
    },
    descContainer: {
        height: 28 + "%",
        width: 100 + "%",
        backgroundColor: '#aeaeae',
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderBottomWidth: 2,
        borderColor: "#fc2d6b",
        padding: 14,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        height: 16 + "%",
        width: 100 + "%",
        backgroundColor: '#eeeeee',
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    buttons: {
        alignItems: "center",
        height: 90 + "%",
        width: 80,
    },
    title: {
        fontFamily: "HelveticaNeue-Medium",
        fontSize: 32,
        marginHorizontal: 14,
    },
    type: {
        fontFamily: "HelveticaNeue-Medium",
        fontSize: 20,
        marginHorizontal: 25,
    },
    desc: {
        fontFamily: "HelveticaNeue-Light",
        fontSize: 18,
    }
});

export default Home;