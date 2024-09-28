import React from "react";
import { View, Text, StyleSheet} from "react-native";
import UserLevel from "../UserLevel/UserLevel";

function UserCaract(props: any) {
    return (
        <>
            <View style={styles.loginContainer}>
                <Text style={styles.subtext}>
                    {props?.login}
                </Text>
            </View>
            <UserLevel level={props.level} />
            <View style={styles.userCardInner}>
                <View style={styles.subtextCon}>
                    <Text style={styles.textIcon}>
                        ₳
                    </Text>
                    <Text style={styles.subtext}>
                        {props?.wallet}
                    </Text>
                </View>
                <View style={styles.subtextCon}>
                    <Text style={styles.textIcon}>
                        Ev.P
                    </Text>
                    <Text style={styles.subtext}>
                        {props?.correction_point}
                    </Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    loginContainer: {
        width: "100%",
    },
    userCardInner: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    subtextCon: {
        flexDirection: "row",
        gap: 10,
    },
    textIcon: {
        color: "#fff",
        fontWeight: "900",
        fontSize: 20,
    },
    subtext: {
        gap: 10,
        color: "#fff",
        fontWeight: "500",
        fontSize: 20,
    },

});

export default UserCaract;