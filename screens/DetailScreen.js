import * as React from 'react'
import {TouchableOpacity, Image, View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native'

// Packages
import { SharedElement } from 'react-navigation-shared-element';

// Icons

import {Feather} from '@expo/vector-icons'


const DetailScreen = props => {
    
    const {width,height} = Dimensions.get('window')

    const { data } = props.route.params;

    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>

      <View>

      <SharedElement id={`item.${data.id}.photo`}>
        <Image source={{uri: data.image}} style={{width: '100%', height: height - 450, borderBottomLeftRadius: 10, borderBottomRightRadius: 10}} resizeMode="cover"/>
      </SharedElement>

      <View style={{flexDirection: 'row',alignItems: 'center',position: 'absolute', bottom: 14, left: 10}}>

      <SharedElement id={`item.${data.id}.profilePic`}>
        <Image
        source={{uri: data.profilePic}} 
        style={{width: 60, height: 60, borderRadius: 10, marginRight: 14}}
        resizeMode="cover"
        />
    </SharedElement>

    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 20}}>

      <View>
      <SharedElement id={`item.${data.id}.username`}>
      <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>{data.username}</Text>
      </SharedElement>
      <SharedElement id={`item.${data.id}.readtime`}>
        <Text style={{color: 'white', fontSize: 14,}}>{data.readtime} read</Text>
      </SharedElement>
      </View>

      <TouchableOpacity>
        <Feather name='bookmark' size={24} color='white' />
      </TouchableOpacity>

    </View>

      </View>

      </View>

     <ScrollView style={{paddingHorizontal: 10, paddingTop: 14}}>
     
     <SharedElement id={`item.${data.id}.text`} style={{ width: width - 30, marginBottom: 14}}>
        <Text style={{color: 'black', fontSize: 22,fontWeight: 'bold', lineHeight: 32}}>{data.title}</Text>
     </SharedElement>

    <Text style={{fontSize: 14, lineHeight: 28, textAlign: 'justify', opacity: 0.5}}>Muito menos atenção foi dada à declaração do presidente de que a luz solar pode proteger as pessoas do vírus. Suponha que atingimos o corpo com uma luz tremenda - seja ultravioleta ou apenas uma luz muito poderosa, disse Trump. Suponha que você trouxesse a luz para dentro do corpo, o que pode ser feito através da pele ou de alguma outra maneira. Quando se trata de tratamentos potenciais de Covid-19, as especulações do presidente têm sido numerosas e frequentemente equivocadas.</Text>    

    <Text style={{fontSize: 14, lineHeight: 28, textAlign: 'justify', opacity: 0.5}}>Mas a ideia de que a luz solar pode neutralizar a Covid-19, tanto dentro quanto fora do corpo, não é tão rebuscada. Richard Weller, MD, é dermatologista e pesquisador de luz solar na Universidade de Edimburgo, no Reino Unido. Weller diz que analisou os dados da Covid-19 nos Estados Unidos e que parece haver uma correlação entre estados que recebem muito sol e taxas mais baixas de mortalidade. “Acho que provavelmente existem vários caminhos pelos quais a luz do sol e a exposição ao sol podem exercer efeitos benéficos, diz ele.</Text>   

    <View style={{marginVertical: 25, paddingBottom: 20, flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <TouchableOpacity style={{padding: 12, flexDirection: 'row', alignItems: 'center'}}>
            <Feather name='heart' size={16} color='orange' />
            <Text style={{fontWeight: 'normal', textAlign: 'center', marginHorizontal: 10}}>3.4K Curtidas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 12, width: 100, backgroundColor: 'orange', borderRadius: 10}}>
            <Text style={{color: 'white',fontWeight: 'bold', textAlign: 'center'}}>Seguir</Text>
        </TouchableOpacity>
    </View>     

    </ScrollView>

    <View style={{position: 'absolute', top: 40, left: 10}}>

    <TouchableOpacity onPress={() => props.navigation.goBack()}>
      <Feather name='arrow-left' size={24} color='white' />
     </TouchableOpacity>

    </View>
    
    </View>  
    );
  };

export default DetailScreen;