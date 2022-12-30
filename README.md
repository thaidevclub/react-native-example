# TSIS  

## ตัวอย่างการ รับ ส่ง ค่า Route  

- ### src/screens/ratings/rating_screen.tsx  

```ts  

const RatingScreen = ({ navigation, route }: RatingProps) => {
    // ---
  let param = saleProductModels[route.params.id]
  let k = 5;

    `รับค่า screen โดยใช้ Object.value()`
  let screen = Object.values(param);
  console.log(screen)

    `Method เพื่อระบุหน้าที่จะไปต่อ`
  const nextScreen = () => navigation.dispatch(
    CommonActions.navigate({
      name: `${screen[k]}`,
      params: { id: route.params.id, route: k + 1 } `เพิ่มค่า index ในตัวแปร k ไป 1`
    })
  );

  console.log(screen[k])

  // ---

  const next = () => navigation.setParams({ id: route.params.id })
  return (
    <MainLayout
      backgroundColor="#FAFAFA"
      title={param.title}
      onPressIconLeft={() => navigation.goBack()}
      content={
        <View style={[{ flex: 1, backgroundColor: '#FAFAFA' }]}>
          <SpacerBody />
          <View style={[{ paddingHorizontal: sc.padMid }]}>
            <ButtonSingleComponent title={param.title} onPress={() => { }} />
          </View>

          <View style={[{ flex: 1, margin: sc.padMid, backgroundColor: 'red' }]}>



          </View>
          <ButtonBottomBar
            title={param.titleButton}
            onPress={() => nextScreen()}
            hasIcon={true}
            icon={param.iconTitleButton}
          />

        </View>

      }

    />
  );
}

export default RatingScreen;


```

## หน้ารับค่า  
- ### src/screens/test/test_home_screen.tsx

```ts  

import { CommonActions } from "@react-navigation/native";
import React from "react";
import { View } from 'react-native';
import ButtonTwinBottomBar from "../../components/buttons/button/button_twin_bottom_bar";
import ButtonSingleComponent from "../../components/buttons/button/components/button_single_component";
import { saleProductModels } from "../../model/sale_product_model";
import { TestHomeScreenProps } from "../../navigation/type/type";
import { sc } from "../../utils/import/import_options";

const TestHomeScreen = ({ navigation, route }: TestHomeScreenProps) => {
    
    // ---
  let param = saleProductModels[route.params.id]
  let k = 5;
 
    `ต้อง เช็คว่า ได้มีค่า k ส่งมาไหม ถ้าไม่ ก็ถือว่าเป็นหน้าแรก k = 5 ;;; ถ้ามีส่งค่า k มา ก็ใช้ แล้วไป เพิ่มค่า k ตอนส่งไปหน้าต่อไป`
  route.params.route === undefined ? k = 5 : k = route.params.route;

  let screen = Object.values(param);
  console.log(screen)

  const nextScreen = () => navigation.dispatch(
    CommonActions.navigate({
      name: `${screen[k]}`,
      params: { id: route.params.id, route: k + 1 }
    })
  );

  console.log(screen[k])

  // --- 

  return (
    <View style={[{ flex: 1 }]}>
      <View style={[{ flex: 1 }]}></View>

      <View style={[{ flex: 1, paddingHorizontal: sc.padMid }]}>
      <ButtonSingleComponent
        title="Go to Details"
        onPress={() => navigation.navigate('TestHome', { id: 86, route: k + 1})}
      />
      </View>

      <ButtonTwinBottomBar
        titleLeft="ย้อนกลับ"
        titleRight="ต่อไป"
        // disabled={true}
        onPressLeft={() => { navigation.goBack()}}
        onPressRight={() => { nextScreen()}}
      />

    </View>


  );
}

export default TestHomeScreen;

```  

