// src/screens/Dashboard.jsx
import React, { useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import useUsers from '../hooks/useUsers';
import UserCard from '../components/userCard';
import NavigationButtons from '../components/navigationButtons';

const Dashboard = () => {
  const { users, loading, error } = useUsers();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev < users.length - 1 ? prev + 1 : prev
    );
  };

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text>Error fetching users: {error.message}</Text>;

  return (
    <View style={styles.container}>
      {users.length > 0 && <UserCard user={users[currentIndex]} />}
      <NavigationButtons
        onPrev={handlePrev}
        onNext={handleNext}
        disablePrev={currentIndex === 0}
        disableNext={currentIndex === users.length - 1}
      />
      <Text>
        User {currentIndex + 1} of {users.length}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Dashboard;
