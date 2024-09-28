import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, ImageBackground } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

function formatDate(date: Date) {
    const day = String(date.getDate()).padStart(2, '0'); // Get the day and pad with leading zero if needed
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Get the month (0-indexed, so add 1) and pad with leading zero
    const year = date.getFullYear(); // Get the full year

    return `${day}/${month}/${year}`; // Return the formatted date
}

function UserInfoCards(props: any) {

    return (
        <View style={styles.infoCardsContainer}>
            <View style={styles.loginCon}>
                <Feather name="mail" size={18} color="#fff" />
                <Text style={styles.emailText}>
                    {props?.email}
                </Text>
            </View>
            <View style={styles.loginCon}>
                <Ionicons name="location-outline" size={18} color="#fff" />
                <Text style={styles.logintext}>
                    {props?.location}
                </Text>
            </View>
            <View style={styles.loginCon}>
                <MaterialCommunityIcons name="emoticon-dead-outline" size={18} color="#fff" />
                <Text style={styles.logintext}>
                    {formatDate(new Date(props?.date))}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    infoCardsContainer: {
        flexDirection: "column",
        width: "100%",
        gap: 10,
        padding: 16,
        backgroundColor: "rgba(108, 117, 125, 0.2)",
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "rgba(108, 117, 125, 0.9)",
        // backgroundColor: "red",
    },
    loginCon: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    emailText:{
        width: "100%",
        color: "rgb(245, 188, 57)",
        fontWeight: "500",
        fontSize: 20,
    },
    logintext:{
        width: "100%",
        color: "#fff",
        fontWeight: "500",
        fontSize: 20,
    },

});

export default UserInfoCards;
