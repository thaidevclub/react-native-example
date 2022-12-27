import React from "react";
import { Alert, FlatList, Text, View } from 'react-native';
import CardMainMenuComponent from "../components/cards/card_main_menu_component";
import { EnumNavbarTitle } from "../enum/navbar/enum_navbar_title";
import MainLayout from "../layout/main_layout";
import { saleProductModels } from "../model/sale_product_model";
import { MainProps } from "../navigation/type/type";
import { sc } from "../utils/import/import_options";

const MainScreen = ({navigation, route}: MainProps) => {
    return (
        <MainLayout
            title={EnumNavbarTitle.main}
            isMain={true}
            onPressIconLeft={() => Alert.alert('Hambuger')}
            content={

                
                    <View style={[{ flex: 1, flexDirection: 'row', alignItems: 'center' }]}>

                        <FlatList
                            keyExtractor={(item, index) => index.toString()}
                            data={saleProductModels}
                            renderItem={({item, index}) => (
                                <CardMainMenuComponent 
                                    key={index}
                                    icon={item.icon}
                                    title={item.title}
                                    isTwoLine={item.isTwoLine}
                                    onPress={() => navigation.navigate("Rating", {id: String(index), title: item.title, icon: item.icon})}
                                />
                            )}
                            numColumns={2}
                            columnWrapperStyle={{justifyContent: 'space-between'}}
                            contentContainerStyle={{padding: sc.padMin}}
                            ItemSeparatorComponent={() => <View style={[{height: sc.padMin}]}></View>}
                        >

                        </FlatList>

                    </View>
                     
            }
        />
    );
}

export default MainScreen;



