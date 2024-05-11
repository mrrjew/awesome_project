import { useNavigation } from "@react-navigation/native"
import React from "react"
import { FlatList, Text, Image, TouchableOpacity, View } from "react-native"
import { Icon } from "react-native-elements"
import tw from "tailwind-react-native-classnames"

export default function NavOptions(){
    const data = [
        {
            id:"123",
            title:"Get a Ride",
            image:"https://links.papareact.com/3pn",
            screen:"MapScreen"
        },
        {
            id:"456",
            title:"Order food",
            image:"https://links.papareact.com/28w",
            screen:"EatsScreen"
        }
    ]

    const navigation = useNavigation()
    return(
        <FlatList 
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
            <TouchableOpacity
            onPress={() => navigation.navigate(item.screen)}
             style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
            >
               <View>
                <Image
                style={{width:120,height:120,resizeMode:"contain"}}
                 source={{uri:item.image}}
                />
                  <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                <Icon 
                 type="antdesign"
                 color="white"
                 name="arrowright"
                 style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                />
               </View>
            </TouchableOpacity>
        )}
        />
    )
}