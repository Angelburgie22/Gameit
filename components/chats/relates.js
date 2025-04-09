import React, {useEffect, useState} from "react";
import axios from "axios";
import {Image, FlatList, Alert, View, Text, TextInput, Button, StyleSheet,TouchableOpacity,  TouchableWithoutFeedback} from 'react-native';
import Prueba, {relates} from "../../datos/Prueba";
import styles from "../../style/styles";
import styles from "../../style/styles";

const Relates = () => {

        return(
            <View>
                <View style = {{flexDirection: "row"}}>
                        <View style = {{paddingRight: 8}}>
                            <Image style = {styles.profileimage} source={{uri : "https://static.wikia.nocookie.net/pou/images/8/8d/Pou.png/revision/latest/thumbnail/width/360/height/360?cb=20220622133315"}}></Image>
                        </View>
                        <Image style = {styles.profileimage} source={{uri : "https://static.wikia.nocookie.net/pou/images/8/8d/Pou.png/revision/latest/thumbnail/width/360/height/360?cb=20220622133315"}}></Image>
                        <View>
                            <Text style = {styles.name}>Pedro</Text>
                            <Text style = {styles.textmsg}>Un uve?</Text>
                        </View>
                </View>
            </View>
        )
}




export default Relates