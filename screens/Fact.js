import React, {useEffect, useState} from 'react';
import {View, Modal, Text, ActivityIndicator} from 'react-native';
import FactText from '../components/FactText';
import Styles from '../styles/style';
import GetTask from '../Functions/GetTask';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Footer from '../components/Footer';

const Fact = ({navigation}) => {
  const [task, setTask] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  const getTask = async () => {
    setModalVisible(true);
    const temp = await GetTask();
    setTask(temp);
    setModalVisible(false);
  };

  useEffect(() => {
    getTask();
  }, []);

  return (
    <>
      <View style={Styles.FactContainer}>
        <Modal animationType="fade" transparent={true} visible={modalVisible}>
          <View style={Styles.ModalContainer}>
            <View style={Styles.ModalView}>
              <ActivityIndicator size="large" />
              <Text style={Styles.LoadingText}>Loading...</Text>
            </View>
          </View>
        </Modal>
        <View style={{flex: 1}} />
        <FactText text={task} />
        <View style={Styles.ReloadButtonContainer}>
          <Ionicons
            name="arrow-back-circle"
            size={80}
            style={{color: '#E8FCFA'}}
            onPress={() => navigation.navigate('Home')}
          />
          <Ionicons
            name="reload-circle"
            size={80}
            style={{color: '#E8FCFA'}}
            onPress={() => getTask()}
          />
        </View>
      </View>
    </>
  );
};

export default Fact;
