import { View, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';

import Colors from '../theme/Colors';

const HeaderComponent = () => {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity>

            </TouchableOpacity>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../assets/images/logo_cavalo-trucado.png')}
                    style={styles.logoStyles}
                />
            </View>
            <TouchableOpacity>

            </TouchableOpacity>
        </View>
    )
}
export default HeaderComponent;

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: Colors.white,
        height: windowHeight * 0.1,
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: Colors.colorShadow,
        borderBottomWidth: 0.5,
    },
    logoStyles: {
        width: 130,
        height: 40,
    },
});