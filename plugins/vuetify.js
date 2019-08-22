import Vue from 'vue';
import Vuetify from 'vuetify/lib';

console.log('vuetify plugin loaded!');

Vue.use(Vuetify, {
  directives: {
    theme: {
      themes: {
        light: {
          primary: '#2196f3',
          secondary: '#00bcd4',
          accent: '#673ab7',
          error: '#f44336',
          warning: '#ffc107',
          info: '#03a9f4',
          success: '#8bc34a'
        },
        dark: {
          primary: '#3f51b5',
          secondary: '#673ab7',
          accent: '#9c27b0',
          error: '#f44336',
          warning: '#ff9800',
          info: '#607d8b',
          success: '#4caf50'
        }
      }
    }
  }
});
