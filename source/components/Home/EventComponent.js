import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { width,height } from 'react-native-dimension';
import { withNavigation } from 'react-navigation';
import styles from '../../../styles/Home';
class EventComponent extends Component<Props> {
    render() {
        let item = this.props.item;
        return (
            <TouchableOpacity style={styles.cateCon} onPress={() => this.props.navigation.push('EventDetail', { event_id: item.event_id, headerColor: store.settings.data.navbar_clr, title: item.event_title })} >
                <Image style={styles.cate_img} source={{ uri: item.image }} />
                <Image style={[styles.cate_img, { position: 'absolute' }]} source={require('../../images/cate-shadow.png')} />
                <View style={[styles.cate_img, { position: 'absolute' }]}>
                    <View style={{ flex: 1, alignItems: 'flex-end', borderRadius: 5 }}>
                        <View style={styles.cate_name}>
                            <Text style={styles.cateNameText}>{item.event_category_name}</Text>
                        </View>
                    </View>
                    <View style={{ height: height(15), borderRadius: 5, justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row', marginHorizontal: 15 }}>
                            <Text style={styles.cate_text}>{item.event_start_date}  -</Text>
                            <Text style={styles.cate_text}>{item.event_end_date}</Text>
                        </View>
                        <Text style={styles.eventTitle}>{item.event_title}</Text>
                        <View style={{ flexDirection: 'row', marginHorizontal: 15, marginBottom: 10 }}>
                            <Image style={styles.locIcon} source={require('../../images/paper-plane.png')} />
                            <Text style={styles.locText}>{item.event_loc}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}
export default withNavigation(EventComponent)
