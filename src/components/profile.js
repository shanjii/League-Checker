import React, { Component, Fragment } from 'react'
import { Text, View, Image } from 'react-native';


class Profile extends Component {
    
    constructor() {
        super();
    }

    render() {
        return (
            <Fragment>
                <View style={{ marginTop: 10, backgroundColor: "rgba(255, 255, 255, 0.6)", height:120, justifyContent: "center", marginLeft: 10, marginRight: "auto", marginBottom: 10, borderWidth:0, borderColor: "black", borderTopLeftRadius: 700, borderBottomLeftRadius: 700, borderTopRightRadius: 700, borderBottomRightRadius: 100, shadowOffset: { width: 10, height: 10 }, shadowColor: 'black', shadowOpacity: 1, elevation: 3}}>
                    <View style={{flexDirection: "row", marginLeft: 10 }}>
                        <View>

                            <Image
                                style={{ width: 100, height: 100, borderRadius: 100, borderWidth: 2, borderColor: "black" }}
                                source={{ uri: 'http://avatar.leagueoflegends.com/' + this.props.regiao + '/' + this.props.nome.replace(' ', '%20') + '.png' }}
                            />
                        </View>
                        <View style={{marginLeft: 10, marginRight:20}}>
                            <Text style={{ color: "black", marginTop: 20, fontFamily: "Friz-Quadrata-Regular", fontSize: 25, textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.props.nome}</Text>
                            {(this.props.nome !== "Não encontrado") ?
                                (
                                    < Text style={{ color: "brown", fontFamily: "Friz-Quadrata-Regular", fontSize: 20, textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>Nível: {this.props.nivel} </Text>

                                )
                                :
                                (
                                    <View />
                                )
                            }
                        </View>
                    </View>
                </View>
            </Fragment >
        )
    }
}

export default Profile