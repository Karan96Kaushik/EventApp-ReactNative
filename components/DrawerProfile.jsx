
import { Image, StyleSheet, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const Profile = (props) => {

    const name = useSelector((state) => state.profile.name);
    const isLoggedIn = useSelector((state) => state.profile.isLoggedIn);
    const dispatch = useDispatch();

    return isLoggedIn ? (
        // Inside the profileCard view
        <View style={styles.profileCard}>
        <Image
            source={{ uri: 'https://i.etsystatic.com/40317824/r/il/17016c/4697106259/il_794xN.4697106259_prjx.jpg' }}
            style={styles.profileImage}
        />
        <Text style={styles.profileName}>{name}</Text>
        {/* other profile details */}
        </View>
    ) : (<></>);
  };
  

const styles = StyleSheet.create({
    profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40, // Circular image
    margin: 10,
    },
    profileCard: {
      padding: 20,
      backgroundColor: '#e0e0e0',
      alignItems: 'center',
      marginBottom: 10,
    },
    profileName: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
    },
})

export default Profile
