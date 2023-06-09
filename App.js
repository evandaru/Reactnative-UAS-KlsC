import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Button, ScrollView } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const slides = [
  {
    key: 'slide1',
    title: 'Toko Dealer 🚀',
    text: 'Kami menyediakan banyak barang',
    image: {
      uri: 'https://i.pinimg.com/564x/88/c1/6d/88c16d3f260c76a76c5a8a117c5b2781.jpg',
    },
    backgroundColor: '#ABCDD7',
  },
  {
    key: 'slide2',
    title: 'Terima layanan antar 🔧',
    text: 'Terhubung dengan aplikasi di playstore',
    image: {
      uri: 'https://i.pinimg.com/564x/88/c1/6d/88c16d3f260c76a76c5a8a117c5b2781.jpg',
    },
    backgroundColor: '#febe29',
  },
  {
    key: 'slide3',
    title: 'Mudah dan simpel 🌟',
    text: 'karena efisien, terjangkau, dan mudah',
    image: {
      uri: 'https://i.pinimg.com/564x/88/c1/6d/88c16d3f260c76a76c5a8a117c5b2781.jpg',
    },
    backgroundColor: '#22bcb5',
  },
  {
    key: 'slide4',
    title: 'Mudah dan simpel 🌟',
    text: 'karena efisien, terjangkau, dan mudah',
    image: {
      uri: 'https://i.pinimg.com/564x/88/c1/6d/88c16d3f260c76a76c5a8a117c5b2781.jpg',
    },
    backgroundColor: '#22bcb5',
  },
];

const Onboarding = ({ navigation }) => {
  const [showNextButton, setShowNextButton] = useState(true);

  const renderItem = ({ item }) => {
    return (
      <View
        style={[
          styles.slideContainer,
          { backgroundColor: item.backgroundColor },
        ]}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  const onDone = () => {
    navigation.navigate('Dashboard');
  };

  const onSlideChange = (index, lastIndex) => {
    setShowNextButton(index !== slides.length - 1);
  };

  const slider = React.useRef(null);

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={slides}
      onDone={onDone}
      onSlideChange={onSlideChange}
      ref={slider}
      showPrevButton={true}
      showSkipButton={false}
      showDoneButton={true}
      doneLabel="Selesai"
    />
  );
};

const Login = () => {
  return (
    <View style={styles.slideContainer}>
      <Text style={styles.title}>🚀 Dashboard 🚀</Text>
      <View>
        <TouchableOpacity>
          <View style={styles.loginButton}>
            <Image
              source={{
                uri: 'https://i.pinimg.com/564x/88/c1/6d/88c16d3f260c76a76c5a8a117c5b2781.jpg',
              }}
              style={{ width: 20, height: 20, marginRight: 10 }}
            />
            <Text>Login with Google</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.loginButton}>
            <Image
              source={{
                uri: 'https://i.pinimg.com/564x/88/c1/6d/88c16d3f260c76a76c5a8a117c5b2781.jpg',
              }}
              style={{ width: 20, height: 20, marginRight: 10 }}
            />
            <Text>Login with Google</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.loginButton}>
            <Image
              source={{
                uri: 'https://i.pinimg.com/564x/88/c1/6d/88c16d3f260c76a76c5a8a117c5b2781.jpg',
              }}
              style={{ width: 20, height: 20, marginRight: 10 }}
            />
            <Text>Login with Google</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.loginButton}>
            <Image
              source={{
                uri: 'https://i.pinimg.com/564x/88/c1/6d/88c16d3f260c76a76c5a8a117c5b2781.jpg',
              }}
              style={{ width: 20, height: 20, marginRight: 10 }}
            />
            <Text>Login with Google</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.signupButton}>
            <Text style={{ color: 'white' }}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const IconNav = ({ navigation }) => {
  return (
    <View style={styles.icoNavbar}>
      <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
        <Text>🏠</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('About')}>
        <Text>👨🏻‍🏫</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Kosong', {
        data:
        {
          nama: 'kosong',
          harga: 0
        }
      })}>
        <Text>🛫</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Order')}>
        <Text>🛒</Text>
      </TouchableOpacity>
    </View>
  )
}

const Dashboard = ({ navigation }) => {
  return (
    <View style={styles.navContainer}>
      {/* <Text style={styles.title}>Dashboard</Text> */}
      <View style={styles.DashboardDuwur}>

        <View>
          <Text
            style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}
          >Explore the </Text>
          <Text
            style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}
          >beautiful places sapi </Text>

        </View>

      </View>
      <View style={{ bottom: 80, width: 310 }}>
        <Text>Hai, Rena D. S.!</Text>
        <View style={{ display: 'flex', flexDirection: 'row', gap: 70 }}>

          <View style={{ paddingTop: 20, display: 'flex', }}>
            <Text>💲 Point</Text>
            <View style={{ backgroundColor: '#007577', width: 40, borderRadius: 30 }}>
              <Text style={{ color: 'white', textAlign: 'center' }}>Raih</Text>
            </View>
          </View>
          <View style={{ paddingTop: 20, }}>
            <Text>💲 Point</Text>
            <View style={{ backgroundColor: '#007577', width: 40, borderRadius: 30 }}>
              <Text style={{ color: 'white', textAlign: 'center' }}>Raih</Text>
            </View>
          </View>
          <View style={{ paddingTop: 20, }}>
            <Text>💲 Point</Text>
            <View style={{ backgroundColor: '#007577', width: 40, borderRadius: 30 }}>
              <Text style={{ color: 'white', textAlign: 'center' }}>Raih</Text>
            </View>
          </View>
        </View>

        <View></View>
      </View>
      <View>
        <Image source={{
          uri: 'https://i.pinimg.com/564x/88/c1/6d/88c16d3f260c76a76c5a8a117c5b2781.jpg'
        }} style={{ width: 100, height: 100 }} />
      </View>
      <Text>halo saya ikan</Text>
      <View style={styles.navbar}>
        <IconNav navigation={navigation} />
      </View>
    </View>
  )
}



const About = ({ navigation }) => {
  return (
    <View style={styles.navContainer}>
      <View style={styles.DashboardDuwur}>
        <View>
          <Text
            style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}
          >Explore the </Text>
          <Text
            style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}
          >beautiful places domba </Text>
        </View>
      </View>

      <View style={{ top: 200, right: 150, paddingHorizontal: 10, marginVertical: 5, backgroundColor: '#007577', borderRadius: 90 }}>
        <Text style={{ color: 'white' }} >ikan</Text>
      </View>
      <ScrollView horizontal={true} contentContainerStyle={{ top: 200, gap: 9 }}>
        <TouchableOpacity onPress={() => navigation.navigate('Product', {
          data:
          {
            nama: 'peternakan ikan',
            harga: 1500
          }
        })}>

          <View style={{ marginLeft: 10, backgroundColor: 'red', height: 150, width: 200 }}>
            <Image source={{
              uri: 'https://i.pinimg.com/564x/88/c1/6d/88c16d3f260c76a76c5a8a117c5b2781.jpg'
            }} style={{ width: 100, height: 100 }} />
            <Text>peternakan ikan</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Product', {
          data:
          {
            nama: 'peternakan ikan',
            harga: 2000
          }
        })}>
          <View style={{ marginLeft: 10, backgroundColor: 'red', height: 150, width: 200 }}>
            <Image source={{
              uri: 'https://i.pinimg.com/564x/88/c1/6d/88c16d3f260c76a76c5a8a117c5b2781.jpg'
            }} style={{ width: 100, height: 100 }} />
            <Text>peternakan ayam</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Product', {
          data:
          {
            nama: 'peternakan ikan',
            harga: 2000
          }
        })}>
          <View style={{ marginLeft: 10, backgroundColor: 'red', height: 150, width: 200 }}>
            <Image source={{
              uri: 'https://i.pinimg.com/564x/88/c1/6d/88c16d3f260c76a76c5a8a117c5b2781.jpg'
            }} style={{ width: 100, height: 100 }} />
            <Text>Item 1</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Product', {
          data:
          {
            nama: 'peternakan ikan',
            harga: 2000
          }
        })}>
          <View style={{ marginLeft: 10, backgroundColor: 'red', height: 150, width: 200 }}>
            <Image source={{
              uri: 'https://i.pinimg.com/564x/88/c1/6d/88c16d3f260c76a76c5a8a117c5b2781.jpg'
            }} style={{ width: 100, height: 100 }} />
            <Text>Item 1</Text>
          </View>
        </TouchableOpacity>


      </ScrollView>
      <View style={{ top: 30, right: 150, paddingHorizontal: 10, marginVertical: 5, backgroundColor: '#007577', borderRadius: 90 }}>
        <Text style={{ color: 'white' }} >ikan</Text>
      </View>
      <ScrollView horizontal={true} contentContainerStyle={{ top: 30, gap: 9 }}>
        <TouchableOpacity onPress={() => navigation.navigate('Product', {
          data:
          {
            nama: 'peternakan ikan',
            harga: 2000
          }
        })}>
          <View style={{ marginLeft: 10, backgroundColor: 'red', height: 150, width: 200 }}>
            <Image source={{
              uri: 'https://i.pinimg.com/564x/88/c1/6d/88c16d3f260c76a76c5a8a117c5b2781.jpg'
            }} style={{ width: 100, height: 100 }} />
            <Text>Item 1</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Product', {
          data:
          {
            nama: 'peternakan ikan',
            harga: 2000
          }
        })}>
          <View style={{ marginLeft: 10, backgroundColor: 'red', height: 150, width: 200 }}>
            <Image source={{
              uri: 'https://i.pinimg.com/564x/88/c1/6d/88c16d3f260c76a76c5a8a117c5b2781.jpg'
            }} style={{ width: 100, height: 100 }} />
            <Text>Item 1</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Product', {
          data:
          {
            nama: 'peternakan ikan',
            harga: 2000
          }
        })}>
          <View style={{ marginLeft: 10, backgroundColor: 'red', height: 150, width: 200 }}>
            <Image source={{
              uri: 'https://i.pinimg.com/564x/88/c1/6d/88c16d3f260c76a76c5a8a117c5b2781.jpg'
            }} style={{ width: 100, height: 100 }} />
            <Text>Item 1</Text>
          </View>
        </TouchableOpacity>


      </ScrollView>
      <Text style={styles.title}>About</Text>
      <View style={styles.navbar}>
        <IconNav navigation={navigation} />
      </View>
    </View>
  )
}

// const { data } = route.params;
const Product = ({ navigation, route }) => {
  // route.params = 'kosong'
  const { data } = route.params;

  return (
    <View style={styles.navContainer}>
      <View style={styles.DashboardDuwur}>
        <View>
          <Text
            style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}
          >Explore the </Text>
          <Text
            style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}
          >beautiful places bebek </Text>
        </View>
      </View>

      <View style={{ top: 90 }}>
        <View style={{ backgroundColor: '#5ABAFF', paddingHorizontal: 40, paddingVertical: 20, borderRadius: 10 }}>
          <Text style={styles.title}>Metode pembayaran</Text>

          <View style={{ display: 'flex', flexDirection: 'row', gap: 40 }}>
            <TouchableOpacity>
              <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Image
                  source={{ uri: 'https://i.pinimg.com/564x/fb/db/e5/fbdbe56e91af054d8a77cd3117a1dbdf.jpg' }}
                  style={{ width: 50, height: 50, borderRadius: 90 }}
                />
                <Text>Debit</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Image
                  source={{ uri: 'https://i.pinimg.com/564x/fb/db/e5/fbdbe56e91af054d8a77cd3117a1dbdf.jpg' }}
                  style={{ width: 50, height: 50, borderRadius: 90 }}
                />
                <Text>Debit</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Image
                  source={{ uri: 'https://i.pinimg.com/564x/fb/db/e5/fbdbe56e91af054d8a77cd3117a1dbdf.jpg' }}
                  style={{ width: 50, height: 50, borderRadius: 90 }}
                />
                <Text>Debit</Text>
              </View>
            </TouchableOpacity>
          </View >
        </View >
        <View style={{ marginTop: 20, backgroundColor: '#5ABAFF', paddingHorizontal: 40, paddingVertical: 20, borderRadius: 10 }}>

          <Text style={styles.title}>ringkasan pembayaran: </Text>
          <Text >nama layanan:            {data.nama}</Text>
          <Text >pembayaran:           Rp. {data.harga}</Text>

        </View>

        <View style={styles.navbar}>
          <IconNav navigation={navigation} />
        </View>
        <View style={{ marginTop: 20, backgroundColor: '#5ABAFF', paddingHorizontal: 40, paddingVertical: 20, borderRadius: 10 }}>

          <Text >biaya tagihan: </Text>
          <Text style={styles.title}>Rp. {data.harga}</Text>
          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.buttonText}>
                tombol ikan
              </Text>
            </View>
          </TouchableOpacity>

        </View>
      </View>

      <View style={styles.navbar}>
        <IconNav navigation={navigation} />
      </View>
    </View >
  )
}
const Order = ({ navigation }) => {
  return (
    <View style={styles.navContainer}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.title}>aplikasi ikan</Text>
        <Image source={{
          uri: 'https://i.pinimg.com/564x/fb/db/e5/fbdbe56e91af054d8a77cd3117a1dbdf.jpg'
        }} style={{ width: 100, height: 100 }} />
        <Text >aplikasi ini adalah anu</Text>
        <Text >nama kelompok</Text>
        <Text >1. </Text>
        <Text >2. </Text>
        <Text >3. </Text>
      </View>
      <View style={styles.navbar}>
        <IconNav navigation={navigation} />
      </View>
    </View>
  )
}
const Kosong = ({ navigation }) => {
  return (
    <View style={styles.navContainer}>
      <Text style={styles.title}>Kosong</Text>
      <View style={styles.navbar}>
        <IconNav navigation={navigation} />
      </View>
    </View>
  )
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer initialRouteName="login">
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Kosong" component={Kosong} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  slideContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginBottom: 20,
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  title: {
    marginVertical: 4,
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 40,
    marginTop: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#4285F4',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  loginButton: {
    display: 'flex',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 100,
    borderColor: 'black',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  signupButton: {
    marginVertical: 5,

    display: 'flex',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 100,
    borderColor: 'black',
    backgroundColor: 'black',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navbar: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 50,
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icoNavbar: {
    display: 'flex',
    flexDirection: 'row',
    gap: 70,
  },
  DashboardDuwurText: {
    textAlign: 'left',

  },
  DashboardDuwur: {
    // flex: 1,
    // alignItems: 'flex-start',
    // justifyContent: 'left',
    width: 360,
    paddingTop: 50,
    paddingLeft: 50,
    // paddingRight: 140,
    paddingBottom: 90,
    position: 'absolute',
    top: 0,
    backgroundColor: '#007577'
  }

});

export default App;
