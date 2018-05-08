import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import StatusBarComponent from '../components/StatusBarComponent'

class Login extends React.Component {
    render() {
        return (
            <View style={{flex:1}}>
                <StatusBarComponent />
                <View style={styles.container}>
                    <Text style={styles.heading}>YumYum</Text>
                    <TouchableOpacity style={styles.signInButton}
                                      onPress={() => {this.props.navigation.navigate("home")}}>
                        <Text style={{
                            fontSize: 25,
                            fontFamily: "HelveticaNeue-Medium",
                            color: "#fff"}}>Sign In</Text>
                    </TouchableOpacity>
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
        backgroundColor: '#fc2d6b',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontFamily: "HelveticaNeue-Medium",
        color: '#fff',
        fontSize: 70,
    },
    signInButton: {
        backgroundColor: '#000',
        borderRadius: 14,
        padding: 15,
        marginTop: 20,
    },
});

export default Login;