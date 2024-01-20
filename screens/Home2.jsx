// HomePage.js
import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Svg from '../svg/solar-broken-line';

const HomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.profileContainer}>
          <Text style={styles.welcomeBack}>Welcome back!</Text>
          <Image style={styles.profilePic} source={{ uri: 'https://i.etsystatic.com/40317824/r/il/17016c/4697106259/il_794xN.4697106259_prjx.jpg' }} />
        </View>

        <View style={styles.promoBanner}>
          <Text style={styles.promoText}>Use FREENOW in over 150 European cities</Text>
          <TouchableOpacity style={styles.learnMoreButton}>
            <Text style={styles.learnMoreText}>Learn more</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.voucherSection}>
          <Svg.Ticket width={24} height={24} style={styles.icons}/>
          <Text style={styles.voucherText}>You have a voucher!</Text>
          <Svg.ArrowRight width={24} height={24} style={styles.icons}/>
        </View>

        {/* Service Categories */}
        <View style={styles.serviceCategories}>
          <TouchableOpacity style={styles.serviceCategory}>
            <Svg.CalendarAdd width={24} height={24} style={styles.icons}/>
            <Text style={styles.serviceText}>Add Event</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceCategory}>
            <Svg.Pause width={24} height={24} style={styles.icons}/>
            <Text style={styles.serviceText}>Take Leave</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceCategory}>
            <Svg.Tram width={24} height={24} style={styles.icons}/>
            <Text style={styles.serviceText}>Commute</Text>
          </TouchableOpacity>
        </View>

        {/* Location Inputs */}
        <View style={styles.locationInput}>
            <Svg.MapSearch width={24} height={24} style={styles.icons}/>
          <Text style={styles.locationText}>Search Events</Text>
        </View>

        {/* ... other sections ... */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: '#fff',
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  greeting: {
    fontSize: 15,
    color: 'grey',
  },
  welcomeBack: {
    fontSize: 20,
    color: 'grey',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  promoBanner: {
    backgroundColor: '#dbdbdb',
    padding: 20,
    borderRadius: 8,
    margin: 20,
  },
  promoText: {
    color: 'black',
    fontSize: 16,
    marginBottom: 10,
  },
  icons: {
    paddingBottom: 10,
  },
  learnMoreButton: {
    backgroundColor: '#525252',
    padding: 10,
    borderRadius: 5,
  },
  learnMoreText: {
    color: 'white',
  },
  voucherSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#DCE775',
    padding: 20,
    borderRadius: 8,
    margin: 20,
  },
  voucherText: {
    color: '#4CAF50',
    fontSize: 16,
  },
  serviceCategories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  serviceCategory: {
    alignItems: 'center',
  },
  locationInput: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    margin: 20,
  },
  locationText: {
    color: 'grey',
    fontSize: 16,
    marginLeft: 10,
  },
  serviceText: {
    color: 'grey',
    fontSize: 16,
    paddingTop: 10,
  },
  // ... other styles ...
});

export default HomePage;
