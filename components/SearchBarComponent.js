import { View, TextInput, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';

import Colors from '../theme/Colors';

const SearchBarComponent = () => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Burcar por algo...'
                placeholderTextColor={Colors.grayTextColor}
                style={styles.searchBarStyles}
            />
            <TouchableOpacity></TouchableOpacity>
        </View>
    )
}
export default SearchBarComponent;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    searchBarStyles: {
        width: windowWidth * 0.9,
        height: windowHeight * 0.07,
        marginVertical: windowHeight * 0.02,
        paddingHorizontal: windowWidth * 0.03,
        backgroundColor: Colors.white,
        borderRadius: 10,
    },
});