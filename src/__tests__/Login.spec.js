import { shallowMount } from '@vue/test-utils';
import Login from '../views/login/Login.vue';
import { afterEach, beforeEach, describe, it, expect } from 'vitest';


describe('Login', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Login);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders correctly', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the login form correctly', () => {
    expect(wrapper.find('h1').text()).toBe('Login');
    expect(wrapper.find('input[type="name"]').exists()).toBe(true);
    expect(wrapper.find('input[type="password"]').exists()).toBe(true);
    expect(wrapper.find('button').text()).toBe('Login');
    expect(wrapper.find('.callout-danger').exists()).toBe(false);
  });

  it('updates the username and password data properties when input values change', async () => {
    const usernameInput = wrapper.find('input[type="name"]');
    const passwordInput = wrapper.find('input[type="password"]')
  });

  it('displays an error message for incorrect username or password', async () => {
    const usernameInput = wrapper.find('input[type="name"]');
    const passwordInput = wrapper.find('input[type="password"]');
    const loginButton = wrapper.find('button');
  });
});
