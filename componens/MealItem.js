import {View, Text, Image, Pressable, StyleSheet, Platform, ImageBackground} from "react-native";
import {useNavigation} from '@react-navigaton/native'
import MealDetails from "./MealDetails"
import { use } from "react"

function MealItem({id, title, imageUrl, duration, complexity, affordability }){
    console.log('title', title)
    console.log('imageUrl', imageUrl)

    const navigation = useNavigation()

    function selectMealItemHandler(){
        navigation.navigate('MealDetail', {mealId: id})
    }

    return(
    <View style={styles.MealItem}>
        <Pressable
             android_ripple={{color: '#cc'}}
             style={({ pressed}) => (pressed ? style.buttonPressed: null)}
             onPress={selectMealItemHandler}
             >
                <View>
                    <View>
                        <Image
                            source={{uri: imageUrl}}
                            style={style.image}
                        />
                        <text style={styles.image}>
                            {title}
                        </text>
                    </View>
                    <MealDetails
                         duration={duration}
                         complexity={complexity}
                         affordability={affordability}
                         />
                </View>
        </Pressable>   
     </View>
    )}

     export default MealItem

     const style = StyleSheet.create({
        MealItem: {
            margin: 16,
            boderRadius: 8,
            overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
            backgroundColor: 'white',
            elevation: 4,
            shadowColor: 'black',
            shadowOpacity: 0.25,
            shadowOffset: 'whit',
            elevation: 4,
            shadowColor: 'black',
            shadowOpacity: 0.25,
            shadowOffset: { width: 0, height: 2},
            shadowRadius: 8,
        },
        buttonPressed:{
            opacity: 0.5
        },
        innerContainer: {
            borderRadius: 8,
            overflow: 'hidden'
        },
        image: {
            width: '100%',
            height: 200
        },
        title: {
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 18,
            margin: 8
        },
        
     })
