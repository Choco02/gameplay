import React from 'react';
import { Image } from 'react-native';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { LinearGradient } from 'expo-linear-gradient';

interface Props {
    urlImage: string;
}

export function Avatar({ urlImage }: Props) {
    const { secondary80, secondary100 } = theme.colors;

    return (
        <LinearGradient
            style={styles.container}
            colors={[secondary80, secondary100]}
        >
            <Image
                source={{uri: urlImage}}
                style={styles.avatar}
            />
        </LinearGradient>
    );
}