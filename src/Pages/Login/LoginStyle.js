import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    loginWrap: {
        flex: 1,
        backgroundColor: '#f3f3f3'
    },
    loginSlider: {
        flex: 1
    },
    loginItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginContent: {
        width: '100%',
        paddingHorizontal: px2dp(40)
    },
    loginTitleWrap: {
        marginBottom: px2dp(88)
    },
    loginTitle: {
        fontSize: px2dp(50),
        textAlign: 'center',
        color: '#000'
    },
    inputs: {
        marginBottom: px2dp(220)
    },
    inputItem: {
        borderBottomWidth: px2dp(1),
        borderColor: '#c9c9c9',
        paddingVertical: px2dp(26),
        flexDirection: 'row'
    },
    label: {
        fontSize: px2dp(35),
        paddingRight: px2dp(135)
    },
    userName: {
        flex: 1,
        fontSize: px2dp(35)
    },
    loginBtnWrap: {
        flexDirection: 'row'
    },
    loginBtn: {
        flex: 1,
        height: px2dp(94),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#51aa38',
        borderRadius: px2dp(10),
        borderWidth: px2dp(1),
        borderColor: '#499932'
    },
    loginBtnTxt: {
        fontSize: px2dp(35),
        color: '#fff'
    }
});
