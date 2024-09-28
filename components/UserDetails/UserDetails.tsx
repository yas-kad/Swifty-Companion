import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, ImageBackground, ActivityIndicator } from "react-native";
import { getUserDetails } from "../../utils/getUsers";
import { useNavigation } from "@react-navigation/native";
import AntDesign from '@expo/vector-icons/AntDesign';
import UserProfil from "../profilCardComponents/UserProfil/UserProfil";
import UserCaract from "../profilCardComponents/UserCaract/UserCaract";
import UserInfoCards from "../profilCardComponents/UserInfoCards/UserInfoCards";
import UserLevel from "../profilCardComponents/UserLevel/UserLevel";
import Content from "../Content/Content";

function UserDetails({ route }: any) {
    const navigation = useNavigation<any>();

    const [userData, setUserData] = React.useState<any>();
    const [loading, setLoading] = React.useState<boolean>(true);

    useEffect(() => {
        getUserDetails(parseInt(route.params?.id) ?? null).then((data) => {
            setUserData(data)
            setLoading(false)
        }).catch((er) => {
            alert('Failed to get user details:')
            navigation.navigate('Home')
            setLoading(false)
        })
        return () => {
            setUserData(null)
        };
    }, [])

    return (
        <ImageBackground
            source={{ uri: 'https://cdn.intra.42.fr/coalition/cover/75/Freax_BG.jpg' }}
            style={styles.imageBg}
        >
            <View style={{
                height: 66,
            }}>
            </View>
            <ScrollView contentContainerStyle={styles.inner}>
                {loading ? (
                    <ActivityIndicator size="large" color="#fff" />
                ) : (
                    <View style={styles.userCardCon}>
                        <TouchableOpacity style={styles.linkContainer} onPress={() => navigation.navigate('Home')}>
                            <AntDesign name="left" size={24} color="#fff" />
                            <Text style={styles.link}>Back</Text>
                        </TouchableOpacity>
                        <UserProfil
                            displayname={userData?.displayname}
                            image={userData?.image}
                            location={userData?.location}
                        />
                        <UserCaract
                            login={userData?.login}
                            wallet={userData?.wallet}
                            correction_point={userData?.correction_point}
                            level={parseFloat(userData?.cursus_users[1]?.level)}
                        />
                        <UserInfoCards email={userData?.email} location={userData?.campus[0].city} date={userData?.data_erasure_date} />
                        <Content
                            projects={userData?.projects_users?.filter((item: any) => (item.marked === true && item.cursus_ids == 21))}
                            achievements={userData?.achievements}
                            skills={userData?.cursus_users[1].skills}
                        />
                    </View>
                )}
            </ScrollView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imageBg: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: "100%",
        height: "100%",
    },
    inner: {
        // backgroundColor:"red",
        // flex: 1,
        // flexDirection: "column",
        // alignItems: 'center',
        gap: 24,
        paddingHorizontal: 16,
        paddingVertical: 16,
        // overflow: "scroll",
        // paddingTop: 66,
        // marginTop: 66,
    },
    userCardCon: {
        width: "100%",
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 24
    },
    linkContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
    },
    link: {
        // color: "#0039e6",
        color: "#fff",
        fontWeight: "500",
        fontSize: 24,
        lineHeight: 27
    },
});

export default UserDetails;


