import React, { useState } from "react";
import {
    Text,
    View,
    Image,
    ActivityIndicator
} from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon';
import IllustrationImg from '../../assets/illustration.png';
import { styles } from "./styles";
import { useAuth } from "../../hooks/auth";
import { theme } from "../../global/styles/theme";


export function SignIn() {

    const { loading, signIn } = useAuth();

    async function handleSignIn() {
        try {
            await signIn();
        }
        catch {
            throw new Error('Não foi possível autenticar');
        }
    }

    return (
        <View style={styles.container}>
            <Image
                source={IllustrationImg}
                style={styles.image}
                resizeMode="stretch"
            />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Conecte-se{`\n`}
                    e organize {`\n`}
                    suas jogatinas {`\n`}
                    
                </Text>

                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games {`\n`}
                    favoritos com seus amigos
                </Text>

                {
                    loading? <ActivityIndicator color={theme.colors.primary}/>
                    :
                    <ButtonIcon
                    title="Entrar com Discord"
                    activeOpacity={0.8}
                    onPress={handleSignIn}
                />
                }
            </View>
        </View>

    );
}