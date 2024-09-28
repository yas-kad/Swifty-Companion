import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";


function UserProfil(props: any) {
    return (
        <>
            <View style={styles.userLocationCon}>
                <Text style={styles.locationTitle}>
                    {props?.location ?? "unavailable"}
                </Text>
            </View>
            <Image
                source={{ uri: props?.image?.link != null ? props?.image.link : "https://profile.intra.42.fr/assets/42_logo-7dfc9110a5319a308863b96bda33cea995046d1731cebb735e41b16255106c12.svg" }}
                style={styles.image}
            />
            <Text style={styles.nameTitle}>
                {props?.displayname}
            </Text>
        </>
    )
}

const styles = StyleSheet.create({
    userLocationCon: {
        gap: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: "rgba(52, 52, 52, 0.7)",
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "rgba(108, 117, 125, 0.8)",
    },
    locationTitle: {
        color: "#fff",
        fontWeight: "500",
        fontSize: 20,
    },

    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },

    nameTitle: {
        color: "#fff",
        fontWeight: "600",
        fontSize: 30,
    },
});

export default UserProfil;


