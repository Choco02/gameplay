import React, { useState, useCallback } from 'react';
import { View, FlatList, Text } from 'react-native';
import { CategorySelect } from '../../components/CategorySelect';
import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';
import { ListHeader } from '../../components/ListHeader';
import { Background } from '../../components/Background';

import { styles } from './styles';
import { Appointment } from '../../components/Appointments';
import { ListDivider } from '../../components/ListDivider';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { AppoitmentProps } from '../../components/Appointments';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLLECTION_APPOINTMENTS } from '../../configs/database';
import { Load } from '../../components/Loading';

export function Home() {
    const [category, setCategory] = useState('');
    const [appointments, setAppointsments] = useState<AppoitmentProps>([]);
    const [loading, setLoading] = useState(true);

    const navigation = useNavigation();

    /*
    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            description: 'sla',
            category: '1',
            date: '22/06 às 20:40'
        },
        {
            id: '2',
            guild: {
                id: '2',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            description: 'sla',
            category: '1',
            date: '22/06 às 20:40'
        },
        {
            id: '3',
            guild: {
                id: '2',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            description: 'sla',
            category: '1',
            date: '22/06 às 20:40'
        },
        {
            id: '4',
            guild: {
                id: '2',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            description: 'sla',
            category: '1',
            date: '22/06 às 20:40'
        },
        {
            id: '5',
            guild: {
                id: '2',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            description: 'sla',
            category: '1',
            date: '22/06 às 20:40'
        }
    ]
    */

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function handleAppointmentDetails() {
        navigation.navigate('AppointmentDetails');
    }

    function handleAppointmentCreate() {
        navigation.navigate('AppointmentCreate');
    }

    async function loadAppointments() {
        const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
        const storage: AppoitmentProps = response? JSON.parse(response): [];

        if (category) {
            // @ts-ignore
            setAppointsments(storage.filter(item => item.category === category));
        }
        else {
            setAppointsments(storage);
        }

        setLoading(false);

    }

    useFocusEffect(useCallback(() => {
        loadAppointments();
    }, [category]))

    return (
        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd onPress={handleAppointmentCreate} />
            </View>
            
                <CategorySelect
                    hasCheckBox
                    categorySelected={category}
                    setCategory={handleCategorySelect}
                />

                {/* <View style={styles.content}> */}
                    {
                        <>
                    <ListHeader 
                        title="Partidas agendadas"
                        subtitle="Total 6" 
                    />

                    <FlatList
                        // @ts-ignore
                        data={appointments}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <Appointment
                                data={item}
                                onPress={handleAppointmentDetails}
                            />
                        )}
                        ItemSeparatorComponent={() => <ListDivider/>}
                        style={styles.matches}
                        showsVerticalScrollIndicator={false}
                    />
                    </>
                    }
                <View />
                    
        </Background>
    );
}