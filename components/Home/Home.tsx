import React, { useCallback, useContext } from "react";
import { StyleSheet, TouchableOpacity, Text, View, TextInput, ImageBackground, Image, ScrollView, ActivityIndicator } from "react-native";
import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { getUsers } from "../../utils/getUsers";
import { debounce } from "lodash";
import { SvgUri } from "react-native-svg";


function Home() {
    const navigation = useNavigation<any>();
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState("");
    const [users, setUsers] = useState([]);

    const debouncedResults = useCallback(
        debounce(async (value: any) => {
            if (value === "") {
                setUsers([]);
                setLoading(false);
                return
            }
            await getUsers(value).then((data: any) => {
                setUsers(data);
                setLoading(false);
            }).catch((er) => {
                setLoading(false);
                alert('Failed to get users:')
            });
        }, 500),
        []
    );
    const onSearch = async (inputValue: any) => {
        setValue(inputValue);
        setLoading(true);
        debouncedResults(inputValue);
    }




    return (
        <ImageBackground
            source={{ uri: 'https://auth.42.fr/auth/resources/yyzrk/login/students/img/bkgrnd.jpg' }}
            style={styles.container}
        >
            <SvgUri
                // uri='/Users/yassin/Desktop/swifty_companion/assets/schoolIcon.svg'
                uri='https://auth.42.fr/auth/resources/yyzrk/login/students/img/42_logo.svg'
                width={150}
                height={150}
            />

            <View style={styles.inner}>
                <TextInput
                    style={styles.input}
                    placeholder="insert login..."
                    placeholderTextColor={'#fff'}
                    value={value}
                    onChangeText={(text) => onSearch(text)}
                />
                {loading ?
                    (
                        <ActivityIndicator size="large" color="#fff" />
                    )
                    : users?.length > 0 ? (
                        <View style={styles.listsContainer}>
                            <ScrollView contentContainerStyle={styles.searchList}>
                                {users?.map((user: any, key: number) => {
                                    return (
                                        <TouchableOpacity key={key} style={styles.link} onPress={() => navigation.navigate('users', { id: user.id })}>
                                            <Text>{user.login}</Text>
                                        </TouchableOpacity>
                                    )
                                })}
                            </ScrollView>
                        </View>
                    ) : value != "" ? (
                        <View style={styles.listsContainer}>
                            <View style={styles.searchList}>
                                <Text style={styles.error}>user not found !!</Text>
                            </View>
                        </View>
                    ) : null}
            </View>
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "flex-start",
        paddingTop: 66,
        width: "100%",
        position: "relative",
    },
    inner: {
        width: "100%",
        alignItems: "center",
        height: "100%",
    },
    input: {
        height: 40,
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 20,
        color: '#fff',
        borderRadius: 5,
    },
    listsContainer: {
        width: '80%',
        height: "70%",
    },
    searchList: {
        backgroundColor: '#f2f2f2',
        borderRadius: 5,
        paddingTop: 10,
    },
    link: {
        paddingHorizontal: 16,
        marginBottom: 10,
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    error: {
        color: 'red',
        paddingHorizontal: 16,
        marginBottom: 10,
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    button: {
        backgroundColor: 'green',
        color: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: "800",
        fontSize: 18
    }
})
export default Home;
