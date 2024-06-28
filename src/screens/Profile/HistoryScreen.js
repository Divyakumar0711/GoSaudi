import React from "react";
import { View, Image, Dimensions, Platform, FlatList, Text, TouchableWithoutFeedback } from "react-native";
import MaterialTabs from 'react-native-material-tabs';
import CommonHeaderView from "../../components/CommonHeaderView";
import { Card } from "react-native-paper";
import { Tab, TabView } from '@rneui/themed';
export default class HistoryScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state =
        {
            selectedTab: 0,
            currentHistory: [
                {
                    id: '1',
                    date: '22 Dec 2023',
                    title: 'Boat & Diving Trip',
                    price: '87 SAR',
                },
                {
                    id: '1',
                    date: '1 Jan 2023',
                    title: 'Sports',
                    price: '120 SAR',
                },
            ],
            pastHistory: [
                {
                    id: '1',
                    date: '22 Sep 2023',
                    title: 'Food & Drink',
                    price: '50 SAR',
                },
                {
                    id: '1',
                    date: '24 Apr 2023',
                    title: 'Art & Culture',
                    price: '220 SAR',
                },
                {
                    id: '3',
                    date: '5 Aug 2023',
                    title: 'Travell',
                    price: '320 SAR',
                },
            ]
        }
    }
    handleTabChange = (index) => {
        // if (index === 0) {
        //     this.setState({ selectedTab: index });
        // }
        // else {
        //     this.setState({ selectedTab: index - 1 });
        // }
        this.setState({ selectedTab: index });
        // this.setState({ index });

    };
    renderComplain = ({ item, index }) =>
    (
        <View style={{ width: Dimensions.get('window').width - 40, marginLeft: 20, marginRight: 20, marginBottom: 10 }}>
            <Card style={{ padding: 5, margin: 5 }}>
                <View style={{ flex: 1, marginLeft: 20 }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1, }} >
                            <Text style={{ fontSize: 16, fontFamily: 'Poppins-Medium',color:'#292643' }}>Date</Text>
                        </View>
                        <View style={{ flex: 1, }} >
                            <Text style={{ fontSize: 16, fontFamily: 'Poppins-Medium',color:'#292643' }}>Activity Name</Text>
                        </View>
                        <View style={{ flex: 1, }} >
                            <Text style={{ fontSize: 16, fontFamily: 'Poppins-Medium', marginLeft: 20,color:'#292643' }}>Price</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1, }} >
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 14 }}>{item.date}</Text>
                        </View>
                        <View style={{ flex: 1, }} >
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 14 }}>{item.title}</Text>
                        </View>
                        <View style={{ flex: 1, }} >
                            <Text style={{ marginLeft: 20, fontFamily: 'Poppins-Regular', fontSize: 14 }}>{item.price}</Text>
                        </View>
                    </View>
                </View>
            </Card>
        </View>
    )
    render() {
        const { selectedTab } = this.state;
        return (
            <View style={{ flex: 1, backgroundColor: "white" }}>
                <CommonHeaderView
                    onPressLeft={() => this.props.navigation.goBack()}
                    enabled={true}
                    isLeftButtonEnabled={true}
                    leftImageWidth={19.48}
                    leftImageHeight={18.97}
                    leftImage={require('../../assets/images/Arrow_Icon.png')}
                    isTextEnabled={true}
                    headingTextColor1={'#292643'}
                    headingTextFontFamily1={'Poppins-SemiBold'}
                    headingTextFontSize1={24}
                    label1={'History'}
                    headingTextMarginLeft={8}
                />
                <View style={{ width: Dimensions.get('window').width - 40, marginLeft: 20 }}>
                    <Tab
                        value={selectedTab}
                        onChange={this.handleTabChange}
                        indicatorStyle={{
                            backgroundColor: 'black',
                        }}
                        variant="grey"
                    >
                        <Tab.Item
                            title="Current History"
                            titleStyle={{ fontSize: 16, color: 'black', fontFamily: 'Poppins-Regular' }}
                        />
                        <Tab.Item
                            title="Past History"
                            titleStyle={{ fontSize: 16, color: 'black' }}
                        />
                    </Tab>
                    <TabView
                        value={selectedTab}
                        onChange={this.handleTabChange}
                        animationType="spring"
                    />

                </View>
                <FlatList
                    renderItem={this.renderComplain}
                    data={selectedTab === 0 ? this.state.currentHistory : this.state.pastHistory}
                    keyExtractor={(item) => item.id}
                    style={{ marginBottom: 20, marginTop: 14 }}
                />
            </View>

        )
    }
}