import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";

const Task = ({ text, color }) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={{ ...styles.square, backgroundColor: color }}></View>
        {/* <View style={styles.square}></View> */}
        <Text style={styles.itemText}>{text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};

// const TaskList = (listData) => {
//   {
//     listData.map((item, index) => (
//       <TouchableOpacity key={index} onPress={() => completeTask(index)}>
//         <Task text={item} />
//       </TouchableOpacity>
//     ));
//   }
// };

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  itemLeft: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#123",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },

  itemText: {
    maxWidth: "80%",
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#55bcf6",
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Task;

// export default connect((state) => {
//   return {
//     listData: state.data,
//   };
// })(TaskList);
