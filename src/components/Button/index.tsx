import React from 'react';
import { RectButton, RectButtonProps} from 'react-native-gesture-handler';
import { Text, Image, View } from 'react-native';

import DiscordImg from '../../assets/discord.png';
import { styles } from './styles';

interface Props extends RectButtonProps {
    title: string;
}

export function Button({ title, ...rest }: Props) {
    return (
        <RectButton
            style={styles.container}
            { ...rest }
        >
            <View style={styles.iconWrapper}>
            </View>

            <Text style={styles.title}>
                {title}
            </Text>

        </RectButton>
    )
}