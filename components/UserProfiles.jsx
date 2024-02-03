import { View, Text } from 'react-native';
import React from 'react';

const UserProfile = ({ user }) => {
    return (
        <View style={{ padding: 20 }}>
            <Text>Name: {user.name}</Text>
            
        </View>
    );
};

export default UserProfile;