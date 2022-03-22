import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, ScrollView , } from 'react-native'
import React, { useState } from 'react'

const Todo = () => {

    const [items, Setitems] = useState("");

    const [additems, Setadditems] = useState([])

    //to add items in list
    const addNote = () => { 
        if(items.length!==0){
        Setadditems((oldItems)=>{
            return [...oldItems,items]
        })
        }else{
            alert('plz add items')
        }
        Setitems("")
    }

    //to delete the items from list
const deleteNote=(index)=>{

    Setadditems((oldItems)=>{
        return oldItems.filter((elem,id)=>{
            return  id !==index
        })
    })
}

    return ( 
        <ScrollView>
        <View style={styles.mainContainer} >
            <Text style={styles.mainText}>Todo List</Text>
            <Text style={styles.nameText}>By - Ankit Singh Thakur</Text>
            <View style={styles.inputContainer} >
                <TextInput style={styles.input}
                    placeholder={"add items"}
                    value={items}
                    onChangeText={(data) => Setitems(data)}
                />
                <TouchableOpacity style={styles.inputbtn} onPress={addNote} >
                    <Text style={styles.inputText}>+</Text>
                </TouchableOpacity>
            </View>


            <View style={styles.listConatiner} > 
                {additems.map((item, index) => 
                <View style={styles.listTextConatiner}  key={index}>
                 <Text style={styles.listItems} >{item} </Text> 
                 <TouchableOpacity style={styles.deletebtn} onPress={()=>{
                     deleteNote(index)
                 }} >
                    <Text style={styles.inputText}>-</Text>
                </TouchableOpacity>
                 </View>
                 )}
            </View>
         
        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    mainContainer: {
        margin: 10,
        marginTop: 50,
        
    },
    mainText: {
        textAlign: "center",
        fontSize: 52,
        fontWeight: "bold",
        color: "white",
        textTransform:"uppercase",
        letterSpacing:2,
        backgroundColor:"purple",
        marginTop:20,
        borderRadius:8,
    },
    nameText: {
        marginTop:10,
        textAlign: "center",
        fontSize: 14,
        fontWeight: "bold",
        color: "violet",
        letterSpacing:1.5,
    },
    inputContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 44,
    },
    input: {
        borderBottomWidth:2,
        borderRadius: 5,
        width: 220,
        height: 30,
        textAlign: "center",
        color:"black",
        borderColor:"navy"

    },
    inputbtn: {
        marginLeft: 17,
        height: 40,
        width: 40,
        backgroundColor: "green",
        borderRadius: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        

    },
    deletebtn: {
        marginLeft: 17,
        height: 30,
        width: 30,
        backgroundColor: "red",
        borderRadius: 15,
        marginVertical:10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    },
    inputText: {
        color: "white",
        textAlign: "center",
        fontSize: 22,
        fontWeight: "bold",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    listConatiner:{
        textAlign:"center",
        marginVertical:30,
    },
    listItems:{
        fontSize:22,
        color:"purple",
        fontWeight:"bold",
        marginVertical:8,
        

    },
    listTextConatiner:{
        display:"flex",
        flexDirection:"row",
justifyContent:"center",
       
    }

})
export default Todo

