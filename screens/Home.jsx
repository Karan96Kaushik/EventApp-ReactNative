import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Statistics</Text>

      <LineChart
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              data: [20, 45, 28, 80, 99, 43],
            },
          ],
        }}
        width={Dimensions.get("window").width - 16} // from react-native
        height={220}
        yAxisLabel="£"
        yAxisSuffix="k"
        chartConfig={{
          backgroundColor: "blue",
          backgroundGradientFrom: "#3a85e8",
          backgroundGradientTo: "#1170ed",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />

      {/* Statistic Boxes */}
      <View style={styles.statBox}>
        <Text style={styles.boxTitle}>Total Sales</Text>
        <Text style={styles.boxValue}>$10,000</Text>
      </View>

      {/* Add more statistic boxes as needed */}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  statBox: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginVertical: 8,
  },
  boxTitle: {
    fontSize: 16,
    color: '#555',
  },
  boxValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  // Add more styles as needed
});

export default Home;
