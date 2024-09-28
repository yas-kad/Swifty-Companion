import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, ImageBackground } from "react-native";

function UserLevel({ level }: { level: number }) {
    const levelPercentage = (level / 21) * 100;
    return (
        <View style={styles.progressBarBackground}>
            <View
                style={[
                    styles.progressBarFill,
                    { width: `${levelPercentage}%` },
                ]}
            />
            <Text style={styles.title}>level {level}%</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    progressBarBackground: {
        width: '100%',
        height: 40,
        backgroundColor: 'rgba(51, 51, 51, 0.9)',
        borderRadius: 5,
        position: 'relative',
        justifyContent: 'center',
    },
    progressBarFill: {
        height: '100%',
        backgroundColor: 'rgb(245, 188, 57)',
        borderRadius: 5,
    },
    title: {
        color: "#fff",
        fontWeight: "500",
        fontSize: 20,
        position: 'absolute',
        left: '50%',
        transform: [{ translateX: -50 }]
    },
});

export default UserLevel;
