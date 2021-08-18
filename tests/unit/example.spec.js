
describe('Example Component', () => {

  test('should be greater than 10', () => {
    // Arrange
    let value = 10;

    // Act
    value = value + 2;

    // Assert
    expect(value).toBeGreaterThan(10);
  })
  
})



// import { shallowMount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       props: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })
