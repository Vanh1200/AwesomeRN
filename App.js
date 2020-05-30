import React from 'react';
import { StyleSheet, Text, ScrollView, View, FlatList } from 'react-native';
import CategoryListItem from './components/CategoryListItem';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { id: 1, name: 'Dụng cụ trượt tuyết' },
        { id: 2, name: 'Quần áo trượt tuyết' },
        { id: 3, name: 'Kính thời trang' },
        { id: 4, name: 'Đồ dùng Gucci' },
        { id: 5, name: 'Dolce and Gabana' },
        { id: 6, name: 'Toàn hàng hiệu' },
      ]
    };
  }

  render() {
    const { categories } = this.state;
    return (
      <FlatList
        data={categories}
        renderItem = {({item}) => <CategoryListItem category={item}/>}
        keyExtractor={item => `${item.id}`}
        contentContainerStyle={{paddingLeft: 16, paddingRight: 16}}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#123456',
    // justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16
  },


});
