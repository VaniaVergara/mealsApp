
import {View, Text, StyleSheet} from 'react-native'

function MealDetails({duration,complexity, affordability}){
    return(

        <View style={Styles.details}>
            <Text style={Styles.detailItem}>{duration}</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={Styles.detailItem}>{affordability.toUpperCase()}</Text>
        </View>
    )

}

export default MealDetails

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12
    }
})
