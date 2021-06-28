import React from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { Guild } from "../../components/Guild";
import { GuildProps } from "../../components/Guild";

import { ListDivider } from "../../components/ListDivider";

interface Props {
    handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelect }: Props) {
const guilds = [
    {
        id: '1',
        name: 'Lendários',
        icon: 'image.png',
        owner: true
    },
    {
        id: '2',
        name: 'Galera do Game',
        icon: 'image.png',
        owner: true
    },
    {
        id: '3',
        name: 'Galera do Game',
        icon: 'image.png',
        owner: true
    },
    {
        id: '4',
        name: 'Galera do Game',
        icon: 'image.png',
        owner: true
    },
    {
        id: '5',
        name: 'Galera do Game',
        icon: 'image.png',
        owner: true
    },
    {
        id: '6',
        name: 'Galera do Game',
        icon: 'image.png',
        owner: true
    }
]

    return (
        <View style={styles.container}>
            <FlatList
                data={guilds}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Guild data={item} onPress={() => handleGuildSelect(item)}/>
                )}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <ListDivider/>}
                contentContainerStyle={{ paddingBottom: 68, paddingTop: 104 }}
                style={styles.guilds}
            />
        </View>
    )
}