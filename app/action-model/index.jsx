import { View, Text, StyleSheet,Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import MedicationCardItem from '../../components/MedicationCardItem';
import AntDesign from '@expo/vector-icons/AntDesign';
import Colors from '../../constant/Colors';
import {doc,updateDoc} from 'firebase/firestore'
import { db } from '../../config/FirebaseConfig';
import moment from 'moment';

export default function MedicationActionModel() {
    const medicine = useLocalSearchParams();
    const router = useRouter()

    const updateActionStatus=async(status)=>{
      try {
        const docRef=doc(db,'medication',medicine?.docId);
        await updateDoc(docRef,{
          action:arrayUnion({
            status:status,
            time:moment().format('LT'),
            date:medicine?.selectedDate
          })
        })

        Alert.alert(status,'Response Saved!',[
          {
            text:'Ok',
            onPress:()=>router.replace('(tabs)')
          }
        ])
      } catch (e) {
        console.log(e)
      }
    }
  return (
    <View style={styles.container}>
       <Image source={require('./../../assets/images/notification.gif')}
          style={{
            width:120,
            height:120
          }}
       />
       <Text style={{fontSize:18}}>{medicine?.selectedDate}</Text>
       <Text style={{fontSize:30,fontWeight:'bold'}}>{medicine?.reminder}</Text>
       <Text style={{fontSize:18}}>It's time to take</Text>

       <MedicationCardItem medicine={medicine}/>

       <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.closebtn}
         onPress={()=>updateActionStatus('Missed')}
        >
        <AntDesign name="close" size={24} color="red" />
            <Text style={{
                fontSize:20,
                color:'red'
            }}>Missed</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.successbtn}
         onPress={()=>updateActionStatus('Taken')}
        >
        <AntDesign name="close" size={24} color="white" />
            <Text style={{
                fontSize:20,
                color:'white'
            }}>Taken</Text>
        </TouchableOpacity>
       </View>
       <TouchableOpacity 
         onPress={()=>router.back()}
       style={{
        position:'absolute',
        bottom:25
       }}>
       <Ionicons name="close-circle" size={44} color={Colors.GRAY} />
       </TouchableOpacity>
       
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    padding:25,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'white',
    height:'100%'
  },
  btnContainer:{
      flexDirection:'row',
      gap:10,
      marginTop:25
  },

  closebtn:{
    padding:10,
    flexDirection:'row',
    gap:6,
    borderWidth:1,
    alignItems:'center',
    borderColor:'red',
    borderRadius:10
  },
  successbtn:{
    padding:10,
    flexDirection:'row',
    gap:6,
    backgroundColor:Colors.GREEN,
    alignItems:'center',
    borderRadius:10
  }
    
})
