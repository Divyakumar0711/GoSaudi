import React from "react";
import { Modal, View, Text, Dimensions, } from 'react-native';
import CommonButton from "./CommonButton";


const CommonAlertModalSingleButton = props => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <Modal
                visible={props.visible}
                animationType="slide"
                transparent={true}
                onRequestClose={props.onClose}>
                <View style={{
                    height: Dimensions.get('window').height, width: Dimensions.get('window').width, marginLeft: 0, justifyContent: 'center',
                    backgroundColor: 'grey', shadowOpacity: 0.5
                }}>
                    <View style={{ borderRadius: 18, backgroundColor: 'white', marginLeft: 20, marginRight: 20, justifyContent: 'center', width: Dimensions.get('window').width - 40 }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 24, color: '#292643', textAlign: 'center', marginTop: 15 }}>{props.title}</Text>
                        <View style={{ marginTop: 12, marginLeft: 24, marginRight: 24 }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, color: '#292643', textAlign: 'center' }}>{props.content}</Text>
                        </View>
                        <View style={{ width: Dimensions.get('window').width - 40, marginTop: 24, justifyContent: 'center', alignItems: 'center', marginBottom: 24 }}>

                            <CommonButton
                                onPress={() => (props.enabled == true ? props.onPress() : null)}
                                label={props.label}
                                enabled={true}
                                marginLeft={20}
                                marginRight={20}
                                width={Dimensions.get('window').width - 96}
                                height={55}
                                borderRadius={14}
                                backgroundColor={'#292643'}
                                fontColor={'white'}
                                fontSize={22}
                                fontFamily={'Poppins-Medium'}
                                textDecorationLine="none"
                            />

                        </View>
                    </View>

                </View>
            </Modal>
        </View>
    );
};
export default CommonAlertModalSingleButton;





//  <CommonAlertModalSingleButton
// visible={this.state.modalVisible}
// title="Warning"
// content="Are You Sure You Wan't To Quite ?"
// onPress={this.closeModal}
// enabled={true}
// /> 
//Use For Single Alert Button Modal