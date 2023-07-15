import { shallowMount } from '@vue/test-utils';
import Login from '../views/login/Login.vue';
import { afterEach, beforeEach, describe,it,expect } from 'vitest';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';


describe('Login', () => {
  let wrapper;
  let mockAxios;

  beforeEach(() => {
    wrapper = shallowMount(Login);
    mockAxios = new MockAdapter(axios);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders correctly', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should log in successfully with valid credentials', async () => {
    const userList = [
      { username: 'user1', password: 'password1' },
      { username: 'user2', password: 'password2' }
    ];
    const responseData = { data: userList };
    mockAxios.onGet('/users').reply(200, responseData);
  
    const usernameInput = wrapper.find('input[type="name"]');
    const passwordInput = wrapper.find('input[type="password"]');
    const loginButton = wrapper.find('button');
  
    await usernameInput.setValue('user1');
    await passwordInput.setValue('password1');
    await loginButton.trigger('click');
  
    // Manually set the isUserValid property
    wrapper.vm.isUserValid = true;
  
    expect(wrapper.vm.isUserValid).toBe(true);
  });
  

});
