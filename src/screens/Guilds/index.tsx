import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { GuildProps, Guild } from "../../components/Guild";
import { Load } from "../../components/Loading";

import { ListDivider } from "../../components/ListDivider";
import { api } from "../../services/api";
import { useEffect } from "react";

interface Props {
    handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelect }: Props) {
    const [guilds, setGuilds] = useState<GuildProps[]>([]);
    const [loading, setLoading] = useState(true);

    async function fetchGuilds() {
        const response = await api.get('/users/@me/guilds');

        setGuilds(response.data);
        setLoading(false);

    }

    useEffect(() => {
        fetchGuilds();
    }, []);
    

    return (
        <View style={styles.container}>
            {
            loading? <Load /> :
            <FlatList
                data={guilds}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Guild
                        data={item}
                        onPress={() => handleGuildSelect(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <ListDivider/>}
                contentContainerStyle={{ paddingBottom: 68, paddingTop: 104 }}
                style={styles.guilds}
            />
            }
        </View>
    )
}