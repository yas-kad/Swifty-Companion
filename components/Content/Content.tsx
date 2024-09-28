import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Button, ImageBackground } from "react-native";


function Content({ projects, achievements, skills }: { projects: [], achievements: any[], skills: any[] }) {
    const [content, setContent] = React.useState("Projects");
    return (
        <View style={styles.container}>
            <View style={styles.btnsList}>
                <TouchableOpacity style={[styles.btnContainer, { opacity: content === "Projects" ? 1 : 0.5 }]} onPress={() => setContent("Projects")}>
                    <Text style={styles.buttonText}>Projects</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btnContainer, { opacity: content === "Achievements" ? 1 : 0.5 }]} onPress={() => setContent("Achievements")}>
                    <Text style={styles.buttonText}>Achievements</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btnContainer, { opacity: content === "Skills" ? 1 : 0.5 }]} onPress={() => setContent("Skills")}>
                    <Text style={styles.buttonText}>Skills</Text>
                </TouchableOpacity>
            </View>


            <View style={styles.contentList}>
                {content === "Projects" && (
                    <>
                        <View style={styles.titleCon}>
                            <Text
                                style={styles.ListTitle}
                                numberOfLines={2}
                                ellipsizeMode="tail"
                            >Projects</Text>
                        </View>
                        {projects?.length > 0 ? projects?.map((project: any, key: number) => (
                            <View key={key} style={styles.listItem}>
                                <Text style={styles.projectName}>{project.project.name}</Text>
                                <Text style={styles.status}>
                                    {project.final_mark}
                                </Text>


                            </View>
                        )) : (
                            <Text>No projects</Text>
                        )}
                    </>
                )}
                {content === "Achievements" && (
                    <>
                        <View style={styles.titleCon}>
                            <Text style={styles.ListTitle}>Achievements</Text>
                        </View>
                        {achievements?.length > 0 ? achievements?.map((item: any, key: number) => (
                            <View key={key} style={styles.achievementsList}>
                                <Text
                                    style={styles.achievementTitle}
                                    ellipsizeMode="tail"
                                >
                                    {item.name}
                                </Text>
                                <Text style={styles.desc}
                                    numberOfLines={2}
                                    ellipsizeMode="tail"
                                >
                                    {item.description}
                                </Text>

                            </View>
                        )) : (
                            <Text>No Achievements</Text>
                        )}
                    </>
                )}
                {content === "Skills" && (
                    <>
                        <View style={styles.titleCon}>
                            <Text style={styles.ListTitle}>Skills</Text>
                        </View>
                        {skills?.length > 0 ? skills?.map((item: any, key: number) => (
                            <View key={key} style={styles.listItem}>
                                <Text
                                    style={styles.achievementTitle}
                                    numberOfLines={2}
                                    ellipsizeMode="tail"
                                >{item.name}</Text>

                                <Text style={styles.status}>
                                    {item.level?.toFixed(2)}%l
                                </Text>

                            </View>
                        )) : (
                            <Text>No Skills</Text>
                        )}
                    </>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        gap: 8
    },
    btnsList: {
        width: "100%",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        // gap: 10,
    },
    btnContainer: {
        width: "auto",
        backgroundColor: 'rgb(245, 188, 57)',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 18,
        paddingVertical: 8,
        borderRadius: 5
    },
    buttonText: {
        color: "#fff",
        fontWeight: "600",
        fontSize: 20,
        lineHeight: 27
    },


    contentList: {
        width: "100%",
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 24,
        borderRadius: 10,
        margin: 16,
        paddingVertical: 16,
    },

    titleCon: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#000",
    },
    ListTitle: {
        // color: "#000",
        color: "rgb(42 42 42)",
        fontWeight: "800",
        fontSize: 24,
        lineHeight: 27,
    },

    // ####### projects ########
    listItem: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        gap: 10,
    },
    projectName: {
        color: "hsl(180.6, 100%, 36.9%)",
        fontWeight: "600",
        fontSize: 18,
        lineHeight: 27,
        flex: 1,
        flexWrap: "wrap",
    },
    status: {
        color: "rgb(34 197 94)",
        fontWeight: "600",
        fontSize: 18,
        lineHeight: 27
    },

    // ####### achievements ########
    achievementsList: {
        width: "100%",
        flexDirection: "column",
        // alignItems: "center",
        paddingHorizontal: 16,
    },
    achievementTitle: {
        color: "rgb(42 42 42)",
        fontWeight: "700",
        fontSize: 18,
        flex: 1,
        flexWrap: "wrap",
    },
    desc: {
        flex: 1,
        flexWrap: "wrap",
        color: "#999",
        fontWeight: "400",
        fontSize: 12,
    },

    // ####### skills ########

});

export default Content;