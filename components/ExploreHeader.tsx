import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from "react-native";
import React, { useRef, useState } from "react";
import { Hstyles } from "@/constants/HomepageStyles";
import { Link } from "expo-router";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import * as Haptics from 'expo-haptics';


const categories = [
  {
    name: "Tiny Homes",
    icon: "home",
  },
  {
    name: "cabins",
    icon: "house-siding",
  },
  {
    name: "tending",
    icon: "local-fire-department",
  },
  {
    name: "play",
    icon: "ondemand-video",
  },
  {
    name: "city",
    icon: "apartment",
  },
  {
    name: "beachfront",
    icon: "beach-access",
  },
  {
    name: "countryside",
    icon: "emoji-nature",
  },
];

const ExploreHeader = () => {
    const scrollRef = useRef<ScrollView>(null);
    const itemsRef = useRef<Array<TouchableOpacity | null>>([]);
    const [activeIndex,setActiveIndex] = useState(0);
    const selectcategory=(index: number) => {
        const selected = itemsRef.current[index];
        setActiveIndex(index);
        selected?.measure((x) => {
            scrollRef.current?.scrollTo({x: x-16, y : 0, animated : true});
        })
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    }
  return (
    <SafeAreaView style={Hstyles.safe}>
      <View style={Hstyles.container}>
        <View style={Hstyles.actionRow}>
            <Link href={'/(modals)/booking'} asChild>
                <TouchableOpacity style={Hstyles.searchBtn}>
                    <Ionicons name="search" size={24}/>
                    <View>
                        <Text style={{fontFamily: 'serif'}}>Where to?</Text>
                        <Text style={{fontFamily: 'serif', color: Colors.grey}}>Anywhere. Any week</Text>
                    </View>
                </TouchableOpacity>
            </Link>
            <TouchableOpacity style={Hstyles.filterBtn}>
                <Ionicons name="options-outline" size={24} />
            </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}
        ref={scrollRef}
        contentContainerStyle={{
            gap:20,
            paddingHorizontal: 16,
            alignItems: 'center'
        }}>
            {categories.map((item,index)=> (
                <TouchableOpacity key={index} onPress={() => selectcategory(index)}
                ref={(el)=> (itemsRef.current[index] = el)} 
                style={activeIndex === index? Hstyles.categoryBtnActive: Hstyles.categoryBtn}>
                    <MaterialIcons name={item.icon as any} size={24} color={activeIndex === index? '#000': Colors.grey} />
                    <Text style={activeIndex === index? Hstyles.categoryTextActive: Hstyles.categoryText}>{item.name}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ExploreHeader;
