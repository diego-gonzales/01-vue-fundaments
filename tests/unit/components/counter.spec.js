import { shallowMount } from '@vue/test-utils';
import Counter from '@/components/Counter';

describe('Counter Component', () => {

    // Esta parte esta explicada en el video 73 del curso de vue
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(Counter);
    });


    // test('should match with snapshot', () => {
    //     const wrapper = shallowMount(Counter);
    //     expect(wrapper.html()).toMatchSnapshot();
    // });

    test('h2 should have default value "Counter"', () => {
        expect(wrapper.find('h2').exists()).toBeTruthy();

        const h2Text = wrapper.find('h2').text();

        expect(h2Text).toBe('Counter');
    });

    test('counter default value should be 1 on "p"', async () => {
        // const pTags = wrapper.findAll('p');
        const pText = wrapper.find('[data-testid="counter"]').text();

        // expect(pTags[1].text()).toBe('1');
        expect(pText).toBe('1');

        const [ increaseButton, decreaseButton ] = wrapper.findAll('button');
        // increase
        await increaseButton.trigger('click');
    });


    test('should increment and decrement the counter value', async() => {
        const [ increaseButton, decreaseButton ] = wrapper.findAll('button');
        // increase
        await increaseButton.trigger('click');
        await increaseButton.trigger('click');
        await increaseButton.trigger('click');
        // decrease
        await decreaseButton.trigger('click');
        await decreaseButton.trigger('click');

        const valueCounter = wrapper.find('[data-testid="counter"]').text();
        
        expect(valueCounter).toBe('2');
    });

    test('should set the default value of "start" to the "p"', () => {
        const { start } = wrapper.props();
        const value = wrapper.find('[data-testid="counter"]').text();

        expect( Number(value) ).toBe(start);
    });

    test('should show the prop "title" with the value sent to it', () => {
        const title = 'Hello World';

        const wrapper = shallowMount(Counter, {
            props: {
                title
            }
        });

        const value = wrapper.find('h2').text();

        expect(value).toBe(title);
    })
    

})