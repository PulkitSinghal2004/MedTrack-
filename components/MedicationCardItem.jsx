import { View, Text,Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../constant/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function MedicationCardItem({medicine,selectedDate=''}) {
  console.log(medicine)
  const [status,setStatus] = useState();

  useEffect(()=>{
    CheckStatus();
  },[medicine])

  const CheckStatus=()=>{
      const data= medicine?.action?.find((item)=>item.date==selectedDate);
      console.log(data)
      setStatus(data);
  }

  return (
    <View style={styles?.container}>
        <View style={styles.subContainer}>
      <View style={styles.imageContainer}>
        <Image source={{uri:medicine?.type?.icon}}
          style={{
            width:60,
            height:60
          }}
        />
      </View>
      <View>
        <Text style={{fontSize:22,fontWeight:'bold'}}>{medicine?.name}</Text>
        <Text style={{fontSize:17}}>{medicine?.when}</Text>
        <Text style={{color:'white'}}>{medicine?.dose} {medicine?.type.name}</Text>
      </View>
      </View>

      <View style={styles.reminderContainer}>
      <Ionicons name="timer-outline" size={24} color="black" />
        <Text style={{fontWeight:'bold',fontSize:28}}>{medicine?.reminder}</Text>
      </View>

        { status?.date && <View style={styles.statusCantiner}>
            <Ionicons name="checkmark-circle" size={24} color={Colors.GREEN} />
          </View>}

    </View>


  )
}


const styles = StyleSheet.create({
    container:{
        padding:10,
        borderWidth:1,
        backgroundColor:Colors.LIGHT_GRAY_BORDER,
        marginTop:10,
        borderRadius:15,
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        alignItems:'center'

    },
   imageContainer:{
        padding:10,
        backgroundColor:'white',
        borderRadius:15,
        marginRight:15
   },
   subContainer:{
      flexDirection:'row',
      alignItems:'center'

   },
   reminderContainer:{
    padding:12,
    // backgroundColor:'white',
    borderRadius:15,
    alignItems:'center',
    borderBlockColor:Colors.LIGHT_GRAY_BORDER
   },
   statusCantiner:{
    position:'absolute',
    top:5,
    padding:7
   }
})
