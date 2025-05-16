import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import ResultC from '../components/results/Community';
import GroupSearch from '../components/groups/groupsearch';

const Results = () => {
    const [searchText, setSearchText] = useState('');

    return (
        <View style={{ backgroundColor: "#121212", flex: 1, paddingBottom: 60 }}>
            <FlatList
                ListHeaderComponent={
                    <>
                        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                            <TextInput
                                style={styles.input}
                                color="white"
                                placeholder="Buscar"
                                placeholderTextColor="#999999"
                                value={searchText}
                                onChangeText={setSearchText}
                            />
                            <TouchableOpacity style={styles.Buttons} onPress={() => console.log("Buscar presionado")}>
                                <Text style={styles.Text}>Buscar</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>Comunidades</Text>
                        </View>
                        <ResultC searchText={searchText} />

                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>Grupos de juego</Text>
                        </View>
                    </>
                }
                data={[{ key: 'dummy' }]} // Dummy item para que funcione FlatList como contenedor
                renderItem={() => (
                    <GroupSearch searchText={searchText} />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: "75%",
        padding: 5,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
        marginTop: "3%",
    },
    Buttons: {
        backgroundColor: "#34C759",
        borderRadius: 10,
        width: "20%",
        height: 40,
        marginTop: "3%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    Text: {
        color: '#fff',
        borderColor: "black",
        textAlign: "center",
        padding: 10,
    }
});

export default Results;
