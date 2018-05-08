import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Constants } from 'expo';

class StatusBarComponent extends React.Component {
    render() {
        return (
            <View style={styles.statusBar} />
        );
    }
}

const styles = StyleSheet.create({
    statusBar: {
        backgroundColor: "#fc2d6b",
        height: Constants.statusBarHeight,
    },
});

export default StatusBarComponent;