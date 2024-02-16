import { StyleSheet } from "react-native";
import Colors from "./Colors";
export const Hstyles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: 20,
    gap:10
  },
  actionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    gap: 20
  },
  searchBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderColor: '#c2c2c2',
    borderWidth: StyleSheet.hairlineWidth,
    elevation:2,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    flex: 1,
    padding: 14,
    borderRadius: 30,
    backgroundColor: '#fff',
    textShadowOffset: {
        width: 1,
        height:1
    }

  },
  safe: {
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  filterBtn: {
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.grey,
    borderRadius: 24,
  },
  categoryText: {
    fontSize: 14,
    color: Colors.grey
  },
  categoryTextActive:{
    fontSize: 14,
    color: '#000'
  },
  categoryBtn:{
    flex:1,
    alignItems: 'center',
    paddingBottom: 8,
    color: Colors.grey
  },
  categoryBtnActive: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#000',
    borderBottomWidth: 2,
    paddingBottom: 8,
  }
});
