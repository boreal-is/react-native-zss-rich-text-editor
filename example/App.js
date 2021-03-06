import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RichTextEditor} from 'react-native-zss-rich-text-editor';

class RichTextExample extends Component {
  state = {
    html: '',
    text: '',
  };

  onChange = value => {
    this.setState({html: value.html, text: value.text});
  };

  render() {
    return (
      <View style={styles.container}>
        <RichTextEditor
          ref={r => (this.richtext = r)}
          style={styles.richText}
          initialHTMLValue={
            '<p>Paragraph one.</p><p>Paragraph two. <strong>Strong text</strong></p><ul><li>item one</li><li>item two</li><li>item three</li></ul><p>Something at the end.</p>'
          }
          onChange={this.onChange}
        />
        <Text style={styles.ouputs}>{this.state.html || ''}</Text>
        <Text style={styles.ouputs}>{this.state.text || ''}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  richText: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  ouputs: {
    backgroundColor: '#f5f5f5',
    color: '#000000',
    height: 100,
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#C8C8C8',
  },
});

export default RichTextExample;
