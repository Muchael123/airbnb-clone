import { StyleSheet } from "react-native";
import Colors from "./Colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 26,
        backgroundColor: '#FDFFFFFF'
    },
    inputField: {
        height: 44,
        borderWidth: 1,
        borderColor: '#ABABAB',
        borderRadius: 8,
        padding: 10,
        backgroundColor: '#fff'
    },
    btn: {
        backgroundColor: Colors.primary,
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    btnIcon: {
        position: 'absolute',
        left: 16
    },
    btnText: {
        color: '#fff',
        fontSize: 16,
    },
    footer: {
        position: 'absolute',
        height: 100,
        bottom: 0,
        left: 0,
        right:0,
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderTopColor: Colors.grey,
        borderTopWidth: StyleSheet.hairlineWidth,
    }
    , separatorView: {
        flexDirection: 'row',
        gap:10,
        alignItems: 'center',
        marginVertical: 30,
    }
    , separator: {
        fontFamily: 'monospace',
        color: Colors.grey
    },
    btnOutline: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: Colors.grey,
        height: 50,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingHorizontal: 18,

    },
    btnOutlineText: {
        color: '#000',
        fontSize: 16,
        
    }
})
export default styles;