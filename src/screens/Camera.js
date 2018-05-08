import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import StatusBarComponent from '../components/StatusBarComponent';
import { Camera, Permissions } from "expo";
import Icon from 'react-native-vector-icons/FontAwesome';

class Cam extends React.Component {
    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
        autofocus: Camera.Constants.AutoFocus,
    };

    async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <StatusBarComponent />
                    <Camera style={{ flex: 1 }}
                            type={this.state.type}>
                        <View style={styles.backButton}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("home")}>
                                <Icon name="chevron-right"
                                      size={28}
                                      color="#fff"/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.captureView}>
                            <TouchableOpacity
                                style={styles.captureButton}>
                            </TouchableOpacity>
                        </View>
                    </Camera>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 100 + "%",
        width: 100 + "%",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backButton: {
        flex: 0.1,
        backgroundColor: 'transparent',
        flexDirection: "row",
        height: 30,
        alignSelf: "flex-end",
        margin: 20,
    },
    captureView: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: "column",
        height: 100,
        alignItems: "center",
        justifyContent: "flex-end"
    },
    captureButton: {
        backgroundColor: '#fff',
        height: 75,
        width: 75,
        alignSelf: "center",
        borderWidth: 5,
        borderColor: "#fc2d6b",
        borderRadius: 75/2,
        margin: 20,
    }
});

export default Cam;