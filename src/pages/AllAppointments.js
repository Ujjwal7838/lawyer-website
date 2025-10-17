import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';

const AllAppointments = ({ navigation }) => {
  const [appointments, setAppointments] = useState([]);
  const [filter, setFilter] = useState('all');

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'pending', label: 'Pending' },
    { key: 'confirmed', label: 'Confirmed' },
    { key: 'cancelled', label: 'Cancelled' },
    { key: 'completed', label: 'Completed' }
  ];

   
  return (
    <View style={styles.container}>
      <Text style={styles.title}>All Appointments</Text>
      { }
    </View>
  );
};

export default AllAppointments;