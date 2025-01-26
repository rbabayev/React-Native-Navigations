import { Text, View } from 'react-native'
import React from 'react'

const UserCard = ({ user }) => {

    return (
        <View className='bg-white p-5 border-[1px] border-zinc-300 rounded-md shadow shadow-zinc-800'>
            <Text className='font-bold text-xl'>{user.name}</Text>
            <Text>{user.phone}</Text>
            <Text className='font-light text-black'>{user.email}</Text>
        </View>
    )
}

export default UserCard